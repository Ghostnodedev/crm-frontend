import { useState } from "react";

export default function LeadForm({ fetchLeads }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    budget: "",
    location: "",
    source: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://crm-real-estate-red.vercel.app/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error);
      return;
    }

    fetchLeads();

    setForm({
      name: "",
      phone: "",
      email: "",
      budget: "",
      location: "",
      source: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      {Object.keys(form).map((key) => (
        <input
          key={key}
          placeholder={key}
          value={form[key]}
          onChange={(e) =>
            setForm({ ...form, [key]: e.target.value })
          }
          style={styles.input}
        />
      ))}

      <button style={styles.button}>Add Lead</button>
    </form>
  );
}

const styles = {
  form: {
    display: "grid",
    gap: 10,
    marginBottom: 20,
  },
  input: {
    padding: 8,
    border: "1px solid #ccc",
  },
  button: {
    padding: 10,
    background: "#28a745",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};
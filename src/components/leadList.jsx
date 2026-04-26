import { useState } from "react";

export default function LeadList({ leads, fetchLeads }) {
  const [selectedStatus, setSelectedStatus] = useState({});

  const updateStatus = async (id) => {
    const status = selectedStatus[id];
    if (!status) return;

    await fetch(`https://crm-real-estate-red.vercel.app/api/leads/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });

    fetchLeads();
  };

  return (
    <div>
      <h2>Leads</h2>

      {leads.length === 0 && <p>No leads found</p>}

      {leads.map((lead) => (
        <div key={lead.id} style={styles.card}>
          <h3>{lead.name}</h3>
          <p>{lead.phone}</p>
          <p>{lead.email}</p>
          <p>{lead.location}</p>
          <p>Status: <b>{lead.status}</b></p>

          <div style={styles.actions}>
            <select
              onChange={(e) =>
                setSelectedStatus({
                  ...selectedStatus,
                  [lead.id]: e.target.value,
                })
              }
            >
              <option>Select Status</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Closed">Closed</option>
            </select>

            <button onClick={() => updateStatus(lead.id)}>
              Update
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    background: "#f9f9f9",
  },
  actions: {
    display: "flex",
    gap: 10,
    marginTop: 10,
  },
};
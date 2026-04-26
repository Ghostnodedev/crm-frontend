/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import LeadForm from "./components/LeadForm.jsx";
import LeadList from "./components/leadList.jsx";

function App() {
  const [allLeads, setAllLeads] = useState([]);
  const [leads, setLeads] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const fetchAllLeads = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/leads");
      const data = await res.json();
      setAllLeads(data);
      setLeads(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllLeads();
  }, []);

  const handleSearch = () => {
    if (!searchInput.trim()) {
      setLeads(allLeads);
      return;
    }

    const filtered = allLeads.filter((lead) =>
      lead.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      lead.phone.includes(searchInput)
    );

    setLeads(filtered);
  };

  const clearSearch = () => {
    setSearchInput("");
    setLeads(allLeads);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>CRM Dashboard</h1>

      {/* 🔍 Search */}
      <div style={styles.searchBox}>
        <input
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>
          Search
        </button>
        <button onClick={clearSearch} style={styles.clearBtn}>
          Clear
        </button>
      </div>

      <LeadForm fetchLeads={fetchAllLeads} />

      <LeadList leads={leads} fetchLeads={fetchAllLeads} />
    </div>
  );
}

const styles = {
  container: {
    padding: 20,
    maxWidth: 800,
    margin: "auto",
    fontFamily: "Arial",
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
  },
  searchBox: {
    display: "flex",
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 8,
    border: "1px solid #ccc",
  },
  button: {
    padding: "8px 16px",
    background: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  clearBtn: {
    padding: "8px 16px",
    background: "#dc3545",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default App;
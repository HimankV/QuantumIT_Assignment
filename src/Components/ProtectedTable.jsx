import React from "react";
import { useNavigate } from "react-router-dom";

const ProtectedTable = () => {
  const navigate = useNavigate();

  const tableData = [
    {
      id: 1,
      name: "Michael Holz",
      date: "04/10/2013",
      role: "Admin",
      status: "Active",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Paula Wilson",
      date: "05/08/2014",
      role: "Publisher",
      status: "Active",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Antonio Moreno",
      date: "11/05/2015",
      role: "Publisher",
      status: "Suspended",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Mary Saveley",
      date: "06/09/2016",
      role: "Reviewer",
      status: "Active",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Martin Sommer",
      date: "12/08/2017",
      role: "Moderator",
      status: "Inactive",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "green";
      case "Suspended":
        return "red";
      case "Inactive":
        return "orange";
      default:
        return "gray";
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // Optional: Remove user info
    navigate("/", { replace: true }); // Redirect to login page
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#fff",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", textAlign: "left" }}>
            <th style={thStyle}>#</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Date Created</th>
            <th style={thStyle}>Role</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id} style={{ borderBottom: "1px solid #eee" }}>
              <td style={tdStyle}>{item.id}</td>
              <td style={tdStyle}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={item.avatar}
                    alt={item.name}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  {item.name}
                </div>
              </td>
              <td style={tdStyle}>{item.date}</td>
              <td style={tdStyle}>{item.role}</td>
              <td style={tdStyle}>
                <span
                  style={{
                    color: getStatusColor(item.status),
                    fontWeight: "bold",
                  }}
                >
                  ●
                </span>{" "}
                {item.status}
              </td>
              <td style={tdStyle}>
                <span
                  style={{
                    marginRight: "10px",
                    color: "#007bff",
                    cursor: "pointer",
                  }}
                >
                  ⚙️
                </span>
                <span style={{ color: "red", cursor: "pointer" }}>❌</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#dc3545",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

const thStyle = {
  padding: "12px",
  borderBottom: "2px solid #ddd",
};

const tdStyle = {
  padding: "12px",
  verticalAlign: "middle",
};

export default ProtectedTable;



// 6PZchrzRzQT0soAF
import React from "react";
import Layout from "../../components/layout/layout";
import UserMenu from "../../components/layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();

  // Inline styles
  const containerStyle = {
    margin: "20px",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const rowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  };

  const userMenuStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "15px",
    flex: "1",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    width: "100%",
    maxWidth: "700px",
    flex: "2",
  };

  const headingStyle = {
    margin: "10px 0",
    color: "#333",
  };

  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div style={containerStyle}>
        <div style={rowStyle}>
          <div style={userMenuStyle}>
            <UserMenu />
          </div>
          <div style={cardStyle}>
            <h3 style={headingStyle}>{auth?.user?.name}</h3>
            <h3 style={headingStyle}>{auth?.user?.email}</h3>
            <h3 style={headingStyle}>{auth?.user?.address}</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

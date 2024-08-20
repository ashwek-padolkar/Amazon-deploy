import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyle.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Forgot Password - Ecommerce APP"}>
      <div
        style={{
          minHeight: "90vh",
          backgroundColor: "#f8f9fa", // Background color for the container
          padding: "20px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "400px", // Max width for the form container
            backgroundColor: "#ffffff", // Background color for the form container
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Optional: Shadow for better appearance
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h4 className="title">RESET PASSWORD</h4>
            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  maxWidth: "400px", // Width of input fields (make longer as needed)
                  border: "1px solid black", // Black border for input fields
                  borderRadius: "4px", // Rounded corners for input fields
                  padding: "10px", // Padding inside the input fields
                  boxSizing: "border-box", // Ensure padding is included in width calculation
                }}
                id="exampleInputEmail"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                style={{
                  width: "100%",
                  maxWidth: "400px", // Width of input fields (make longer as needed)
                  border: "1px solid black", // Black border for input fields
                  borderRadius: "4px", // Rounded corners for input fields
                  padding: "10px", // Padding inside the input fields
                  boxSizing: "border-box", // Ensure padding is included in width calculation
                }}
                id="exampleInputAnswer"
                placeholder="Your Favourite Sports"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                style={{
                  width: "100%",
                  maxWidth: "400px", // Width of input fields (make longer as needed)
                  border: "1px solid black", // Black border for input fields
                  borderRadius: "4px", // Rounded corners for input fields
                  padding: "10px", // Padding inside the input fields
                  boxSizing: "border-box", // Ensure padding is included in width calculation
                }}
                id="exampleInputNewPassword"
                placeholder="Enter New Password"
                required
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                maxWidth: "400px", // Width of the button
                padding: "10px",
                backgroundColor: "#007bff", // Button color
                color: "#fff", // Text color
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              RESET
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;

import React, { useState, useEffect } from "react";
import UserMenu from "../../components/layout/UserMenu";
import Layout from "./../../components/layout/layout";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";

const Profile = () => {
  // context
  const [auth, setAuth] = useAuth();
  // state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // get user data
  useEffect(() => {
    if (auth?.user) {
      const { email, name, phone, address } = auth.user;
      setName(name);
      setPhone(phone);
      setEmail(email);
      setAddress(address);
    }
  }, [
    auth?.user?.email,
    auth?.user?.name,
    auth?.user?.phone,
    auth?.user?.address,
  ]);

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/api/v1/auth/profile", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (data?.error) {
        toast.error(data.error);
      } else {
        setAuth({ ...auth, user: data.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Your Profile"}>
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
            maxWidth: "500px", // Max width for the form container
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
            <h4 className="title">USER PROFILE</h4>
            <div className="mb-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "100%",
                  maxWidth: "400px", // Width of input fields (make longer as needed)
                  border: "1px solid black", // Black border for input fields
                  borderRadius: "4px", // Rounded corners for input fields
                  padding: "10px", // Padding inside the input fields
                  boxSizing: "border-box", // Ensure padding is included in width calculation
                }}
                id="exampleInputName"
                placeholder="Enter Your Name"
                autoFocus
              />
            </div>
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
                id="exampleInputEmail1"
                placeholder="Enter Your Email"
                disabled
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  maxWidth: "400px", // Width of input fields (make longer as needed)
                  border: "1px solid black", // Black border for input fields
                  borderRadius: "4px", // Rounded corners for input fields
                  padding: "10px", // Padding inside the input fields
                  boxSizing: "border-box", // Ensure padding is included in width calculation
                }}
                id="exampleInputPassword"
                placeholder="Enter Your Password"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: "100%",
                  maxWidth: "400px", // Width of input fields (make longer as needed)
                  border: "1px solid black", // Black border for input fields
                  borderRadius: "4px", // Rounded corners for input fields
                  padding: "10px", // Padding inside the input fields
                  boxSizing: "border-box", // Ensure padding is included in width calculation
                }}
                id="exampleInputPhone"
                placeholder="Enter Your Phone"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{
                  width: "100%",
                  maxWidth: "400px", // Width of input fields (make longer as needed)
                  border: "1px solid black", // Black border for input fields
                  borderRadius: "4px", // Rounded corners for input fields
                  padding: "10px", // Padding inside the input fields
                  boxSizing: "border-box", // Ensure padding is included in width calculation
                }}
                id="exampleInputAddress"
                placeholder="Enter Your Address"
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
              UPDATE
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;

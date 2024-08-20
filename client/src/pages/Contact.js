import React from "react";
import Layout from "../components/layout/layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div
        style={{
          minHeight: "90vh",
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        {/* Centered Contact Us heading */}
        <h1
          style={{
            textAlign: "center",
            color: "#333",
            margin: "0 0 20px 0",
            padding: "10px",
            backgroundColor: "#343a40", // Dark background for the heading
            color: "#fff", // White text color
            borderRadius: "8px",
          }}
        >
          Contact Us
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "20px",
          }}
        >
          {/* Image section */}
          <div
            style={{
              flex: "1 1 100%",
              maxWidth: "600px",
            }}
          >
            <img
              src="/images/contact.jpg"
              alt="Contact Us"
              style={{
                width: "100%",
                borderRadius: "8px",
                objectFit: "cover", // Ensure the image covers the container while maintaining its aspect ratio
              }}
            />
          </div>

          {/* Contact Information section */}
          <div
            style={{
              flex: "1 1 100%",
              maxWidth: "600px",
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              textAlign: "left",
            }}
          >
            <p
              style={{
                marginBottom: "20px",
                textAlign: "justify",
              }}
            >
              We are here to assist you with any questions or concerns you might
              have. Our team is dedicated to providing you with the best
              possible support and ensuring your satisfaction.
            </p>
            <p
              style={{
                margin: "10px 0",
              }}
            >
              <BiMailSend
                style={{ verticalAlign: "middle", marginRight: "8px" }}
              />{" "}
              Email:{" "}
              <a
                href="mailto:support@ecommerceapp.com"
                style={{ color: "#007bff", textDecoration: "none" }}
              >
                support@ecommerceapp.com
              </a>
            </p>
            <p
              style={{
                margin: "10px 0",
              }}
            >
              <BiPhoneCall
                style={{ verticalAlign: "middle", marginRight: "8px" }}
              />{" "}
              Phone: 012-3456789
            </p>
            <p
              style={{
                margin: "10px 0",
              }}
            >
              <BiSupport
                style={{ verticalAlign: "middle", marginRight: "8px" }}
              />{" "}
              Toll-Free: 1800-0000-0000
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

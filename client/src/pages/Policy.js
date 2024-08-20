import React from "react";
import Layout from "../components/layout/layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div
        style={{
          minHeight: "90vh",
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center", // Center-align text
        }}
      >
        {/* Centered Privacy Policy heading */}
        <h1
          style={{
            margin: "0",
            paddingBottom: "20px", // Space below the heading
            color: "#333", // Text color
          }}
        >
          Privacy Policy
        </h1>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <section>
            <h4>Introduction</h4>
            <p>
              At Ecommerce, we are committed to protecting your privacy. This
              Privacy Policy outlines how we collect, use, and protect your
              personal information when you visit and interact with our website,
              www.ecommerceapp.com.
            </p>
          </section>
          <section>
            <h4>Information We Collect</h4>
            <p>
              We collect various types of information to enhance your experience
              with our services. This includes:
              <br />
              <strong>Personal Information:</strong> Such as your name, email
              address, phone number, and payment details.
              <br />
              <strong>Usage Data:</strong> Information about your interactions
              with our site, including IP address, browser type, and browsing
              activity.
              <br />
              <strong>Cookies:</strong> Small data files that help us understand
              how you use our site and provide a better user experience.
            </p>
          </section>
          <section>
            <h4>How We Use Your Information</h4>
            <p>
              We use your information to:
              <br />
              <strong>Process and manage your orders and transactions.</strong>
              <br />
              <strong>
                Improve our website and services based on user feedback and
                analytics.
              </strong>
              <br />
              <strong>
                Send you updates, promotional materials, and other
                communications with your consent.
              </strong>
            </p>
          </section>
          <section>
            <h4>Sharing Your Information</h4>
            <p>
              We may share your information with:
              <br />
              <strong>Service Providers:</strong> Third parties who assist us in
              providing services such as payment processing and shipping.
              <br />
              <strong>Legal Requirements:</strong> When required by law or to
              protect our rights and the rights of others.
            </p>
          </section>
          <section>
            <h4>Changes to This Policy</h4>
            <p>
              We may update this Privacy Policy from time to time. We encourage
              you to review this page periodically to stay informed about how we
              are protecting your information.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;

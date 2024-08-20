import React from "react";
import Layout from "../components/layout/layout";
import { FaFacebook, FaInstagram } from "react-icons/fa"; // Importing icons from react-icons

const About = () => {
  return (
    <Layout title={"About Us - Ecommerce App"}>
      <div
        style={{
          minHeight: "90vh",
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center", // Center-align text
        }}
      >
        {/* Centered ABOUT US heading */}
        <h1
          style={{
            margin: "0",
            paddingBottom: "20px", // Space below the heading
            color: "#333", // Text color
          }}
        >
          ABOUT US
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
            <h4>Welcome to Ecommerce App</h4>
            <p>
              At Ecommerce App, we are dedicated to providing a seamless online
              shopping experience. Our platform connects customers with a wide
              range of products, from the latest gadgets to timeless essentials,
              all at competitive prices. Since our founding, we have been
              committed to delivering exceptional service and quality.
            </p>
          </section>
          <section>
            <h4>Our Mission</h4>
            <p>
              Our mission is to revolutionize the way people shop online. We
              strive to offer an extensive selection of products that cater to
              diverse needs and preferences. Our goal is to create a
              user-friendly platform where customers can easily find and
              purchase products that enhance their lives.
            </p>
          </section>
          <section>
            <h4>Achievements</h4>
            <p>
              We are proud to have grown into one of the leading e-commerce
              platforms in the industry. Our innovative approach has earned us
              recognition in various industry awards and features in top
              business publications. We continuously invest in technology to
              enhance our services and ensure customer satisfaction.
            </p>
          </section>
          <section>
            <h4>Connect With Us</h4>
            <p>
              We value your feedback and are here to assist you with any
              inquiries. Reach out to us at{" "}
              <a href="mailto:support@ecommerceapp.com">
                support@ecommerceapp.com
              </a>
              . For updates and special offers, follow us on our social media
              channels.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px", // Space between icons
                marginTop: "20px", // Space above the icons
              }}
            >
              <a
                href="https://www.facebook.com/sakshibodke1?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#4267B2", // Facebook color
                  fontSize: "24px",
                  textDecoration: "none",
                }}
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com/sakshi_bodke"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#C13584", // Instagram color
                  fontSize: "24px",
                  textDecoration: "none",
                }}
              >
                <FaInstagram />
              </a>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;

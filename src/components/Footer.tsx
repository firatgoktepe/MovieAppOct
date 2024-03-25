import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "10rem",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        fontSize: "0.8rem",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <div>
        <FaFacebook style={{ marginRight: "1rem", fontSize: "15px" }} />
        <FaInstagram style={{ marginRight: "1rem", fontSize: "15px" }} />
        <FaTwitter style={{ marginRight: "1rem", fontSize: "15px" }} />
        <FaYoutube style={{ marginRight: "1rem", fontSize: "15px" }} />
      </div>
      <div style={{ display: "flex" }}>
        <p style={{ margin: "0 1rem", fontWeight: "600" }}>Conditions of Use</p>
        <p style={{ margin: "0 1rem", fontWeight: "600" }}>Privacy & Policy</p>
        <p style={{ margin: "0 1rem", fontWeight: "600" }}>Press Room</p>
      </div>
      <p>© 2023 Movies by Octet</p>
    </footer>
  );
};

export default Footer;

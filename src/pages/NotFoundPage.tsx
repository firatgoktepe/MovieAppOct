import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        border: "2px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "3rem" }}>404 Not Found</h1>
      <p style={{ fontSize: "1.5rem" }}>Sayfa Bulunamadı!</p>
    </div>
  );
};

export default NotFoundPage;

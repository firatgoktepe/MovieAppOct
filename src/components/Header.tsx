import React from "react";

const Header: React.FC = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <div>
        <input
          type="text"
          placeholder="Ara..."
          style={{ padding: "10px", marginRight: "10px" }}
        />
        <span>Favoriler</span>
      </div>
    </header>
  );
};

export default Header;

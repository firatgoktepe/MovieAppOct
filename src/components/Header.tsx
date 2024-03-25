import React from "react";
import Search from "./Search";

interface HeaderProps {
  onSearch: (query: string) => void;
  favoritesCount: number;
}

const Header: React.FC<HeaderProps> = ({ onSearch, favoritesCount }) => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Search onSearch={onSearch} />
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{ color: "#BE123C", fontSize: "18px", marginRight: "5px" }}
          >
            Favoriler{" "}
          </span>
          <span style={{ fontSize: "15px" }}>{favoritesCount}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import Search from "./Search";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
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
        <Search onSearch={onSearch} />
        <span>Favoriler</span>
      </div>
    </header>
  );
};

export default Header;

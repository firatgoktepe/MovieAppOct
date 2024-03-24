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
      <div>
        <Search onSearch={onSearch} />
        <span>Favoriler {favoritesCount}</span>
      </div>
    </header>
  );
};

export default Header;

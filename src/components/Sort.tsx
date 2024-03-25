import React from "react";
import SortIcon from "../components/Icons/SortIcon";

interface SortProps {
  onSort: (sortKey: string) => void;
}

const Sort: React.FC<SortProps> = ({ onSort }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
      <select
        onChange={(e) => onSort(e.target.value)}
        style={{
          padding: "10px",
          appearance: "none",
          WebkitAppearance: "none",
          MozAppearance: "none",
          border: "none",
          backgroundColor: "transparent",
          color: "#2196F3",
        }}
      >
        <option value="">Sırala</option>
        <option value="name">Film Adı</option>
        <option value="year">Yayın Yılı</option>
        <option value="imdb">Imdb Puanı</option>
      </select>
      <div style={{ marginLeft: "-15px", display: "flex" }}>
        <SortIcon />
      </div>
    </div>
  );
};

export default Sort;

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
        style={{ padding: "10px" }}
      >
        <option value="">Sırala</option>
        <option value="name">Film Adı</option>
        <option value="year">Yayın Yılı</option>
        <option value="imdb">Imdb Puanı</option>
      </select>
      <SortIcon />
    </div>
  );
};

export default Sort;

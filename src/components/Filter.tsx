import React from "react";
import FilterIcon from "../components/Icons/FilterIcon";

interface FilterProps {
  onFilter: (filterKey: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilter }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
      <select
        onChange={(e) => onFilter(e.target.value)}
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
        <option value="">Filtrele</option>
        <option value="favorites">Favoriler</option>
        <option value="new">Yeni Eklenenler</option>
      </select>
      <div style={{ marginLeft: "-40px" }}>
        <FilterIcon />
      </div>
    </div>
  );
};

export default Filter;

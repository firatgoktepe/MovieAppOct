import React from "react";
import FilterIcon from "../components/Icons/FilterIcon";

interface FilterProps {
  onFilter: (filterKey: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilter }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <select
        onChange={(e) => onFilter(e.target.value)}
        style={{ padding: "10px" }}
      >
        <option value="">Filtrele</option>
        <option value="favorites">Favoriler</option>
        <option value="new">Yeni Eklenenler</option>
      </select>
      <FilterIcon />
    </div>
  );
};

export default Filter;

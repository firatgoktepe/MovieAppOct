import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div
      style={{ position: "relative", display: "flex", alignItems: "center" }}
    >
      <input
        type="text"
        placeholder="What do you want to watch?"
        value={query}
        onChange={handleChange}
        style={{ padding: "10px", paddingRight: "30px" }}
      />
      <BsSearch
        style={{ position: "absolute", right: "10px", pointerEvents: "none" }}
      />
    </div>
  );
};

export default Search;

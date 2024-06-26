import React, { useState } from "react";

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
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <input
        type="text"
        placeholder="What do you want to watch?"
        value={query}
        onChange={handleChange}
        style={{
          padding: "10px",
          paddingRight: "30px",
          paddingLeft: "40px",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 10px center",
          backgroundSize: "20px 20px",
          borderColor: "transparent",
          borderRadius: "4px",
          width: "250px",
        }}
      />
    </div>
  );
};

export default Search;

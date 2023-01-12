import React from "react";

const Search = ({ inputValue, handleSearch }) => {
  return (
    <div className="--form-control">
      <input
        type="text"
        placeholder="Search products"
        value={inputValue}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;

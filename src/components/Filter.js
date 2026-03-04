import React from "react";

function Filter({ search, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search"
      value={search}
      onChange={onSearchChange}
    />
  );
}

export default Filter;
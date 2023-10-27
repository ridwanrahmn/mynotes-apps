import React from "react";

function SearchInput({ onFilter }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari judul di sini ..."
        onChange={onFilter}
      ></input>
    </div>
  );
}

export default SearchInput;

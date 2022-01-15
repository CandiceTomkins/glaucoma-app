import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <h2>Glaucoma Dictionary</h2>
      <form onSubmit={search}>
        <input
          className=""
          type="search"
          onChange={handleKeywordChange}
          placeholder="Search for something..."
          autoFocus={true}
        />

        <input
          className="Dictionary-search-button"
          type="submit"
          value="Let's go!"
        />
      </form>
    </div>
  );
}

import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  function search(event) {
    event.preventDefault();
    alert("searching");
  }
  return (
    <div className="dictionary">
      <h2>Glaucoma Dictionary</h2>
      <form onSubmit={search}>
        <input
          className=""
          type="search"
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

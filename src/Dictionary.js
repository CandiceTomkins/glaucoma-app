import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  return (
    <div className="container">
      <div className="dictionary">
        <h2>Glaucoma Dictionary</h2>
        <form>
          <input
            className=""
            type="search"
            placeholder="Search for something..."
          />

          <input
            className="Dictionary-search-button"
            type="submit"
            value="Let's go!"
          />
        </form>
      </div>
    </div>
  );
}

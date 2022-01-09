import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  return (
    <div className="container">
      <div className="Dictionary">
        <form>
          <input
            className="height: 100px"
            type="search"
            placeholder="Search for something..."
          />

          <input
            className="Dictionary-search-button"
            type="submit"
            value="👀 Click Here"
          />
        </form>
      </div>
    </div>
  );
}

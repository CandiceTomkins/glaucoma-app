import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.meta.id);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "58d74ff9-14d2-4e17-a862-79d29a17d298";
    let apiUrl = `https://www.dictionaryapi.com/api/v3/references/medical/json/${keyword}?key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  https: function handleKeywordChange(event) {
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

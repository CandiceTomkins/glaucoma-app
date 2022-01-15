import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0].shortdef);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "58d74ff9-14d2-4e17-a862-79d29a17d298";
    let apiUrl = `https://www.dictionaryapi.com/api/v3/references/medical/json/${keyword}?key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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

      <Results results={results} />
    </div>
  );
}

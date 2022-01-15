import React from "react";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="results">
        <h2>{props.results.word}</h2>
      </div>
    );
  } else {
    return null;
  }
}

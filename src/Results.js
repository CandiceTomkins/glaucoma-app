import React from "react";
import "./results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.meta.id}</h2>
        <p>{props.results.shortdef}</p>
      </div>
    );
  } else {
    return null;
  }
}

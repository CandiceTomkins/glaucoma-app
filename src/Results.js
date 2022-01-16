import React from "react";
import "./results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.meta.id}</h2>

        <p>{props.results.fl}</p>
        <p>{props.results.shortdef[0]}</p>
        <p>{props.results.shortdef[1]}</p>
        <p>{props.results.shortdef[2]}</p>
      </div>
    );
  } else {
    return null;
  }
}

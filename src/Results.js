import React from "react";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="results">
        <h2>hello</h2>
      </div>
    );
  } else {
    return null;
  }
}

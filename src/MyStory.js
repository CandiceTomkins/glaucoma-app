import React from "react";
import "./MyStory.css";
import candy from "./candy-yellow-white-house.jpeg";

export default function MyStory() {
  return (
    <div className="container myStory">
      <h2>My Story</h2>

      <p>
        My name is Candy. I'm 33 and I was diagnosed with chronic angle-closure
        glaucoma in 2021.
      </p>

      <img
        src={candy}
        alt="candy-yellow-white-house"
        className="candy img-fluid"
      />
    </div>
  );
}

import React from "react";
import "./MyStory.css";
import candy from "./candy-yellow-white-house.jpeg";

export default function MyStory() {
  return (
    <div className="container myStory">
      <h2>My Story</h2>

      <p>
        My name is Candy. In 2021 I was diagnosed with chronic angle-closure
        glaucoma at the age of 32. Faced with a complicated diagnosis, I took to
        the internet to research, but I found very little relating to
        angle-closure and glaucoma under 40. I decided to make my own app
        instead.
      </p>

      <img
        src={candy}
        alt="candy-yellow-white-house"
        className="candy img-fluid"
      />
    </div>
  );
}

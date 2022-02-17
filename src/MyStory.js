import React from "react";
import "./MyStory.css";
import candy from "./candy-yellow-white-house.jpeg";

export default function MyStory() {
  return (
    <div className="container myStory">
      <h2 className="section-title">My Story</h2>

      <p className="myStory">
        My name is Candy. In 2021 I was diagnosed with chronic angle-closure
        glaucoma at the age of 32. Faced with a complicated diagnosis, I turned
        to the internet for support. I found found limited information relating
        to angle-closure and glaucoma under 40, so I set out on a mission to
        create an app for people like me.
      </p>

      <img
        src={candy}
        alt="candy-yellow-white-house"
        className="candy img-fluid"
      />
    </div>
  );
}

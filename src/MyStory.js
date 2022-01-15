import React from "react";
import "./MyStory.css";
import candy from "candy-yellow-white-house.jpeg";

export default function MyStory() {
  return (
    <div className="container myStory">
      <div className="row">
        <div className="col-6">
          <h2>My Story</h2>
        </div>
        <div className="col-6">
          <img
            src={candy}
            alt="candy-yellow-white-house"
            className="candy img-fluid"
          />
        </div>
        <div className="row">
          <div className="col-6">
            <p>
              My name is Candy. I'm 33 and I was diagnosed with chronic
              angle-closure glaucoma in 2021.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

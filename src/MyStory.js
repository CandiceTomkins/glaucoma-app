import React from "react";
import "./MyStory.css";
import candy from "./candy-yellow-white-house.jpeg";

export default function MyStory() {
  return (
    <div className="container myStory mb-5">
      <h2 className="section-title text-white">My Story</h2>

      <p className="myStory">
        My name is Candy, and I have advanced chronic angle-closure glaucoma. In
        2021 I suffered an acute-angle closure attack at the age of 32. For a
        few months nothing could contol my IOP. At one point I was a few days
        away from loosing my vision in my right eye completely.{" "}
        <strong>Things got really scary, really quickly. </strong>
      </p>
      <p className="myStory">
        I turned to the internet for support, but found almost no resources for
        either angle-closure or glaucoma in people under 40. I spent the first 6
        months after diagnosis studying the disease so I could make educated
        decisions on my treatment.{" "}
      </p>
      <p className="myStory">
        I'm now on a mission to share my journey, and everything I found along
        the way. I hope to create a place where others (particularly those that
        fall outside the usual bracket for glaucoma) can feel more supported,
        understood and less alone on their own journey.
      </p>

      <img
        src={candy}
        alt="candy-yellow-white-house"
        className="candy img-fluid"
      />
    </div>
  );
}

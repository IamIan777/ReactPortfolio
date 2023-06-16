import React from "react";

function AboutMe() {
  return (
    <article className="article">
      <img src={require("../images/pfp.jpg")} alt="Ian Heap/"></img>
      <h2 className="titles" id="About Me">
        About Me
      </h2>
      <p className="content">
        I am a full-stack web developer living in Savannah, Georgia. My hobbies include leaarning Computer Science, playing video games, movies, dogs and cards. If
        you need help creating a website I can always help out.{" "}
      </p>
    </article>
  );
}

export default AboutMe;
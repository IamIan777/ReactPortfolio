import React from "react";
import "../App.css";

function Portfolio() {
  return (
    <div>
      <h2 className="titles" id="Portfolio">
        Portfolio
      </h2>
      <section className="other-apps">
        <section className="other-apps">
          <section className="other-app1">
            <a href="https://github.com/IamIan777/A-really-cool-quiz">
              <h4>Coding Quiz (HTML, CSS, Javascript)</h4>
              <img
                src={require("../images/Screenshot (19).png")}
                alt="Coding_Quiz/"
              ></img>
            </a>
            <section className="text-block2">
              <a
                href="https://github.com/IamIan777/A-really-cool-quiz"
                className="link"
              >
              </a>
            </section>
          </section>
          <section className="other-app2">
            <a href="https://damp-reaches-78303.herokuapp.com/">
              <h4>Snack Shack Appetizer Archive</h4>
              <img
                src={require("../images/Screen_Shot 2023-05-09 at 9.25.18 PM (2).png")}
                alt="Snack_Shack/"
              ></img>
            </a>
            <section className="text-block3">
              <a
                href="https://github.com/BrainAtoms/Snack_Shack/"
                className="link"
              >
              </a>
            </section>
          </section>
          <section className="other-app2">
            <a href="https://github.com/IamIan777/Climate-Control">
              <h4>Weather Dashboard</h4>
              <img
                src={require("../images/Screenshot (21).png")}
                alt="Weather_Dashboard/"
              ></img>
            </a>
            <section className="text-block3">
              <a
                href="https://github.com/IamIan777/Climate-Control"
                className="link"
              >
              </a>
            </section>
          </section>
          <section className="other-app2">
            <a href="https://brainatoms.github.io/Stat_Generator/">
              <h4>Character Generator- Randomize D&D Stats</h4>
              <img
                src={require("../images/Character_Generator.png")}
                alt="Character_Generator/"
              ></img>
            </a>
            <section className="text-block3">
              <a
                href="https://github.com/BrainAtoms/character-generator"
                className="link"
              >
              </a>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Portfolio;
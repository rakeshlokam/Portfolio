import React from "react";
import "./About.css";

const About = (props) => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Introduction</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Rakesh Lokam.</h4>
            <p>I am a full-stack Engineer based in Boston, MA, USA</p>
            <p>
              I am a Seasoned Senior Software Engineer with 4.5 years of
              experience as a full stack developer and an aspiring Data Science
              Enthusiast with a demonstrated history of working in the Travel
              and health care industry. Skilled in NodeJS, Java, Python, Machine
              Learning, Relational,NoSQL, Big data Hadoop, Spark and
              microservice architecture. Strong information technology
              professional with a Bachelor of Technology focused in Information
              Technology. Skilled in Full-Stack Product Development, primarily
              interested in working and designing scalable systems and
              infrastructure provisioning.
            </p>
          </div>
          <div className="title">
            <h3>Works on</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
              For the front-end I usually work with Javascript, either
              standalone or including popular frameworks like ReactJS and
              AngularJS.
            </p>
            <p>
              For the back-end I also work with Javascript (NodeJS, Express,
              MongoDB, etc).
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Machine Learning.</h4>
            <p>.</p>
            <p></p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;

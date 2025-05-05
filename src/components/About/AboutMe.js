import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutMe() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Moshood Ajibade </span>
            from <span className="purple"> United Kingdom.</span>
            <br />
            A dedicated full stack software developer.
            <br />
            I Possess degree in Computer science and Information Technology
            UK.
            <br />
            <br />
             I enjoy doing a few things outside of coding.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Volunteering 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling  
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mosh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutMe;

import React from "react";
import Project from "./Project";
import "./Projects.css";
import MsgBoardImg from "./Images/AnonMsgBoard.jpg";
import StockPriceImg from "./Images/StockPriceChecker.jpg";
import PersonalLibraryImg from "./Images/PersonalLibrary.jpg";
import IssueTrackerImg from "./Images/IssueTracker.jpg";
import MIConverterImg from "./Images/MetricImperialConverter.jpg";
import CortalaImg from "./Images/Cortala.jpg";
import ExerciseTrackerImg from "./Images/ExerciseTracker.jpg";
import BarChartImg from "./Images/BarChart.jpg";
import TreeMapImg from "./Images/TreemapDiagram.jpg";
import ChoroplethMapImg from "./Images/ChoroplethMap.jpg";
import QuotingMachineImg from "./Images/QuotingMachine.jpg";
import CalculatorImg from "./Images/Calculator.jpg";
import TomateTimerImg from "./Images/TomateTimer.jpg";
import TicTacToeImg from "./Images/TicTacToe.jpg";
import TwitchImg from "./Images/Twitch.jpg";
import WeatherAppImg from "./Images/WeatherApp.jpg";
import TributeImg from "./Images/Tribute.jpg";
import SurveyFormImg from "./Images/SurveyForm.jpg";
import LandingPageImg from "./Images/LandingPage.jpg";
import DocumentifyImg from "./Images/Documentify.jpg";

const Projects = (props) => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of <u>most</u> of the projects I've been working on
            lately.
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="Anonymous Message Board."
            img={MsgBoardImg}
            tech="js css react node"
            link="https://yagoestevez-anon-msg-board.glitch.me/"
            repo="https://github.com/yagoestevez/anonymous-message-board"
          >
            <small>
              Built using Node, Express, MongoDB, MaterialCSS, React.js and
              React Router.
            </small>
            <p>
              This is a full-stack website that I made which lets the users read
              and post anonymous messages and replies.
            </p>
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Projects;

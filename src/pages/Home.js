import React from "react";
import "../assets/styles/pages/Home.scss";
import { MeasurementsCard } from "../components/index";
// import { MeasurementsCard } from "../components";

function Home() {
  return (
    <>
      <div className="home-page-container">
        <div className="home-page-header">
          Welcome to the <span className="logo white-text">red</span>
          <span className="logo red-text">black</span>
          <span className="logo white-text">tree</span> internship 2021
        </div>
        <div className="home-page-content">
          Device we use is Raspberry Pi and, in our case, it measures
          temperature, humidity and pollution of the air around us.
          <br />
          In the first week of internship, you were using this little buddy’s
          data stored in database to create{" "}
          <a
            href="https://airvironment.live/api/measurements"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            API endpoints
          </a>{" "}
          which we will fetch and utilize to bring that data to our screens and
          present it graphically.
          <br />
          <br />
          <a
            href="https://reactjs.org"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            ReactJS
          </a>{" "}
          is JavaScript library for building user interfaces and UI components
          and we will be using it to manipulate with our data in several ways:
          <ul className="list">
            <li className="list-item">
              <span>Air parameters for each of the past days</span>
            </li>
            <li className="list-item">
              <span>
                Air parameters for each of the past days in average values
              </span>
            </li>
            <li className="list-item">
              <span>Air parameters for the for the specific day</span>
            </li>
            <li className="list-item">
              <span>All of the above using responsive design</span>
            </li>
          </ul>
          <br />
          Also we will be get used with some React libraries and features:{" "}
          <a
            href="https://redux.js.org"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Redux
          </a>
          ,{" "}
          <a
            href="https://reactjs.org/docs/hooks-intro.html"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Hooks
          </a>
          ,{" "}
          <a
            href="https://prettier.io"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Prettier
          </a>
          ,{" "}
          <a
            href="https://momentjs.com"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Moment.js
          </a>
          ,{" "}
          <a
            href="https://reactrouter.com"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            React router
          </a>
          ,{" "}
          <a
            href="https://www.w3schools.com/react/react_lifecycle.asp"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            life cycle
          </a>
          …
        </div>
        <p className="signature">Frontend team</p>
      </div>
    </>
  );
}

export default Home;

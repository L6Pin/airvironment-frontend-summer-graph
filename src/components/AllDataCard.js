import React from "react";
import "../assets/styles/components/AllDataCard.scss";
import { TemperatureIcon, HumidityIcon, PollutionIcon } from "../assets/icons";
import AllDataCardRow from "./AllDataCardRow";

const AverageCard = ({ day }) => {
  return (
    <div className="all-data-row">
      <div className="header-row">
        <div className="date-time-wrapper">
          <div className="day">dan</div>
          <div className="date">datum</div>
        </div>
        <div className="data-icon-wrapper">
          <TemperatureIcon className="data-icon" />
        </div>
        <div className="data-icon-wrapper">
          <HumidityIcon className="data-icon" />
        </div>
        <div className="data-icon-wrapper">
          <PollutionIcon className="data-icon" />
        </div>
      </div>

      {day.map((row) => (
        <div className="hour-data">{<AllDataCardRow row={row} />}</div>
      ))}
    </div>
  );
};

export default AverageCard;

import React from "react";
import "../assets/styles/components/AllDataCard.scss";
import { TemperatureIcon, HumidityIcon, PollutionIcon } from "../assets/icons";
import AllDataCardRow from "./AllDataCardRow";
import useDates from "../hooks/useDates";

const AllDataCard = ({ day }) => {



  return (

    <div className="all-data-row">
      <div className="header-row">
        <div className="date-time-wrapper">
          <div className="day">{useDates().returnDay(day[0].created)}</div>
          <div className="date">{useDates().returnDate(day[0].created)}</div>
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

      {day.map((row, index) => (
        <div className="hour-data" key={index} >
          <AllDataCardRow  row={row}  />
        </div>
      ))}

    </div>
  );
};

export default AllDataCard;

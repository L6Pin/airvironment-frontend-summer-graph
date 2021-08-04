import React from "react";
import useDates from "../hooks/useDates";

const AllDataCardRow = ({ row }) => {

  return (
    <>
      <div className="date-time-wrapper">
        {useDates().returnHour(row.created)}h
      </div>
      <div className="values">{Math.round(row.temperature)}&deg;C</div>
      <div className="values">{Math.round(row.humidity)}%</div>
      <div className="values">{Math.round(row.pollution) / 100}ppb</div>
    </>
  );
};

export default AllDataCardRow;

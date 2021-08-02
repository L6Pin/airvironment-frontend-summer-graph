import React from "react";

const AllDataCardRow = ({ row }) => {
  console.log(row);
  return (
    <>
      <div className="date-time-wrapper">sat</div>
      <div className="values">{Math.round(row.temperature)}&deg;C</div>
      <div className="values">{Math.round(row.humidity)}%</div>
      <div className="values">{Math.round(row.pollution) / 100}ppb</div>
    </>
  );
};

export default AllDataCardRow;

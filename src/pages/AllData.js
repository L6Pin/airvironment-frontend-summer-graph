import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../assets/styles/pages/AllData.scss";
import useDates from "../hooks/useDates";
import AllDataCard from "../components/AllDataCard";
import { loadAllMeasurements } from "../redux/actions/averageActions";

const AllData = ({ getMeasurements, loadMeasurements }) => {
  const { isSameDay } = useDates();
  const [dataArray, setDataArray] = useState([]);
  const per_page = 5000;

  useEffect(() => {
    const params = {
      per_page: per_page,
    };
    getMeasurements(params);
  }, [getMeasurements]);

  useEffect(() => {
    function groupArray(array) {
      const groupedArray = [];
      let currentGroup = [];
      array.forEach((data, index) => {
        currentGroup.push(data);
        if (
          (index < array.length - 1 &&
            !isSameDay(data.created, array[index + 1].created)) ||
          index === array.length - 1
        ) {
          groupedArray.push(currentGroup);
          currentGroup = [];
        }
      });
      setDataArray(groupedArray.reverse());
    }
    groupArray(loadMeasurements);
  }, [loadMeasurements, isSameDay]);

  return (
    <div className="all-data-container">
      {dataArray.map((day, i) => (
        <AllDataCard day={day} key={i}  />
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    loadMeasurements: state.loadMeasurements?.response ?? [],
  };
}

const mapDispatchToProps = {
  getMeasurements: loadAllMeasurements,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllData);

import React from "react";
import moment from "moment";
import { loadAllMeasurements } from "../redux/actions/averageActions";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Chart } from "../components";

function Home({ graphData, getMeasurements }) {
  useEffect(() => {
    const parms = {
      all: true,
    };
    getMeasurements(parms);
  }, [getMeasurements]);

  let graphDataDay = [];
  graphData.forEach((element) => {
    graphDataDay.push({
      ...element,
      test: moment(element.created).format("HH:MM"),
    });
  });
  graphDataDay.reverse();

  return (
    <div className="chart-page">
      {graphData.length > 0 && (
        <div className="chart-container">
          <div className="day-info">
            <div className="top-row">
              <p className="day">
                {moment(graphData[0].created).format("dddd")}
              </p>
              <p className="temp">{graphData[0].temperature}°C</p>
            </div>
            <div className="bottom-row">
              <div className="date-location">
                <p>{moment(graphData[0].created).format("DD MMMM YYYY")},</p>
                <p>Belgrade</p>
              </div>
              <div className="measurements">
                <p>Latest</p>
                <p>measurement</p>
              </div>
            </div>
          </div>
          <Chart graphDataDay={graphDataDay} />
        </div>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    graphData: state.loadMeasurements ? state.loadMeasurements : [],
  };
}

const mapDispatchToProps = {
  getMeasurements: loadAllMeasurements,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

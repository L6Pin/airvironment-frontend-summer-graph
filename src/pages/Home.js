import React from "react";
import "../assets/styles/pages/Home.scss";
import "../assets/styles/components/Chart.scss";
import moment from "moment";
import { loadAllMeasurements } from "../redux/actions/averageActions";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

function Home({ graphData, getMeasurements }) {
  const [day, setDay] = useState("");

  useEffect(() => {
    const parms = {
      all: true,
    };
    getMeasurements(parms);
  }, [getMeasurements]);

  useEffect(() => {
    setDay(graphData[0]?.created);
  }, [graphData]);

  let graphDataDay = [];
  graphData.forEach((element) => {
    graphDataDay.push({
      ...element,
      test: moment(element.created).format("HH:MM"),
    });
  });
  graphDataDay.reverse();

  return (
    <>
      {graphData && graphData.length && (
        <div className="chart-page">
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
                  <p>{moment(graphData[0].created).format("DD MMMM YYYY")}</p>
                  <p>Belgrade</p>
                </div>
                
                <div className="measurements">
                  <p>Latest</p>
                  <p>measurements</p>
                </div>
              </div>
            </div>
            <div className="chart">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={graphDataDay}
                  margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                >
                  <Line
                    type="monotone"
                    dataKey="temperature"
                    stroke="#fff"
                    isAnimationActive={false}
                  >
                    <LabelList
                      dataKey="temperature"
                      position="top"
                      offset="10"
                    />
                  </Line>
                  <XAxis
                    dataKey="test"
                    className="fontName"
                    offset="10"
                    margin={{ top: 5, right: 50, bottom: 20, left: 50 }}
                  />
                  <YAxis hide="true" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </>
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

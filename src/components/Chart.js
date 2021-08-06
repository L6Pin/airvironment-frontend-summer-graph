import "../assets/styles/pages/Home.scss";
import "../assets/styles/components/Chart.scss";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const Chart = ({ graphDataDay }) => {
  return (
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
            <LabelList dataKey="temperature" position="top" offset="10" />
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
  );
};

export default Chart;

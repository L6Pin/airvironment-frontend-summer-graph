import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import moment from "moment";
import { groupBy, EXTREME_TYPES, getExtreme } from "../../common/utils";

export default function AverageValuesReducer(
  state = initialState.averageValues,
  action
) {
  const DATE_FORMAT = "DD. MMMM. YYYY";
  const DATA_PARAMS = {
    temperature: "temperature",
    humidity: "humidity",
    pollution: "pollution",
  };

  switch (action.type) {
    case types.AVERAGE_MEASUREMENTS_REQUEST:
      return state;
    case types.AVERAGE_MEASUREMENTS_SUCCESS:
      action.response.forEach((response) => {
        response.date = moment(response.created).format(DATE_FORMAT);
      });

      let dataGroupedByDate = groupBy(action.response, "date");

      return dataGroupedByDate.map((data) => {
        let valueSum = {
          temperatureSum: 0,
          humiditySum: 0,
          pollutionSum: 0,
        };

        let itemsFound = 0;
        const length = data.length;
        let item = null;

        for (let i = 0; i < length; i++) {
          item = data[i];
          valueSum.temperatureSum = item.temperature + valueSum.temperatureSum;
          valueSum.humiditySum = item.humidity + valueSum.humiditySum;
          valueSum.pollutionSum = item.pollution / 100 + valueSum.pollutionSum;
          itemsFound = itemsFound + 1;
        }

        return {
          minTemperature: getExtreme(
            data,
            DATA_PARAMS.temperature,
            EXTREME_TYPES.min
          ),
          maxTemperature: getExtreme(
            data,
            DATA_PARAMS.temperature,
            EXTREME_TYPES.max
          ),
          minHumidity: getExtreme(
            data,
            DATA_PARAMS.humidity,
            EXTREME_TYPES.min
          ),
          maxHumidity: getExtreme(
            data,
            DATA_PARAMS.humidity,
            EXTREME_TYPES.max
          ),
          minPollution: (
            getExtreme(data, DATA_PARAMS.pollution, EXTREME_TYPES.min) / 100
          ).toFixed(2),
          maxPollution: (
            getExtreme(data, DATA_PARAMS.pollution, EXTREME_TYPES.max) / 100
          ).toFixed(2),
          date: data[0].date,
          averageTemperature: (valueSum.temperatureSum / itemsFound).toFixed(),
          averageHumidity: (valueSum.humiditySum / itemsFound).toFixed(),
          averagePollution: (valueSum.pollutionSum / itemsFound).toFixed(2),
        };
      });
    case types.AVERAGE_MEASUREMENTS_FAILURE:
      return state;
    default:
      return state;
  }
}

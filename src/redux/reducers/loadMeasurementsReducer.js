import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function LoadMeasurementsReducer(
  state = initialState.loadMeasurements,
  action
) {
  switch (action.type) {
    case types.LOAD_MEASUREMENT_REQUEST:
      return state;
    case types.LOAD_MEASUREMENT_SUCCESS: {
      let latestData = action.response
      let latestDataTrimmed = latestData.reverse().splice(0, 5)
      return latestDataTrimmed
    }
    case types.LOAD_MEASUREMENT_FAILURE:
      return state;
    default:
      return state;
  }
}

import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function LoadMeasurementsReducer(
  state = initialState.loadMeasurements,
  action
) {
  switch (action.type) {
    case types.LOAD_MEASUREMENT_SUCCESS:
      return action.response;
    case types.LOAD_MEASUREMENT_FAILURE:
      return state;
    default:
      return state;
  }
}

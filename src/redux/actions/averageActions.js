import * as types from "./actionTypes";
import * as measurementsApi from "../../api/measurements";

/**
 * Load average values requested.
 * @returns {{type: string}}
 */
export function loadAverageValuesRequest() {
  return { type: types.AVERAGE_MEASUREMENTS_REQUEST };
}

export function loadMeasurementsRequest() {
  return { type: types.LOAD_MEASUREMENT_REQUEST };
}

/**
 * Average values successfully loaded action creator.
 * @param response
 * @returns {{response: *, type: string}}
 */
export function loadAverageValuesSuccess(response) {
  return { type: types.AVERAGE_MEASUREMENTS_SUCCESS, response };
}

/**
 * Average values loading failed action creator.
 * @param error
 * @returns {{error: *, type: string}}
 */
export function loadAverageValuesFailure(error) {
  return { type: types.AVERAGE_MEASUREMENTS_FAILURE, error };
}

export function loadMeasurementsFaliure(error) {
  return { type: types.LOAD_MEASUREMENT_FAILURE, error };
}

export function loadMeasurements(response) {
  return {
    type: types.LOAD_MEASUREMENT_SUCCESS,
    response,
  };
}

/**
 * Fires a get request to fetch average values and returns the received response.
 * @param params
 * @returns {function(*): Promise<void>}
 */
export function loadAverageValues(params) {
  return function (dispatch) {
    dispatch(loadAverageValuesRequest());
    measurementsApi
      .getMeasurements(params)
      .then((response) => {
        dispatch(loadAverageValuesSuccess(response));
      })
      .catch((error) => {
        dispatch(loadAverageValuesFailure(JSON.parse(error.message)));
        console.log("Error loading average values.");
      });
  };
}

export function loadAllMeasurements(params) {
  return function (dispatch) {
    dispatch(loadMeasurementsRequest());
    measurementsApi
      .getMeasurements(params)
      .then((response) => {
        dispatch(loadMeasurements(response));
      })
      .catch((error) => {
        dispatch(loadMeasurementsFaliure(JSON.parse(error.message)));
        console.log("Error loading average values.");
      });
  };
}

import { get, patch, post, remove } from "./config/client";
import { apiBaseUrl } from "./config/config";

/**
 * Get measurements.
 * @param params
 * @returns {Promise<*>}
 */
export async function getMeasurements(params) {
  return await get(`${apiBaseUrl}/api/measurements`, params);
}

/**
 * Get measurement.
 * @param measurementId
 * @returns {Promise<*>}
 */
export async function getMeasurement(measurementId) {
  return await get(`${apiBaseUrl}/api/measurements/${measurementId}`);
}

/**
 * Add a new measurement
 * @param measurement
 * @returns {Promise<*>}
 */
export async function addMeasurement(measurement) {
  return await post(`${apiBaseUrl}/api/measurements`, measurement);
}

/**
 * Edit measurement
 * @param measurementId
 * @param measurement
 * @returns {Promise<*>}
 */
export async function editMeasurement(measurementId, measurement) {
  return await patch(
    `${apiBaseUrl}/api/measurements/${measurementId}`,
    measurement
  );
}

/**
 * Delete measurement.
 * @param measurementId
 * @returns {Promise<*>}
 */
export async function removeMeasurement(measurementId) {
  return await remove(`${apiBaseUrl}/api/measurements/${measurementId}`);
}

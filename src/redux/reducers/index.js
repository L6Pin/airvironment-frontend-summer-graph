import { combineReducers } from "redux";
import averageValues from "./averageValuesReducer";
import loadMeasurements from "./loadMeasurementsReducer";

const rootReducer = combineReducers({ averageValues, loadMeasurements });

export default rootReducer;

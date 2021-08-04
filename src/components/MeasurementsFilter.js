import "../assets/styles/components/MeasurementsFilter.scss";
import {
  ApplyFilterButton,
  DataTypeTemperatureIcon,
  DataTypePollutionIcon,
  DataTypeHumidityIcon,
  CheckedSelected,
  UncheckedSelected,
  DataTypeTemperatureUncheckedIcon,
  DataTypeHumidityUncheckedicon,
  DataTypePollutionUncheckedIcon,
  CalendarOpenButton,
} from "../assets/icons/index";



const MeasurementsFilter = () => {
  let temp = false;
  let hum = false;
  let poll = true;



  let date = new Date();
  let todayDate = date.toISOString().substr(0, 10);

  return (
    <div className="measurementFilter">
        <div className="topRow">
          <div className="date-range">
            <div className="date">
              <div className="calendarIcon">
                <CalendarOpenButton />
              </div>
              <p>date</p>
              <input type="date" defaultValue={todayDate} />
            </div>
            <div className="range">
              <div className="rangeOpenButton">
                <CalendarOpenButton />
              </div>
              <p>range</p>
              <div className="selector">
                <select>
                  <option value="1">One day</option>
                  <option value="7">Seven days</option>
                  <option value="30">Thirty days</option>
                </select>
              </div>
            </div>
          </div>
          <div className="hours">slajda</div>
        </div>
      <div className="dataType-confirm">
        <div className="dataType">
          <p className="title">DATA TYPE</p>
          <div className="dataTypeContainer">
            <div className="singleDataType tempDataType">
              {temp ? (
                <div className="selectedTemp">
                  <DataTypeTemperatureIcon />
                  <div className="check">
                    <CheckedSelected />
                  </div>
                </div>
              ) : (
                <div className="unselectedTemp">
                  <DataTypeTemperatureUncheckedIcon />
                  <div className="check">
                    <UncheckedSelected />
                  </div>
                </div>
              )}
            </div>
            <div className="singleDataType humDataType">
              {hum ? (
                <div className="selectedHum">
                  <DataTypeHumidityIcon />
                  <div className="check">
                    <CheckedSelected />
                  </div>
                </div>
              ) : (
                <div className="unselectedHum">
                  <DataTypeHumidityUncheckedicon />
                  <div className="check">
                    <UncheckedSelected />
                  </div>
                </div>
              )}
            </div>
            <div className="singleDataType pollDataType">
              {poll ? (
                <div className="selectedPoll">
                  <DataTypePollutionIcon />
                  <div className="check">
                    <CheckedSelected />
                  </div>
                </div>
              ) : (
                <div className="unselectedPoll">
                  <DataTypePollutionUncheckedIcon />
                  <div className="check">
                    <UncheckedSelected />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="confirm">
          <ApplyFilterButton />
        </div>
      </div>
    </div>
  );
};

export default MeasurementsFilter;

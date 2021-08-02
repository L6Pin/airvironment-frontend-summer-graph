import "../assets/styles/components/MeasurementsCard.scss";
import {
  HighValueIcon,
  HumidityIconSmall,
  LowValueIcon,
  PollutionIconSmall,
  TemperatureIconSmall,
} from "../assets/icons";
import moment from "moment";

const MeasurementsCard = ({ averageValue }) => {
  return (
    <div className="measurementCard">
      <div className="measurementCard__top">
        <div className="dayDateContainer">
          <div className="day">
            {moment(averageValue.date, "DD. MMMM. YYYY").format("ddd")}
          </div>
          <div className="date">{averageValue.date}</div>
        </div>
      </div>
      <hr />
      <div className="measurementCardBottomContainer">
        <div className="measurementCard__bottom">
          <div className="readingLeft ">
            <div className="readingLeftContainer">
              <div className="readingIcon">
                <TemperatureIconSmall />
              </div>
              <div className="maxAndMin">
                <div className="max">
                  <HighValueIcon />
                  <div className="max__reading">
                    {Math.round(averageValue.maxTemperature)}ºC
                  </div>
                </div>
                <div className="min">
                  <LowValueIcon />
                  <div className="min__reading">
                    {Math.round(averageValue.minTemperature)}ºC
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="readingRight">
            <p>
              <span>/</span> {Math.round(averageValue.averageTemperature)}ºC
            </p>
          </div>
        </div>
        <div className="measurementCard__bottom">
          <div className="readingLeft ">
            <div className="readingLeftContainer">
              <div className="readingIcon">
                <HumidityIconSmall />
              </div>
              <div className="maxAndMin">
                <div className="max">
                  <HighValueIcon />
                  <div className="max__reading">
                    {Math.round(averageValue.maxHumidity)}%
                  </div>
                </div>
                <div className="min">
                  <LowValueIcon />
                  <div className="min__reading">
                    {Math.round(averageValue.minHumidity)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="readingRight">
            <p>
              <span>/</span> {Math.round(averageValue.averageHumidity)}%
            </p>
          </div>
        </div>
        <div className="measurementCard__bottom">
          <div className="readingLeft ">
            <div className="readingLeftContainer">
              <div className="readingIcon">
                <PollutionIconSmall />
              </div>
              <div className="maxAndMin">
                <div className="max">
                  <HighValueIcon />
                  <div className="max__reading">
                    {averageValue.maxPollution}ppb
                  </div>
                </div>
                <div className="min">
                  <LowValueIcon />
                  <div className="min__reading">
                    {averageValue.minPollution}ppb
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="readingRight">
            <p>
              <span>/</span>{" "}
              {String(averageValue.averagePollution).replace(".", ",")}
              <span className="ppb">ppb</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeasurementsCard;

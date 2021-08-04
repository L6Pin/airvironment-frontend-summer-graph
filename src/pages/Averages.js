import { MeasurementsCard, MeasurementsFilter } from "../components/index";
import { useEffect } from "react";
import "../assets/styles/pages/Averages.scss";
import { loadAverageValues } from "../redux/actions/averageActions";
import { connect } from "react-redux";

const Averages = ({ averageValues, getAverageValues }) => {
  useEffect(() => {
    const params = {
      all: true,
    };
    getAverageValues(params);
  }, [getAverageValues]);

  return (
    <>
      <MeasurementsFilter />
      <div className="Averages">
        <div className="averages-container">
          {averageValues.length ? (
            averageValues.map((averageValue, i) => (
              <MeasurementsCard averageValue={averageValue} key={i} />
            ))
          ) : (
            <div />
          )}
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    averageValues: state.averageValues,
  };
}

const mapDispatchToProps = {
  getAverageValues: loadAverageValues,
};

export default connect(mapStateToProps, mapDispatchToProps)(Averages);

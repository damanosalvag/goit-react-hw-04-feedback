import PropTypes from "prop-types";

const Statistics = ({ statistic, value }) => {
  return (
    <p>
      {statistic}: {value}
    </p>
  );
};

Statistics.propTypes = {
  statistic: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
export default Statistics;

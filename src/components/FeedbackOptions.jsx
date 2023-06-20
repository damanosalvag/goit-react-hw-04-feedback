import PropTypes from "prop-types";

const FeedbackOptions = ({ text, handleClick }) => {
  return (
    <button id={text} onClick={handleClick}>
      {text}
    </button>
  );
};

FeedbackOptions.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;

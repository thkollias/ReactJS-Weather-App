import PropTypes from "prop-types";

const Error = ({message}) => {
  return (
    <>
      <p>{message}</p>
    </>
  );
};

Error.propTypes = {
  message: PropTypes.string
};

Error.defaultProps = {
  message: "Something went wrong!"
};

export default Error;
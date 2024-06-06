import PropTypes from "prop-types";

const InputWrapper = ({ label, id, type, ...rest }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...rest} />
    </div>
  );
};

InputWrapper.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default InputWrapper;

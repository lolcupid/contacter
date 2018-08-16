import React from 'react';
import PropTypes from 'prop-types';

const TextInputGroup = ({
  label,
  type,
  value,
  name,
  placeholder,
  onChange
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label} </label>
      <input
        type={type}
        name={name}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

TextInputGroup.defaultProps = {
  type: 'text'
}

export default TextInputGroup;
import React from 'react'

const InputField = ({handleRadioButtonChange, value, title, name}) => {
  return (
    <label className="sidebar-label-container">
        <input type="radio" name={name} value={value} onChange={handleRadioButtonChange} />
        <span className="checkmark"></span>{title}
    </label>
  );
}

export default InputField
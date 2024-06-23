import React from 'react'
import InputField from '../components/InputField'

const TypeOfEmployment = ({handleRadioButtonChange}) => {
  return (
    <div>
        <h4 className="text-primary/100 text-lg font-medium mb-2">Type of Employment</h4>

        <div>
            <label className="sidebar-label-container">
                <input type="radio" name="test" id="test" value="" onChange={handleRadioButtonChange} />
                <span className="checkmark"></span>All
            </label>

            <InputField handleRadioButtonChange={handleRadioButtonChange} value="part-time" title="Part-time" name="test"/>
            <InputField handleRadioButtonChange={handleRadioButtonChange} value="temporary" title="Temporary" name="test"/>
            <InputField handleRadioButtonChange={handleRadioButtonChange} value="full-time" title="Full-time" name="test"/>

        </div>
    </div>
  )
}

export default TypeOfEmployment
import React from 'react'
import InputField from '../components/InputField'

const Location = ({handleRadioButtonChange}) => {
  return (
    <div>
        <h4 className="text-primary/100 text-lg font-medium mb-2">Location</h4>

        <div>
            <label className="sidebar-label-container">
                <input type="radio" name="test" id="test" value="" onChange={handleRadioButtonChange} />
                <span className="checkmark"></span>All
            </label>

            <InputField handleRadioButtonChange={handleRadioButtonChange} value="london" title="London" name="test"/>
            <InputField handleRadioButtonChange={handleRadioButtonChange} value="seattle" title="Seattle" name="test"/>
            <InputField handleRadioButtonChange={handleRadioButtonChange} value="brussels" title="Brussels" name="test"/>
            <InputField handleRadioButtonChange={handleRadioButtonChange} value="madrid" title="Madrid" name="test"/>
            <InputField handleRadioButtonChange={handleRadioButtonChange} value="san francisco" title="San Francisco" name="test"/>
            <InputField handleRadioButtonChange={handleRadioButtonChange} value="boston" title="Boston" name="test"/>

        </div>
    </div>
  )
}

export default Location
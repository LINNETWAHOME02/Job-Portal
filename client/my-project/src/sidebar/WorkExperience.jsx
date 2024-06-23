import React from 'react'
import InputField from '../components/InputField'

const WorkExperience = ({handleRadioButtonChange}) => {
  return (
    <div>
        <h4 className="text-primary/100 text-lg font-medium mb-2">Work Experience</h4>

        <div>
            <label className="sidebar-label-container">
                <input type="radio" name="test" id="test" value="" onChange={handleRadioButtonChange} />
                <span className="checkmark"></span>Any Experience
            </label>

            <InputField handleRadioButtonChange={handleRadioButtonChange} value="internship" title="Internship" name="test"/>
            <InputField handleRadioButtonChange={handleRadioButtonChange} value="work remotely" title="Work remotely" name="test"/>
        </div>
    </div>
  )
}

export default WorkExperience
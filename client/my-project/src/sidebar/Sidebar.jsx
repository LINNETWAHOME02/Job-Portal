import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPostingData from './JobPostingData'
import WorkExperience from './WorkExperience'
import TypeOfEmployment from './TypeOfEmployment'

const Sidebar = ({handleRadioButtonChange, handleButtonChange}) => {
  return (
    <div className="space-y-5">
        <h3 className="text-lg font-bold mb-2">Filters</h3>

        <Location handleRadioButtonChange={handleRadioButtonChange}/>
        <Salary handleRadioButtonChange={handleRadioButtonChange} handleButtonChange={handleButtonChange}/>
        <JobPostingData handleRadioButtonChange={handleRadioButtonChange}/>
        <WorkExperience handleRadioButtonChange={handleRadioButtonChange}/>
        <TypeOfEmployment handleRadioButtonChange={handleRadioButtonChange}/>
    </div>
  )
}

export default Sidebar
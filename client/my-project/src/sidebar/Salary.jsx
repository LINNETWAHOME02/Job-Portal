import React from 'react'
import Button from './Button'
import InputField from '../components/InputField'

const Salary = ({handleRadioButtonChange, handleButtonChange}) => {
  return (
    <div>
        <h4 className="text-primary/100 text-lg font-medium mb-2">Salary</h4>

        <div className='mb-4'>
            <Button onClickHandler={handleButtonChange} value="" title="Hourly"/>
            <Button onClickHandler={handleButtonChange} value="Monthly" title="Monthly"/>
            <Button onClickHandler={handleButtonChange} value="Yearly" title="Yearly"/>
        </div>

        <div>
            <label className="sidebar-label-container">
                <input type="radio" name="test" id="test" value="" onChange={handleRadioButtonChange} />
                <span className="checkmark"></span>All
            </label>

            <InputField handleRadioButtonChange={handleRadioButtonChange} value={30} title="< 30000k" name="test2"/>
            <InputField handleRadioButtonChange={handleRadioButtonChange} value={50} title="< 50000k" name="test2"/>
            <InputField handleRadioButtonChange={handleRadioButtonChange} value={80} title="< 80000k" name="test2"/>
            <InputField handleRadioButtonChange={handleRadioButtonChange} value={100} title="< 100000k" name="test2"/>

        </div>
    </div>
  )
}

export default Salary
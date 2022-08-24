import React from 'react'
import calculatorIcon from '../assets/icons/windows-calculator.png';

function Taskbar() {
  return (
    <div className='Taskbar'>
      <div className="Taskbar__icon">
        <img src={calculatorIcon} alt="calculator" />
        <span className='app__selector'></span>
      </div>
    </div>
  )
}

export default Taskbar;
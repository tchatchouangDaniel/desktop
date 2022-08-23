import React from 'react'
import reduce from '../assets/icons/reduce.png';
import close from '../assets/icons/close.png';
import scale from '../assets/icons/scale.png';
type ControlBarType = {
    className : string
}

function ControlBar(props : ControlBarType) {
  return (
    <div className={`ControlBar ${props.className}header`}>
        <img className='ControlBar__icon' src={close} />
        <img className='ControlBar__icon' src={scale} />
        <img className='ControlBar__icon' src={reduce} />
    </div>
  )
}

export default ControlBar
import React from 'react'
import ControlBar from '../../components/ControlBar';
import { numberKeys, operators, specialOperators } from '../../utils/calculatorKeysHelper';
import Draggable from 'react-draggable';

function Calculator() {
  const className : string = "Calculator";
  return (
    <Draggable
      defaultPosition={{x: -120, y: -200}}
      bounds={`parent`}
    >
      <div className={className}>
        <ControlBar className={className} />
        <div className={`${className}__content`}>
          <div className={`${className}__screen`}></div>
          <div className={`${className}__keyboard`}>
            <div className="keyboard__left">
              {specialOperators.map(({id,value})=><div className='keyboard__key firstLine' key={id}>
                {id.includes("icon") ? <img className='image__icon__key' src={value as string}/> : value}</div>)}
              {numberKeys.map(({id,value})=><div className='keyboard__key' key={id}>
                {id.includes("icon") ? <img className='image__icon__key' src={value as string}/> : value}</div>)}
            </div>
            <div className="keyboard__right">
              {operators.map(({id,value})=><div className='keyboard__key--spe' key={id}>{value}</div>)}
            </div>
          </div>
        </div> 
      </div>
    </Draggable>
  )
}

export default Calculator
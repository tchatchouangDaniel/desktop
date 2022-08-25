import React from 'react'

type KeyboardButtonType = {
    id : string,
    value : string | number,
    className : string,
    handleClick : (id : string, value : string|number)=>void
}

function KeyboardButton(props : KeyboardButtonType) {
  const {id, value, className, handleClick} = props;
  return (
    <div onClick={()=>handleClick(id,value)} className={`${className}`} key={id}>
        {id.includes("icon") ? <img className='image__icon__key' src={value as string}/> : value}
    </div>
  )
}

export default KeyboardButton
import React, {useState} from 'react'
import ControlBar from '../../components/ControlBar';
import { numberKeys, operators, specialOperators } from '../../utils/calculatorKeysHelper';
import Draggable from 'react-draggable';
//@ts-ignore
import JBC from "jsbi-calculator";
import KeyboardButton from '../../components/KeyboardButton';

const { calculator } = JBC;

// const expressionOne = "((10 * (24 / ((9 + 3) * (-2)))) + 17) + 5";
// const resultOne = calculator(expressionOne);
// console.log(resultOne);

function Calculator() {
  const [result, setResult] = useState<number>(0);
  const [input, setInput] = useState<string>("");
  const className : string = "Calculator";
  const handleChange = (event ?: React.ChangeEvent<HTMLInputElement>, value ?: string):void => {
    if(event)
      setInput(input + event.target.value);
    else if(value)
      setInput(value)
  }

  const handleButtonClick = (id : string, value : string|number) : void => {
    const val = value.toString()
    if(input.length === 0){
      if(val.match(/^[1-9]*$/)){
        handleChange(undefined, input + val);
      }
      if(val === "."){
        setInput("0.")
      }
    }else if(val === "AC"){
      setInput("");
      setResult(0);
    }else if(id.includes("backspace")){
      setInput(input.substring(0, input.length -1));
    }else if(id.includes("negate")){
      if(input[0] === "-"){
        let newInput = input;
        newInput = newInput.substring(2)
        newInput = newInput.substring(newInput.length-1,-1)
        setInput(newInput);
      }else{
        setInput(`-(${input})`)
      }
    }else{
      if(val === "0" && input.at(-2)?.match(/\+|\-|\/|x|%/g) && input.at(-1) === "0"){
        return;
      }else if(val === "." && input.includes(".")){
        return;
      }else if(input.at(-1)?.match(/\+|\-|\/|x|%/g) && val.match(/\+|\-|\/|x|%/g)){
        handleChange(undefined,(input.substring(0,input.length -1) + val));
      }else if(val.match(/^[0-9]*$/) || val.match(/\+|\-|\/|x|%/g) || val === "."){
        handleChange(undefined, input + val);
      }else if(val === "="){
      
        if(!input.at(-1)?.match(/\+|\-|\/|x|%/g) && input.at(-1) !== "."){
          const parsedInput = input.replaceAll("x","*")
          console.error(parsedInput)
          const result = calculator(parsedInput);
          setInput(result.toString())
          setResult(result);
          
        }
      }
      
    }
  }
  return (
    <Draggable
      defaultPosition={{x: -120, y: -200}}
      bounds={`parent`}
    >
      <div className={className}>
        <ControlBar className={className} />
        <div className={`${className}__content`}>
          <div className={`${className}__screen`}>
            <input className={`${className}__result`} value={result} placeholder='0' disabled/>
            <input className={`${className}__input`} value={input} disabled placeholder='0' />
          </div>
          <div className={`${className}__keyboard`}>
            <div className="keyboard__left">
              {specialOperators.map(({id,value})=><KeyboardButton handleClick={handleButtonClick} id={id} value={value} className='keyboard__key firstLine' key={id} />)}
              {numberKeys.map(({id,value})=><KeyboardButton handleClick={handleButtonClick} id={id} value={value} className='keyboard__key' key={id} />)}
            </div>
            <div className="keyboard__right">
              {operators.map(({id,value})=><KeyboardButton handleClick={handleButtonClick} id={id} value={value} className='keyboard__key--spe' key={id} />)}
            </div>
          </div>
        </div> 
      </div>
    </Draggable>
  )
}

export default Calculator
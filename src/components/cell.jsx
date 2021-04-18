import React, { useState } from 'react'
import {getRandomItem} from '../utils/utils'


export default function Cell(props) {

  
  //const [color, setColor] = useState(() => {return props.color})


  return (
    // <div className={color} onClick={() => setColor(prevColor => {
    //   console.log(props.color)
    //   return "Green"})}>
    // </div>
    <div className={props.color} onClick={() => { 
      props.changeColor(props.index)
      // console.log(props.index)
    }}>
      </div>
  )
}
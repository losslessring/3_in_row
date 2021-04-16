import React, { useState } from 'react'
import {getRandomItem} from '../utils/utils'


export default function Cell(props) {

  
  const [color, setColor] = useState(() => {return getRandomItem(props.colors)})


  return (
    <div className={color} onClick={() => setColor(prevColor => {
      return "Green"})}>
    </div>
  )
}
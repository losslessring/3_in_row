import React, { useState } from 'react'
import {getRandomItem} from '../utils/utils'


export default function Cell() {

  const colors = ["Red", "Green", "Blue"]

  const [color, setColor] = useState(() => {return getRandomItem(colors)})

  return (
    <div className={color} onClick={() => setColor(prevColor => "Green")}>
    </div>
  )
}
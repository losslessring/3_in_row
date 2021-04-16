import React, { Component } from 'react'

import Cell from './Cell'

import {getRandomItem} from '../utils/utils'


export default class Field extends Component {
  constructor(props) {
    super(props)
    
    this.changeColor = this.changeColor.bind(this)

    this.state = {
      //colors: ["Red", "Green", "Blue"],
      cells: this.generateField(this.props.x, this.props.y, this.props.colors),
      style: {
        display: 'grid',
        gridTemplateRows: `repeat(${this.props.x}, 100px)`,
        gridTemplateColumns: `repeat(${this.props.y}, 100px)`,
        justifyItems: 'center',
        border: '5px solid #a8b1bb',
        color: '#ffffff',
        backgroundColor: 'lightGrey',
        gap: '10px'
      }
    }
    console.log(this.state.cells)
  }

  changeColor() {
    console.log(this.state.cells)
  }

  generateField(rows, cols, colors) {
    let field = []
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        field.push({ x: i,
                     y: j,
                     color: this.getRandomItem(colors) 
                    })
      }
    }
    return field
  }
  
  getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  render() {
    return (
      <div  style={this.state.style}>
        {this.state.cells.map((component, index) => (
          <Cell key={index} colors={this.props.colors} changeColor={this.changeColor} />
        ))}
      </div>
    )
  }
}
 

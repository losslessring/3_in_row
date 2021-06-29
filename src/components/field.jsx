import React, { Component } from 'react'

import Cell from './Cell'

//import {getRandomItem} from '../utils/utils'
import {groupRepeats} from '../engine/calculate_phase/1_group_phase'
import {removeRow} from '../engine/calculate_phase/2_remove_phase'
import {pipe, forEach, map, flat, sort} from '../utils/func'

//import * as R from 'ramda'

export default class Field extends Component {
  constructor(props) {
    super(props)
    
    this.changeColor = this.changeColor.bind(this)

    this.state = {
      clicksCounter: 0,
      swapFirst: null,
      swapSecond: null,
      cells: this.generateField(this.props.x, this.props.y, this.props.colors),
      style: {
        display: 'grid',
        gridTemplateRows: `repeat(${this.props.x}, 100px)`,
        gridTemplateColumns: `repeat(${this.props.y}, 100px)`,
        justifyItems: 'center',
        border: '5px solid lightGrey',
        color: '#ffffff',
        backgroundColor: 'lightGrey',
        gap: '2px'
      }
    }
    console.log(this.state.cells)
  }
  
  // incrementClicksCounter(index) {
  //   this.setState({clicksCounter: this.state.clicksCounter + 1}, this.resetClicksCounter)
    
  // }

  resetClicksCounter() {
    //console.log(this.state.clicksCounter)
    if (this.state.clicksCounter > 1) {
      this.setState({clicksCounter: 0})
     }  
  }

  swapColors(){
    let tempArray = [...this.state.cells]
    let firstObj = {...tempArray[this.state.swapFirst.index], color: this.state.swapSecond.color }
    let secondObj = {...tempArray[this.state.swapSecond.index], color: this.state.swapFirst.color }
    // console.log(firstObj)
    // console.log(secondObj)
    tempArray[this.state.swapFirst.index] = firstObj
    tempArray[this.state.swapSecond.index] = secondObj
        
        
    this.setState({cells : tempArray}, () => {
      const newState = pipe(
      groupRepeats( (a, b) =>  a === b ? true : false)("y"),
      map(line => {
        //console.log(groupRepeats( (a, b) =>  a === b ? true : false)("color")(line))
        //console.log(removeRow(groupRepeats( (a, b) =>  a === b ? true : false)("color")(line)))
        return removeRow(groupRepeats( (a, b) =>  a === b ? true : false)("color")(line))  
      }),
      flat,
      sort((a, b) => a.index - b.index )
      )(this.state.cells)
      //console.log(newState.flat().sort((a, b) => a.index - b.index ))
      this.setState({cells: newState})
    })
  }


  changeColor(index) {
    
    this.setState({clicksCounter: this.state.clicksCounter + 1}, () => {
      this.resetClicksCounter()
      if (this.state.clicksCounter === 1){
        this.setState({swapFirst: this.state.cells[index]})
      }
      if (this.state.clicksCounter === 2){
        this.setState({swapSecond: this.state.cells[index]}, this.swapColors)
      }
  
    })
    


  }

  generateField(rows, cols, colors) {
    let field = []
    for (let i = 0, counter = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        
        field.push({ x: j,
                     y: i,
                     color: this.getRandomItem(colors),
                     index: counter  
                    })
        counter++
      }
    }
    return field
  }
  
  getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  render() {
    return (
      <div style={this.state.style}>
        {this.state.cells.map((component) => (
          <Cell key={component.index} index={component.index} color={component.color} changeColor={this.changeColor} />
        ))}
      </div>
    )
  }
}
 

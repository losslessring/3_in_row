import React, { Component } from 'react'

import Cell from './Cell'



export default class Field extends Component {
    state = {  }
    render() { 
        //return <h1>Hello</h1>
        return (
        <div className="Field">
            <Cell/>            
            <Cell/>
            <Cell/>
            <Cell/>
        </div>
        )
        
    }
}
 

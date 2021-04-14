export default class Field {
    constructor(rows = 10, cols = 10, colors = ['red', 'green', 'blue', 'orange', 'yellow']){
		this.rows = rows
        this.cols = cols
        this.colors = colors

        this.cells = [...new Array(cols)].map((column, columnIndex) =>{ return [...new Array(10)].map((row, rowIndex) => {return {x: rowIndex, y: columnIndex, color: colors[Math.floor(Math.random() * colors.length)]}})})
        console.log(this.cells)
        

    }
}

let field = new Field(10,10)
export const removeRow = row => {
    //console.log(row)
    const groupToEmpty = row.filter(cellGroup => cellGroup.length >= 3)
              .map(cellGroup => cellGroup.map(cell =>({...cell, color: "Empty"})))
              
    const unchanged = row.filter(cellGroup => cellGroup.length < 3)
    
    return [...groupToEmpty.flat(), ...unchanged.flat()]
}
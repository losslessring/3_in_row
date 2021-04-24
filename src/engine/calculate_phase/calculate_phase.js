export const groupRepeats = compare => prop => cells => {
  return cells.reduce((accum, current, index) => {
    if (index === 0) {
      accum.push([current])
      return accum
    }

    const lastInnerArrayElement = accum[accum.length - 1][accum[accum.length - 1].length - 1][prop]
    
    if (compare(lastInnerArrayElement, current[prop])){
      accum[accum.length - 1].push(current)
    } else {
      accum.push([current])
    }
    return accum
  }, [])
  
}

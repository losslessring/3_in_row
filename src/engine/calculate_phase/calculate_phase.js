export const countColorRepeats = cells => {
  const colors = cells.reduce((accum, current, index) => {
    if (index === 0) {
      accum.push([current.color])
      return accum
    }

    const lastInnerArrayElement = accum[accum.length - 1][accum[accum.length - 1].length - 1]

    if (lastInnerArrayElement === current.color) {
      accum[accum.length - 1].push(current.color)
    } else {
      accum.push([current.color])
    }
    return accum
  }, [])
  console.log(colors)
}

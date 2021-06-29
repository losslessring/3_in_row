
export const pipe = function(...fns) {
    return function piped(v) {
      for (let fn of fns) {
        v = fn(v)
      }
      return v
    }
  }
  
export const compose = function(...fns){
    return pipe(...fns.reverse())
  }
  
export const resolvePath = (object, path, defaultValue) => path
  .split(/[\.\[\]\'\"]/)
  .filter(p => p)
  .reduce((o, p) => o ? o[p] : defaultValue, object)

export const forEach = callback => array => {
  return array.forEach(element => {
      callback(element)
    })
  
}

export const map = callback => array => {
  return array.map(callback)
}

export const flat = array => {
  return array.flat()
}

export const sort = callback => array => {
  return array.sort(callback)
}
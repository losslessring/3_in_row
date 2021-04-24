
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
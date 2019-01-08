//  flattens objects inside array

export const flattenArr = (arr, key) => {
  return arr.map(m => {
    let objKey = Object.keys(m)
    return key ? m[key] : m[objKey]
  })
}
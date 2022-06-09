export const parseTmpl = (tmpl, obj) => {
  const keys = Object.keys(obj)
  const rightBrackets = '{{'
  const leftBrackets = '}}'
  let replace = ``
  let indexArr = []
  const bracketsLength = rightBrackets.length + leftBrackets.length
  for (let i = 0; i < keys.length; i++) {
    // console.log(key);
    // console.log(obj[key]);

    const elem = rightBrackets + keys[i] + leftBrackets
    const indexOfKey = tmpl.indexOf(elem)

    indexArr.push(indexOfKey)
    if (indexOfKey !== -1) {
      if (i === 0) {
        replace += tmpl.substring(0, indexArr[i]) + obj[keys[i]]
      } else if (i !== keys.length - 1) {
        replace +=
          tmpl.substring(
            indexArr[i - 1] + keys[i - 1].length + bracketsLength,
            indexArr[i]
          ) + obj[keys[i]]
      } else {
        replace +=
          tmpl.substring(
            indexArr[i - 1] + keys[i - 1].length + bracketsLength,
            indexArr[i]
          ) +
          obj[keys[i]] +
          tmpl.substring(indexArr[i] + keys[i].length + bracketsLength)
      }
    }
  }
  return replace
}

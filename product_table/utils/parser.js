let arrOfValues = []

const getValuesToReplace = (tml, startIndex = 0, endIndex = 0) => {
  const startValueReplacer = '{'
  const endValueReplacer = '}'
  if (
    tml.indexOf(startValueReplacer, startIndex) !== -1 ||
    tml.indexOf(endValueReplacer, endIndex) !== -1
  ) {
    arrOfValues.push({
      start: tml.indexOf(startValueReplacer, startIndex),
      end: tml.indexOf(endValueReplacer, endIndex),
      keyName: tml.slice(
        tml.indexOf(startValueReplacer, startIndex) + 1,
        tml.indexOf(endValueReplacer, endIndex)
      ),
    })

    return getValuesToReplace(
      tml,
      tml.indexOf(startValueReplacer, startIndex) + 1,
      tml.indexOf(endValueReplacer, endIndex) + 1
    )
  } else {
    return arrOfValues
  }
}

export const tplValuesReplacer = (values, tpl) => {
  const arrOfValues = getValuesToReplace(tpl)
  const arrTpl = tpl.split('')
  let keyLength = 0
  arrOfValues.forEach((item) => {
    const { start, end, keyName } = item
    arrTpl.splice(start - keyLength, end + 1 - start, values[keyName])
    keyLength += end - start
  })
  arrOfValues.length = 0
  return arrTpl.join('')
}

// console.log(tplValuesReplacer(values, tpl))

// console.log(getValuesToReplace(tpl))

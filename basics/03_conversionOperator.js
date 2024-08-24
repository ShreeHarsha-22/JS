let score = "48"
console.log(typeof (score))
console.log(typeof score)
let storeScore = Number(score)
console.log(typeof score)
console.log(typeof storeScore)
let tricky = "4813harsha"
console.log(typeof tricky)
let storeTricky = Number(tricky)
console.log(typeof storeTricky)
console.log(storeTricky)
// why NaN? -> Because 4813harsha is not a pure number it is a mix of numbers as well as a stream of characters
// Nan -> Not a number -> Special type
// There'll be cases like these which makes conversion tricky
let temp = null
console.log(typeof temp)
let storeTemp = Number(temp)
console.log(typeof storeTemp)
console.log(storeTemp)
// string when type converted to a number gives us null
// null when type converted to a number gives us 0
// boolean when type converted to a number gives us 0 for false and 1 for true
let answer = 1
console.log(typeof answer)
let booleanAnswer = Boolean(answer)
console.log(typeof booleanAnswer) 
let whitespaceString = "  123  ";
console.log(typeof whitespaceString); // "string"
// Convert the string with whitespace to a number
let storeWhitespaceString = Number(whitespaceString);
console.log(typeof storeWhitespaceString); // "number"
console.log(storeWhitespaceString); // 123

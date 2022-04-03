//CommonJS, every file is module (by default)
//Modules - encapsulated code (only share minimum)


//when you want to use your own module remeber to start with ./
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')

// console.log(data)

// sayHi('john')
// sayHi(names.susan)
// sayHi(names.peter)
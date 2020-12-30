```js

// From utils.js file
const printName = name => {
        console.log(name)
}

const add = (a, b) => {
        console.log(a + b)
}

module.exports = {
        printName,
        add
}

// From app.js file

//! Custom Modules
const { printName, add } = require('./utils');

printName('Henry)
add(9, 17)
```

```js
// Challenge

// From notes.js
module.exports = getNotes = () => {
	return "Your notes...";
};

// From app.js
const getNotes = require("./notes");

const message = getNotes();
console.log(message);
```

```js
//! NPM Modules
const validator = require("validator");

const getNotes = require("./notes");

const message = getNotes();
console.log(message);

// console.log(validator.isEmail('willis@gmail.com'))
console.log(validator.isURL("https://google.co"));
```

```js
//! NPM Modules
const validator = require('validator');
const chalk = require('chalk');

//! Custom Modules/Helper Vars
const getNotes = require('./notes')
//==============================
const error = chalk.bold.red.inverse
const success = chalk.bold.green.inverse
const log = console.log

// 
const message = getNotes()
console.log(message)

// console.log(validator.isEmail('willis@gmail.com'))
if (validator.isURL('https://google.co')) log(success("Valid url"))
else log(error("Please check URL"))

```

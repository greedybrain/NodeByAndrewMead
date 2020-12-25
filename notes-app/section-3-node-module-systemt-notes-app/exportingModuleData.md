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

``` js
// Challenge 

// From notes.js
module.exports = getNotes = () => {
        return 'Your notes...'
}

// From app.js
const getNotes = require('./notes')

const message = getNotes()
console.log(message)

```

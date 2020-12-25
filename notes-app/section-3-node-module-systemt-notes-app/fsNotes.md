//! Core Modules
 ``` js
const fs = require('fs');

const file = 'notes.txt'
const msgToBeAppended = ' this will be appended to the whatever is in the notes.txt file'

//! Write file, also OVERWRITES 
fs.writeFileSync('notes.txt', "and in additon we have THIS")

// ! Appends to exisiting file, doesn't OVERWRITE
fs.appendFileSync(file, msgToBeAppended)
```
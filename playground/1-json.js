const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json') // returns a buffer and not a string representation of the file content
const dataJSON = dataBuffer.toString() // converts the buffer to a readable string
const data = JSON.parse(dataJSON) // parses the returned json
data.name = 'Willis'
data.age = 29

const dataToJSON = JSON.stringify(data) // stringifies what was just parsed
fs.writeFileSync('1-json.json', dataToJSON) // overwrites or writes stringified data to file passed as first arg


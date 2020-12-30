```js
//! NPM Modules
const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

//! Custom Modules/Helper Vars
const getNotes = require("./notes");
const { require } = require("yargs");
//==============================
const error = chalk.bold.red.inverse;
const success = chalk.bold.green.inverse;
const log = console.log;

const command = process.argv[2];

log(process.argv);

if (command === "add") log("Adding note");
if (command === "remove") log("Removing note");
```

// added ============================================================

```js
// Customize yargs version
yargs.version('1.1.0')

// add, remove, read, list

//! Create add command
yargs.command({
        command: 'add',
        describe: 'Add a new note',
        handler: () => {
                log('Adding a new note')
        }
})

//! Create remove command
yargs.command({
        command: 'remove',
        describe: 'Remove a note',
        handler: () => {
                log('Removing note')
        }
})

//! Create read command 
yargs.command({
        command: 'read',
        describe: 'Reading a note',
        handler: () => {
                log('Reading a note')
        }
})

//! Create list command 
yargs.command({
        command: 'list',
        describe: 'Listing notes',
        handler: () => {
                log('Listing out all notes')
        }
})

log(yargs.argv)
```

// added ============================================================

```js
//! Create add command
yargs.command({
        command: 'add',
        describe: 'Add a new note',
        builder: {
                title: {
                        describe: 'Note title',
                        demandOption: true,
                        type: 'string'
                },
                body: { // added this 
                        describe: 'Note body',
                        demandOption: true, 
                        type: 'string'
                }
        },      
        handler: argv => {
                log(`Title: ${argv.title}`)
                log(`Body: ${argv.body}`)
        }
})
```
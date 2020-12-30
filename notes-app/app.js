//! NPM Modules
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs')

//! Custom Modules
const { getNotes, readNote, addNote, removeNote } = require('./notes');

// add, remove, read, list

//! Create add command
yargs.command({
        command: 'add',
        describe: 'Add a new note',
        builder: {
                title: {
                        type: 'string',
                        describe: 'Note title',
                        demandOption: true,
                },
                body: {
                        type: 'string',
                        describe: 'Note body',
                        demandOption: true, 
                }
        },      
        handler(argv) {
                addNote(argv.title, argv.body)
        }
})

//! Create remove command
yargs.command({
        command: 'remove',
        describe: 'Remove a note',
        builder: {
                title: {
                        type: 'string',
                        describe: 'Note title',
                        demandOption: true,
                },
        },
        handler(argv){
                removeNote(argv.title)
        }
})

//! Create read command 
yargs.command({
        command: 'read',
        describe: 'Reading a note',
        builder: {
                title: {
                        type: 'string',
                        describe: 'Note title',
                        demandOption: true,
                },
        },
        handler(argv) {
                readNote(argv.title)
        }
})

//! Create list command 
yargs.command({
        command: 'list',
        describe: 'Listing notes',
        handler() {
                getNotes()
        }
})

yargs.parse()

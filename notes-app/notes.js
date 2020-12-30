//! Core Modules
const fs = require('fs');

//! NPM Modules
const chalk = require('chalk');

//! Helper Vars
const error = chalk.bold.redBright.inverse
const success = chalk.bold.greenBright.inverse
const log = console.log

const getNotes = () => {
        const notes = loadNotes()
        if (notes.length === 0) return log(error("No notes available"))
        return notes.forEach(note => {
                log('Title: ', note.title)
                log('==========')
        })
}

const readNote = title => {
        const notes = loadNotes()
        const note = notes.find(n => n.title === title)
        if (!note) return log(error('No note is available with that title'))
        log(success(`Title of note is > ${note.title} and it's body reads > ${note.body}`))
}

const addNote = (title, body) => {
        const notes = loadNotes()
        const note = notes.find(n => n.title === title)

        if (note) return log(error('Note already exists'))
        notes.push({ title, body})
        saveNotes(notes)
        return log(success('Note successfully added'))
}

const removeNote = title => {
        const notes = loadNotes()
        const notesWithoutNote = notes.filter(n => n.title !== title)
        if (!notes.length > notesWithoutNote.length ) return log(error('No note with that title was found'))
        saveNotes(notesWithoutNote)
        return log(success("Successfully removed note"))
}

const loadNotes = () => {
        try {
                const dataBuffer = fs.readFileSync('notes.json')
                const dataJSON = dataBuffer.toString()
                const data = JSON.parse(dataJSON)
                return data
        } catch (error) {
                return []
        }
}

const saveNotes = notes => {
        const dataJSON = JSON.stringify(notes)
        fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
        getNotes,
        addNote,
        readNote,
        removeNote
}
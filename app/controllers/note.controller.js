const noteService = require('../service/note.service.js')

/* Call the create method of noteService object and return the result back*/
const create = (newNote, done) => {
  noteService.create(newNote, (err, result) => {
    if (err) {
      done(err)
    }
    done(null, newNote)
  })
}

/* Call the getAll method of noteService object and return the result back */
const findAll = (title, done) => {
  noteService.getAll(title, (err, result) => {
    if (err) {
      done(err)
    }
    done(null, result)
  })
}

/* Call the findById method of noteService object and return the result back */
const findOne = null

/* Call the updateById method of noteService object and return the result back */
const updateNote = null

/* Call the remove method of noteService object and return the result back */
const deleteNote = null

/* Call the removeAll method of noteService object and return the result back */
const deleteAll = null

module.exports = { create, findAll }

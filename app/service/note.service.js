const noteDAO = require('../dao/note.dao')

/* Create and Save a new Note by calling noteDAO create method.
   Depending on the return value, it should return the results or the error message*/
exports.create = (newNote, done) => {
  noteDAO.create(newNote, (err, result) => {
    if (err) {
      done(err)
    }
    done(null, result)
  })
}

/* Retrieve all notes by calling noteDAO getAll method.
    Depending on the return value, it should return the results or the error message*/
exports.getAll = (title, done) => {
  noteDAO.getAll(title, (err, result) => {
    if (err) {
      done(err)
    }
    done(null, result)
  })
}

/* Find a single Note by Id by calling noteDAO findById method.
   Depending on the return value, it should return the results or the error message*/
exports.findById = null

/* Update a Note identified by the id by calling noteDAO updateById method.
   Depending on the return value, it should return the results or the error message*/
exports.updateById = null

/* Delete a Note with the specified id by calling noteDAO remove method.
   Depending on the return value, it should return the results or the error message*/
exports.remove = null

/* Delete all Notes by calling noteDAO removeAll method.
   Depending on the return value, it should return the results or the error message*/
exports.removeAll = null

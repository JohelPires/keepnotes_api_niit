const express = require('express')
// const bodyParser = require("body-parser"); /* deprecated */
// const cors = require("cors");
require('dotenv').config()
const app = express()
app.use(express.json()) /* bodyParser.json() is deprecated */

const notesRouter = require('./app/routes/note.routes')
app.use('/api/note', notesRouter)

// var corsOptions = {
//   origin: "http://localhost:8081"
// };
// parse requests of content-type - application/json

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({ extended: true })
) /* bodyParser.urlencoded() is deprecated */

// app.use(cors(corsOptions));

// simple route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Node.js with MySQL integration application.',
  })
})

// require('./app/routes/category.routes.js')(app)
// require('./app/routes/note.routes.js')(app)
// require('./app/routes/reminder.routes.js')(app)

// set port, listen for requests
const PORT = process.env.PORT || 8079
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

// module.exports = server

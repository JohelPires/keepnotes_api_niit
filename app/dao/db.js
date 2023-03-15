const mysql = require('mysql')

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DATABASE,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
})

connection.connect((error) => {
  if (error) throw error
  console.log('Conectado ao banco de dados.')
})

module.exports = connection

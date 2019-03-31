const express = require('express')
const {
  db
} = require('./db')

const app = express()

app.set('view engine', 'hbs')


db.sync()
  .then(() => {
    app.listen(8877, () => {
      console.log('Started on http://localhost:8877')
    })
})
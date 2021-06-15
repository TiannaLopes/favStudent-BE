import { nextTick } from "process"

const express = require('express')
const app = express()
const port = 4000
const path = require('path')
const data = require('./student_records.json')
var cors = require('cors')

//middleware
app.use(cors())


  app.get('/', (req, res) => {
    res.json(data)
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// app.get('/', function(req, res) {
//  res.sendFile(path.join(__dirname, '/index.html'));
//  });
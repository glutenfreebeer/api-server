'use strict'

const express = require('express')
const app = express()
const config = require('./db');
const client = mongodb.MongoClient;

client.connect(config.DB, function (err, db) {
  if (err) {
    console.log('database is not connected')
  }
  else {
    console.log('connected!!')
  }
});


app.get('/', (req, res) => res.send('Hello world!'))

module.exports = app
'use strict';


const express = require('express');
const config = require('./db');
const mongodb = require('mongodb');
const beerDb = require('./data/beers.json').beers.items;


const client = mongodb.MongoClient;
const app = express();


client.connect(config.DB, function (err, db) {
    if (err) {
        console.log('database is not connected')
    } else {
        console.log('connected!!')
    }
});


app.get('/api/beers/', (req, res) => {
    if (req.query.q) {
        let newItems = []
        for (let beerItem of beerDb) {
            if (beerItem.beer.beer_name.toLowerCase().indexOf(req.query.q.toLowerCase()) > -1) {
                newItems.push(beerItem);
            }
        }
        res.json(newItems);
    } else {
        res.json(beerDb);
    }
});

app.get('/api/beers/:bid', (req, res) => {
    if (req.params.bid) {
        for (let beerItem of beerDb) {
            if (beerItem.beer.bid == req.params.bid) {
                res.json(beerItem);
            }
        }
    }
});

module.exports = app

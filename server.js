const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.get('/api/cars', (req, res) => {
    db('cars')
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'Error retrieving cars' })
        })
})

server.post('/api/cars', (req, res) => {
    db('cars')
        .insert(req.body)
        .then(car => {
            res.status(200).json(req.body)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Error posting car.' })
        })
})

module.exports = server;
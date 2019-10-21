const express = require('express');
const users = require('../models/users');

const app = express.Router();

app.get('/', (req, res) => res.send(users))
app.post('/', (req, res) => {
    users.push(req.query);
    res.send(users[users.length-1]);
})

app.get('/remove', (req, res) => res.send(users))
app.post('/remove', (req, res) => {
    users.splice(req.query);
    res.send(users[users.length-1]);
})

app.get('/changeName', (req, res) => res.send(users))
app.post('/changeName', (req, res) => {
    users.splice(req.query);
    users.push(req.query);
    res.send(users[users.length-1]);
})

app.get('/changeAge', (req, res) => res.send(users))
app.post('/changeAge', (req, res) => {
    users.splice(req.query);
    users.push(req.query);
    res.send(users[users.length-1]);
})

module.exports = app;
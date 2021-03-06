const express = require('express');
const path = require('path');
const userController = require('../Server/controllers/Users')
//const gameController = require('../controllers/Game')

const app = express();
const port = process.env.PORT || 3000;

    app
        .get('/port', (req, res)=> res.send("Using Port: "+port))
        .get('/sql',  (req, res)=> res.send(process.env.MYSQLCONNSTR_localdb))
        .use('/static', express.static(path.join(__dirname, '../NoFrame')))
        .use('/users', userController )
        .use('/users/remove', userController)
        .use('/users/changeAge', userController)
        .use('/users/changeName', userController)
//        .use('/game', gameController );

    app.listen(port, () => console.log(`Running on http://localhost:${port}`));
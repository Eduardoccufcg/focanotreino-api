'use strict'

require('dotenv-safe').config({path:'.env'});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const sequelize = require('../src/database/index');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// Carrega rotas
const indexRoutes = require('./routes/index');
const groupRoute = require('./routes/group-routes');

app.use('/', indexRoutes);
app.use('/groups', groupRoute)

// Carrega os modelos
const Group = require('./models/Group');

Group.init(sequelize);

sequelize.sync({force:true})


app.get('/', function(req, res) {
    res.send('Foca no treino');
  });
  
module.exports = app;

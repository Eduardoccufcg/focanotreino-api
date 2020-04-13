'use strict'

require('dotenv-safe').config({path:'.env'});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const sequelize = require('../src/database/index');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// Carrega rotas
const indexRoutes = require('./routes/index');
const groupRoute = require('./routes/group-routes');
const dayRoute = require('./routes/day-routes');
const exerciseRoute = require('./routes/exercise-routes');

// //Swagger
// const swaggerJsdoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');

// const swaggerOptions = {

//     swaggerDefinition:{

//        info:{
//            title:"Foca no treino",
//            description:"Api para gerenciamento do seu treino",
//            contact:{
//                name: "Eduardo Pereira"
//            },
//             servers:['http://localhost:3000']
//        },
//        tags:[
          
//        ]
//     },
//     apis:["./routes/*.js"]
// };
// const swaggerDocs = swaggerJsdoc(swaggerOptions);

// app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs));

app.use('/', indexRoutes);
app.use('/groups', groupRoute);
app.use('/days', dayRoute);
app.use('/exercises', exerciseRoute);

// Carrega os modelos
const Group = require('./models/Group');
const Exercise = require('./models/Exercise');
const Day = require('./models/Day');

Group.init(sequelize);
Exercise.init(sequelize);
Day.init(sequelize);

Day.associate(sequelize.models);
Group.associate(sequelize.models);

sequelize.sync({force:true});

module.exports = app;

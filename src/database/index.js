const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('focanotreino','root', process.env.BD_SENHA,{
    host: process.env.BD_URL,
    dialect:'mysql',
    port: process.env.BD_PORTA
});

sequelize.authenticate().then(function(){
    console.log('OK')
}).catch(function(erro){
    console.log('Falha:' + erro)
});
module.exports = sequelize;

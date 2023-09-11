const {Sequelize} = require ('sequelize')
const sequelize = new Sequelize('nodesequelize2','aluno_medio','@lunoSenai23.',{
    host:'local host',
    port:3306,
    dialect:'mysql'
})

module.exports = sequelize



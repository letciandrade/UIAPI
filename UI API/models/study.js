const {DataTypes }= require("sequelize")


const db = require('../db/conn')

const study = db.define('study',{
    tema: {
        type: DataTypes.STRING,
        allowNull:false  
    },
    descri:{
        type: DataTypes.STRING,
        require:true
    },
    data:{
        type: DataTypes.STRING,
        require:true
      
    },
    tempo:{
        type: DataTypes.STRING,
        require:true
    }
    })

module.exports = study
const Sequelize = require('sequelize');

const sequelize = require('../util/database');


const User = sequelize.define('expensetracker', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true

    },
    amount: Sequelize.STRING,

    description:Sequelize.STRING,

    
    
    catagory:{
        type: Sequelize.STRING,
    }, 

});

module.exports = User;
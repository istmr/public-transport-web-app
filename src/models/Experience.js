const Sequelize = require('sequelize');
const sequelize = require('../database');

//User model still in progress
//de facut validari pentru dimensiuni caractere, orase, etc, pentru viitor
//Nota: s-ar putea sa nu fie nevoie de prea multe verificari
//ex: dimensiune string -> poate fi verificat din form-urile din interfata...probabil
//ex: orase...

const Experience = sequelize.define("experience", {
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    start: {
        type: Sequelize.STRING
    },
    destination: {
        type: Sequelize.STRING
    },
    transport: {
        type: Sequelize.STRING,
        allowNull: false
    },
    startTime: {
        type: Sequelize.TIME
    },
    duration: {
        type: Sequelize.TIME
    },
    congestion: {
        type: Sequelize.STRING
    },
    observations: {
        type: Sequelize.STRING
    },
    satisfaction: {
        type: Sequelize.INTEGER
    }
});

module.exports = Experience;

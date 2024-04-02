const Datatypes = require('sequelize');
const con = require('../config/db.config');

const users = con.define('users', {
    user_id: {
        type: Datatypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Datatypes.STRING(),
        allowNull: false
    },
    email: {
        type: Datatypes.STRING(),
        isUnique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Datatypes.STRING(),
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: false
})

module.exports = users;
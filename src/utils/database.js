const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize({
    database: process.env.DB_NAME || 'coursesapi',
    username: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'loaclhost',
    port: process.env.DB_PORT || 5432,
    password: process.env.DB_PASSWORD || 'isaacaaron2405',
    dialect: 'postgres'
})

module.exports = db;
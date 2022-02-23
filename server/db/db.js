const Sequelize = require('sequelize')
/* Get access to project's enviroments varaiables. */
require('dotenv').config()

const dbName = process.env.DATABASE_URL
const db = new Sequelize(dbName, { logging: false })

module.exports = db

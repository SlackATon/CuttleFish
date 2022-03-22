const Sequelize = require('sequelize')
/* Get access to project's enviroments varaiables. */
require('dotenv').config()

const dbName = process.env.DATABASE_URL

const db = new Sequelize(dbName, 'postgres', '', {
	host: 'localhost',
	dialect: 'postgres',
	logging: false
})

module.exports = db

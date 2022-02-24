const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		validate: {
			notEmpty: false
		}
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		validate: {
			notEmpty: false,
			isEmail: true
		}
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: false
		}
	}
})

module.exports = User

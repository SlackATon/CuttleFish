const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
	username: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		validate: {
			notEmpty: true,
			is: /\w+||\w+\-/i
		}
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		validate: {
			notEmpty: true,
			isEmail: true
		}
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	role: {
		type: Sequelize.ENUM('user', 'admin'),
		allowNull: false,
		defaultValue: 'user',
		validate: {
			notEmpty: true
		}
	}
})

module.exports = User

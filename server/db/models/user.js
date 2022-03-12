const Sequelize = require('sequelize')
const db = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const SALT_ROUNDS = 10
const PASSPHRASE = process.env.AUTH

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
	},
	icon: {
		type: Sequelize.STRING,
		defaultValue: 'default.png'
	}
})

/* Takes the user's password and hashes it, before storing it in the database. */
User.addHook('beforeValidate', async user => {
	try {
		user.password = bcrypt.hashSync(user.password, SALT_ROUNDS)
	} catch (err) {
		console.error(err)
	}
})

/* Checks if an instance password matches their encrypted one in the database. */
User.prototype.decryptPassword = async function (password) {
	try {
		const compare = bcrypt.compareSync(password, this.password)

		if (compare) return true
		else return false
	} catch (err) {
		console.log(err)
	}
}

/*
	Decrypts the JWT into an object, return example:
	{ email: 'dean@email.com, password: $2b$10$/KTUxlFho.y2S6 }
	Else if password does not decrypt, return 'false'.
*/
User.decryptToken = function (token) {
	try {
		return jwt.verify(token, PASSPHRASE)
	} catch (err) {
		return false
	}
}

/*
	Encrypts an object to be store in local storage using JWT. Example:
	bnZhdmovT21uUWh2Q3VvMUVERjBVLldUbmlTN0d6Q2JDV1ZxOEhlSENRb
*/

User.encryptToken = function (obj) {
	try {
		return jwt.sign(obj, PASSPHRASE)
	} catch (err) {
		return false
	}
}

module.exports = User

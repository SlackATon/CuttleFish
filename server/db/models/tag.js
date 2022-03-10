const Sequelize = require('sequelize')
const db = require('../db')

const Tag = db.define('tag', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: false,
			isLowercase: true,
			notContains: '#'
		}
	}
})

Tag.addHook('beforeValidate', data => {
	let { name } = data

	if (name.includes(' ')) {
		name = name.replaceAll(' ', '-')
	}

	name = name.toLowerCase()

	data.name = name
})

module.exports = Tag

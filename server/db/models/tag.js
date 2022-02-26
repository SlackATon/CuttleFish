const Sequelize = require('sequelize')
const db = require('../db')

const Tag = db.define('tag', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
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

/* Class methonds. */
Tag.hasBookmarks = function () {
	const tags = this.findAll()
	const hasBookmarks = tags.filter(tag => tag.countBookmarks())
	return hasBookmarks
}

Tag.noBookmarks = function () {
	const tags = this.findAll()
	const hasBookmarks = tags.filter(async tag => (await tag.countBookmarks()) === 0)
	return hasBookmarks
}

module.exports = Tag

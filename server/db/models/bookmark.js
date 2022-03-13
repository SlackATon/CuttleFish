const Sequelize = require('sequelize')
const db = require('../db')

const Bookmark = db.define('bookmark', {
	title: Sequelize.STRING,
	description: Sequelize.TEXT,
	url: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: { notEmpty: false, isUrl: true }
	}
})

Bookmark.addHook('beforeValidate', data => {
	const { url } = data

	if (url.endsWith('/')) {
		data.url = url.slice(url, url.length - 1)
		return data
	}

	return data
})

module.exports = Bookmark

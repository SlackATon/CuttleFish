const Sequelize = require('sequelize')
const db = require('../db')

const Bookmark = db.define('bookmark', {
	title: Sequelize.STRING,
	description: Sequelize.STRING,
	url: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
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

/* Class methonds. */
Bookmark.tagged = function () {
	const bookmarks = this.findAll()
	const tagged = bookmarks.filter(bookmark => bookmark.countTags())
	return tagged
}

Bookmark.untagged = function () {
	const bookmarks = this.findAll()
	const untagged = bookmarks.filter(bookmark => !bookmark.countTags())
	return untagged
}

module.exports = Bookmark

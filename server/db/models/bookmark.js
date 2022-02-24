const Sequelize = require('sequelize')
const db = require('../db')

const Bookmark = db.define('bookmark', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		validate: {
			notEmpty: false,
			isUrl: true
		}
	}
})

module.exports = Bookmark

/* Database connection. */
const db = require('./db')

/* Models from './models' folder. */
const Tag = require('./models/tag')
const Bookmark = require('./models/bookmark')

/* Create model relations. */
Tag.belongsToMany(Bookmark, { through: 'bookmark_tag' })
Bookmark.belongsToMany(Tag, { through: 'bookmark_tag' })

/* Include your models in exports. */
module.exports = {
	db,
	Tag,
	Bookmark
}

/* Database connection. */
const db = require('./db')

/* Models from './models' folder. */
const Tag = require('./models/tag')
const User = require('./models/user')
const Bookmark = require('./models/bookmark')

/* Create model relations. */

/*
	A Tag can be assigned to many Bookmarks.
	A Tag is unique and shared across User's Bookmarks.
*/
Tag.belongsToMany(Bookmark, { through: 'bookmark_tag' })
Bookmark.belongsToMany(Tag, { through: 'bookmark_tag' })

/*
	A Bookmark can only belong to one User.
	A User can make many Bookmark.
*/
User.belongsToMany(Bookmark, { through: 'user_bookmark' })
Bookmark.belongsToMany(User, { through: 'user_bookmark' })

/* Include your models in exports. */
module.exports = {
	db,
	Tag,
	User,
	Bookmark
}

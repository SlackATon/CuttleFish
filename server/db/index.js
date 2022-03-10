/* Database connection. */
const db = require('./db')

/* Models from './models' folder. */
const Tag = require('./models/tag')
const User = require('./models/user')
const Bookmark = require('./models/bookmark')

/* Create model relations. */
Tag.belongsToMany(Bookmark, { through: 'bookmark_tag' })
Bookmark.belongsToMany(Tag, { through: 'bookmark_tag' })

Tag.belongsTo(User)
User.hasMany(Tag)

User.hasMany(Bookmark)
Bookmark.belongsTo(User)

/* Include your models in exports. */
module.exports = {
	db,
	Tag,
	User,
	Bookmark
}

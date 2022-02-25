/* Require database and your models */
const Sequelize = require('sequelize')
const { db, Bookmark, Tag } = require('./server/db/')

const seed = async () => {
	try {
		await db.sync({ force: true })

		const BOOKMARK_1 = await Bookmark.create({ name: 'https://sequelize.org' })
		const BOOKMARK_2 = await Bookmark.create({ name: 'https://react-redux.js.org' })

		const TAG_1 = await Tag.create({ name: 'documentation' })
		const TAG_2 = await Tag.create({ name: 'sequelize website' })
		const TAG_3 = await Tag.create({ name: 'react-redux website' })

		/*                            RELATIONS                              */

		await BOOKMARK_1.addTags([TAG_1, TAG_2])
		await BOOKMARK_2.addTags([TAG_1, TAG_3])
	} catch (err) {
		console.error(err)
	}
}

seed()

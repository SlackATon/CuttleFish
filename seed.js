/* Require database and your models */
const Sequelize = require('sequelize')
const { db, Bookmark, Tag } = require('./server/db/')

const seed = async () => {
	try {
		await db.sync({ force: true })

		const BOOKMARK_1 = await Bookmark.create({
			title: 'Sequelize',
			url: 'https://sequelize.org/',
			description:
				'Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.'
		})
		const BOOKMARK_2 = await Bookmark.create({
			title: 'React-Redux',
			url: 'https://react-redux.js.org/',
			description: 'Official React bindings for Redux'
		})
		const BOOKMARK_3 = await Bookmark.create({
			title: 'YouTube',
			url: 'https://www.youtube.com/'
		})
		const BOOKMARK_4 = await Bookmark.create({
			url: 'https://www.fullstackacademy.com/',
			description:
				'Take the first step toward a thriving career in tech with Fullstack Academy.'
		})

		const TAG_1 = await Tag.create({ name: 'documentation' })
		const TAG_2 = await Tag.create({ name: 'sequelize website' })
		const TAG_3 = await Tag.create({ name: 'react-redux website' })
		const TAG_4 = await Tag.create({ name: 'grammly' })

		/*                            RELATIONS                              */

		await BOOKMARK_1.addTags([TAG_1, TAG_2])
		await BOOKMARK_2.addTags([TAG_1, TAG_3])
	} catch (err) {
		console.error(err)
	}
}

seed()

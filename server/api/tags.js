const router = require('express').Router()

const { Bookmark, Tag } = require('../db/index')

/* Find all bookmarks. */
router.get('/', async (req, res, next) => {
	try {
		const tags = await Tag.findAll({ include: Bookmark })
		res.json(tags)
	} catch (err) {
		next(err)
	}
})

/* Add a bookmark. */
router.post('/', async (req, res, next) => {
	try {
		const getTag = await Tag.findOne({ where: { name: req.body.name } })

		if (getTag) {
			return res.sendStatus(406)
		} else {
			await Tag.create({ name: req.body.name })
			return res.sendStatus(200)
		}
	} catch (err) {
		next(err)
	}
})

/* Find all bookmarks with tags. */

/* Find all bookmarks without tags. */

/* Find by bookmarkId. */

/* Update a bookmark. */

/* Delete a bookmark. */

module.exports = router

const router = require('express').Router()

const { Bookmark, Tag } = require('../db/index')

/* Find all tags. */
router.get('/', async (req, res, next) => {
	try {
		const tags = await Tag.findAll({ include: Bookmark })
		res.json(tags)
	} catch (err) {
		next(err)
	}
})

/* Add a tag. */
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

/* Find all tags with bookmarks. */
router.get('/hasBookmarks', async (req, res, next) => {
	try {
		const tags = await Tag.hasBookmarks()
		res.json(tags)
	} catch (err) {
		next(err)
	}
})

/* Find all tags without bookmarks. */
router.get('/nobookmarks', async (req, res, next) => {
	try {
		const tags = await Tag.noBookmarks()
		res.json(tags)
	} catch (err) {
		next(err)
	}
})

/* Find by tagId. */
router.get('/:tagId', async (req, res, next) => {
	try {
		const getTag = await Tag.findByPk(req.params.tagId, {
			include: Bookmark
		})

		if (getTag) return res.send(getTag)
		else res.sendStatus(404)
	} catch (err) {
		next(err)
	}
})

/* Update a tag. */
router.put('/:tagId', async (req, res, next) => {
	try {
		const tag = await Tag.findByPk(req.params.tagId)

		if (tag) {
			await tag.update({ name: req.body.name })
			res.sendStatus(200)
		} else {
			res.sendStatus(404)
		}
	} catch (err) {
		next(err)
	}
})

/* Delete a bookmark. */
router.delete('/:tagId', async (req, res, next) => {
	try {
		const tag = await Tag.findByPk(req.params.tagId)

		if (tag) {
			Tag.destroy({ where: { id: tag.id } })
			res.sendStatus(200)
		} else {
			res.sendStatus(404)
		}
	} catch (err) {
		next(err)
	}
})

module.exports = router

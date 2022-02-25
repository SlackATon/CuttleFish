const router = require('express').Router()

const { Bookmark, Tag } = require('../db/index')

/* Get all bookmarks. */
router.get('/', async (req, res, next) => {
	try {
		const bookmarks = await Bookmark.findAll({ include: Tag })
		res.json(bookmarks)
	} catch (err) {
		next(err)
	}
})

/* Add a bookmark. */
router.post('/', async (req, res, next) => {
	try {
		const getBookmark = await Bookmark.findOne({ where: { name: req.body.name } })

		if (getBookmark) {
			return res.sendStatus(406)
		} else {
			const bookmark = await Bookmark.create({ name: req.body.name })
			return res.sendStatus(201)
		}
	} catch (err) {
		next(err)
	}
})

router.get('/:bookmarkId', async (req, res, next) => {
	try {
		const getBookmark = await Bookmark.findByPk(req.params.bookmarkId, {
			include: Tag
		})

		if (getBookmark) {
			return res.send(getBookmark)
		} else {
			res.sendStatus(404)
		}
	} catch (err) {
		next(err)
	}
})

module.exports = router

const router = require('express').Router()
const axios = require('axios')
const cheerio = require('cheerio')

const { Bookmark, Tag } = require('../db/index')

/* Find all bookmarks. */
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
		let url = req.body.url

		if (url.endsWith('/')) {
			url = url.slice(url, url.length - 1)
		}

		const bookmark = await Bookmark.findOne({ where: { url } })

		if (bookmark) {
			return res.sendStatus(406) /* Bookmark already in database. */
		} else {
			const { data } = await axios.get(req.body.url)
			const $ = cheerio.load(data)
			let title = $('title').html()
			let description = $("meta[name='description']").attr('content')

			await Bookmark.create({
				url: url,
				title: title || '',
				description: description || ''
			})
			return res.sendStatus(201)
		}
	} catch (err) {
		next(err)
	}
})

/* Find all bookmarks with tags. */
router.get('/tagged', async (req, res, next) => {
	try {
		const bookmarks = await Bookmark.tagged()
		res.json(bookmarks)
	} catch (err) {
		next(err)
	}
})

/* Find all bookmarks without tags. */
router.get('/untagged', async (req, res, next) => {
	try {
		const bookmarks = await Bookmark.untagged()
		res.json(bookmarks)
	} catch (err) {
		next(err)
	}
})

/* Add tag to bookmark. */
router.get('/addtag', async (req, res, next) => {
	try {
		const bookmark = await Bookmark.findByPk(req.body.bookmarkId)
		const tag = await Tag.findByPk(req.body.tagId)

		if (bookmark && tag) {
			bookmark.addTag(req.body.tagId)
			res.sendStatus(200)
		} else {
			res.sendStatus(404) /* Bookmark or tag does not exist. */
		}
	} catch (err) {
		next(err)
	}
})

/* Remove tag from bookmark. */
router.get('/removetag', async (req, res, next) => {
	try {
		const bookmark = await Bookmark.findByPk(req.body.bookmarkId)
		const tag = await Tag.findByPk(req.body.tagId)

		if (bookmark && tag) {
			bookmark.removeTag(req.body.tagId)
			res.sendStatus(200)
		} else {
			res.sendStatus(404) /* Bookmark or tag does not exist. */
		}
	} catch (err) {
		next(err)
	}
})

/* Find by bookmarkId. */
router.get('/:bookmarkId', async (req, res, next) => {
	try {
		const getBookmark = await Bookmark.findByPk(req.params.bookmarkId, {
			include: Tag
		})

		if (getBookmark) return res.send(getBookmark)
		else res.sendStatus(404) /* Bookmark does not exist. */
	} catch (err) {
		next(err)
	}
})

/* Update a bookmark. */
router.put('/:bookmarkId', async (req, res, next) => {
	try {
		const data = {
			title: req.body.title,
			description: req.body.description,
			url: req.body.url
		}

		const bookmark = await Bookmark.findByPk(req.params.bookmarkId)

		if (bookmark) {
			await bookmark.update({ ...data })
			res.sendStatus(200)
		} else {
			res.sendStatus(404)
		}
	} catch (err) {
		next(err)
	}
})

/* Delete a bookmark. */
router.delete('/:bookmarkId', async (req, res, next) => {
	try {
		const bookmark = await Bookmark.findByPk(req.params.bookmarkId)

		if (bookmark) {
			Bookmark.destroy({ where: { id: bookmark.id } })
			res.sendStatus(200)
		} else {
			res.sendStatus(404) /* Bookmark does not exist. */
		}
	} catch (err) {
		next(err)
	}
})

module.exports = router

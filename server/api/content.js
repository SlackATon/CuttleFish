const router = require('express').Router()
const axios = require('axios')
const cheerio = require('cheerio')

const { User, Bookmark, Tag } = require('../db/index')

/* Find all the users including their bookmarks, bookmark tags, and user tags. */
router.get('/', async (req, res, next) => {
	try {
		const userBookmarks = await User.findAll({
			include: [
				{
					model: Bookmark,
					include: {
						model: Tag
					}
				},
				Tag
			]
		})

		if (userBookmarks) res.json(userBookmarks)
		else res.sendStatus(404)
	} catch (err) {
		next(err)
	}
})

/* Find a users bookmarks. */
router.get('/user/bookmarks', async (req, res, next) => {
	try {
		const token = req.headers.authorization

		if (token) {
			const decrypted = await User.decryptToken(token)

			if (decrypted) {
				const userBookmarks = await User.findOne({
					where: { email: decrypted.email },
					include: [
						{
							model: Bookmark,
							include: {
								model: Tag
							}
						},
						Tag
					],
					attributes: []
				})

				return res.json(userBookmarks)
			}
		}

		res.sendStatus(404)
	} catch (err) {
		next(err)
	}
})

/* Find a users tags. */
router.get('/user/tags', async (req, res, next) => {
	try {
		const token = req.headers.authorization

		if (token) {
			const decrypted = await User.decryptToken(token)

			if (decrypted) {
				const userBookmarks = await User.findOne({
					where: { email: decrypted.email },
					include: { model: Tag, include: { model: Bookmark } },
					attributes: []
				})

				return res.json(userBookmarks)
			}
		}

		res.sendStatus(404)
	} catch (err) {
		next(err)
	}
})

/* Add a bookmark */
router.post('/addbookmark', async (req, res, next) => {
	try {
		const token = req.headers.authorization
		let url = req.body.url

		/* If the token exist in local storage. */
		if (token) {
			const decrypted = await User.decryptToken(token)

			/*
				If the decrypted token matches the on in the database.
			*/
			if (decrypted) {
				const user = await User.findOne({ where: { email: decrypted.email } })
				url.endsWith('/') ? (url = url.slice(url, url.length - 1)) : null

				/* Make a request to the URL and stores it 'data' for 'cherrio' to use. */
				const { data } = await axios.get(req.body.url)

				/* If 'data' has a value. */
				if (data) {
					/* 'cheerio' does its thing. */
					const $ = cheerio.load(data)
					const title = $('title').html()
					const description = $("meta[name='description']").attr('content')

					await user.createBookmark({
						url: url,
						title: title || '',
						description: description || ''
					})

					return res.sendStatus(201)
				}
			}
		}

		res.sendStatus(404)
	} catch (err) {
		next(err)
	}
})

module.exports = router

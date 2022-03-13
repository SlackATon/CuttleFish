const router = require('express').Router()

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

module.exports = router

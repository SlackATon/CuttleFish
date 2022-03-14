const router = require('express').Router()

const { User } = require('../db/index')

/* Find a users username and icon. */
/* /api/user */
router.get('/', async (req, res, next) => {
	try {
		const token = req.headers.authorization

		/* If the headers include 'authorization' */
		if (token) {
			const match = await User.decryptToken(token)

			/* If the decrypted token matches a user in the database. */
			if (match) {
				const user = await User.findOne({
					where: { email: match.email },
					attributes: ['username', 'icon', 'theme']
				})

				return res.send(user)
			}
		}

		return res.sendStatus(404)
	} catch (err) {
		next(err)
	}
})

/* Route so users can change their theme */
/* /api/user/theme */
router.post('/theme', async (req, res, next) => {
	try {
		const token = req.headers.authorization
		const theme = req.body.theme

		/* If the headers include 'authorization' */
		if (token) {
			const match = await User.decryptToken(token)

			/* If the decrypted token matches a user in the database. */
			if (match) {
				const user = await User.findOne({
					where: { email: match.email }
				})

				if (user) {
					await user.update({ theme: theme })

					res.json(user.theme)
				}
			}
		}

		return res.sendStatus(404)
	} catch (err) {
		next(err)
	}
})

module.exports = router

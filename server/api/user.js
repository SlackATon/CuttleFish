const router = require('express').Router()

const { User } = require('../db/index')

/* Find a users username and icon. */
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
					attributes: ['username', 'icon']
				})

				return res.send(user)
			}
		}

		return res.sendStatus(404)
	} catch (err) {
		next(err)
	}
})

module.exports = router

const router = require('express').Router()
const { User } = require('../db/index')

router.post('/manualsignin', async (req, res, next) => {
	try {
		const { email, password } = req.body

		/* If the request did not have a 'email' or 'password'. */
		if (!email || !password) {
			return res.send({ alert: 'Someting Went Wrong' })
		}

		/*
			Checks if that email exist before continuning.
			And Grabs the object.
		*/
		const user = await User.findOne({ where: { email: email } })

		if (user) {
			/* Checks if the password is correct. */
			const pwd = await user.decryptPassword(password)

			if (pwd) {
				/* Sends a token to be stored in local storage for auto signin. */
				const token = await User.encryptToken({ email, password })
				return res.send({ token })
			}

			return res.send({ alert: 'Password Or Email Does Not Match' })
		}

		res.send({ alert: 'User Does Not Exist' })
	} catch (err) {
		next(err)
	}
})

module.exports = router

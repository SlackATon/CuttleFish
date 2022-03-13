const router = require('express').Router()
const { user } = require('pg/lib/defaults')
const { User } = require('../db/index')

/* Route for users to manually signin. */
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

/* Route for users to manually signup. */
router.post('/signup', async (req, res, next) => {
	try {
		const { email, password, username, role } = req.body

		/* If the request did not have a 'email', 'password', or 'username'. */
		if (!email || !password || !username) {
			return res.send({ alert: 'Someting Went Wrong' })
		}

		/* Checks if that email and username exist before continuning. */
		const hasEmail = await User.findOne({ where: { email: email } })
		const hasUsername = await User.findOne({ where: { username: username } })

		if (hasEmail) {
			return res.send({ alert: 'Email Already Exist' })
		} else if (hasUsername) {
			return res.send({ alert: 'That Username Is Taken' })
		}

		const user = await User.create({
			username: username,
			email: email,
			password: password,
			role: role
		})

		const token = await User.encryptToken({
			email: user.email,
			password: user.password
		})
		return res.send({ token })
	} catch (err) {
		next(err)
	}
})

/* Route for users to automatically signin. */
router.get('/autosignin', async (req, res, next) => {
	try {
		const token = req.headers.authorization

		/* If the headers include 'authorization' */
		if (token) {
			const match = await User.decryptToken(token)

			/* If the decrypted token matches a user in the database. */
			if (match) {
				return res.send(true)
			}
		}

		res.send(false)
	} catch (err) {
		next(err)
	}
})

module.exports = router

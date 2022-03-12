const router = require('express').Router()

/* Link all your APIs to this file for one export. */
router.use('/content', require('./content'))
router.use('/auth', require('./auth'))

router.use(function (req, res, next) {
	const err = new Error('api not found')
	err.status = 404
	next(err)
})

module.exports = router

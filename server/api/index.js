const router = require('express').Router()

/* Link all your APIs to this file for one export. */
router.use('/bookmarks', require('./bookmarks'))
router.use('/tags', require('./tags'))

router.use(function (req, res, next) {
	const err = new Error('api not found')
	err.status = 404
	next(err)
})

module.exports = router

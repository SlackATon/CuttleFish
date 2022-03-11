/* Built-in node variable. */
const path = require('path')

/* Get access to project's enviroments varaiables. */
require('dotenv').config()

const express = require('express')
/* For middleware. */
const morgan = require('morgan')
/* New instance of Express. */
const app = express()

const port = process.env.PORT || 3000

/* Logging middleware. */
app.use(morgan('dev'))

/* Body parsing middleware. */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* Static file-serving middleware. */
app.use(express.static(path.join(__dirname, '..', 'public')))

/* Routes that will be accessed via AJAX. */
app.use('/api', require('./api'))

/*
    This middleware will catch any URLs resembling a file extension.
    Example: '.js', '.html', '.css'
    This allows for proper 404s instead of the wildcard
*/
app.use((req, res, next) => {
	if (path.extname(req.path).length > 0) {
		res.status(404).end()
	} else {
		next()
	}
})

/* Sends our index.html (the 'single page' of our SPA). */
app.get('*', (req, res, next) => {
	res.sendFile(path.join(__dirname, '..', 'index.html'))
})

/* Error catching endware. If error got it this far. */
app.use((err, req, res, next) => {
	console.error(err, typeof next)
	console.error(err.stack)
	res.status(err.status || 500).send(err.message || 'Internal server error.')
})

/* Start server. */
app.listen(port, () => console.log(`http://localhost:${port}`))

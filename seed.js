/* Require database and your models */
const { db } = require('./server/db')

const seed = async () => {
	try {
		await db.sync({ force: true })
	} catch (err) {
		console.error(err)
	}
}

seed()

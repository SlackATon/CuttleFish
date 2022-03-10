/* Require database and your models */
const { db, User, Bookmark, Tag } = require('./server/db/index')

const seed = async () => {
	try {
		await db.sync({ force: true })

		const DEAN = await User.create({
			username: 'DeanWantsPie',
			email: 'dean@spn.com',
			password: 'ilikepie',
			role: 'admin'
		})

		const DEAN_BOOKMARK_1 = await DEAN.createBookmark({
			title: 'Dean Bookmark',
			url: 'https://pie.com/',
			description: 'Dean should only have this bookmark. Tagged as "pi-site"'
		})

		const DEAN_TAG_1 = await Tag.create({ name: 'pi-site', userId: 1 })

		await DEAN_BOOKMARK_1.addTag(DEAN_TAG_1)

		const DEAN_BOOKMARK_2 = await DEAN.createBookmark({
			title: 'Dean & Castiel Bookmark',
			url: 'https://both.com/',
			description:
				'Dean & Castiel should have this bookmark. Dean should have a tag as "dean-only" and castiel should not have a tag.'
		})

		const DEAN_TAG_2 = await Tag.create({ name: 'dean-only', userId: 1 })

		DEAN_BOOKMARK_2.addTag(DEAN_TAG_2)

		const CASTIEL = await User.create({
			username: 'castiel',
			email: 'castiel@spn.com',
			password: 'ilikedean'
		})

		const CASTIEL_BOOKMARK_1 = await CASTIEL.createBookmark({
			title: 'Dean & Castiel Bookmark',
			url: 'https://both.com/',
			description:
				'Dean & Castiel should have this bookmark. Dean should have a tag as "dean-only" and castiel should not have a tag.'
		})

		const CASTIEL_BOOKMARK_2 = await CASTIEL.createBookmark({
			title: 'Castiel Bookmark',
			url: 'https://www.home.com/',
			description:
				'Castiel should only have this bookmark He has it tagged as "website", and "home-site"'
		})

		const CASTIEL_TAG_1 = await Tag.create({ name: 'website', userId: 2 })
		const CASTIEL_TAG_2 = await Tag.create({ name: 'home-site', userId: 2 })

		await CASTIEL_BOOKMARK_2.addTag(CASTIEL_TAG_1)
		await CASTIEL_BOOKMARK_2.addTag(CASTIEL_TAG_2)
	} catch (err) {
		console.error(err)
	}
}

seed()

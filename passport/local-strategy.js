const LocalStategy = require('passport-local').Strategy
const { pool } = require('../modules/mysql-init')

const cb = () => {
	
}
const localStategy = new LocalStategy({}, cb)

module.exports = (passport) => passport.use(localStategy)

const local = require('./local-strategy')
const { findUser } = require('../models/auth')

const serialize = (user, done) => {
	done(null, user.idx)
}

const deserialize = async (idx, done) => {
	try {
		const { sucess, user } = await findUser('idx', idx)
		if(sucess) done(null, user)
		else done(null, false, '사용자 정보가 없습니다.')
	}
	catch(err) {
		done(err)
	}
}




module.exports = passport => {
	passport.serializeUser(serialize)
	passport.deserializeUser(deserialize)
	local(passport)
	// kakao(passport)
	// naver(passport)
}
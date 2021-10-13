const express = require('express')
const router = express.Router()
const { updateKey } = require('../../../models/auth')
const { isUser } = require('../../../middlewares/auth-mw')

router.get('/:idx', isUser, async (req, res, next) => {
	try {
		if(req.user.idx) {
			let { ERROR } = req.app.locals
			let { success, apikey } = await updateKey(req.params.idx)
			if(success) res.status(200).json({ code: 200, apikey })
			else res.status(500).json(ERROR.SQL_ERROR)
		}
		else res.status(401).json(ERROR.AUTH_ERROR)
	}
	catch(err) {
		res.status(500).json(err)
	}
})

module.exports = router
const jwt = require("jsonwebtoken")

const auth = (req,res,next) => {
	const token = req.headers.authorization
	if (token) {
		jwt.verify(token, "masai", (err,decoded) => {
			if (decoded) {
				next()
			}
		})
	} else {
		res.json({msg:"You are not Authorised"})
	}
}

module.exports = {
	auth
}
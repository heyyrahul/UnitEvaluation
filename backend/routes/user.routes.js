const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { UserModel } = require("../model/user.model")

const userRouter = express.Router()


userRouter.post("/register", (req,res) => {
	const { username, email, pass } = req.body
	try {
		bcrypt.hash(pass, 5, async(err, hash) => {
			if (err) {
				res.status(200).json({err})
			} else {
				const user = new UserModel({
					username,
					email,
					pass: hash
				})
				await user.save()
				res.status(200).json({msg:"The new user has been registered!"})
			}
		})
	} catch(err) {
		res.status(400).json({err})
	}
})

userRouter.post("/login", async(req,res) => {
	const { email, pass } = req.body
	try {
		const user = await UserModel.findOne({email})
		if (user) {
			bcrypt.compare(pass, user.pass, (err, result) => {
				if (result) {
					const token = jwt.sign({course:"nem104"},"masai",{expiresIn:30})
					res.status(200).json({msg:"Login Successful!",token})
				} else {
					res.status(200).json({msg: "Password does not match"})
				}
			})
		} else {
			res.status(200).json({msg: "Wrong Credentials"})
		}
	} catch(err) {
		res.status(400).json({err})
	}
})

module.exports = {
	userRouter  
}
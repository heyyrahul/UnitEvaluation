const express = require("express")
const { connection } = require("./config/db")
const { userRouter } = require("./routes/user.routes")
const { auth } = require('./middleware/auth.middleware')
const cors = require('cors');
const socketIo = require('socket.io')
const http=require('http')
const app = express()
const server = http.createServer(app);
const io = socketIo(server);

app.set('io', io);
app.use(express.json())


app.use("/users", userRouter);


app.use("/stream/videos", auth, (req, res) => {
	res.send({msg:"You are in the private route"})
})

app.listen(process.env.port, async() => {
	try {
		await connection
		console.log("connected to the DB")
		console.log(`Server is running at port ${process.env.port}`)
	} catch (err) {
		console.log(err)
	}
})
const express = require('express');
const chatrouter = express.Router();
const { chatModel } = require('../model/chat.model');
const {auth}=require('../middleware/auth.middleware')
chatrouter.get('/', auth, async(req, res) => {
    try {
        const { message } = req.body;
        const newMessage = new chatModel({
            user: req.user.id,
            message
        })
        await newMessage.save();

        req.app.get('io').emit('newChat', newMessage);
        res.status(200).json({ message: newMessage });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "server error" })
    }
})

module.exports = {
    chatrouter
}
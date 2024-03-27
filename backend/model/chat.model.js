const mongoose = require('mongoose');
const chatSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});
const chatModel=mongoose.model('chat',chatSchema)
module.exports = {
    chatModel
}
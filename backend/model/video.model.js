const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    videurl:{type:String}
});
module.exports = mongoose.model('video', videoSchema);
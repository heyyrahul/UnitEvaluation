const express = require('express');
const videoRouter = express.Router();


videoRouter.post('/upload', async(req, res) => {
    try {
        const { title, description, videourl } = req.body;
        const video = new Video({ title, description, videourl });
        await video.save();
        res.status(200).json({video})
    } catch (err) {
        console.log(err);
        res.status(500).json({msg:"Server Error"})
    }
})

module.exports = {
    videoRouter
}

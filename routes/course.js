const express = require('express')
const chapter = express.Router()
const chapterJsonData = require('../JSON_DATA_CUSTOMIZING/chapter_data.json')
const bmeJsonData = require('../JSON_DATA_CUSTOMIZING/bme_data.json')

chapter.get('/', async (req, res) => {
    try {
        await res.render('index.ejs', {
            bmeJsonData: bmeJsonData,
            chapterJsonData: chapterJsonData
        })
    } catch (error) {
        console.log(error);
    }

})
chapter.get('/:chapterName/:topicId', (req, res) => {
    try {
        let chapter = bmeJsonData.find(chapter => chapter.chapter == req.params.chapterName)
        let topic = bmeJsonData.find(topic => topic.id == req.params.topicId)
        // console.log(chapter.chapter);
        // console.log(topic);
        res.render('chapterTopic.ejs', {
            bmeJsonData: bmeJsonData,
            chapterName: req.params.chapterName,
            topicName: topic.id,
            topicContent: topic.content,
            topicTitle: topic.title,
            topicYoutubeLink: topic.youtubeLink,
            chapterJsonData: chapterJsonData
        })
    }
    catch (error) {
        console.log(error);
    }
})

module.exports = chapter
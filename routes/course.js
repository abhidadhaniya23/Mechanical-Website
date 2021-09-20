const express = require('express')
const chapter = express.Router()
// const path = require('path')
const chapterJsonData = require('../JSON_DATA_CUSTOMIZING/chapter_data.json')
const bmeJsonData = require('../JSON_DATA_CUSTOMIZING/bme_data.json')

// console.log(bmeJsonData.length);
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
/* chapter.get('/topic/:topic', async (req, res) => {
    try {
        let topic = await bmeJsonData.find(topic => topic.id === req.params.topic)
        res.render('chapterTopic.ejs', {
            chapterJsonData: chapterJsonData,
            bmeJsonData: bmeJsonData,
            chapterName: req.params.topic,
            topicName: topic,
            topicContent: topic.content,
            topicTitle: topic.title,
            topicYoutubeLink: topic.youtubeLink
        })
    } catch (error) {
        console.log(error);
    }
})
// console.log(bmeJsonData[0].chapter)
chapter.get('/:id', async (req, res) => {
    let firstTopicLink;
    try {
        for (let index = 0; index < bmeJsonData.length; index++) {
            if (bmeJsonData[index].chapter.replace(/ /g, '-') == req.params.id) {
                firstTopicLink = bmeJsonData[index].youtubeLink;
                // console.log(bmeJsonData[index].chapter.replace(/ /g, '-'))
                // console.log(req.params.id)
                break;
            }
            // console.log(firstTopicLink);
        }
        // console.log(bmeJsonData)
        res.render('chapterTopic.ejs', {
            bmeJsonData: bmeJsonData,
            chapterName: req.params.id,
            topicYoutubeLink: firstTopicLink
        })
        // console.log(firstTopicLink);
    } catch (error) {
        console.log(error);
    }
    // try {
    //     let chapter = await chapterJsonData.find(chapter => chapter.id === req.params.id)
    //     await res.render('chapterTopic.ejs', {
    //         content: chapter.content,
    //         title: chapter.title,
    //         youtubeLink: chapter.youtubeLink
    //     })
    // } catch (error) {
    //     console.log(error);
    // }
}) */

module.exports = chapter
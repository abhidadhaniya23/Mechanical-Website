const express = require('express')
const chapter = express.Router()
// const path = require('path')
const chapterJsonData = require('../JSON_DATA_CUSTOMIZING/chapters.json')
const bmeJsonData = require('../JSON_DATA_CUSTOMIZING/bme_data.json')

// chapter.use(express.static('public'))

chapter.get('/', async (req, res) => {
    res.render('index.ejs', {
        chapterJsonData: chapterJsonData
    })
})
chapter.get('/chapter/:id', async (req, res) => {
    try {
        res.render('chapterTopic.ejs', {
            bmeJsonData: bmeJsonData
        })        
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
})

module.exports = chapter
const express = require('express')
const chapter = express.Router()
// const path = require('path')
const chapterJsonData = require('../JSON_DATA_CUSTOMIZING/bme_data.json')

chapter.get('/', async (req, res) => {
    res.render('index.ejs', {
        chapterJsonData: chapterData
    })
})
chapter.get('/chapter/:id', async (req, res) => {
    try {
        let chapter = await chapterJsonData.find(chapter => chapter.id === req.params.id)
        await res.render('chapter.ejs', {
            content: chapter.content,
            title: chapter.title,
            youtubeLink: chapter.youtubeLink
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = chapter
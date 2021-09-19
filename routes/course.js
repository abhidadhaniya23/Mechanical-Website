const express = require('express')
const chapter = express.Router()
const _ = require('lodash')
// const path = require('path')
const chapterJsonData = require('../JSON_DATA_CUSTOMIZING/chapters.json')
const bmeJsonData = require('../JSON_DATA_CUSTOMIZING/bme_data.json')
// const { map } = require('lodash')

// chapter.use(express.static('public'))

// _.uniqBy(chapters, 'chapter')
function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}
// console.log("Unique by chapters")
// console.log(chapterArr)

// function getUniqueListBy(arr, key) {
//     return [...new Map(arr.map(item=>[item[key],item])).values()]
// }
// const 

// chapters = [...new Set(chapters)]
// console.log(chapters);

// let objArr={
//     [

//     ]
// }

chapter.get('/', async (req, res) => {
    let chapters = []
    bmeJsonData.forEach(element => {
        let obj = {}
        obj.chapter = element.chapter
        obj.id = element.id
        chapters.push(obj)
    })
    const chaptersArr = getUniqueListBy(chapters, 'chapter')
    console.log(chaptersArr);

    await res.render('index.ejs', {
        // chapterJsonData: chapterJsonData,
        bmeJsonData: bmeJsonData,
        chaptersArr: chaptersArr
    })
})
chapter.get('/topic/:topic', async (req, res) => {
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
})

module.exports = chapter
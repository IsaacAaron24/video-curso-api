const { Router } = require('express');
const {
    getAllVideos,
    createVideos,
    deleteVideos,
} = require('../controllers/videos.controllers');

const route = Router()

route.get('/videos', getAllVideos);
route.post('/videos', createVideos);
route.delete('/videos/:id', deleteVideos);

module.exports = route;
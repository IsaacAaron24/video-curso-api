const VideosServices = require('../services/videos.services');

const getAllVideos = async (req, res, next) => {
    try {
        const result = await VideosServices.getAll()
        res.json(result)
    } catch (error) {
        next({
            message: 'Something went wrong',
            status: 400,
            errorContent: error
        })
    }
}

const createVideos = async (req, res, next) => {
    try {
        const newVideos = req.body
        const result = await VideosServices.addVideos(newVideos)
        res.status(201).json(result)
    } catch (error) {
        next({
            message: 'Could not create a new video',
            status: 400,
            errorContent: error
        })
    }
}

const deleteVideos = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await VideosServices.removeVideos(id)
        res.json(result)
    } catch (error) {
        next({
            message: 'The video could not be deleted',
            status: 400,
            errorContent: error
        })
    }
}

module.exports = {
    getAllVideos,
    createVideos,
    deleteVideos,
}
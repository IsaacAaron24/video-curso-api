const Videos = require('../models/videos.models');

class VideosServices {
    static async getAll() {
        try {
            const result = await Videos.findAll({
                attributes: [
                    'title',
                    'url'
                ]
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async addVideos(newVideos) {
        try {
            const result = await Videos.create(newVideos)
            return result
        } catch (error) {
            throw error
        }
    }

    static async removeVideos(id) {
        try {
            const result = await Videos.destroy({
                where: { id }
            })
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = VideosServices;
const Categories = require('../models/categories.models')
const Courses = require('../models/courses.models')
const Videos = require('../models/videos.models')

class CoursesServices {
    static async getAll() {
        try {
            const result = await Courses.findAll({
                attributes: {
                    exclude: [
                        'id'
                    ]
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async getCourseJoinVideo() {
        try {
            const result = await Courses.findAll({
                include: {
                    model: Videos,
                    as: 'video',
                    attributes: [
                        'title',
                        'url'
                    ]
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async getCourseJoinCategory() {
        try {
            const result = await Courses.findAll({
                include: {
                    model: Categories,
                    as: 'categorie',
                    attributes: [
                        'name'
                    ]
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async addCourse(newCourse) {
        try {
            const result = await Courses.create(newCourse)
            return result
        } catch (error) {
            throw error
        }
    }

    static async courseUpdate(updateData, id) {
        try {
            const result = await Courses.update(updateData, {
                where: { id }
            })
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = CoursesServices;
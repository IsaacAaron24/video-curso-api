const CoursesServices = require('../services/courses.services');

const getAllCourses = async (req, res, next) => {
    try {
        const result = await CoursesServices.getAll()
        res.json(result)
    } catch (error) {
        next({
            message: 'Something went wrong',
            status: 400,
            errorContent: error
        })
    }
}

const getWithVideo = async (req, res, next) => {
    try {
        const result = await CoursesServices.getCourseJoinVideo()
        res.json(result)
    } catch (error) {
        next({
            message: 'Something went wrong',
            status: 400,
            errorContent: error
        })
    }
}

const getWithCategory = async (req, res, next) => {
    try {
        const result = await CoursesServices.getCourseJoinCategory()
        res.json(result)
    } catch (error) {
        next({
            message: 'Something went wrong',
            status: 400,
            errorContent: error
        })
    }
}

const createCourse = async (req, res, next) => {
    try {
        const newCourse = req.body
        const result = await CoursesServices.addCourse(newCourse)
        res.status(201).json(result)
    } catch (error) {
        next({
            message: 'Could not create a new course',
            status: 400,
            errorContent: error
        })
    }
}

const updateCourse = async (req, res, next) => {
    try {
        const { id } = req.params
        const updateData = req.body
        const result = await CoursesServices.courseUpdate(updateData, id)
        res.json(result)
    } catch (error) {
        next({
            message: 'Failed to update course',
            status: 400,
            errorContent: error
        })
    }
}

module.exports = {
    getAllCourses,
    getWithVideo,
    getWithCategory,
    createCourse,
    updateCourse,
}
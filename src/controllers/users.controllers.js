const UsersServices = require('../services/users.services');



const getAllUsers = async (req, res, next) => {
    try {
        const result = await UsersServices.getAll()
        res.json(result)
    } catch (error) {
        next({
            message: 'Something went wrong',
            status: 400,
            errorContent: error
        })
    }
}

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await UsersServices.getById(id)
        res.json(result)
    } catch (error) {
        next({
            message: 'User not found',
            status: 400,
            errorContent: error
        })
    }
}

const getUserWithCourses = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await UsersServices.getUserJoinCourse(id)
        res.json(result)
    } catch (error) {
        next({
            message: 'The course could not be brought',
            status: 400,
            errorContent: error
        })
    }
}

const createUser = async (req, res, next) => {
    try {
        const newUser = req.body
        const result = await UsersServices.addUser(newUser)
        res.status(201).json(result)
    } catch (error) {
        next({
            message: 'Failed to create task',
            status: 400,
            errorContent: error
        })
    }
}

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const dataUpdate = req.body;
        const result = await UsersServices.updateUser(dataUpdate, id)
        res.json(result);
    } catch (error) {
        next({
            message: 'Failed to update task',
            status: 400,
            errorContent: error
        })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserWithCourses,
    createUser,
    updateUser
}
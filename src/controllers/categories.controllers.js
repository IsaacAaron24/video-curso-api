const CategoriesServices = require('../services/categories.services');

const getAllCategories = async (req, res, next) => {
    try {
        const result = await CategoriesServices.getAll()
        res.json(result)
    } catch (error) {
        next({
            message: 'Something went wrong',
            status: 400,
            errorContent: error
        })
    }
}

const createCategory = async (req, res, next) => {
    try {
        const newCategory = req.body
        const result = await CategoriesServices.addCategory(newCategory)
        res.status(201).json(result)
    } catch (error) {
        next({
            message: 'Could not create a new category',
            status: 400,
            errorContent: error
        })
    }
}

const deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await CategoriesServices.removeCategory(id)
        res.json(result)
    } catch (error) {
        next({
            message: 'The category could not be deleted',
            status: 400,
            errorContent: error
        })
    }
}

module.exports = {
    getAllCategories,
    createCategory,
    deleteCategory,
}
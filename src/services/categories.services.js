const Categories = require('../models/categories.models');

class CategoriesServices {
    static async getAll() {
        try {
            const result = await Categories.findAll({
                attributes: [
                    'name'
                ]
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async addCategory(newCategory) {
        try {
            const result = await Categories.create(newCategory)
            return result
        } catch (error) {
            throw error
        }
    }

    static async removeCategory(id) {
        try {
            const result = await Categories.destroy({
                where: { id }
            })
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = CategoriesServices
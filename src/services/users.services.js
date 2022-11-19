const Courses = require('../models/courses.models');
const Users = require('../models/users.models');
const UsersCourses = require('../models/usersCourses.models');

class UsersServices {

    static async getAll() {
        try {
            const result = await Users.findAll({
                attributes: {
                    exclude: [
                        'id',
                        'password'
                    ]
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async getById(id) {
        try {
            const result = await Users.findByPk(id, {
                attributes: {
                    exclude: [
                        'id',
                        'password'
                    ]
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async getUserJoinCourse(id) {
        try {
            const result = Users.findOne({
                where: { id },
                attributes: [
                    'id',
                    'firstName',
                    'lastName'
                ],
                include: {
                    model: UsersCourses,
                    as: 'macthCourse',
                    attributes: {
                        exclude: [
                            'userId',
                            'id',
                            'user_id',
                            'course_id'
                        ]
                    },
                    include: {
                        model: Courses,
                        as: 'matchsUc',
                        attributes: [
                            'title',
                            'description',
                            'instructor'
                        ]
                    }
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async addUser(newUser) {
        try {
            const result = await Users.create(newUser)
            return result
        } catch (error) {
            throw error
        }
    }

    static async updateUser(updateData, id) {
        try {
            const result = await Users.update(updateData, {
                where: { id },
            })
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = UsersServices;
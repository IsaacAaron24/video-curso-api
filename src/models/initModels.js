const Users = require('./users.models');
const Categories = require('./categories.models');
const Courses = require('./courses.models');
const Videos = require('./videos.models');
const UsersCourses = require('./usersCourses.models');

const initModels = () => {

    // 1 --> n
    Courses.hasMany(Categories, {
        as: 'categorie',
        foreignKey: 'course_id'
    });
    Categories.belongsTo(Courses, {
        as: 'pertain',
        foreignKey: 'course_id'
    });



    // 1 --> n
    Courses.hasMany(Videos, {
        as: 'video',
        foreignKey: 'course_id'
    });
    Videos.belongsTo(Courses, {
        as: 'pertains',
        foreignKey: 'course_id'
    });



    // tabla pivote
    // 1 --> n
    Users.hasMany(UsersCourses, {
        as: 'macthCourse',
        foreignKey: 'user_id'
    });
    UsersCourses.belongsTo(Users, {
        as: 'matchUc',
        foreignKey: 'user_id'
    });
    // 1 --> n
    Courses.hasMany(UsersCourses, {
        as: 'matchUser',
        foreignKey: 'course_id'
    });
    UsersCourses.belongsTo(Courses, {
        as: 'matchsUc',
        foreignKey: 'course_id'
    })



}

module.exports = initModels;
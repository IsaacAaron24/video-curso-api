const db = require('../utils/database');
const Users = require('../models/users.models');
const Videos = require('../models/videos.models');
const Categories = require('../models/categories.models');
const Courses = require('../models/courses.models');
const UsersCourses = require('../models/usersCourses.models');
const initModels = require('../models/initModels');

initModels();

const users = [
    {
        firstName: 'Isaac',
        lastName: 'Guamanquispe',
        password: '1234',
        email: 'isaac@gmail.com'
    },
    {
        firstName: 'Luis',
        lastName: 'Mendez',
        password: '2222',
        email: 'luis@gmail.com'
    },
    {
        firstName: 'Mario',
        lastName: 'Perez',
        password: '3333',
        email: 'mario@gmail.com'
    }
]

const courses = [
    {
        title: 'Aprende React + Redux desde 0',
        description: 'Vas aprender desde lo mas basico hasta ser un experto',
        instructor: 'Lucho Guaman'
    },
    {
        title: 'Aprende NodeJS desde 0',
        description: 'Vuelvete un experto en nodeJS',
        instructor: 'Jose Mendez'
    },
    {
        title: 'Aprende a usar Python y vuelvete un experto',
        description: 'Aprende ciberseguridad con Python',
        instructor: 'Juan Peña'
    }
]

const categories = [
    {
        name: 'Front-end',
        courseId: 1,
    },
    {
        name: 'React',
        courseId: 1
    },
    {
        name: 'NodeJs',
        courseId: 2
    },
    {
        name: 'Back-end',
        courseId: 2,
    }
]

const videos = [
    {
        title: 'React',
        url: 'http://react/aprende.com',
        courseId: 1

    },
    {
        title: 'Redux',
        url: 'http://redux/aprende.com',
        courseId: 1,
    },
    {
        title: 'NodeJS',
        url: 'http://nodejs/aprende.com',
        courseId: 2,
    },
    {
        title: 'Python',
        url: 'http://python/aprende.com',
        courseId: 3
    }
]

const usersCourses = [
    {
        userId: 1,
        courseId: 1
    },
    {
        userId: 1,
        courseId: 3
    },
    {
        userId: 2,
        courseId: 1
    },
    {
        userId: 2,
        courseId: 2
    },
    {
        userId: 2,
        courseId: 3
    },
    {
        userId: 3,
        courseId: 2
    }
]

db.sync({ force: false })
    .then(() => {
        console.log('plantacion iniciada')

        users.forEach((user) => Users.create(user));

        setTimeout(async () => {
            courses.forEach((course) => Courses.create(course));
        }, 100)
        setTimeout(() => {
            categories.forEach((category) => Categories.create(category));
        }, 200)
        setTimeout(() => {
            videos.forEach((video) => Videos.create(video));
        }, 300)
        setTimeout(() => {
            usersCourses.forEach((uc) => UsersCourses.create(uc));
        }, 400)
    })
    .catch((error) => console.log(error))
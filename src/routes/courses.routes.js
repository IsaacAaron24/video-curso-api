const { Router } = require('express');
const {
    getAllCourses,
    getWithVideo,
    getWithCategory,
    createCourse,
    updateCourse,
} = require('../controllers/courses.controllers');

const router = Router();


router.get('/courses', getAllCourses);
router.get('/courses/videos', getWithVideo);
router.get('/courses/categories', getWithCategory)
router.post('/courses', createCourse);
router.put('/courses/:id', updateCourse)

module.exports = router;
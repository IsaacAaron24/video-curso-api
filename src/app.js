const db = require('./utils/database');
const express = require('express');
const morgan = require('morgan');

const handleError = require('./middleware/error');
const initModels = require('./models/initModels');
const userRoutes = require('./routes/users.routes');
const courseRoutes = require('./routes/courses.routes');
const videoRoutes = require('./routes/videos.routes');
const categoryRoutes = require('./routes/categories.routes');

const app = express();

app.use(express.json());
app.use(morgan('dev'))

db.authenticate()
    .then(() => console.log("Autenticacion exitosa"))
    .catch((error) => console.log(error));

db.sync({ force: false })
    .then(() => console.log("Base sincronizada"))
    .catch((error) => console.log(error))

initModels();

app.get("/", (req, res, next) => {
    res.status(200).json("todo bien")
    next()
})

app.use('/api/v1', userRoutes);
app.use('/api/v1', courseRoutes);
app.use('/api/v1', videoRoutes);
app.use('/api/v1', categoryRoutes);

app.use(handleError);

module.exports = app
const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db')
const dotenv = require('dotenv').config();
const { env } = process

const PORT = env.PORT || 5000;

// Connection to mongo db using env.MONGO_URI and mongoose
connectDB();

const app = express();

// adding middleware to access req.body
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

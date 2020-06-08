const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// import Routes
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');

dotenv.config();

// Middleware
app.use(express.json());
// Route middleware
app.use('/api/user', authRoutes);
app.use('/api/post', postRoutes);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => 
    console.log('Connect to DB!')
);

app.listen(3000, () => console.log('Server up and running'));
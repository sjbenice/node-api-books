const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const api = require('./api/api');
const { authenticateJWT, checkAdmin } = require('./middleware/auth');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', api);

mongoose.connect('mongodb://localhost:27017/bookcollection');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});

module.exports = app;

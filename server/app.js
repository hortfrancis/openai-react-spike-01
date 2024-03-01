const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');

const openaiController = require('./controllers/openai');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.get(
    '/',
    (req, res) => {
        res.send('Hello World');
    }
);

app.post('/openai/generic', openaiController.generic);

module.exports = app;
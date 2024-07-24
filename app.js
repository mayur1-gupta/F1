const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');
const app = express();

app.use (loggerMiddleware);

app.get(`/`, (req, res) => { res. send ('Hello, World!')});

app.get ('/about', (req, res) => { res. send ('About Page')});

const PORT = process.env.PORT || 3000;
app. listen (PORT, () => ( console.log( `Server is running on port ${PORT}`)
));
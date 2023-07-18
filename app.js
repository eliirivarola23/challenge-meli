require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
const { error404Handler } = require('./middleware/errors');

const app = express();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => error404Handler(req, res, next, '/api/v1'));
app.use('/api/v1', routes);
module.exports = app;

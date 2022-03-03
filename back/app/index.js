const cors = require('cors');
const express = require('express');

const router = require('./routers');

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(router);

module.exports = app;

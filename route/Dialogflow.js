const express = require('express');
const dialog = express();
const dialogflow = require('@google-cloud/dialogflow');
require('dotenv').config();

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

dialog.get('/', (req, res) => {
    res.json('You are in dialogflow module.')
})

module.exports = dialog;
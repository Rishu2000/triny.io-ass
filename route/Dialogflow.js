const express = require('express');
const dialog = express();
const dialogflow = require('@google-cloud/dialogflow');
require('dotenv').config();

dialog.get('/', (req, res) => {
    res.json('You are in dialogflow module.')
})

module.exports = dialog;
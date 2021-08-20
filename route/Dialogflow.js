const express = require('express');
const dialog = express();

dialog.get('/', (req, res) => {
    res.json('You are in dialogflow module.')
})

module.exports = dialog;
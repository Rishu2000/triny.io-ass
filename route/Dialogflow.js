const express = require('express');
const dialog = express();
const dialogflow = require('@google-cloud/dialogflow');
require('dotenv').config();

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

const PROJECTID = CREDENTIALS.project_id;

const CONFIGURATION = {
    credentials:{
        private_key: CREDENTIALS['private_key'],
        client_email: CREDENTIALS['client_email'],
    }
}
dialog.get('/', (req, res) => {
    res.json('You are in dialogflow module.')
})

module.exports = dialog;
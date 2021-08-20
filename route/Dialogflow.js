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

const sessionClient = new dialogflow.SessionsClient(CONFIGURATION);

const detectIntent = async (languageCode, queryText, sessionId) => {
    let sessionPath = sessionClient.projectAgentSessionPath(PROJECTID,sessionId);

    //The text query request.
    let request = {
        session:sessionPath,
        queryInput:{
            text:{
                //The query to send to the dialogflow agent
                text:queryText,
                //The language used by client
                languageCode:languageCode,
            }
        }
    }

    const responses = await sessionClient.detectIntent(request);

    const result = responses[0].queryResult;

    return {
        response: result.fulfillmentText
    }
}

dialog.use(express.urlencoded({
    extended:true
}))

dialog.get('/', (req, res) => {
    res.json('You are in dialogflow module.')
})

module.exports = dialog;
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT ||4002;
const dialogflowData = require('./route/Dialogflow');

app.use(cors());
app.use(express.json());

app.use('/dialogflow',dialogflowData);
app.get('/', (req, res) => {
    res.json('server started');
})

app.listen(port, () => {
    console.log("server started on port " + port);
});
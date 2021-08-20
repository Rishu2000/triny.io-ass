const express = require('express');
const app = express();
const port = 4002;
// const dialogflow = require('./route/Dialogflow');

app.use(express.json());

// app.use('/dialogflow',dialogflow);
app.get('/', (req, res) => {
    res.json('server started');
})

app.listen(port, () => {
    console.log("server started on port " + port);
});
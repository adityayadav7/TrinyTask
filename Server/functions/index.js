const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors());
const listIntents =require('./controller/controller')
//const runSample =require('./controller/controller')
app.get('/intent',listIntents);
//app.get('/ee',runSample)
exports.api = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// const ue=require('./route')
// app.use('/api',ue);
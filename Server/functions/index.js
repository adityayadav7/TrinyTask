const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors());
const listIntents =require('./controller/controller')
app.get('/',listIntents);
exports.api = functions.https.onRequest(app);

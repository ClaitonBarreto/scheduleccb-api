const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser');
dotenv.config()
const mongoose = require('mongoose')

const mongoUrl = process.env.DATABASE_URL


const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

app.use(require('./src/routes.js'))

app.listen(process.env.PORT || 3333, () => console.log('server on'))
const { ObjectID } = require('mongodb');
const mongoose = require('mongoose')
const { Schema } = mongoose

const cultSchema = new Schema({
    date: Date,
});

module.exports = mongoose.model('Cults', cultSchema)
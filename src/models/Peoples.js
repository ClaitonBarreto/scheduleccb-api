const mongoose = require('mongoose')
const {  Schema, model } = mongoose

const peopleSchema = new Schema({
    name:  String,
    checked: Boolean, 
    cult: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cults'
    }
});

module.exports = model('Peoples', peopleSchema)
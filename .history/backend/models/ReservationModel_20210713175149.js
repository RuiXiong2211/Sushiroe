const mongoose = require('mongoose') 

const reservationTemplate = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    phone: {
        type:String,
        required: true
    },
    pax: {
        type:String,
        required: true
    },
    date: {
        type:String,
        required: true
    },
    time: {
        type:String,
        required: true
    },
    dateOfSubmission: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('mytable', reservationTemplate)
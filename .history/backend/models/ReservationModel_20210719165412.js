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

reservationTemplate.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  

module.exports = mongoose.model('reservations', reservationTemplate)
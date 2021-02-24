const mongoose = require('mongoose')



const eventsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    location: {
        type: String
    },

   entType: {
        type: String
    },

    description: {
        type: String
    },

    startDate: {
        type: String
    },

    endDate: {
        type: String
    },

    startTime: {
        type: String
    },

    endTime: {
        type: String
    },
    shifts: [{
        type: String
    }],

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },

    organizers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }],

    img: {
        type: String
    }

}, { timestamps: true })

eventsSchema.index({'$**': 'text'});
const Events = mongoose.model('Events', eventsSchema)
module.exports = Events
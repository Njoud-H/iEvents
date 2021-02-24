const mongoose = require('mongoose')



const usersSchema = new mongoose.Schema({
    role: {
        type :String , 
        required :true ,
    },

    email: {
        type: String,
        required: true,
        searchable: true
    },

    password: {
        type: String,
        required: true
    },

    name: {
        type: String,
        default: ""
    },

    phoneNumber: {
        type: String,
        default: ""
    },

    gender: {
        type: String,
        default: ""
    },

    age: {
        type: String,
        default: ""
    },

    language: [{
        type: String,
        default: ""
    }],

    experience: [{
        type: String,
        default: ""
    }],

    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Events'
    }],

    pastEvents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Events'
    }],

    appliedEvents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Events'
    }]

}, { timestamps: true })


const Users = mongoose.model('Users', usersSchema)
module.exports = Users
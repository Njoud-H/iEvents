
const mongoose = require('mongoose')

const childSchema = new mongoose.Schema({
    appliedOrganizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    massage: {
        type: String
    },
    shift: {
        type: String
    },

    status: {
        type: Number
    },
    
});

const appliyingFormSchema = new mongoose.Schema({
    description: {
        type: String
    },

    requirement: {
        type: String
    },

    responses: [childSchema],

    shifts: [{
        type: String
    }],

    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Events',
    },

}, { timestamps: true })


appliyingFormSchema.index({ '$**': 'text' });
const AppliyingForm = mongoose.model('AppliyingForm', appliyingFormSchema)
module.exports = AppliyingForm
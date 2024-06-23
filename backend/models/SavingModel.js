const mongoose = require('mongoose');


const SavingSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Saving', SavingSchema)
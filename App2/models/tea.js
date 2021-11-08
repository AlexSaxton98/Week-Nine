const mongoose = require("mongoose")

const Tea = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    strength: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Tea", Tea);
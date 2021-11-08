const mongoose = require("mongoose")

const Coffee = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    origin: {
        type: String,
        required: true
    },

    strength: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Coffee", Coffee);


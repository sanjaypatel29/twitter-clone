const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const tweetDataSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    tHandle: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    like: {
        type: Array,
        default: []
    },
    share: {
        type: Array,
        default: []
    },
    comment: {
        type: Array,
        default: []
    },
});

module.exports = mongoose.model('tweets', tweetDataSchema)
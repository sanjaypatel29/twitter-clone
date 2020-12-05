const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            min: 4
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 6
        },
        dob: {
            type: String,
            required: true,
            min: 4
        },
        tHandle: {
            type: String,
            required: true,
            unique: true
        },
        profileImage: {
            type: String,
            required: true,
            min: 4
        },
        followers: {
            type: Array,
            default: []
        },
        following: {
            type: Array,
            default: []
        },
    },
    { versionKey: false }
);

module.exports = mongoose.model('tUser', UserSchema);

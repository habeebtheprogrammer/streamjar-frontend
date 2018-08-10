var mongoose = require('../config/mongoose');
//user schema
var userSchema = mongoose.Schema({
    fullName: {
        type: String,
    },
    status: {
        type: String,
        default: "Be good at all times."
    },
    password: {
        type: String,
    },

    department: {
        type: String
    },
    university: {
        type: String,
    },
    location: {
        type: String,
    },
    gender: {
        type: String,
    },
    about: {
        type: String,
    },
    dpUrl: {
        type: String
    },
    dpID: String,
    bgID: String,
    bgUrl: {
        type: String
    },
    email: {
        type: String,
        trim: true,
    },
    uploadCounter:{
        type: Number,
        default: 0
    },
    date: {
        type: String
    },
    views: {
        type: Number,
        default: 0
    },
    username: {
        type: String,
    },
    phone: {
        type: String
    },
    dob: {
        type: String
    },
      city: {
        type: String
    },
    state: {
        type: String
    }
})
userSchema.index({ fullName: 'text', department: 'text', university: 'text', gender: 'text', city: 'text', state: 'text',location:"text", about: 'text' });
var User = mongoose.model('users', userSchema);

module.exports = User;

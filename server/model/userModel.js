var mongoose = require('../config/mongoose');
//user schema
var userSchema = mongoose.Schema({
    fullName: {
        type: String,
    },
    bio: {
        type: String,
        default: "Hi! i am new to campus connect"
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
    uploadLimit:{
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

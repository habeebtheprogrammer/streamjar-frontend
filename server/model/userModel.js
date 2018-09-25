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
    location: {
        type: String,
    },
    age:{
        type:String
    },
    interest:[String],
    knowledge:[String],
    gender: {
        type: String,
    },
    about: {
        type: String,
    },
    dpUrl: {
        type: String
    },
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
        type: Date,
        default: Date.now
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
    },
    privacy:{
        type: String,
        default: "public"
    }
})
userSchema.index({ username: 'text',fullName:'text', location:"text"});
var User = mongoose.model('users', userSchema);

module.exports = User;

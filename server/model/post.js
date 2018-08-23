var mongoose = require('../config/mongoose');

var postSchema = mongoose.Schema({
    userID: {type:String, ref:"users"},
    username:String,
    content:[
    {
    type: {type:String },
    imgUrl: String,
    videoUrl: String,
    description:String,
    date: Date,
    userID:{type:String,ref:"users"},
    views: {
        type: Number,
        default: 0
    }
}],
    privacy: {
        type: String,
        default: "public"
    }
});

var post = mongoose.model('post', postSchema);
module.exports = post;

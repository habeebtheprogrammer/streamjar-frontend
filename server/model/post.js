var mongoose = require('../config/mongoose');

var postSchema = mongoose.Schema({
    userID: String,
    username:String,
    content:[
    {
    type: String,
    imgUrl: String,
    videoUrl: String,
    description:String,
    date: String,
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


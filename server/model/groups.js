var mongoose = require('../config/mongoose');

var groupSchema = mongoose.Schema({
    creatorID: {type:String, ref:"users"},
    title:String,
    description:String,
    date: Date,
    dpUrl: String,
    status:String,
    posts:[
        {
        type: {type:String },
        imgUrl: String,
        videoUrl: String,
        description:String,
        date: String,
        userID:{type:String,ref:"users"},
        views: {
            type: Number,
            default: 0
        }
    }],
    members:[String],
    privacy: {
        type: String,
        default: "public"
    }
});
groupSchema.index({ title:'text'});

var group = mongoose.model('group', groupSchema);
module.exports = group;


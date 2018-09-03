var mongoose = require('../config/mongoose');

var groupSchema = mongoose.Schema({
    creatorID: {type:mongoose.SchemaTypes.ObjectId, ref:"users"},
    title:String,
    description:String,
    date: {type:Date,
        default: Date.now
    },
    dpUrl: String,
    status:String,
    posts:[
        {
        type: {type:String },
        imgUrl: String,
        videoUrl: String,
        description:String,
        date: String,
        userID:{type:mongoose.SchemaTypes.ObjectId,ref:"users"},
        views: {
            type: Number,
            default: 0
        }
    }],
    members:[
        {userID:{type:mongoose.SchemaTypes.ObjectId,ref:"users"},
        type:{type:String},
        date: {type:Date,
            default: Date.now
        },
    }],
    privacy: {
        type: String,
        default: "public"
    }
});
groupSchema.index({ title:'text'});

var group = mongoose.model('group', groupSchema);
module.exports = group;


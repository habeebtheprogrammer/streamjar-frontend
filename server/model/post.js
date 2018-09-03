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
    date: {type:Date,default:Date.now},
    userID:{type:mongoose.SchemaTypes.ObjectId,ref:"users"},
    views: {
        type: Number,
        default: 0
    },
    comments:[
        {
            userID:{type:mongoose.SchemaTypes.ObjectId, ref:"users"},
            description:{type:String},
            date: {type:Date,default:Date.now},
            likes:[
                {type:mongoose.SchemaTypes.ObjectId, ref:"users" }
            ],
            reply:[
                {userID:{type:mongoose.SchemaTypes.ObjectId, ref:"users" },
                description:String,
                date: {type:Date,default:Date.now},

            }

            ]
        }
    ],
    likes:[
        {type:mongoose.SchemaTypes.ObjectId, ref:"users" }
    ]

}],
    privacy: {
        type: String,
        default: "public"
    }
});

var post = mongoose.model('post', postSchema);
module.exports = post;


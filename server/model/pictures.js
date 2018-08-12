var mongoose = require('../config/mongoose');

var picturesSchema = mongoose.Schema({
    userID: String,
    username:String,
    imgUrl: String,
    description:String,
    date: String,
    views: {
        type: Number,
        default: 0
    },
    privacy: {
        type: String,
        default: "public"
    }

});

var pictures = mongoose.model('pictures', picturesSchema);
module.exports = pictures;


var mongoose = require('../config/mongoose');

var picturesSchema = mongoose.Schema({
    userID: String,
    username:String,
    imgUrl: String,
    imgID:String,    
    description:String,
    date: String,
    views: {
        type: Number,
        default: 0
    },

});

var pictures = mongoose.model('pictures', picturesSchema);
module.exports = pictures;


var mongoose = require('../config/mongoose');
//contact schema
var messageSchema = mongoose.Schema({
    party: {
        type: String
    },
    user1: {
        type: String
    },
    user2: {
        type: String
    },
    messages: [{
        to: {
            type: String
        },
        from: {
            type: String
        },
        text: {
            type: String
        },
        receipt:{
            type:String,
            default: false
        },
        date: {
            type: String
        }
    }],
})

var Message = mongoose.model('message', messageSchema);

module.exports = Message;

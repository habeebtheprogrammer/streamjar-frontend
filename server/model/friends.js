var mongoose = require('../config/mongoose');
//user schema
var userSchema = mongoose.Schema({
  userID:{
     type: String,ref:"users"
  },
  username:{
      type: String,
  },
  privacy:{
      type: String,
      default: "public"
  },
  list:[
    { userID: {
        type: String,ref:"users"
    },
    fullName: {
        type: String,
    },
    type:{type: String},
    department: {
        type: String
    },
    university: {
        type: String,
    },
    gender: {
        type: String,
    },
    username: {
        type: String,
    },
}
  ]
})
userSchema.index({ fullName: 'text', department: 'text', university: 'text', gender: 'text' });
var Friends = mongoose.model('friends', userSchema);

module.exports = Friends;

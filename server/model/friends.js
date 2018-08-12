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
  friends:[
    { userID: {
        type: String,ref:"users"
    },
    fullName: {
        type: String,
    },
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
  ],
  request: [
   {
    userID: {
           type: String,
       },
   fullName: {
       type: String,
   },
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
  ],
  sent: [
    {
     userID: {
            type: String,
        },
    fullName: {
        type: String,
    },
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

var Users = require("./users")
var Message = require('../model/message')
module.exports = (io)=> { 
    let users = new Users
    
io.on("connection", (socket) => {
    socket.on("initialize", (id, fullName, dept, username) => {
        socket.join('/campusconnect')
        users.addUser(socket.id, id, fullName, dept, username, '/campusconnect')
        io.emit("onlineusers", users.userslist)
        socket.broadcast.to('/campusconnect').emit('onlineusers', users.userslist)
    })
    socket.on("fetchuserlist", function () {
        io.emit("onlineusers", users.userslist)
        socket.broadcast.to('/campusconnect').emit('onlineusers', users.userslist)
    })
    socket.on("sendmesg", (party,senderID,suname,receiverID,reuname,text) =>{
        var date = new Date() 
        Message.findOne({party }).then((conversation)=>{
            if(conversation){
                Message.update({ _id: conversation._id }, { $push: { messages: { text, date, from: senderID, to: receiverID} } }).then((conv)=>{
                    Message.findOne({ party }).then((conversation) => {
                        io.emit(conversation.party, conversation)
                    })
                    // socket.to(conversation.party).emit(conversation.party, conversation)
                })
            }
            else {
                Message.create({party, user1:suname,user2:reuname, messages:  { from: senderID, to: receiverID, text, date}  }).then((mesg) => {
                    io.emit(mesg.party, mesg)
                    // socket.to(mesg.party).emit(mesg.party, mesg)
                }).catch((err)=>console.log(err))
            }
        }).catch((err)=>console.log(err))
    })
    // socket.on("fetchconversation", (username) => {
    //     var allmesg = []; console.log(username)
    //     Message.find({ user1: username }).then((mesg) => {
    //         Message.find({ user2: username }).then((mesg2) => {
    //             allmesg = mesg.concat(mesg2)
    //             socket.emit(`conversation/${username}`,allmesg)
    //         })
    //     })
    // })
    socket.on("setRemoteDesc",(remoteuser)=>{
       var pc2 = users.userslist.filter((user)=>user.username === remoteuser.username);
       console.log(`pc is trying to reach  ${remoteuser.username}`)
       io.emit(`setRemoteDesc${remoteuser.username}`,remoteuser.desc)
       socket.broadcast.to('/campusconnect').emit('setRemoteDesc', remoteuser.desc)

    })
    socket.on("setCallerRemoteDesc",(remoteuser)=>{
        console.log(`${remoteuser.username} is trying to respond to pc`)
        var pc2 = users.userslist.filter((user)=>user.username === remoteuser.username);
        io.emit(`setCallerRemoteDesc${remoteuser.username}`,remoteuser.desc);
        socket.broadcast.to('/campusconnect').emit('setCallerRemoteDesc',remoteuser.desc)
    })
    socket.on("addIceCandidate",(pc)=>{
        console.log(`${pc.username} will add the iceCandidate`)
        var pc2 = users.userslist.filter((user)=>user.username === pc.username);
        io.emit(`addIceCandidate${pc.username}`,pc.candidate);
        socket.broadcast.to('/campusconnect').emit('addIceCandidate',pc.candidate)
    })
    socket.on("disconnect", () => {
     users.removeUser(socket.id)
        console.log("user has disconnected")
        io.emit("onlineusers", users.userslist)
        socket.broadcast.to('/campusconnect').emit('onlineusers', users.userslist)
    })

})
}
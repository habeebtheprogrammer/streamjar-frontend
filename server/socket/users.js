var lists
class Users {
    constructor(sockID,mongoID){
       this.userslist = []
    }
    addUser(sockID, mongoID, fullName, dept,username, room){
        var result = this.userslist.push({sockID,mongoID,fullName,dept,username,room});
        return result
    }
    getUser(sockID){
        let result = this.userslist.filter((user)=>user.sockID===sockID)
        return result
    }
    removeUser(sockID) {
       var users = this.userslist = this.userslist.filter((user) => user.sockID !== sockID)
       this.userslist = users;
        return users
    } 
    getUserList(room){
        let results = this.userslist.filter((user) => user.room === room)
        return results
    }

}

module.exports = Users
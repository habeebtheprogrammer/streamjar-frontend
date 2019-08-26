import React,{Component} from 'react'
import { Button,Icon } from 'semantic-ui-react'
import axios from "axios"
import setAuthorizationToken from "../auth"
import apiUrl from "../../config.js"
import jwt from "jsonwebtoken"
export default class Twitchlogin extends React.Component{
    componentWillMount() {
        this.TwitchLogin()
    }
    TwitchLogin = ()=>{
        if(window.location.hash){
        var rID = window.localStorage.getItem("r");
           var url= window.location.hash.substr(1);
            var g = url.split('=',2)
            var data = jwt.decode(g[1]);
           var email = data.email
            var imageUrl = data.picture
            var username = data.preferred_username
            axios.post(`${apiUrl}/api/socialLogin`,{rID,username,email,imageUrl,password:username}).then((res) => {
                if (res.data.token) {
                    console.log(res)
                    var userData = jwt.verify(res.data.token, "streamers")
                    if (userData) {
                        var data = jwt.decode(res.data.token,"streamers");
                        localStorage.setItem("jartoken", res.data.token);
                        localStorage.setItem("username", data.username);
                        setAuthorizationToken(res.data.token);
                        window.location.assign(`/dashboard`)
                    }
                }
                })
        }
      
     }
    render(){
    return (
        <Button color="purple" onClick={()=>window.location.href='https://api.twitch.tv/kraken/oauth2/authorize?response_type=id_token&client_id=d4mtve1rthkw30y7votra4u7x7u47h&redirect_uri=https://streamjar-beta.herokuapp.com/signup&scope=openid&claims={"id_token":{"email":null,"email_verified":null,"preferred_username":null,"picture":null},"userinfo":{"picture":null}}'}><Icon name="twitch" /> Twitch</Button>
    )
}
}


import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios";
import apiUrl from "../../config"
import classnames from "classnames"
class Navtab extends Component {
    constructor(props){
        super(props);
        this.state={
            online:false,
            user:{}
        }
    }
    componentWillMount() {
        var {socket} = this.props.socket
        var username; 
        if(this.props.user){
          username= this.props.user.username;
        }else{
            username=localStorage.getItem("username")
            axios.get(`${apiUrl}/api/getuserbyid?id=${username}`).then((res) => {
                if(res.data.user)
                this.setState({ user: res.data.user, isLoading: false });else this.setState({empty:true})
            });
        }
      
        
    }
    render() {
        console.log(this.props)
        var me = localStorage.getItem("username")
        var username = this.props.user?this.props.user.username : this.state.user.username
        return (
            <div className="profile-tab" >
                      {this.props.match?   <ul className={classnames("nav navbar-nav ")} style={{position:"absolute",left:0,fontWeight:"800",fontSize:"1.5em"}}>
                            <li>
                                <Link to="#"><div >Afrikal<span style={{color:"red"}}> <i className="fa fa-opencart"></i>
                                
                                </span></div></Link>
                            </li>
                            
                        </ul>:null}
                    <div className="navbar " style={{marginBottom:"0px",borderBottom:"1px solid #e8e8e8"}}>
                        
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <Link to={`/forum/section`}>Sections</Link>
                            </li>
                            <li>
                                <Link to={`/followed_topics`}>Followed topics</Link>
                            </li>
                            <li className="active">
                                <Link to={`/like_and_share`}>Likes and shares</Link>
                            </li>
                         
                            
                            {username !== me? null:
                        <li>
                        <Link to={`/profile/fppost`}>NG <i className="caret"></i>
                        </Link>
                    </li>
                        }
                          
                        </ul>
                        <ul className="nav navbar-nav navbar-right" style={{margin:"0px"}}>
                        {username !== me? null:
                            <li>
                                <Link to={`/forum/section/post`} > <b> <i className="fa fa-pencil-square-o"></i> Post </b></Link>
                            </li>}
                        </ul>
                    </div>
                    
                </div>
        );
    }
}

export default Navtab;
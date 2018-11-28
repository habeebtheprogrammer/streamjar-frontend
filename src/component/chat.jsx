import React,{Component} from  "react"
import { Popup ,Button, Grid,Image,Header,Dimmer,GridColumn, Icon, List, Message, Feed, Label, Segment, Loader} from 'semantic-ui-react'
import Footer from "./footer";
import Navbar from "./navbar";
import Bottomsection from "./ui/bottomsection";
import {connect} from "react-redux"
import Particles from "react-particles-js";
import Profilecard from "./ui/profilecard";
import apiUrl from "../config"
import Axios from "axios";
import classnames from "classnames"
import Messagebox from "./ui/messagebox";
import moment from "moment"
function mapStateToProps(state){
    return {auth: state.auth}
}
 class Chat extends Component{
    constructor(props){
        super(props)
        this.state={
            user:{},
            defaultChat:0,
            messages:[],
            loading:true
        }
    }
    componentWillMount(){
        Axios.get(`${apiUrl}/api/getProfile`).then((res)=>{if(res.data.user)this.setState({user:res.data.user,loading:false})})
        Axios.get(`${apiUrl}/api/getMessages`).then((res)=>{if(res.data.messages)this.setState({messages:res.data.messages})})
    }
    updateChat(conversationID,data){
        var update  =  this.state.messages;
        update.map((message)=>{
            if(message._id==conversationID){
                message.conversation.push(data)
            }
        });

        this.setState({messages:update})
    }
    cuttext(text,maxlength){
        if(text.length > maxlength){
            var newtext = text.slice(0,maxlength);
            newtext += "..."
            return <span>{newtext} <small>See more</small></span>
        }else return text
    }
    render(){
        var {defaultChat,messages,loading} = this.state;

        return(
            <div className="chat home">
                <Navbar {...this.props}/>
                <Grid columns="equal"  celled="internally">
                    <Grid.Row style={{paddingBottom:"0px",borderBottom:"1px solid #ddd"}}>
                        <Grid.Column width="4" mobile="16" tablet="4" computer="4">
                        <Grid  >
                            <Grid.Row style={{borderBottom:"1px solid #ddd"}}>
                                <Grid.Column > 
                                <p style={{padding:"13px 0px"}}>All conversation <span style={{float:"right"}}><Icon name="comments outline" size="big" /></span></p>
                             </Grid.Column>
                            </Grid.Row>
                            <Grid.Row style={{borderBottom:"1px solid #ddd",padding:"0px"}}>
                            <Grid.Column className="no-padding"> 
                            {loading?<div style={{padding:"200px 0px 10px"}}><Loader active="true" size="small" ></Loader></div>:
                            <Feed>
                            {messages.length?
                            messages.map((message,key)=>(
                                <Feed.Event className={classnames(key===defaultChat?"active":null,"xcursor")} onClick={(e)=>this.setState({defaultChat:key})}>
                            <Feed.Label icon="share"  />
                            <Feed.Content>
                                <Feed.Summary  className="lato" >
                                <a>Ticket #{message.ticket}</a> 
                                <Feed.Date style={{float:"right"}}>{moment(message.conversation[0].date).fromNow()}</Feed.Date>
                                </Feed.Summary>
                                <Feed.Extra text style={{fontSize:"0.9em"}} >
                                    {message.conversation[0].senderID == this.props.auth.user.id?
                                    <div>Me : {this.cuttext(message.conversation[message.conversation.length-1].message,60)}</div>:<div>{message.conversation[0].message}</div>}
                                </Feed.Extra>
                            </Feed.Content>
                            </Feed.Event>
                            )):
                            <Feed.Event className={classnames("active","xcursor")} >
                            <Feed.Label icon="share"  />
                            <Feed.Content>
                                <Feed.Summary  className="lato" >
                                <a> No new message</a> 
                                <Feed.Date style={{float:"right"}}>{moment(this.state.user.regDate).fromNow()}</Feed.Date>
                                </Feed.Summary>
                                <Feed.Extra text style={{fontSize:"0.9em"}} >
                                   Please send a custom request to initiate a new chat
                                </Feed.Extra>
                            </Feed.Content>
                            </Feed.Event>
                           }
                            </Feed> 
                            }   
                             </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        </Grid.Column>
                        <Grid.Column className="no-padding" width="12" mobile="16" tablet="12" computer="12">
                            <Grid columns="equal" celled="internally" > 
                                <Grid.Row >
                                <Grid.Column >
                                    <h3 className="lato" style={{margin:"0px 0px 3px"}}><Icon name="circle" color="green" size="tiny"/> Customer care</h3>
                                    <p><small>Online | Local time {moment().format("LL")}</small></p>
                                </Grid.Column>
                                </Grid.Row>
                                <Grid.Row >
                                <Grid.Column className="no-leftpad no-rightpad no-toppad messages" width="10" width="10" mobile="16" tablet="10" computer="10">
                                {loading?<div style={{padding:"200px 0px 10px"}}><Loader active="true" size="large" ></Loader></div>:
                                <div className="xheight">
                                    <Feed>
                                        {messages.length?
                                        messages[defaultChat].conversation.map((message,key)=>(
                                        <Feed.Event >
                                        <Feed.Label image={`${process.env.PUBLIC_URL}/images/avatar.jpg`}  />
                                        <Feed.Content>
                                        <Feed.Summary  className="lato" >
                                        <a>{this.props.auth.user.username}</a> 
                                        <Feed.Date>{moment(message.date).fromNow()}</Feed.Date>
                                        </Feed.Summary>
                                        <Feed.Extra text >
                                            {message.message}
                                            {messages[defaultChat].price && key==0?
                                             <Message
                                             style={{margin:"10px 0px"}}
                                             icon='inbox'
                                             header='Custom Request'
                                             content={<span className="lato">Budget: ${messages[defaultChat].price}</span>}
                                           />
                                        :null}
                                        <small><Icon name="check" color="grey"/><Icon name="check" color="grey"/></small>
                                        </Feed.Extra>
                                        </Feed.Content>
                                        </Feed.Event>
                                        )):
                                        <Feed.Event >
                                        <Feed.Label image={`${process.env.PUBLIC_URL}/images/avatar.jpg`}  />
                                        <Feed.Content>
                                        <Feed.Summary  className="lato" >
                                        <a>Customer care</a> 
                                        <Feed.Date>{moment(this.state.user.regDate).fromNow()}</Feed.Date>
                                        </Feed.Summary>
                                        <Feed.Extra text >
                                        <Segment placeholder>
                                        <Header icon>
                                          <Icon name='inbox ' />
                                        </Header>
                                        <Segment.Inline>
                                          <Button compact color="orange" onClick={()=>this.props.history.push("/request")}>Send a request</Button>
                                        </Segment.Inline>
                                      </Segment>
                                        </Feed.Extra>
                                        </Feed.Content>
                                        </Feed.Event>
                                       }
                                      
                                    </Feed>  
                                </div>}
                                {messages.length && this.props.auth.isAuthenticated?
                                <div style={{padding:"40px 0px"}}>
                                   <Messagebox conversationID={messages[defaultChat]._id} updateChat={this.updateChat.bind(this)}/>
                                </div>
                                :null}
                                </Grid.Column>
                                    <Grid.Column >
                                        {loading?<div style={{padding:"200px 0px 10px"}}><Loader active="true" size="small" ></Loader></div>:
                                        <Profilecard {...this.props} user={this.state.user}/>
                                    }
                                        </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    {this.props.auth.isAuthenticated?null:
                    <Dimmer active>
                    <Header as='h2' icon inverted>
                                <Icon name='smile outline'  data-aos="fade-up"/>
                                <p data-aos="fade-up">You are one step closer! </p>
                            </Header>
                            <p>Sign in to continue</p>
                            <p>
                            <Button icon="sign-in" color="google plus" content="Sign in"  onClick={()=>this.props.history.push("/signin")}/>
                            <Button icon="user" color="instagram" content="Sign up"  onClick={()=>this.props.history.push("/signup")}/>
                            </p>
                    </Dimmer>}
                </Grid>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Chat)
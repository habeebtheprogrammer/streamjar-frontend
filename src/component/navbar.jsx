import React,{Component} from  "react"
import {Link} from "react-router-dom"
import {  Dimmer, Header, Icon, Grid, List, Image, Label, Dropdown,  } from 'semantic-ui-react'
import Fblogin from "./facebookauth"
import classnames from "classnames"
import setAuthorizationToken from "./auth"
import Sidenavbar from "./ui/sidenavbar";
export default class Navbar extends Component{
    constructor(props){
        super(props)
        this.state ={
            active:false
        }
        this.handleClose =this.handleClose.bind(this)
        this.handleOpen =this.handleOpen.bind(this)
        this.logout =this.logout.bind(this)
    }
   
    logout() {
		// e.preventDefault();
        setAuthorizationToken(false);
		localStorage.clear();
		window.location.reload();
    }
    handleOpen(){ this.setState({ active: true })}
    handleClose(){this.setState({ active: false })}

    render(){
        var token = window.localStorage.getItem("kaytoken")
        return(
            <div className="white xnav">
            <div className="ui container " style={{padding:"15px 0px"}}>
            <Grid columns="equal" >
                <Grid.Column width="4" mobile="12" tablet="4" computer="4">
                    <div style={{}} className="nav-brand">
                    <Link to="/" > <i className="cube icon"></i> <span >REACTANGLE</span></Link>
                    </div>
                   {/* <Sidenavbar /> */}
                </Grid.Column>
                <Grid.Column only="mobile" mobile="4" style={{paddingRight:"0px"}}>
                   <Sidenavbar auth={this.props.auth} logout={this.logout}/>
                    {/* <div className="btn-bars"><i className="sidebar icon"></i></div> */}
                </Grid.Column>
                <Grid.Column  textAlign="right" only="tablet computer" className="lato">
                    <List floated='right' horizontal >
                   
                    {this.props.auth.isAuthenticated?
                    <List.Item >
                    <Link to="/messages" style={{padding:"0px 10px"}}>Messages <span style={{color:"red"}}>*</span> </Link>
                    </List.Item>:null}
                    {this.props.auth.isAuthenticated?
                    <List.Item >
                    <Dropdown  text={<strong>Notification</strong>} floating  className='icon notification' >
                        <Dropdown.Menu>
                        <Dropdown.Header content='No new notification' />
                       
                        </Dropdown.Menu>
                    </Dropdown>
                    </List.Item>:null}
                    {this.props.auth.isAuthenticated?null:
                    <List.Item >
                     <button className={classnames('ui orange button compact basic')} role='button' onClick={()=>this.props.history.push('/request')}>
                        Send a request
                    </button>
                    </List.Item>
                    }
                    {this.props.auth.isAuthenticated ?
                    null:
                    <List.Item >
                    <button className={classnames('ui orange button compact basic')} role='button' onClick={()=>this.props.history.push('/signin')}>
                       Sign in
                    </button>
                    </List.Item>
                    }
                    {this.props.auth.isAuthenticated?
                    <List.Item >
                        <Link to="/dashboard" ><Image avatar src={`${process.env.PUBLIC_URL}/images/avatar.jpg`} />
                        <span style={{marginLeft:"5px"}} >{this.props.auth.user.username}</span>
                        </Link>
                    </List.Item>
                    :null}
                    <List.Item >
                    <Dropdown  icon={<Icon name="code" size="large" />}  floating  className='icon ' >
                        <Dropdown.Menu className="code">
                        <Dropdown.Header icon='tags' content='Explore' />
                        <Dropdown.Item icon='comment outline' text='Chat with us' onClick={()=>this.props.history.push('/messages')} />
                        <Dropdown.Item icon='snowflake outline' text='Have an idea?'  onClick={()=>this.props.history.push('/request')}/>
                        <Dropdown.Item icon='edit outline' text='Reviews'  onClick={()=>this.props.history.push('/reviews')}/>
                        <Dropdown.Divider />
                        {this.props.auth.isAuthenticated?
                        <Dropdown.Item icon='sign out' text='Sign out' onClick={this.logout}/>
                        :
                        <Dropdown.Item icon='user' text='Sign up' onClick={()=>this.props.history.push('/signup')}/>
                        }
                        </Dropdown.Menu>
                    </Dropdown>
                    {/* <Link to="/reviews"> <Icon name="code " size="large"/></Link> */}
                    </List.Item>
                    </List>
                </Grid.Column>

            </Grid>

                <Dimmer active={this.state.active} onClickOutside={this.handleClose} page>
                <Header as='h2' icon inverted>
                    <Icon name='smile outline'  data-aos="fade-up"/>
                    <p data-aos="fade-up">You are one step closer! </p>
                </Header>
                <p>Sign in with</p>
                
                <p><button class='ui google plus  button' role='button'>
                    <i   class='google plus icon medium' />Google plus
                 </button> 
                 {/* <Fblogin /> */}
                 <button class='ui facebook   button' role='button'>
                    <i   class='facebook  icon medium' />Facebook
                 </button>
                 </p>

                </Dimmer>
            </div>
            </div>
        )
    }
}
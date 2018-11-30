import React,{Component} from  "react"
import {Button, Grid, Icon, Loader} from 'semantic-ui-react'
import {Link} from "react-router-dom"
export default class Commingsoon extends Component{
    constructor(props){
        super(props)
    }


    render(){
     
        return(
                <div className="commingsoon" data-aos="fade-in">
                    <div >
                    <Grid columns="equal" container >
                    
                    <Grid.Row className="">
                        <Grid.Column textAlign="center" style={{padding:"150px 10px 100px",textTransform:"uppercase"}}>
                            <h1><Icon name="settings" size="big" /></h1>
                            <h2>Construction in progress</h2>
                            <Button inverted circular icon="home" onClick={()=>window.location.assign('/')}/>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                   
                  
                   </div>
                </div>
        )
    }
}
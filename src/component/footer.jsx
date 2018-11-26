import React,{Component} from  "react"
import {Button} from 'semantic-ui-react'

export default class Footer extends Component{

    render(){
        return(
                <footer style={{} } >
                    <div >
                    <div className="side-widget"  data-aos="zoom-in-right">
                   <div class='ui computer vertically reversed grid'>
                        <div class='row'>
                            <div class='column'><Button circular color='facebook' icon='facebook' /></div>
                        </div>
                        <div class='row'>
                            <div class='column'><Button circular color='twitter' icon='twitter' /></div>
                        </div>
                        <div class='row'>
                            <div class='column'><Button circular color='google plus' icon='google plus' /></div>
                        </div>
                        <div class='row'>
                            <div class='column'><Button circular color='linkedin' icon='linkedin' /></div>
                        </div>
                        </div>
                   </div>
                    <div style={{textAlign:"right"}}><small >ReactAngle © 2018 | all right reserved</small></div>
                   
                  
                   </div>
                </footer>
        )
    }
}
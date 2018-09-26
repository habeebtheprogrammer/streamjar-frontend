import React, {Component} from "react"
import Interest from "./interest"
import Knowledge from "./knowledge"
import Languages from "./languages"
import Skillset from "./skillset"
import jwt from "jsonwebtoken"
import apiUrl from "../../../config"
import axios from "axios"
export default class Setup extends Component{
    constructor(props){
        super(props);
        this.state={
            interest:[],
            knowledge:[],
            skillset:[],
            languages:[],
            error:""
        }
        this.interest = this.interest.bind(this)
        this.languages = this.languages.bind(this)
        this.skillset = this.skillset.bind(this)
        this.knowledge = this.knowledge.bind(this)
        this.submit = this.submit.bind(this)
    }

    interest(interest){
        var values=[]
        interest.map((item)=>{values.unshift(item.value)})
        this.setState({interest:values})
    }
    knowledge(knowledge){
        var values=[]
        knowledge.map((item)=>{values.unshift(item.value)})
        this.setState({knowledge:values})
    }
    skillset(skillset){
        var values=[]
        skillset.map((item)=>{values.unshift(item.value)})
        this.setState({skillset:values})
    }
    languages(languages){
        var values=[]
        languages.map((item)=>{values.unshift(item.value)})
        this.setState({languages:values})
    }
    submit(e){
        var {interest,skillset,languages,knowledge} = this.state
        e.preventDefault();
        let token = localStorage.getItem("kaytoken");
        if(interest.length===0|| skillset.length===0||knowledge.length===0||languages.length===0)
        return this.setState({error:"Please complete the form"})
        axios.post(`${apiUrl}/api/updateProfile`,{...this.state, "token": token}).then((res) => {
            if (res.data.success) {
                window.localStorage.setItem("setup",true)
               window.location.reload();
            }
        }).catch((err)=>this.setState({error:"An error has occured"}))
    
    }
    render(){
        return(
            <div className="setting-up" style={{padding:"20px 10px"}}>
                    <div style={{padding:"5px 0px"}}>
                        Set up your profile
                    </div>
                    <form onSubmit={this.submit}>
                        <div style={{padding:"5px 0px"}}>
                        <small>Skillset</small>
                        <Skillset skillset={this.skillset}/>
                       </div>
                       <div style={{padding:"5px 0px"}}>
                        <small>Things i know </small>
                        <Knowledge  knowledge={this.knowledge}/>
                       </div>
                       <div style={{padding:"5px 0px"}}>
                        <small>Things i am interested in</small>
                        <Interest  interest={this.interest}/>
                       </div>
                       <div style={{padding:"5px 0px"}}>
                        <small>Languages i am fluent in</small>
                        <Languages  language={this.languages}/>
                       </div>
                       {this.state.error?
                       <div style={{padding:"5px 0px"}}>
                       <small>{this.state.error}</small>
                       </div>:null}
                       <div style={{padding:"5px 0px"}}>
                       <button type="button" type="submit" className="btn btn-default btn-xs changerd">Save</button>
                       </div>
                       </form>
                       <style>
                           {`
                            .setting-up .css-1aya2g8,.setting-up .css-2o5izw{
                                border:1px solid #e8e8e8 !important;
                                box-shadow: none !important;
                                opacity: 1;
                                outline:0px !important;
                                background:#f7fafc !important;
                                min-height: 32px !important;
                              }
                              .setting-up .css-10nd86i:focus{
                                outline:0px !important;
                                border:1px solid #e8e8e8 !important;
                                opacity: 1;
                                box-shadow: none !important;
                              }
                           `}
                       </style>
                    </div>
        )
    }
}
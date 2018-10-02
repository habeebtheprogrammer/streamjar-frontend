import React, { Component } from 'react';
import {Link} from "react-router-dom"
import classnames from "classnames"
import CreatableSelect from 'react-select/lib/Creatable';
const components = {
  DropdownIndicator: null,
};

const createOption = (label) => ({
  label,
  value: label,
});

export default class CreatableInputOnly extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue: '',
      value: [],
      showOption:false,
      showMesg:false,
      type:window.localStorage.getItem("searchSelector")||"people",
      title:"",
    };
    this.option = this.option.bind(this)
    this.showMesg = this.showMesg.bind(this)
    this.select = this.select.bind(this)
    this.submit=this.submit.bind(this)
  }
  
  option(){
    this.setState({showOption:!this.state.showOption})
}
showMesg(){
    this.setState({showMesg:!this.state.showMesg})
}
typing(e){
    this.setState({ [e.target.name]: e.target.value })
}
submit(e){
    e.preventDefault();
    var url=""; var alp = ["a","b","c"]
      this.state.value.map((query,key)=>{
        if(alp.length > key) url += alp[key]+"="+query.value+"&"
    })

    window.location.assign(`/search?${url}type=${this.state.type}`)
}
select(){
   var searchSelector = localStorage.setItem("searchSelector",this.state.type);
   if(this.state.type==="people") return <small style={{paddingRight:"10px"}}> People </small>
   else if(this.state.type==="community") return <small style={{paddingRight:"10px"}}> Community </small>
   else if(this.state.type==="thread") return <small style={{paddingRight:"10px"}}> Thread </small>
   else if(this.state.type==="events") return <small style={{paddingRight:"10px"}}> Events </small>
   else if(this.state.type==="knowledge") return <small style={{paddingRight:"10px"}}> Knowledge of</small>
   else if(this.state.type==="interest") return <small style={{paddingRight:"10px"}}> Interested in </small>
   else if(this.state.type==="skillset") return <small style={{paddingRight:"10px"}}> Skillset </small>
   else if(this.state.type==="languages") return <small style={{paddingRight:"10px"}}> Languages </small>
   else if(this.state.type==="marketplace") return <small style={{paddingRight:"10px"}}> Marketplace </small>
}
  handleChange = (value, actionMeta) => {
    console.group('Value Changed');
    console.log(value);
    console.groupEnd();
    this.setState({ value });
  };
  handleInputChange = (inputValue) => {
    this.setState({ inputValue });
  };
  handleKeyDown = (event) => {
    const { inputValue, value } = this.state;
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        console.group('Value Added');
        console.log(value);
        console.groupEnd();
        this.setState({
          inputValue: '',
          value: [...value, createOption(inputValue)],
        });
        event.preventDefault();
    }
  };
  render() {
    var url = new URL(window.location.href)
    var query = new URLSearchParams(url.search)
    var string = query.get("query")
    const { inputValue, value } = this.state;
    return (
      <div  className="pull-left" style={{width:"50%"}}>
     
      <form onSubmit={this.submit} className="pull-left" style={{marginTop:"5px",position:'relative',width:"100%",border:"1px solid #e8e8e8",background:"#f7fafc",}}>
      <CreatableSelect
        components={components}
        inputValue={inputValue}
        isClearable
        isMulti
        menuIsOpen={false}
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        onKeyDown={this.handleKeyDown}
        placeholder="Type something and press tab or enter"
        value={value}
      />
            <div className="navsearch-btn  " onClick={this.option} >
             {this.select()}  <span className="caret"></span> 
              </div>
            <div className={classnames("option-menu tooltips",this.state.showOption?"":"hide")} style={{}}>
            <p  onClick={()=>this.setState({type:"people",showOption:false})}>People <span className="pull-right tt  bgred" >32323</span></p>
            <p onClick={()=>this.setState({type:"thread",showOption:false})}>  Thread <span className="pull-right tt bgred bgskyblue" >32323</span> </p>
            <p onClick={()=>this.setState({type:"community",showOption:false})}>  Community <span className="pull-right tt bgyellow" >32323</span></p>
            <p onClick={()=>this.setState({type:"events",showOption:false})}> Events <span className="pull-right tt bggrey" >32323</span> </p>
            <p onClick={()=>this.setState({type:"knowledge",showOption:false})}> Knowledge of  </p>
            <p onClick={()=>this.setState({type:"interest",showOption:false})}> Interest  </p>
            <p onClick={()=>this.setState({type:"skillset",showOption:false})}> Skillset  </p>
            <p onClick={()=>this.setState({type:"marketplace",showOption:false})}> Marketplace  </p>
        </div>
        <button type="submit" className="btn btn-default pull-right changerd " style={{height:"33px",border:"none",background:"#f7fafc",borderRadius:"0px",borderLeft:"1px solid #e8e8e8"}}>
      <i className="fa fa-search"></i>
      </button>
      </form>
   
      <style>{`
       .navbar .css-2o5izw{
          border:0px !important;
          box-shadow: none !important;
          border: 0px !important;
          opacity: 1;
          outline:0px !important;
          background:#f7fafc !important;
          min-height: 32px !important;

        }
        .navbar   .css-10nd86i{
          position:relative;
          float:left; 
          width:76%;
        }
         .css-1aya2g8{
          border:0px;
          background: #f7fafc;
          min-height: 32px !important;
        }
         .css-1wy0on6 svg{
          height:10px !important
        }
         .css-xwjg1b{
          background:rgb(237, 241, 245);
        }
         .changerd:hover{
          background:indianred !important;
          border:none;
          color:#fff;
          transition: 0.1s ease-in;
          -moz-transition: 0.1s ease-in;
        }
        `}
      </style>
      </div>
    );
  }
}
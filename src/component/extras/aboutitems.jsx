import React,{Component} from "react";
export class Interest extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                {this.props.interest.map((interest)=><div>{interest}</div>)}
            </div>
        )
    }
}
export class Status extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                {this.props.status}
                
                {/* <div className="input-group">
                    <input type="text" className="form-control" id="exampleInputAmount" placeholder="Search" />
                    <span className="input-group-btn">
                        <button type="button" className="btn btn-default">Go!</button>
                    </span>
                </div> */}
                
            </div>
        )
    }
}

export class Knowledge extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                {this.props.knowledge.map((interest)=><div>{interest}</div>)}
            </div>
        )
    }
}

export class Languages extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                {this.props.languages.map((interest)=><div>{interest}</div>)}
            </div>
        )
    }
}

export class Skillset extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                {this.props.skillset.map((interest)=><div>{interest}</div>)}
            </div>
        )
    }
}
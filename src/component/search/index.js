import React, { Component } from 'react';
import axios from "axios"
import apiUrl from "../../config"
import Navbar from '../navbar';
import {connect} from "react-redux"
function mapStateToProps(state) {
    return {
        auth: state.auth,
    }
}

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.typing = this.typing.bind(this)
        this.applyFilter = this.applyFilter.bind(this)
    }
    componentWillMount() {
        var token = localStorage.getItem("jwToken")
        var friends =[];
             axios.get(`${apiUrl}/api/search${window.location.search}`).then((res) => {
                if(res.data.result && friends.username && res.data.type==="users"){
                var {result} = res.data
                this.setState({searching:false,result:{...this.state.result,users:result.users},friends})
            }
        })
            var url = new URL(window.location.href)
            var query = new URLSearchParams(url.search)
            var string = query.get("query")
         
    }
   
    applyFilter(e){
        e.preventDefault();
        var url = new URL(window.location.href)
            var query = new URLSearchParams(url.search)
            var a = query.get("a");
            var b = query.get("b");
            var c = query.get("c");
            var queries = a?`a=${a}`:""+b?`&b=${b}`:""+c?`&c=${c}`:""
            var type = query.get("type");
            var gender = this.state.gender
            window.location.assign(`/search?${queries}&type=${type}&gender=${gender}`)
    }
    typing(e){
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return (
            <div className="row">
              
            </div>
        );
    }
}

export default connect(mapStateToProps)(Search);
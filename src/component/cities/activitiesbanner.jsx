import React,{Component} from "react"
import {categories} from "../data";


export default class Activitiesbanner extends Component{
    constructor(props){
        super(props)
    }
componentWillMount() {
    this.navigate=this.navigate.bind(this)
}
    getimg(){
        if(this.props.match.params.id){
        var img = categories.filter((cat)=>cat.title===this.props.match.params.id.replace("_"," "));
        if(img.length) return img[0].img; else return null
        }
    }
    navigate(e){
        var {params} = this.props.match
        this.props.history.push(`/city/${params.city}/${e.target.value}`)
    }
    render(){
        return(
            <div>
                <section className="m_bg banner g_row0 t_white m_banner" style={{"backgroundImage":`url('${this.getimg()||process.env.PUBLIC_URL+'/images/search.jpeg'}')`}}>
        <div className="g_main g_col1">
            <div className="t_v_mid_box">
                <div className="t_v_mid">
                     <h1 className="g_ib g_left t_white" style={{textTransform:"capitalize"}}> <b> {this.props.match.params.id||this.props.match.params.city.replace("_"," ")} </b> </h1> 
                    <div className="g_rel sel_box t16 g_ib ">
	                    <div className="row with-forms">
                            <select  className="chosen-selectd" onChange={this.navigate}>
                       		<option>  Find An Activity </option>
								<option  value="shops">  Shops</option>
								<option value="hotels">  Hotels</option>
								<option value="restaurants">  Restaurants</option>
								<option value="fitness">  Fitness</option>
								<option value="events">  Events</option>
									<option>  Sports</option>
							</select>
                       </div>



                    </div>
                </div>
                <div className="t_v_mid">
                    <div className="g_ib g_right txt_shadow">
                        <div className="t_v_mid_box">
                            <div className="t_v_mid">
                                <span className="t20">Today,</span>
                            </div>
                            <div className="t_v_mid">
                                <span className="t20">27 Jun</span>
                            </div>
                            <div className="t_v_mid">
                                <span className="t22 t_white klook-icon-sun g_ib weather"><i className="sl sl-icon-sun"></i></span>
                            </div>
                            <div className="t_v_mid">
                                <span className="t20">31°C</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="float_box g_rel f_hidden">
            <ul className="t14 m_bg_white t_black g_row1" data-role="nav-toggle">
                <li><a data-id="all" className="j-tag-item" item="toggle"><i className="klook-icon-all-all t18"></i><p>Browse All</p></a></li>
                <li><a data-track-event="Destination Page|Left Menu List item Click" href="/city/2-hong-kong/1-cate/" data-id="1" className="j-tag-menu" item="toggle"><i className="klook-icon-all-1 t18"></i><p>Attractions &amp; Shows </p></a></li>
                <li><a data-track-event="Destination Page|Left Menu List item Click" href="/city/2-hong-kong/2-cate/" data-id="2" className="j-tag-menu" item="toggle"><i className="klook-icon-all-2 t18"></i><p>Tours &amp; Sightseeing</p></a></li>
                <li><a data-track-event="Destination Page|Left Menu List item Click" href="/city/2-hong-kong/3-cate/" data-id="3" className="j-tag-menu" item="toggle"><i className="klook-icon-all-3 t18"></i><p>Activities &amp; Experiences</p></a></li>
                <li><a data-track-event="Destination Page|Left Menu List item Click" href="/city/2-hong-kong/4-cate/" data-id="4" className="j-tag-menu" item="toggle"><i className="klook-icon-all-4 t18"></i><p>Food &amp; Dining</p></a></li>
                <li><a data-track-event="Destination Page|Left Menu List item Click" href="/city/2-hong-kong/5-cate/" data-id="5" className="j-tag-menu" item="toggle"><i className="klook-icon-all-5 t18"></i><p>Transport &amp; WiFi</p></a></li>
            </ul>
            <div className="list_btn" id="listBtn" data-track-event="Destination Page|Left Menu Btn Click">
                <i className="klook-icon-browse-all t_main"></i>
            </div>
        </div>
    </section>

    <section className="m_detail favlist g_row1">
        <div className="g_main">
        </div>
    </section>
            </div>
        )
    }
}
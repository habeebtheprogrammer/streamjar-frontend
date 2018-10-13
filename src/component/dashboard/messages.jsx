import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Footer from './footer';

export default class Messages extends Component {
    constructor() {
        super();
        this.state = {
      
        }
    }


   
    render() {
        return (
            <div className="dashboard-content">

		

            <div className="row">
                <div className="col-lg-12 col-md-12">
    
                    <div className="messages-container margin-top-0">
                        <div className="messages-headline">
                            <h4>Inbox</h4>
                        </div>
                        
                        <div className="messages-inbox">
    
                            <ul>
                                <li className="unread">
                                    <a href="dashboard-messages-conversation.html">
                                        <div className="message-avatar"><img src={`${process.env.PUBLIC_URL}/images/sonu.jpg`} alt="" /></div>
    
                                        <div className="message-by">
                                            <div className="message-by-headline">
                                                <h5>Kathy Brown <i>Unread</i></h5>
    
                                                <span>2 hours ago</span>
                                            </div>
                                            <p>Hello, I want to talk about your great listing! Morbi velit eros, sagittis in facilisis non, rhoncus posuere ultricies...</p>
                                        </div>
                                    </a>
                                </li>
    
                                <li className="unread">
                                    <a href="dashboard-messages-conversation.html">
                                        <div className="message-avatar"><img src={`${process.env.PUBLIC_URL}/images/pawandeep.jpg`} alt="" /></div>
    
                                        <div className="message-by">
                                            <div className="message-by-headline">
                                                <h5>John Doe <i>Unread</i></h5>
                                                <span>4 hours ago</span>
                                            </div>
                                            <p>Hello, I want to talk about your great listing! Morbi velit eros, sagittis in facilisis non, rhoncus posuere ultricies...</p>
                                        </div>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="dashboard-messages-conversation.html">
                                        <div className="message-avatar"><img src={`${process.env.PUBLIC_URL}/images/user.jpg`} alt="" /></div>
    
                                        <div className="message-by">
                                            <div className="message-by-headline">
                                                <h5>Thomas Smith</h5>
                                                <span>Yesterday</span>
                                            </div>
                                            <p>Hello, I want to talk about your great listing! Morbi velit eros, sagittis in facilisis non, rhoncus posuere ultricies...</p>
                                        </div>
                                    </a>
                                </li>
    
                                <li>
                                    <a href="dashboard-messages-conversation.html">
                                        <div className="message-avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70" alt="" /></div>
    
                                        <div className="message-by">
                                            <div className="message-by-headline">
                                                <h5>Mike Behringer</h5>
                                                <span>28.06.2017</span>
                                            </div>
                                            <p>Hello, I want to talk about your great listing! Morbi velit eros, sagittis in facilisis non, rhoncus posuere ultricies...</p>
                                        </div>
                                    </a>
                                </li>
    
                                <li>
                                    <a href="dashboard-messages-conversation.html">
                                        <div className="message-avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70" alt="" /></div>
    
                                        <div className="message-by">
                                            <div className="message-by-headline">
                                                <h5>Robert Baker</h5>
                                                <span>22.06.2017</span>
                                            </div>
                                            <p>Hello, I want to talk about your great listing! Morbi velit eros, sagittis in facilisis non, rhoncus posuere ultricies...</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="pagination-container margin-top-30 margin-bottom-0">
                        <nav className="pagination">
                            <ul>
                                <li><a href="#" className="current-page">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#"><i className="sl sl-icon-arrow-right"></i></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
    <Footer />
        </div>
	   )}

       }
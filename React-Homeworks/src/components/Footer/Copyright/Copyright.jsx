import React, { Component } from 'react';
import Logo from "../../Logo/Logo";
import "./Copyright.css";

class Copyright extends Component {
    render() {
        return (
            <div className="footer_copy flex-elem">
                <Logo />
                <h2><span>Takeaway & Delivery template</span><span>for small - medium businesses.</span></h2>
            </div>
        );
    }
}

export default Copyright;
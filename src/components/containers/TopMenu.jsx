import React from 'react';
import './TopMenu.css';

export default class TopMenu extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar main">
            <a className="appbrand"><span>{this.props.appAcronym}<span>{this.props.appName}</span></span></a>
                                    
            <ul className="topnav pull-right">           
                <li className="visible-desktop">
                    <a href="" className="glyphicons cogwheel"><i></i>Settings <span className="caret"></span></a>                   
                </li>
                <li className="account">
                    <a data-toggle="dropdown" href="form_demo.html?lang=en" className="glyphicons logout lock">
                        <span className="hidden-phone text">{this.props.userName}</span><i></i>
                    </a>
                </li>
            </ul>
        </div>
        );
    }


}
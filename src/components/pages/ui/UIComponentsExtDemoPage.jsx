import React from 'react';
import './UIComponentsDemoPage.css';

export default class UIComponentsDemoPage extends React.Component{
     
    render() {
        return (
          <div> {/*className="container">*/}
              <h2>Extended UI Components:</h2>
              
              <hr className="separator bottom" />
                <label> This needs Bootstratp.js as well</label>
                <div className="row">
                    <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
                            <span className="caret"></span></button>
                            <ul className="dropdown-menu">
                              <li><a href="#">HTML</a></li>
                              <li><a href="#">CSS</a></li>
                              <li><a href="#">JavaScript</a></li>
                            </ul>
                          </div>
                </div>
            </div>                     
        );
    }


}
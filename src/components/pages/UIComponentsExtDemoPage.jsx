import React from 'react';
import './WidgetPanelPage.css';
import './UIComponentsDemoPage.css';

export default class UIComponentsDemoPage extends React.Component{
     
    render() {
        return (
          <div className="container">
              <h2>Form UI Demo:</h2>
              
              <hr className="separator bottom" />
              <br/>
              <br/>
              <br/>
                
                <div className="widget-head">
                    <div className="heading-buttons">
                        <h3 className="glyphicons cart_in"><i></i> Controls</h3>					
                        <div className="clearfix"></div>
                    </div>
                </div>
              
                <hr className="separator bottom" />
                             
                <div className="widget widget-2">
                <div className="widget-head">
                  <h3 className="heading">Extensions</h3>
                </div>

                <div className="widget-body">  

                  <div className="row">
                      <div className="col-sm-4"> 
                        <h3>Checkboxes</h3>              
                          <input type="checkbox" className="form-check-input" id="exampleCheck1" /> Option1<br/>           
                          <input type="checkbox" className="form-check-input" id="exampleCheck2" /> Option2<br/>          
                          <input type="checkbox" className="form-check-input" id="exampleCheck3" /> Option3<br/>
                      </div>
                      
                      <div className="col-sm-4"> 
                          <h3>Radio</h3>
                          <input type="radio" className="form-check-input" id="exampleCheck3" name="radioChoice"/>Option1<br/>    
                          <input type="radio" className="form-check-input" id="exampleCheck3" name="radioChoice" />Option2<br/>                  
                          <input type="radio" className="form-check-input" id="exampleCheck3" name="radioChoice" /> Option3<br/>  
                      </div>

                      <div className="col-sm-4"> 
                          <h3>Drop Downs</h3>
                          <select style={{width: '70%'}} id="select2_1">
                              <optgroup label="Alaskan/Hawaiian Time Zone">
                                  <option value="AK">Alaska</option>
                                  <option value="HI">Hawaii</option>
                              </optgroup>
                              <optgroup label="Pacific Time Zone">
                                  <option value="CA">California</option>
                                  <option value="NV">Nevada</option>
                                  <option value="OR">Oregon</option>
                                  <option value="WA">Washington</option>
                              </optgroup>
                              <optgroup label="Mountain Time Zone">
                                  <option value="AZ">Arizona</option>
                                  <option value="CO">Colorado</option>
                                  <option value="ID">Idaho</option>
                                  <option value="MT">Montana</option><option value="NE">Nebraska</option>
                                  <option value="NM">New Mexico</option>
                                  <option value="ND">North Dakota</option>
                                  <option value="UT">Utah</option>
                                  <option value="WY">Wyoming</option>
                              </optgroup>
                              <optgroup label="Central Time Zone">
                                  <option value="AL">Alabama</option>
                                  <option value="AR">Arkansas</option>
                                  <option value="IL">Illinois</option>
                                  <option value="IA">Iowa</option>
                                  <option value="KS">Kansas</option>
                                  <option value="KY">Kentucky</option>
                                  <option value="LA">Louisiana</option>
                                  <option value="MN">Minnesota</option>
                                  <option value="MS">Mississippi</option>
                                  <option value="MO">Missouri</option>
                                  <option value="OK">Oklahoma</option>
                                  <option value="SD">South Dakota</option>
                                  <option value="TX">Texas</option>
                                  <option value="TN">Tennessee</option>
                                  <option value="WI">Wisconsin</option>
                              </optgroup>
                              <optgroup label="Eastern Time Zone">
                                  <option value="CT">Connecticut</option>
                                  <option value="DE">Delaware</option>
                                  <option value="FL">Florida</option>
                                  <option value="GA">Georgia</option>
                                  <option value="IN">Indiana</option>
                                  <option value="ME">Maine</option>
                                  <option value="MD">Maryland</option>
                                  <option value="MA">Massachusetts</option>
                                  <option value="MI">Michigan</option>
                                  <option value="NH">New Hampshire</option><option value="NJ">New Jersey</option>
                                  <option value="NY">New York</option>
                                  <option value="NC">North Carolina</option>
                                  <option value="OH">Ohio</option>
                                  <option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option>
                                  <option value="VT">Vermont</option><option value="VA">Virginia</option>
                                  <option value="WV">West Virginia</option>
                              </optgroup>
                          </select>
                          <br/>
                          <br/>

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
                </div>
              </div>


          </div>
        );
    }


}
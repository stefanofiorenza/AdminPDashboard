import React from 'react';
import './UIComponentsDemoPage.css';

export default class UIComponentsDemoPage extends React.Component{
     
    render() {
        return (
          <div> {/* className="container"> (needed in standalone)*/}
              <h2>Form UI Demo:</h2>
              
              <hr className="separator bottom" />
              <br/>
              <br/>
                             
              <div className="widget-head">
                    <div className="heading-buttons">
                        <h3 className="glyphicons cart_in"><i></i> Controls</h3>					
                        <div className="clearfix"></div>
                    </div>
                </div>
              
                <hr className="separator bottom" />
              
                <br/>            

                <div className="widget widget-2">
                  <div className="widget-head">
                    <h3 className="heading">Form Input Controls</h3>
                  </div>

                  <div className="widget-body">                 
                    <form action="#">     
              
                      <div class="form-group">
                            <label for="email">Ordinary Text:</label>
                            <input type="text" className="form-control" id="ordinaryText" />
                        </div>

                        <div class="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" className="form-control" id="email" />
                        </div>

                        <div className="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" className="form-control" id="pwd" />
                        </div>

                        <label for="msg">Email:</label>
                        <div className="input-group">                       
                          <span className="input-group-addon">@</span>
                          <input id="msg" type="text" className="form-control" name="msg" placeholder="Additional Info" />                     
                        </div>
                        <br/>
                      
                        <label for="cost">Cost:</label>
                        <div className="input-group">                      
                          <span className="input-group-addon">$</span>
                          <input id="cost" type="text" className="form-control" name="msg" placeholder="Additional Info" />
                          <span className="input-group-addon">.00</span>
                        </div>
                        <br/>
                        
                        <label>Sizing by columns</label>
                        <div className="form-group">
                          <div className="col-xs-2">
                            <label for="ex1">col-xs-2</label>
                            <input className="form-control" id="ex1" type="text" />
                          </div>
                          <div className="col-xs-4">
                            <label for="ex1">col-xs-4</label>
                            <input className="form-control" id="ex1" type="text" />
                          </div>

                          <div className="col-xs-6">
                            <label for="ex1">col-xs-6</label>
                            <input className="form-control" id="ex1" type="text" />
                          </div>
                        </div>
                        <br/>  
                        <br/>  
                      </form>
                  </div>

                </div>
                <br/>
                <br/>
                
                <div className="widget widget-2">
                <div className="widget-head">
                  <h3 className="heading">Options</h3>
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
                        
                      </div>
                  </div>
                </div>
              </div>

              <div className="widget widget-2">
                <div className="widget-head">
                  <h3 className="heading">Buttons</h3>
                </div>

                <div className="widget-body" >  
                    <div className="row">
                          <div className="col-sm-12" >
                              <h4>Buttons</h4>                             
                                <button type="button" className="btn" style={{marginLeft:4}}>Basic</button>  
                                <button type="button" className="btn btn-default" style={{marginLeft:4}}>Default</button> 
                                <button type="button" className="btn btn-primary" style={{marginLeft:4}}>Primary</button>  
                                <button type="button" className="btn btn-success" style={{marginLeft:4}}>Success</button> 
                                <button type="button" className="btn btn-info" style={{marginLeft:4}}>Info</button> 
                                <button type="button" className="btn btn-warning" style={{marginLeft:4}}>Warning</button> 
                                <button type="button" className="btn btn-danger" style={{marginLeft:4}}>Danger</button> 
                                <button type="button" className="btn btn-link" style={{marginLeft:4}}>Link</button>  
                                <button type="button" className="btn btn-primary active" style={{marginLeft:4}}>Active Primary</button>
                                <button type="button" className="btn btn-primary disabled" style={{marginLeft:4}}>Disabled Primary</button>                             
                          </div>                    
                    </div>
                    <br/>
                    <br/>
                    <div className="row">
                          <div className="col-sm-12">
                              <h4>Button Groups</h4>
                                <div className="btn-group">
                                  <button type="button" className="btn btn-primary">Apple</button>
                                  <button type="button" className="btn btn-primary">Samsung</button>
                                  <button type="button" className="btn btn-primary">Sony</button>
                                </div>
                          </div>                    
                    </div>
                    <br/>
                    <br/>
                    <div className="row">
                          <div className="col-sm-12">
                              <h4>Other Button tags (a, input) Groups</h4>
                              <a className="btn btn-primary" href="#" role="button" style={{marginLeft:4}} >Link</a>
                              <button className="btn btn-primary" type="submit" style={{marginLeft:4}}>Button</button>
                              <input className="btn btn-primary" type="button" value="Input" style={{marginLeft:4}}/>
                              <input className="btn btn-primary" type="submit" value="Submit" style={{marginLeft:4}}/>
                              <input className="btn btn-primary" type="reset" value="Reset" style={{marginLeft:4}}/>
                          </div>                    
                    </div>
                    <br/>
                    <br/>
                    <div className="row">
                          <div className="col-sm-8">
                              <h4>Button Extended</h4>                              
                                <a className="btn btn-danger btn-icon glyphicons circle_arrow_right" href="#" style={{marginLeft:4}}><i></i>Danger</a>
                                <a className="btn btn-success btn-icon glyphicons leaf" href="#" style={{marginLeft:4}}><i></i>Success</a>
                                <a className="btn btn-warning btn-icon glyphicons circle_exclamation_mark" style={{marginLeft:4}}><i></i>Warning</a>
                                <a className="btn btn-info btn-icon glyphicons circle_exclamation_mark" style={{marginLeft:4}}><i></i>Info</a>
                                <a className="btn btn-inverse btn-icon glyphicons circle_exclamation_mark" style={{marginLeft:4}}><i></i>Inverse</a>                                                            
                          </div>                    
                    </div>
                 
                </div>

                </div> {/*widget-2 end */}

                <div className="widget widget-2">
                    <div className="widget-head">
                      <h3 className="heading">Ext Controls</h3>
                    </div>

                    <div className="widget-body" > 
                        
                    </div>
                </div>
             
          </div>
        );
    }


}
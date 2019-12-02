import React from 'react';
import './WidgetPanelPage.css';

export default class WidgetPanelPage extends React.Component{
     
    render() {
        return (
          <div> {/*className="container">*/}
            <h2>Panels Widget Demo:</h2>
            
            <hr className="separator bottom" />
            <br/>
            <h3>Widget Demo:</h3>
            <br/>
            <br/>
              
              <div className="widget-head">
                  <div className="heading-buttons">
                      <h3 className="glyphicons cart_in"><i></i> Widget Header With Icon</h3>					
                      <div className="clearfix"></div>
                  </div>
              </div>
            
              <hr className="separator bottom" />
            
              <div className="widget-body" style={{padding: 10}} > 
                  <div className="row">
                    <h3>widget-body:</h3> 
                  </div>

                  <div className="row">
                  
                    <div className="col-sm-4"> 
                      <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. 
                      Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                      </p>
                    </div>

                    <div className="col-sm-4"> 
                      <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. 
                      Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                      </p>
                    </div>

                    <div className="col-sm-4"> 
                      <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. 
                      Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                      </p>
                    </div>
                  
                  </div>
              </div>
              
              <br/>
              <br/>
              <br/>

              <div className="widget widget-2">
                <div className="widget-head">
                  <h3 className="heading">Widget2 Panel Elements</h3>
                </div>
                <div className="widget-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. 
                    Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
              </div>



              <br/>
              <br/>
              <br/>

              <div className="widget widget-3">
                <div className="widget-head">
                  <h3 className="heading">Widget3 Panel Elements</h3>
                </div>
                <div className="widget-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. 
                    Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
              </div>

              <br/>
              <br/>
              <br/>

              <div className="widget widget-4">
                <div className="widget-head">
                  <h3 className="heading">Widget4 Panel Elements</h3>
                </div>
                <div className="widget-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. 
                    Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
              </div>

          </div>
        );
    }


}
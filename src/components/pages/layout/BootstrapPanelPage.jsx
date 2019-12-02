import React from 'react';

export default class BootstrapPanelPage extends React.Component{
     
    render() {
        return (
            <div> {/*className="container">*/}
            <h2>Panels with Contextual Classes</h2>
            <div className="panel-group">
              <div className="panel panel-default">
                <div className="panel-heading">Panel with panel-default class</div>
                <div className="panel-body">Panel Content</div>
              </div>
          
              <div className="panel panel-primary">
                <div className="panel-heading">Panel with panel-primary class</div>
                <div className="panel-body">Panel Content</div>
              </div>
          
              <div className="panel panel-success">
                <div className="panel-heading">Panel with panel-success class</div>
                <div className="panel-body">Panel Content</div>
              </div>
          
              <div className="panel panel-info">
                <div className="panel-heading">Panel with panel-info class</div>
                <div className="panel-body">Panel Content</div>
              </div>
          
              <div className="panel panel-warning">
                <div className="panel-heading">Panel with panel-warning class</div>
                <div className="panel-body">Panel Content</div>
              </div>
          
              <div className="panel panel-danger">
                <div className="panel-heading">Panel with panel-danger class</div>
                <div className="panel-body">Panel Content</div>
              </div>
            </div>
          </div>
        );
    }


}
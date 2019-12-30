import React from 'react';

// App Use Case Demos
import InvoicesPage from '../pages/demo/InvoicesPage.jsx';
import DetailsPage from '../pages/demo/DetailsPage.jsx';

/* UI Demo Pages */
import FormPage from '../pages/ui/FormPage.jsx';
import UIComponentsDemoPage from '../pages/ui/UIComponentsDemoPage.jsx';

/* Panels Demo Pages */
import BootstrapPanelPage from '../pages/panels/BootstrapPanelPage.jsx';
import WidgetPanelPage from '../pages/panels/WidgetPanelPage.jsx';

/* Tables Demo Pages */
import TableBasicPage from '../pages/tables/TableBasicPage.jsx';
import TablePaginationPage from '../pages/tables/TablePaginationPage.jsx';
import TableToolkitSearchPage from '../pages/tables/TableToolkitSearchPage.jsx';
import TableToolkitPaginationPage from '../pages/tables/TableToolkitPaginationPage.jsx';

/* Menu Components*/
import TopMenu from './TopMenu.jsx'
import SideMenu from './SideMenu.jsx';
import DefaultPage from './DefaultPage.jsx';

export default class CenteredLayout extends React.Component{
    

    render() {
        return (
            <div className="container">	
              <TopMenu appAcronym="Admin+" appName="Demo AdminPlus" userName="stefano.fiorenza" /> 
              <div id="wrapper">
                    <SideMenu/>        
                    <div id="content">                      
                        <TableToolkitSearchPage />      
                    </div>                    
                </div>  
            </div>
        );
    }


}
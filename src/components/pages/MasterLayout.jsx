import React from 'react';

// App Use Case Demos
import InvoicesPage from './demo/InvoicesPage.jsx';
import DetailsPage from './demo/DetailsPage.jsx';

/* UI Demo Pages */
import FormPage from './ui/FormPage.jsx';
import UIComponentsDemoPage from './ui/UIComponentsDemoPage.jsx';

/* Panels Demo Pages */
import BootstrapPanelPage from './layout/BootstrapPanelPage.jsx';
import WidgetPanelPage from './layout/WidgetPanelPage.jsx';

/* Tables Demo Pages */
import TableBasicPage from './tables/TableBasicPage.jsx';
import TablePaginationPage from './tables/TablePaginationPage.jsx';
import TableToolkitSearchPage from './tables/TableToolkitSearchPage.jsx';
import TableToolkitPaginationPage from './tables/TableToolkitPaginationPage.jsx';

/* Menu Components*/
import TopMenu from '../containers/TopMenu.jsx'
import SideMenu from '../containers/SideMenu.jsx';
import DefaultPage from './DefaultPage.jsx';

import './MasterLayout.css';

export default class MasterLayout extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> {/* className="container"> */}
                <TopMenu appAcronym="Admin+" appName="Demo AdminPlus" userName="stefano.fiorenza" />
                
                <div id="wrapper">
                    <SideMenu/>        
                    <div id="content">
                        {/* */}
                        <div className="container-inner">
                            <DetailsPage />    
                        </div>    
                    </div>                    
                </div>  
                
            </div>
        );
    }


}
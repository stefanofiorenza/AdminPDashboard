import React from 'react';


//import DefaultPage from './DefaultPage.jsx';


//import DataTablePageAddOn from './DataTablePageAddOn.jsx';
//demo
import InvoicesPage from './demo/InvoicesPage.jsx';
import DetailsPage from './demo/DetailsPage.jsx';

import FormPage from './ui/FormPage.jsx';
import UIComponentsDemoPage from './ui/UIComponentsDemoPage.jsx';

import PanelPage from './layout/PanelPage.jsx';
import WidgetPanelPage from './layout/WidgetPanelPage.jsx';

import TableBasicPage from './tables/TableBasicPage.jsx';
import TablePaginationPage from './tables/TablePaginationPage.jsx';
import TableToolkitPage from './tables/TableToolkitPage.jsx';
import TableToolkitPaginationPage from './tables/TableToolkitPaginationPage.jsx';

import TopMenu from '../containers/TopMenu.jsx'
import SideMenu from '../containers/SideMenu.jsx';
import DefaultPage from './DefaultPage.jsx';

export default class SingleComponentLayout extends React.Component{
    

    render() {
        return (
            <div className="container">	
              <TopMenu appAcronym="Admin+" appName="Demo AdminPlus" userName="stefano.fiorenza" /> 
              <div id="wrapper">
                    <SideMenu/>        
                    <div id="content">                      
                        <DefaultPage />      
                    </div>                    
                </div>  
            </div>
        );
    }


}
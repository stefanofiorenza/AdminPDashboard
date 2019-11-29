import React from 'react';

import TopMenu from '../containers/TopMenu.jsx'
import SideMenu from '../containers/SideMenu.jsx';
import DefaultPage from './DefaultPage.jsx';
import PanelPage from './layout/PanelPage.jsx';
import WidgetPanelPage from './layout/WidgetPanelPage.jsx';
import InvoicesPage from './demo/InvoicesPage.jsx';
import UIComponentsDemoPage from './ui/UIComponentsDemoPage.jsx';

import TableToolkitPaginationPage from './tables/TableToolkitPaginationPage.jsx';


import './MasterLayout.css';

export default class MasterLayout extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <TopMenu appAcronym="Admin+" appName="Demo AdminPlus" userName="stefano.fiorenza" />
                
                <div id="wrapper">
                    <SideMenu/>        
                    <div id="content">
                        {/* */}
                        <div className="container-inner">
                            <TableToolkitPaginationPage />    
                        </div>    
                    </div>                    
                </div>  
                
            </div>
        );
    }


}
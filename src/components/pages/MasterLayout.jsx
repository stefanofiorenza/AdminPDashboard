import React from 'react';

import TopMenu from '../containers/TopMenu.jsx'
import SideMenu from '../containers/SideMenu.jsx';
import DefaultPage from './DefaultPage.jsx';
import DetailsPage from './DetailsPage.jsx';
import DataTablePage from './DataTablePage.jsx';
import DataTablePageAddOn from './DataTablePageAddOn.jsx';
import InvoicesPage from './InvoicesPage.jsx';

export default class MasterLayout extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid fixed">		
                <TopMenu appAcronym="Admin+" appName="Demo AdminPlus" userName="stefano.fiorenza" />

                <div id="wrapper">
                    <SideMenu/>        
                    <div id="content">
                        {/* */}
                        <InvoicesPage />      
                    </div>                    
                </div>  
            </div>

        );
    }


}
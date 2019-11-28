import React from 'react';

import TopMenu from '../containers/TopMenu.jsx'
import SideMenu from '../containers/SideMenu.jsx';
import DefaultPage from './DefaultPage.jsx';
import DetailsPage from './DetailsPage.jsx';
import DataTablePage from './DataTablePage.jsx';
import DataTablePageAddOn from './DataTablePageAddOn.jsx';
import InvoicePage from './InvoicesPage.jsx';

export default class SingleComponentLayout extends React.Component{
    

    render() {
        return (
            <div className="container-fluid fixed">		
               <InvoicePage />
            </div>

        );
    }


}
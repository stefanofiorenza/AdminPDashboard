import React from 'react';

import TopMenu from '../containers/TopMenu.jsx'
import SideMenu from '../containers/SideMenu.jsx';
import DefaultPage from './DefaultPage.jsx';
import DetailsPage from './DetailsPage.jsx';
//import DataTablePage from './DataTablePage.jsx';
//import DataTablePageAddOn from './DataTablePageAddOn.jsx';
import InvoicesPage from './InvoicesPage.jsx';
import FormPage from './FormPage.jsx';
import PanelPage from './PanelPage.jsx';
import WidgetPanelPage from './WidgetPanelPage.jsx';
import UIComponentsDemoPage from './UIComponentsDemoPage.jsx';


export default class SingleComponentLayout extends React.Component{
    

    render() {
        return (
            <div className="container-fluid fixed">		
               <InvoicesPage />
            </div>
        );
    }


}
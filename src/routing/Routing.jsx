import React from 'react';
import { Route,Switch } from 'react-router-dom';

import TableBasicPage from '../components/pages/tables/TableBasicPage.jsx';
import TableToolkitSearchPage from '../components/pages/tables/TableToolkitSearchPage.jsx';
import TablePaginationPage from '../components/pages/tables/TablePaginationPage.jsx';
import TableToolkitPaginationPage from '../components/pages/tables/TableToolkitPaginationPage.jsx';

import FormPage from '../components/pages/ui/FormPage.jsx';
import UIComponentsDemoPage from '../components/pages/ui/UIComponentsDemoPage.jsx';

import DetailsPage from '../components/pages/demo/DetailsPage.jsx';
import InvoicesPage from '../components/pages/demo/InvoicesPage.jsx';

export default class Routing extends React.Component{
  
    render() {
        return (
            <Switch>
                <Route exact path="/"  render={(props) => <span>Default page</span>} />  
                
                {/* Tables Demo*/}
                <Route path="/table-basic" component={TableBasicPage}/>
                <Route path="/table-search" component={TableToolkitSearchPage}/>
                <Route path="/table-pagination" component={TablePaginationPage}/>
                <Route path="/table-all" component={TableToolkitPaginationPage}/>

                {/* UI Demo*/}

                <Route path="/ui-form" component={FormPage}/>
                <Route path="/ui-components" component={UIComponentsDemoPage}/>                

                 {/* Pages Demo*/}
                <Route path="/details" component={DetailsPage}/>
                <Route path="/invoices" component={InvoicesPage}/>               
            </Switch>
        );
    }


}
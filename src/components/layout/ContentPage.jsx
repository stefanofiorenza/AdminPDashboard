import React from 'react';
import { Route,Switch } from 'react-router-dom';

import DetailsPage from '../pages/demo/DetailsPage.jsx';
import InvoicesPage from '../pages/demo/InvoicesPage.jsx';
import Routing from '../../routing/Routing.jsx';

export default class ContentPage extends React.Component{
  
    render() {
        return (
           <span>
               <Routing/>
           </span>
        );
    }


}
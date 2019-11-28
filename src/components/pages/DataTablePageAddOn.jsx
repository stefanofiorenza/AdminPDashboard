/**
 * See for docs:
 * https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/getting-started.html
 * https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook
 * 
 * Toolkit additional component
 * https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/search-props.html
 */

import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import {productsData} from '../data/DataTableData.js';

const columns = [{
  dataField: 'id',
  text: 'Product ID',
  sort: true
}, {
  dataField: 'name',
  text: 'Product Name',
  sort: true
}, {
  dataField: 'price',
  text: 'Product Price'
},{  dataField: 'action',
    text: ''
}];


export default class DataTablePageAddOn extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (        
            <div class="row-fluid">            

                <div class="span12" > 

                            <div class="widget-head">
                                <div class="heading-buttons">
                                    <h3 class="glyphicons cart_in"><i></i> Table</h3>					
                                    <div class="clearfix"></div>
                                </div>
                            </div>

                            <hr class="separator bottom" />
                            <div class="widget-body" style={{padding: 10}} >  
                                <div class="row-fluid">
                                    <div class="span12">
                                        table goes here
                                        <br/>
                                        <br/>

                                        <ToolkitProvider
                                                keyField="id"
                                                data={ productsData }
                                                columns={ columns }
                                                striped
                                                hover
                                                condensed
                                                >
                                                {
                                                    props =>
                                                    <BootstrapTable { ...props.baseProps } />
                                                }
                                        </ToolkitProvider>
                                    </div>
                                </div>   
                            </div>
                </div>     
            </div>        
        );
    }


}
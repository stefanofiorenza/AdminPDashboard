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
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';

import {productsData} from '../../data/ProductsData.js';


const { SearchBar } = Search;

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


export default class TableToolkitSearchPage extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (        
            <div> {/* className="container"> (needed in standalone)*/}
            <h2>Table Toolkit (Search) Demo:</h2>

                <ToolkitProvider
                        keyField="id"
                        data={ productsData }
                        columns={ columns }
                        striped
                        hover
                        condensed
                        search
                        >
                        {
                            props =>(
                             <div>                                 
                                 <div className="row">     
                                     <div className="col-sm-8">
                                     </div>             
                                     <div className="col-sm-4">                                        
                                        <SearchBar { ...props.searchProps } />
                                     </div>
                                </div>                                  
                                <hr />
                                <BootstrapTable { ...props.baseProps } />
                           </div>)
                        }
                </ToolkitProvider>
                   
            </div>        
        );
    }


}
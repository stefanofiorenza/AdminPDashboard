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


import './TableToolkitPaginationPage.css';


import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'react-bootstrap-table2-paginator';

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
},{  
  dataField: 'action',
  text: ''
}];


const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    Showing { from } to { to } of { size } Results
  </span>
);

export default class TableToolkitPaginationPage extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {

        const options = {
            custom: true,
            paginationSize: 4,
            pageStartIndex: 1,
            firstPageText: 'First',
            prePageText: 'Back',
            nextPageText: 'Next',
            lastPageText: 'Last',
            nextPageTitle: 'First page',
            prePageTitle: 'Pre page',
            firstPageTitle: 'Next page',
            lastPageTitle: 'Last page',
            showTotal: true,
            totalSize: productsData.length
          };

        const contentTable = ({ paginationProps, paginationTableProps }) => (
          
            <div>            
              {/* <PaginationListStandalone { ...paginationProps } /> */}
              <ToolkitProvider
                keyField="id"
                columns={ columns }
                data={ productsData }
                search
              >
                {
                  toolkitprops => (
                    <div>
                
                      <div className="row">     
                          <div className="col-sm-8">
                          </div>             
                          <div className="col-sm-4">                                        
                            <SearchBar { ...toolkitprops.searchProps } />
                          </div>
                      </div>                                  
                     <br/>
                      <BootstrapTable
                        striped
                        hover
                        { ...toolkitprops.baseProps }
                        { ...paginationTableProps }
                      />
                    </div>
                  )
                }
              </ToolkitProvider>
              <PaginationListStandalone { ...paginationProps } />
            </div>
          );
          

        return (        
            <div>
              <h2>Table Toolkit (Search) and (Pagination) Demo:</h2>
              <PaginationProvider pagination={paginationFactory(options)} >
                  { contentTable }
              </PaginationProvider>              
            </div>        
        );
    }


}
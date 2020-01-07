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


import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone  } from 'react-bootstrap-table2-paginator';

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

const paginationConfig = {
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
  paginationTotalRenderer: customTotal,
  sizePerPageList: [{
    text: '10', value: 10
  }, {
    text: '25', value: 25
  }, {
      text: '50', value: 50
  }, {
      text: '100', value: 100
  }, {
    text: 'All', value: productsData.length
  }] // A numeric array is also available. the purpose of above example is custom the text
};



export default class TableToolkitPaginationPage extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {

        const contentTable = ({ paginationProps, paginationTableProps }) => {

          return (
            <div>
               
              <ToolkitProvider
                keyField="id"
                columns={ columns }
                data={ productsData }
                search
              >
               {
                 (toolkitprops)=>{

                  return   (
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

                  </div>);  


                 }
               }
              </ToolkitProvider>
                 
              <SizePerPageDropdownStandalone { ...paginationProps } />
              <PaginationListStandalone { ...paginationProps } /> 
            </div>
          );
        }
          

        return (        
            <div>
              <h2>Table Toolkit (Search) and (Pagination) Demo:</h2>
              <PaginationProvider pagination={paginationFactory(paginationConfig)} >
                  { contentTable }
              </PaginationProvider>              
            </div>        
        );
    }


}
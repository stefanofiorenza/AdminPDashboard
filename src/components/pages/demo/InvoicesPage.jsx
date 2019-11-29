/**
 * See for docs:
 *  https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook
 * 
 */

import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import {invoicesData} from '../../data/InvoicesData.js';
import './InvoicesPage.css'; 

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';

const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing { from } to { to } of { size } Results
    </span>
  );

const columns = [{
  dataField: 'id',
  text: 'Id',
  sort: true
}, {
  dataField: 'issuer',
  text: 'issuer',
  sort: true
}, {
  dataField: 'date',
  text: 'date'
}, {
    dataField: 'total',
    text: 'datotalte'
}, {
    dataField: 'approvedBy',
    text: 'approvedBy'
},{  dataField: 'action',
    text: ''
}];


const paginationOptions = {
    paginationSize: 10,
    pageStartIndex: 0,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
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
      text: 'All', value: invoicesData.length
    }] // A numeric array is also available. the purpose of above example is custom the text
  };

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    selected: [1, 3]
  };

export default class InvoicesPage extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = { selected: [0, 1] };
    }

    handleBtnClick = () => {
      if (!this.state.selected.includes(2)) {
        this.setState(() => ({
          selected: [...this.state.selected, 2]
        }));
      } else {
        this.setState(() => ({
          selected: this.state.selected.filter(x => x !== 2)
        }));
      }
    }
  
    handleOnSelect = (row, isSelect) => {
      if (isSelect) {
        this.setState(() => ({
          selected: [...this.state.selected, row.id]
        }));
      } else {
        this.setState(() => ({
          selected: this.state.selected.filter(x => x !== row.id)
        }));
      }
    }
  
    handleOnSelectAll = (isSelect, rows) => {
      const ids = rows.map(r => r.id);
      if (isSelect) {
        this.setState(() => ({
          selected: ids
        }));
      } else {
        this.setState(() => ({
          selected: []
        }));
      }
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
                                    <div class="span3">
                                    </div> 
                                    <div class="span9">
                                        table goes here
                                        <br/>
                                        <br/>
                                        {/*}
                                        <BootstrapTable keyField='id' data={ invoicesData } columns={ columns } 
                                        pagination={ paginationFactory(paginationOptions) }   selectRow={ selectRow } />
                                           */}

                                        <ToolkitProvider
                                                keyField="id"
                                                data={ invoicesData }
                                                columns={ columns }
                                                pagination={ paginationFactory(paginationOptions) }   
                                                selectRow={ selectRow } 
                                                search
                                                striped
                                                hover
                                                condensed
                                                >
                                                {
                                                    props => <BootstrapTable { ...props.baseProps } />
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
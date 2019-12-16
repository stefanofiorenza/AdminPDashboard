/**
 * See for docs:
 * https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/getting-started.html
 * https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook
 */

import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {productsData} from '../../data/ProductsData.js';




//1) Selectabla configuration 
/**
 *  add prop in selectRow={ selectRow } in BootstrapTable
 * 
 * */
const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    selected: [1, 3]
  };

//2) Custom format cell
/**
 *  add prop in selectRow={ selectRow } in BootstrapTable
 * 
 * */
const productDetails = (e)=> {   
    //console.log(e.target);
    var { id} = e.target;
    console.log("See Details for Id: "+id);
    //hashHistory.push('/contacts/details/'+id);
}

const formatProductDetailsButtonCell =(cell, row)=>{  
    let clickHandler=productDetails;
    var emptyContent = React.createElement('i',{id:row.id,onClick:clickHandler});			
    var aBtn = React.createElement('a',{id:row.id,className:"btnNtfcdDetails btn-action glyphicons eye_open btn-success", onClick:clickHandler}, emptyContent);
    return aBtn;	
}

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
      text:'',
      formatter: formatProductDetailsButtonCell
  }];



export default class BasicTablePage extends React.Component{
    
    constructor(props) {
        super(props);
    }

        

    render() {
        return (        
            <div> {/* className="container"> (needed in standalone)*/}
            <h2>Table Demo:</h2>

                <BootstrapTable 
                    keyField='id' data={ productsData } columns={ columns } 
                    striped
                    hover
                    condensed                                        
                    selectRow={ selectRow } 
                    />
                    {/* To add in BootstrapTable:
                    (1) selectRow={ selectRow } 
                    */}

                    
            </div>        
        );
    }


}
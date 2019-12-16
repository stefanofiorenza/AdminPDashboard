import React from 'react';

export default class DetailsPage extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> {/*className="container">*/}               
             
                <div className="widget-head">
                  <div className="heading-buttons">
                      <h3 className="glyphicons cart_in"><i></i> Add Product</h3>					
                      <div className="clearfix"></div>
                  </div>
                </div>

                <hr className="separator bottom" /> 
                <br/>
                <br/> 

                <div className="widget-body" style={{padding: 10}} > 

                     <div className="row">
                  
                        <div className="col-sm-3">  
                             <strong>Product</strong>
                             <p class="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>  

                        <div className="col-sm-6">  
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <form action="#">     
                                <div className="row">
                                    <div class="form-group col-sm-6">
                                        <label for="name">Name:</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div class="form-group col-sm-6">
                                        <label for="brand">Brand:</label>
                                        <input type="text" className="form-control" id="brand" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div class="form-group col-sm-6">
                                        <label for="price">Price:</label>
                                        <input type="text" className="form-control" id="price" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div class="form-group col-sm-6">
                                        <label for="quantity">Quantity:</label>
                                        <input type="text" className="form-control" id="quantity" />
                                    </div>
                                </div>

                                <hr class="separator bottom" />
                                <br/>
                                <br/>

                                <div class="buttons pull-right col-sm-6">
                                    <a href="" class="btn btn-default btn-icon glyphicons share"><i></i> Preview</a>
                                    <a href="" class="btn btn-primary btn-icon glyphicons ok_2"><i></i> Save</a>
                                </div>
                          
                            </form>    
                        </div>  

                        <div className="col-sm-3">                             
                        </div>  
                    </div>       
                              
                </div>  

        </div>      
        
        );
    }


}
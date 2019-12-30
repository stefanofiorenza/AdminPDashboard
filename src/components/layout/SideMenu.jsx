import React from 'react';
import { Link} from 'react-router-dom';
import './SideMenu.css';

export default class SideMenu extends React.Component{
 
    render() {

        
        const menuItemStyle = {
			height: 25,
			paddingTop:10,
			paddingRight:0,
			paddingBottom:5,
			paddingLeft: 5
        };

        return (
           <div id="menu" className="hidden-phone">
                <div id="menuInner">
                    <div id="search">
                        <input type="text" placeholder="Quick search ..." />
                        <button className="glyphicons search"><i></i></button>
                    </div>

                    <ul>
                        <li className="heading"><span>E Shop</span></li>
                        <li className="glyphicons search"><a href="finances.html?lang=en"><i></i><span>Search Products</span></a></li>
                    </ul>

                    <ul>
                        <li className="heading"><span>Tables</span></li>
                        <li className="glyphicons table" >
                            <Link to="/table-basic" >							
                                <i></i><span>Basic</span>
                            </Link>
						</li>
                        <li className="glyphicons table" >
                            <Link to="/table-search" >							
                                <i></i><span>Search</span>
                            </Link>
						</li>
                        <li className="glyphicons table" >
                            <Link to="/table-pagination" >							
                                <i></i><span>Pagination</span>
                            </Link>
						</li>
                        <li className="glyphicons table" >
                            <Link to="/table-all" >							
                                <i></i><span>All</span>
                            </Link>
						</li>                     	
                    </ul>	

                    <ul>
                        <li className="heading"><span>UI</span></li>	
                        <li className="glyphicons user_add" >
                            <Link to="/ui-form" >							
                                <i></i><span>Form</span>
                            </Link>
						</li>
                        <li className="glyphicons user_add" >
                            <Link to="/ui-components" >							
                                <i></i><span>UI Components</span>
                            </Link>
						</li>
                    </ul>


                    <ul>
                        <li className="heading"><span>Demo Pages</span></li>	
                        <li className="glyphicons gift" >
                            <Link to="/details" >							
                                <i></i><span>Add Product</span>
                            </Link>
						</li>
                        <li className="glyphicons user_add" >
                            <Link to="/invoices" >							
                                <i></i><span>Invoices</span>
                            </Link>
						</li>                       								
                    </ul>

                </div>
        </div>
        );
    }


}
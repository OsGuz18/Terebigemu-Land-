import React from 'react';
import TopBar from './TopBar';
import UltimoProducto from './UltimoProducto';
import ProductList from './ProductList';
import Footer from './Footer';

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <UltimoProducto />
                    <ProductList />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;
import React from 'react';

//import Imagen from "../../darth-vader.jpg"

function Ultimo(props){
    console.log(props)
    return(
        <React.Fragment>
            {/*<!-- Last Movie in DB -->*/}
            <div className="col-lg-6 mb-4">
			    <div className="card shadow mb-4">
			        <div className="card-header py-3">
		                <h5 className="m-0 font-weight-bold text-gray-800">Último producto creado</h5>
			        </div>
			        <div className="card-body">
                    <p>{props.ProductName}</p>
			            <div className="text-center">
				            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src=""  alt={props.Image}/>
			            </div>
			            <p>{props.productdetail.Description}</p>
			            <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Detalle del producto</a>
				    </div>
				</div>
			</div>
			{/*<!-- End content row last movie in Data Base -->*/}
        </React.Fragment>
    )
}
export default Ultimo;
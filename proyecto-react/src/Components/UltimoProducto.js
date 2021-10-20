import React from 'react';
import imagenFondo from '../assets/images/MarioKartDeluxe.jpg';
import CategoriasInDb from './CategoriasInDb';
import Totales from './Totales';
function UltimoProducto(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Tablero General</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<Totales />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Último producto creado</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={imagenFondo} alt="ultimo-producto-creado "/>
									</div>
									<p>Pasa con Mario Kart 8 Nintendo Switch Deluxe increíbles horas de diversión, porque este videojuego ahora te permitirá llevar dos objetos simultáneamente, además los pilotos cuentan con un volante inteligente, el cual les ayudará a no salirse de la increíble pista que Mario Kart 8 Nintendo Switch Deluxe posee, sin duda tu diversión la llevarás al máximo en cada ocasión que lo juegues. Descubre los circuitos inéditos, personajes, así como magníficos vehículos, te fascinará todo lo que Mario Kart 8 Nintendo Switch Deluxe tiene para ti </p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Detalle del producto</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<CategoriasInDb />

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default UltimoProducto;
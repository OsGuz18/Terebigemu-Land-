import React from 'react';
import './ProductList.css';



function productList(){
    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800" class="h1">Todos los productos</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4" class="tablaProducto">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" class='tabla' id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Categoría</th>
                                            <th>Precio ($)</th>
                                            <th>Descuento (%)</th>
											<th>Stock</th>
										</tr>
									</thead>
								
									<tbody>
										<tr>
											<td>01</td>
											<td>Mario Kart Deluxe</td>
											<td>Videojuego</td>
                                            <td>1,500.00</td>
											<td>15</td>
											<td>14</td>
										</tr>
										<tr>
											<td>02</td>
											<td>Doom</td>
											<td>Videojuego</td>
											<td>1,200.00</td>
											<td>10</td>
											<td>12</td>
										</tr>

										<tr>
											<td>03</td>
											<td>Sillón Simpson</td>
											<td>Figuras</td>
											<td>580.00</td>
											<td>5</td>
											<td>5</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}
export default productList;
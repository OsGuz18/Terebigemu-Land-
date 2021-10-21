import React,{Component} from 'react';
import './ProductList.css';
import ProductInDB from './ProductInDB';


class productList extends Component{
	constructor(){
		super()
		this.state={
			productsList:[]
		}
	}

	componentDidMount(){
		fetch("/api/products")
			.then((respuesta) =>{
				return respuesta.json()
			}).then((producto)=>{
				this.setState({productsList: producto.data})
			})
			.catch(error => console.log(error))
	}
    
	
	render(){
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
											{this.state.productsList.map((product,index)=>{
												return <ProductInDB {...product} key={index} />
											})}
										</tbody>
									</table>
								</div>
							</div>
						</div>            
			</React.Fragment>
		)
	}
}
export default productList;
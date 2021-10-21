import React,{Component} from 'react';
import imagenFondo from '../assets/images/MarioKartDeluxe.jpg';
import CategoriasInDb from './CategoriasInDb';
import Totales from './Totales';
import Ultimo from './Ultimo'
class UltimoProducto extends Component{
    constructor(){
		super()
		this.state={
				detail:[]
		}
	}
	
	componentDidMount(){
		let datos =[]
		let All
		let ultimoProducto
		fetch("/api/products")
		.then(respuesta => {return respuesta.json()})
		.then((reproducto)=>{
			All =reproducto.data
			ultimoProducto = All.pop()
			datos.push(ultimoProducto)
			this.setState({detail: datos})
			
		})
	}
	
	render(){
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
						{
                            this.state.detail.map((categ, index)=>{
                                return  <Ultimo  {...categ} key={index} />
                                })
                            }
	
							{/*<!-- Genres in DB -->*/}
							<CategoriasInDb />
	
							{/*<!--End Genres In Db-->*/}		
						</div>
					</div>
					{/*<!--End Content Row Top-->*/}
	
			</React.Fragment>
		)
	}

}
export default UltimoProducto;
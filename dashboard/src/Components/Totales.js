import React,{Component} from 'react';
import SmallCard from './SmallCard';

let productos = {
    color:   "info",
    titulo: "Total de Productos",
    valor: "",
    icono: "fas fa-gamepad",
}

let usuarios ={
    color:   "warning",
    titulo: "Total usuarios",
    valor: "",
    icono:  "fas fa-user",
}

let categorias = {
    color:   "danger",
    titulo: "Total categorías",
    valor: "",
    icono: "fas fa-boxes",
}

let cardProps = [productos,usuarios,categorias];


class Totales extends Component{
    constructor(){
        super()
        this.state={
            totales:[]
        }
    }


    componentDidMount(){
        let totales = []
        fetch("/api/users")
        .then(respuesta => { return respuesta.json()})
        .then(resuser =>{
            usuarios.valor=resuser.meta.total
            fetch("/api/products")
            .then(respuesta => {return respuesta.json()})
            .then(resproducts =>{
                productos.valor = resproducts.meta.total
                fetch("api/category")
                .then(respuesta => {return respuesta.json()})
                .then(rescategory =>{
                    categorias.valor= rescategory.meta.total
                    this.setState({ totales :totales})
                })
            })
        })
      


    }
    
    
    render(){
        return (
            <React.Fragment>
            {/*<!-- Content Row -->*/}
            <div className="row">
                {
                    cardProps.map((cardProps,index)=>{
                        return <SmallCard  {...cardProps}  key= {index}/>
                    })
                }      
            </div>
            </React.Fragment>
        )
    }
}
export default Totales;
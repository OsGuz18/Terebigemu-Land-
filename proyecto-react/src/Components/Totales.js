import React from 'react';
import SmallCard from './SmallCard';

let productos = {
    color:   "info",
    titulo: "Total de Productos",
    valor: 250,
    icono: "fas fa-gamepad",
}

let usuarios ={
    color:   "warning",
    titulo: "Total usuarios",
    valor: 740,
    icono:  "fas fa-user",
}

let categorias = {
    color:   "danger",
    titulo: "Total categorías",
    valor: 6,
    icono: "fas fa-boxes",
}

let cardProps = [productos,usuarios,categorias];


function Totales(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default Totales;
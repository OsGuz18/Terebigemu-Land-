import React, { Component } from 'react';
import Categoria  from './Categoria';

let categorias = [
    {categ: 'Consolas', Total:'6'},
    {categ: 'Revistas', Total:'12'},
    {categ: 'Ropa', Total:'8'},
    {categ: 'Figuras', Total:'5'},
    {categ: 'Videojuegos', Total:'8'}
]

class CategoriasInDb extends Component {
  render ()  {
      return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Categorías</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    categorias.map((categ, Total, index)=>{
                                        return  <Categoria  {...categ} {...Total} key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )
    }

}
export default CategoriasInDb;
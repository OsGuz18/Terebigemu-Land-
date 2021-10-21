import React from 'react';

function ProductInDB(props){
    return(
        <React.Fragment>
		    <tr>
				<td>{props.Product_ID}</td>
				<td>{props.ProductName}</td>
				<td>{props.productcategory.CategoryType}</td>
				<td>{props.Price}</td>
				<td>{props.Disccount} %</td>
                <td>{props.productdetail.Stock}</td>
			</tr>
        </React.Fragment>
    )
}
export default ProductInDB;
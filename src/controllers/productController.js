const path = require('path');
const fs = require('fs');  //incorporación del módulo file system

const productsFilePath = path.join(__dirname, '../data/products.json'); //
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); //constantes para el products.json


const controller = {
    
    productList: (req, res)=>{
        res.render("Products/productList")
    },
    
    
    productDetail:(req,res)=>{
        res.render("Products/productDetail")
    },
    

    createProduct:(req,res)=>{
        res.render("Products/createProduct")
    },

	store: (req, res) => {                                  /// método de almacenamiento dirigido hacia el productList
            let product={
                "id": date,
                "name":req.body.productName,
                "description": req.body.description,
                "Image": req.file.filename,
                "category": req.body.category,
                "subcateory":req.body.subcategory,
                "price": req.body.price,
                "discount":req.body.discount

            }

            productList.push(product);
            productListJSON = JSON.stringify(productList);

            fs.writeFileSync(productListFilePath, productListJSON);
            res.redirect("/productList");
	},


/*	editProduct: (req, res) => {
		res.render('editProduct');
	},

	update: (req, res) => {
		
	},


	destroy : (req, res) => {
	
	}*/
};

module.exports = controller;


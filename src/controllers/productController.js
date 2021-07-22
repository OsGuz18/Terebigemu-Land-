const path = require('path');
const fs = require('fs');  //incorporación del módulo file system

const productsFilePath = path.join(__dirname, '../data/products.json'); //
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); //constantes para el products.json


const controller = {
    
    productList: (req, res)=>{
        res.render("Products/productList",{productos:products})
    },
    
    
    productDetail:(req,res)=>{
        let productoDetalle;
        for(let producto of products){
            if(producto.id == req.params.id){
               productoDetalle = producto;
            }
        }
        res.render("Products/productDetail",{producto:productoDetalle});
    },
    

    createProduct:(req,res)=>{
        res.render("Products/createProduct")
    },

	store: (req, res) => {                                  /// método de almacenamiento dirigido hacia el productList
        id=products.length + 1
        console.log(req.file)
        let newproduct={}
        if(req.file){
             newproduct={
                id: Date.now() + id,
                name:req.body.name,
                description: req.body.description,
                category: req.body.category,
                subcateory:req.body.subcategory,
                price: parseFloat(req.body.price) ,
                discount:parseFloat(req.body.discount),
                Image: req.file.filename
            };
        }else{
                newproduct={
                id: Date.now() + id,
                name:req.body.name,
                description: req.body.description,
                category: req.body.category,
                subcateory:req.body.subcategory,
                price: parseFloat(req.body.price) ,
                discount:parseFloat(req.body.discount),
                Image: "pikachu.png"
            };
        }
        
        

        products.push(newproduct);
        productListJSON = JSON.stringify(products,null,2);

        fs.writeFileSync(productsFilePath, productListJSON);
        res.redirect("/");
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


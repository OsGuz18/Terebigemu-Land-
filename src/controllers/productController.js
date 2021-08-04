// Declaración de las constantes a utilizar 
const path = require('path'); //Requerimos la paquetería "path" incluida en node
const fs = require('fs');  //Requerimos la paquetería de filesystem incluida en node

const productsFilePath = path.join(__dirname, '../data/products.json'); //Definimos la ruta que contiene nuestra base de datos 
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); //Extraemos nuestros datos y los ponemos en formato de array

//Configuración de los métodos del controlador 
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

	store: (req, res) => {                                  
        id=products.length + 1
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


	editProduct: (req, res) => {
		let productoE=[];
        for(let producto of products){
            if(producto.id == req.params.id){
                productoE = producto;
            }
        }
        res.render('Products/editProduct',{producto: productoE});
	},

	update: (req, res) => {
		products.forEach(producto => {
            if(producto.id == req.params.id){
                if(req.file != undefined){
                    producto.name = req.body.name;
                    producto.description = req.body.description;
                    producto.Image = req.file.filename;
                    producto.category = req.body.category;
                    producto.subcateory = req.body.subcategory;
                    producto.price = parseFloat(req.body.price);
                    producto.discount = parseFloat(req.body.discount);
                }else{
                    producto.name = req.body.name;
                    producto.description = req.body.description;
                    producto.category = req.body.category;
                    producto.subcateory = req.body.subcategory;
                    producto.price = parseFloat(req.body.price);
                    producto.discount = parseFloat(req.body.discount);
                }
            }
        });
        fs.writeFileSync(productsFilePath,JSON.stringify(products,null,2))
        res.redirect("/products")
	},


	destroy : (req, res) => {
        let newJSON = products.filter(newProducts => {
            return(newProducts.id != req.params.id)
        });
        products = newJSON;
        fs.writeFileSync(productsFilePath,JSON.stringify(products,null,2));

        res.redirect("/products")
	}
};

module.exports = controller; //Exportación del controlador 


// Declaración de las constantes a utilizar 
const path = require('path'); //Requerimos la paquetería "path" incluida en node
const fs = require('fs');  //Requerimos la paquetería de filesystem incluida en node
let db = require('../database/models');
const productsFilePath = path.join(__dirname, '../data/products.json'); //Definimos la ruta que contiene nuestra base de datos 
// let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); //Extraemos nuestros datos y los ponemos en formato de array
const {validationResult} =require("express-validator");
const { Console } = require('console');

//Configuración de los métodos del controlador 
const controller = {
    
    productList: (req, res)=>{
        db.product.findAll()
        .then((resultado)=>{
            res.render("Products/productList",{productos:resultado})
        })
    },
    
    productDetail:(req,res)=>{
        let productoDetalle;

        let resultadoproducto=db.product.findByPk(req.params.id,{
            include: {association: "brand"}
        })

        let resultadodetalle= db.productdetail.findByPk(req.params.id)

        Promise.all([resultadoproducto,resultadodetalle])
        .then(([rproducto,rdetalle])=>{
            producto=rproducto.dataValues
            detalle=rdetalle.dataValues
            res.render("Products/productDetail",{
                producto:producto,
                detalle:detalle
            });
        })
        
        /*db.product.findByPk(req.params.id,{
            include: {association: "brand"}
        }).then((resultadoproducto)=>{
            db.productdetail.findOne({
                where:{
                    ProductDetail_ID: req.params.id
                }
            }).then((resultadodetalle)=>{
                producto=resultadoproducto.dataValues
                detalle=resultadodetalle.dataValues
                res.render("Products/productDetail",{
                    producto:producto,
                    detalle:detalle
                }); 
            })
        })
        /*for(let producto of products){
            if(producto.id == req.params.id){
               productoDetalle = producto;
            }
        }
        res.render("Products/productDetail",{producto:productoDetalle});*/
    },
    
    createProduct:(req,res)=>{

        db.brand.findAll()
        .then((marcas) =>{
            db.productcategory.findAll()
            .then((categorias) =>{
                
                return res.render("Products/createProduct",{
                    marcas:marcas,
                    categorias:categorias
                })
            })
        })
       // res.render("Products/createProduct")
    },

	store: (req, res) => {                                  
        
        let imagesDetails=[]
        let disscount = ""
        let errores =validationResult(req);
        

        if(req.files[1]){
            imagesDetails[0] = req.files[1].filename
        }else{
            imagesDetails[0] = "default_product.jpg"
        }
        if(req.files[2]){
            imagesDetails[1] = req.files[2].filename
        }else{
            imagesDetails[1] = "default_product.jpg"
        }
        if(req.files[3]){
            imagesDetails[2] = req.files[3].filename
        }else{
            imagesDetails[2] = "default_product.jpg"
        }
        if(req.files[4]){
            imagesDetails[3] = req.files[4].filename
        }else{
            imagesDetails[3] = "default_product.jpg"
        }

        if(req.body.disccount == ""){
            disccount="0"
        }
        if(errores.errors.length > 0){
            let marcas = db.brand.findAll()
            let categorias = db.productcategory.findAll()
           
           Promise.all([marcas,categorias])
            .then(([marca,categoria]) =>{
                res.render("Products/createProduct",{
                    errors:errores.mapped(),
                    oldData: req.body,
                    marcas:marca,
                    categorias:categoria
                })
            })
        }else{
            db.productdetail.create({
                Description: req.body.description,
                Ranking:req.body.ranking,
                Weight:req.body.weight,
                Size:req.body.size,
                Stock:req.body.stock,
                ImageDetail1:imagesDetails[0],
                ImageDetail2:imagesDetails[1],
                ImageDetail3:imagesDetails[2],
                ImageDetail4:imagesDetails[3]
            }).then(() =>{
                db.productdetail.findOne({
                    where:{
                        Description: req.body.description
                    }
                }).then((resultado)=>{
                    db.product.create({
                        ProductDetail_ID: resultado.dataValues.ProductDetail_ID,
                        ProductCategory_ID: req.body.category,
                        Brand_ID: req.body.brand,
                        ProductName:req.body.name,
                        Price:req.body.price,
                        Disccount: req.body.discount,
                        Image: req.files[0].filename
                    }).then(()=>{
                        res.redirect("/");
                    })
                })
            })

        }



            
            
            
            /*newproduct={
                id: Date.now() + id,
                name:req.body.name,
                description: req.body.description,
                category: req.body.category,
                subcateory:req.body.subcategory,
                price: parseFloat(req.body.price) ,
                discount:parseFloat(req.body.discount),
                Image: req.file.filename
            };
        
        
        products.push(newproduct);
        productListJSON = JSON.stringify(products,null,2);
        fs.writeFileSync(productsFilePath, productListJSON);
        res.redirect("/");*/
	},


	editProduct: (req, res) => {
		let productoE=[];

        db.product.findOne({
            where:{
                Product_ID:req.params.id
            }
        }).then((resultadoproducto)=>{
            db.productdetail.findOne({
                where:{
                    ProductDetail_ID:req.params.id
                }
            }).then((resultadodetalle)=>{
                producto=resultadoproducto.dataValues
                detalle=resultadodetalle.dataValues
                res.render('Products/editProduct',{
                    producto: producto,
                    detalle: detalle
                });
            })
        })
        /*for(let producto of products){
            if(producto.id == req.params.id){
                productoE = producto;
            }
        }
        res.render('Products/editProduct',{producto: productoE});*/
	},

	update: (req, res) => {
        
        db.productdetail.update({
            Description: req.body.description,
            Ranking:req.body.ranking,
            Weight:req.body.weight,
            Size:req.body.size,
            Stock:req.body.stock
        },{where:{ProductDetail_ID:req.params.id}
        }).then(() =>{
            db.productdetail.findOne({
                where:{
                    Description: req.body.description
                }
            }).then((resultado)=>{
                if(req.file != undefined){
                    console.log(req.params.id)
                    db.product.update({
                        ProductDetail_ID: resultado.dataValues.ProductDetail_ID,
                        ProductCategory_ID: req.body.category,
                        Brand_ID: req.body.brand,
                        ProductName:req.body.name,
                        Price:req.body.price,
                        Disccount: req.body.discount,
                        Image: req.file.filename
                    },{
                        where:{
                            Product_ID: req.params.id
                        }
                    }).then(() => {
                        res.redirect("/products");
                    })
                
                }else{
                    db.product.update({
                        ProductDetail_ID: resultado.dataValues.ProductDetail_ID,
                        ProductCategory_ID: req.body.category,
                        Brand_ID: req.body.brand,
                        ProductName:req.body.name,
                        Price:req.body.price,
                        Disccount: req.body.discount,
                    },{
                        where:{
                            Product_ID: req.params.id
                        }
                    }).then(()=>{
                        res.redirect("/products");
                    })
                }
            })
            
        })
        /*products.forEach(producto => {
            
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
        res.redirect("/products")*/

	},


	destroy : (req, res) => {

        db.product.destroy({
            where:{
                Product_ID:req.params.id
            }
        }).then(()=>{
            db.productdetail.destroy({
                where:{
                    ProductDetail_ID:req.params.id
                }
            })
        }).then(()=>{
            res.redirect("/products")
        })
       
        /*let newJSON = products.filter(newProducts => {
            return(newProducts.id != req.params.id)
        });
        products = newJSON;
        fs.writeFileSync(productsFilePath,JSON.stringify(products,null,2));

        res.redirect("/products")*/
	}
};

module.exports = controller; //Exportación del controlador 


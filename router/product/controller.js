const products = require('../../data/products.json')

const getAll = (req , res ) => {
    res.send({products});
 }
 const getById = (req , res ) => {
     const product = products.find(product => product.id == req.params.id);
     if(product == null){
         res.send('product doesn´t exist');
     }
     else{
         res.send(product);
     }
 }

 const insert = (req , res ) => {
     if(req.body.id <= products.length){
        res.send('existin order');
     }
     else{
         products.push(req.body);
         res.send(`added product: ${req.body.id}`);
     }
 }
 const upsert = (req , res ) => {
     const product = products.find(product => product.id == req.params.id);
     if(product == null) {
         res.send('product doesn`t exist');
     }
     else{
         products.splice(products.id-1,1,req.body);
         res.send(`product: ${products} upsert`);
     }
 }
 const update = (req , res ) => {
     const product = products.find(product => product.id == req.params.id);
     if(product == null){
        res.send('product doesn´t exist');
     }
     else{
         product[Object.keys(req.body)] = req.body[Object.keys(req.body)];
         res.send(product);
     }
 }
 const remove =(req , res ) => {
     const product = products.find(product => product.id == req.params.id);
     if(product == null){
         res.send('product dosn`t exist');
     }
     else{
         product.splice(product.id-1,1);
         res.send(`product: ${req.params.id} remove`);
     }
 }
 
 module.exports =  {
     getAll,
     getById,
     insert,
     upsert,
     update,
     remove
 }
const orders = require('../../data/orders.json');


const getAll = (req , res ) => {
    res.send({orders})
 }

 const getById = (req , res ) => {
     const order = orders.find(order => order.id == req.params.id);
     if(orders == null){
       res.send('order doesn´t exist');
     }
     else {
         res.send(order);
     }
 }

 const insert = (req , res ) => {
     if(req.body.id <= orders.lenght) {
        res.send('existing order');
     }
     else {
         orders.push(req.body);
         res.send(`added order: ${req.body.id}`);
     }
 }
 const upsert = (req , res ) => {
     const order = orders.find(order => order.id == req.params.id);
     if(order == null){
       res.send('order doesn´t exist');
     }
     else {
         orders.splice(orders.id-1,1,req.body);
         res.send(`order: ${orders} upsert`);
     }
 }
 const update = (req , res ) => {
     const order = orders.find(order => order.id == req.params.id);
     if(order == null){
         res.send('order doesn´t exist');
     }
     else{
         order[Object.keys(req.body)] = req.body[Object.keys(req.body)];
         res.send(order);
     }
 }
 const remove =(req , res ) => {
     const order = orders.find(order => order.id == req.params.id);
     if(order == null){
         res.send('order doesn´t exist');
     }
     else{
         order.splice(order.id-1,1);
         res.send(`order: ${req.params.id} remove`);
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
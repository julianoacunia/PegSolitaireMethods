const user = require('../../data/users.json');

const getAll = (req , res ) => {
   res.send(user)
}
const getById = (req , res ) => {
    const userf = user.find(userf => userf.id == req.params.id);
    if (userf == null) {
       res.send('user not found');
    }
    else{
        res.send(userf);
    }
}
const insert = (req , res ) => {
    if (req.body.id <= user.lenght) {
       res.send('existing user');
    }
    else {
        user.push(req.body);
        res.send(`added user ${req.body.name}!`);
    }
}
const upsert = (req , res ) => {
    const userupsert = user.find(userupsert => userupsert.id == req.params.id);
    if (userupsert == null) {
       res.send('user doesn´t exist');
    }
    else {
        user.splice(userupsert.id-1,1,req.body);
        res.send(`user: ${req.params.id} upsert`);
    }
}
const update = (req , res ) => { 
    const userupdate = user.find(userupdate => userupdate.id == req.params.id);
    if (userupdate == null) {
       res.send('user doesn´t exist');
    }
    else {
        userupdate[Object.keys(req.body)] = req.body[Object.keys(req.body)];
        res.send(userupdate);
    }
}
const remove =(req , res ) => {
    const useremove = user.find(useremove => useremove.id == req.params.id);
    if(useremove == null) {
        res.send('user doesn´t exist');
    }
    else {
        user.splice(useremove.id-1,1);
        res.send(`user: ${req.params.id} remove`);
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
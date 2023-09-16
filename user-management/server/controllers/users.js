const db = require('../models/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const user_managements = db.users;
function getAllUsers(req,res){
    user_managements.findAll().then((data)=>{
        //console.log(data[0]["dataValues"]);
        return res.status(201).send(data);
    }).catch((err)=>{
        return res.status(500).send({
            message:'internal server error'
        })
    }
    )    
}
async function getUserDetails(req,res){
    const id = req.params.id;
    const data = await user_managements.findAll({where:{id:id}});
    return res.status(201).send(data);
}
async function userUpdate(req,res){
    const id = req.params.id;
    const result = await user_managements.update(req.body,{where:{id:id}});
    res.status(201).send(result);
}
async function deleteUser(req,res){
    const id = req.params.id;
    const result = await user_managements.destroy({where:{id:id}});
    return res.status(201).send({
        message:'delete sucessfully',
        data:result
    });
}
async function addUser(req,res){
    let {name,email,password,total_orders,image} = req.body;
    password  = await bcrypt.hash(password,10);
    if(!name || !email || !password || !total_orders || !image){
        console.log('first if');
        return res.status(400).json({
            message:'bad request'
        })
    }else{
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let created_at = date+' '+time;

    user_managements.create({name:name,email:email,password:password,
        image:image,total_orders:total_orders,created_at:created_at}).then(
        (data)=>{
            console.log('successs');
            return res.status(200).send(data)
        }
    ).catch((err)=>{
        console.log('catch');
        return res.status(500).send({
        message:'internal server error'
    })})
}
    
}
async function getUserImage(req,res){
    const id = req.params.id;
    const result = await user_managements.findAll({where:{id:id}});
    return res.status(201).send(result[0]["image"]);
}
async function login(req,res){
    const {email,password} = req.body;
    let result = await user_managements.findAll({where:{email:email}});
    const isExit = await bcrypt.compare(password,result[0]["dataValues"]["password"]);
    console.log(isExit);
    let secret_key = process.env.SECRET_KEY;
    const token = await jwt.sign(email,secret_key);
    if(isExit){
        res.status(201).send({
            message:'successfully logged in',
            token:token
        }); 
    }
    else{
        return res.status(201).send({
            message:'user id or password wrong'
        })
    }
    
}
async function insert_passport(req,res,next){
    const email = req.body.email;
    const result = await user_managements.findAll({where:{email:email}});
    if(result.length>0){
        return res.status(201).send({
            message:'email already registered'
        })
    }else{
        next();
    }
}
async function update_passport(req,res,next){
    const {name,email,password,total_orders,image} = req.body;
    if(!name || !email || !password || !total_orders || !image){
        console.log('first if');
        return res.status(201).json({
            message:'bad request'
        })
    }else{
        next();
    }
}
module.exports = {getUserDetails,deleteUser,userUpdate,addUser,getUserImage,login
,insert_passport,getAllUsers,update_passport};
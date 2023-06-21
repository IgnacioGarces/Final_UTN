require ('dotenv').config();
const passSeg = process.env.PASS_SEGURA;
const jwt = require('jsonwebtoken');
const dbConnection = require('../config/database');

const registrarUsuario =  (req,res)=>{
    //traemos la info del front a guardar
   const {user,password} = req.body;
    
   //guardamos la data en la DB
   dbConnection.query('INSERT INTO users (user,password) VALUES(?,?)',[user,password],(err,data)=>{
    if (err) {
        res.send(err)
    } else {
        res.send('usuario registrado')
    }
   })
}



const login = (req,res)=> {
    let {user,password} = req.body; 

    dbConnection.query("SELECT * FROM users WHERE user=?",[user],(err,data)=>{
        if(err){
            res.send("Usuario no esta registrado ")
        }else{

            let info= data[0];
            if(user === info.user && password === info.password){
                console.log("usuario correcto, se puede generar el token")
    
                //generar el token para devolverlo y que pueda usarlo para cargar una pelicula
                jwt.sign({user},passSeg,{expiresIn:'30m'},(error,token)=>{
                    if(error){
                        res.send(error);
                    }else{
                        res.json({token});
                    }
                })
            }else{
                res.send("Usuario incorrecto")
            }
        }

    })
};



module.exports={registrarUsuario, login}
const dbConnection=require("../config/database");
//Este módulo proporciona la conexión a la base de datos para realizar consultas.

const jwt = require('jsonwebtoken')


const login =(req,res)=>{
    //verificar si el usuario esta registrado
    const {user,password} = req.body;

    const usuarioRegristrado = {
        user:"admin",
        password:"admin123"
    }

    if (user === usuarioRegristrado.user && password === usuarioRegristrado.password) {
        console.log('Acceso Autorizado')
        // jwt.sign()
        res.send('Acceso autorizado')
    }else{
        res.send('Acceso denegado')
    }
    //generar token para devolverlo y usarlo

}


const fetchTodosLosPacientes = (res)=>{
    dbConnection.query("SELECT * FROM pacientes",(err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send (data)
        }
    })
}


const fetchUnPaciente = (req,res)=>{

    let nombre = req.params.nombre //Guardo el parametro del req..
    dbConnection.query('SELECT * FROM pacientes WHERE nombrePaciente= ?',[nombre],(err,data)=>{
        if (err) {
            res.send(err)
        }else{
            res.send(data)
        }
    })
}


const cargaPaciente = (req,res)=>{
    let {nombre,apellido,genero,edad,dni,cel} = req.body; 
    let img = `http://localhost:4000/public/`+req.file.filename;
    
//dbConnection.query() ejecuta una consulta SQL para insertar un nuevo registro en la tabla "paciente" de la base de datos.
    dbConnection.query('INSERT INTO pacientes(nombre,apellido,genero,edad,dni,cel,imagen) VALUES(?,?,?,?,?,?,?)',
    [nombre,apellido,genero,edad,dni,cel,img],
    (err,data)=>{
        if (err) {
            res.send(err)
        } else {
            res.redirect('/pacientes/infoCompletaPacientes')  
        }
    }
    )
//El método query() toma tres argumentos: la consulta SQL como una cadena, los valores de los parámetros para la consulta y un callback que se ejecutará después de que se complete la consulta.
};

const deletePaciente= (req,res)=>{
    let borrarPaciente = req.params.borrar;
    dbConnection.query('DELETE FROM pacientes WHERE dni= ?',[borrarPaciente],(err,data)=>{
        if (err) {
            res.send(err);
        }else{
            res.send(data);
        }
    })
}



//  DELETE USUARIO

// const deleteUsuario = (req,res)=>{
//     const {usuario} = req.body;
//     dbConnection.query('DELETE FROM usuarios WHERE nombreUsuario= ?',[usuario],(err,data)=>{
//         if (err) {
//             res.send(err)
//         }else{
//             res.send(data)
//         }
//     })
// }
//  Se pasa la informacion mediante el body porque es info sensible. 



module.exports={
    login,
    cargaPaciente,
    fetchTodosLosPacientes,
    fetchUnPaciente,
    deletePaciente
}
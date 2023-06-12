const {cargaPaciente,fetchTodosLosPacientes,fetchUnPaciente,deletePaciente} = require('../utils/functionsDB');

const todosLosPacientes = async(req,res)=>{

    await fetchTodosLosPacientes(res)
    
}

const traerUnPaciente=async (req,res)=>{

    await fetchUnPaciente(req,res)
};

const cargarPaciente = async(req,res)=>{
    
    await cargaPaciente (req,res)
};

const eliminarPaciente = async (req,res)=>{
    await deletePaciente(req,res)
}

module.exports={todosLosPacientes,traerUnPaciente,cargarPaciente,eliminarPaciente}
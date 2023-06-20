const express= require('express');
const router =express.Router();
/*La función express.Router() es un método proporcionado por Express que se utiliza para crear un enrutador en una aplicación Express. Un enrutador es un objeto que nos permite definir las rutas y los controladores asociados a esas rutas de forma modular y organizada. */
const {registrar,todosLosPacientes,traerUnPaciente,cargarPaciente,eliminarPaciente}= require('../controllers/pacientesControllers');
const upload = require('../multer/cargaImagen')

//Logeo --> Autenticacion y generacion de token para acceder a recursos.

router.post('/login',registrar)

router.get('/infoCompletaPacientes',todosLosPacientes)

router.get('/infoPaciente/:nombre',traerUnPaciente);

router.post('/cargarPaciente', upload.single('imagen') ,cargarPaciente);

router.delete('/eliminarPaciente/:borrar',eliminarPaciente)

module.exports=router;

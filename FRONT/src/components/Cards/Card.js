import './Card.css';
import { Fragment } from 'react';

export default function Card({info}) {

    const borrarPaciente = async () => {
        await fetch (`http://localhost:4000/eliminarPaciente/${info.dni}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({"dni": info.dni})
        })
        .then(respuesta => respuesta.json())
        .then(data=> console.log(data))
        .catch(err=> console.log('ERROR: ' + err))
                
    }
    return (
        <Fragment>

            <div className="card m-2" >
            <img src={info.image} className="card-img-top" alt="foto de paciente"/>
            <div className="card-body">
                <h4 className="card-title">{info.nombre} {info.apellido}</h4>
                
                <ul className="list-group list-group-flush my-2">
                    <li className='list-group-item bg-secondary'>Genero :<strong>{info.genero}</strong> </li>
                    <li className='list-group-item bg-secondary'>Edad :<strong>{info.edad}</strong> </li>
                    <li className='list-group-item bg-secondary'>DNI:<strong>{info.dni}</strong> </li>
                    <li className='list-group-item bg-secondary'>Celular:<strong>{info.cel}</strong> </li>
                </ul>
                <button type="button" className="btn btn-danger" onClick={()=>{borrarPaciente()}}> Eliminar Paciente </button>
            </div>
            </div>
        </Fragment>
    )
}
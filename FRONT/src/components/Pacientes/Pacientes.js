import Card from '../Cards/Card'
import { useState,useEffect } from 'react'
import './Pacientes.css'

export default function Pacientes (){
    const [datos,setDatos] = useState([]);

    const traerInfo = async ()=>{
        let info = await fetch ('http://localhost:4000/infoCompletaPacientes')
                         .then(respuesta => respuesta.json())
                         .then(data => setDatos(data))
                         .catch(error=> console.log(`ERROR ${error}`))
        return info
    }

    useEffect(()=>{
        traerInfo()
    }, [])


    return(
        <div className='section-cards d-flex justify-content-center flex-wrap'>
            {
                datos.map((dato)=>{
                    return <Card key={dato.dni} info={dato} />
                })
            }

        </div>
    )
}
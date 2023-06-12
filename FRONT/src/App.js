
import './App.css';
import Pacientes from './components/Pacientes/Pacientes'
import FormPacientes from './components/Forms/FormPacientes';
import { useState } from 'react';

function App() {
  const [ocultarPacientes,setOcultarPacientes] = useState(true);
  const [ocultarForm, setOcultarForm] = useState(true);

  return (
    <main className="mt-5 d-flex flex-column align-items-center">
      <h1>Botonesss</h1>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-warning" type='button' onClick={()=>{setOcultarPacientes(false);setOcultarForm(true)}}>Mostrar Pacientes</button>
        <button className="btn btn-succes" type='button' onClick={()=>{setOcultarForm(false);setOcultarPacientes(true)}}>Cargar Pacientes</button>
      </div>

      {ocultarPacientes === false?
        <section className='w-100 d-flex flex-column align-items-center'>
          <button type="button" className="btn btn-info align-self-end me-5" onClick={()=>setOcultarPacientes(true)}>X</button>
          <Pacientes/>
        </section>:''}

        {ocultarForm === false? 
      <section className='w-100 d-flex flex-column align-items-center'>
      <button type="button" className="btn btn-info align-self-end me-5" onClick={()=>setOcultarForm(true)}>X</button>
        <FormPacientes/>
      </section>:''}
    </main>
  );
}

export default App;

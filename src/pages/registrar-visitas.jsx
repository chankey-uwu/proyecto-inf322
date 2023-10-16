import React from 'react';


const RegistrarVisitas = () => {
  return (
    <div className='page' style={{backgroundColor: 'white'}}>
      <h1 style={{textAlign: 'center', marginTop: '15px', marginBottom: '45px' }}>Registrar Visitas</h1>

      <div className='container' style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <form style={{ width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <div className='form-group' style={{width: '50%', textAlign: 'center', marginBottom: '15px' }}>
            <label htmlFor='nombre'>Nombre de la Visita</label>
            <input type='text' className='form-control' id='nombre' style={{marginTop: '5px' }} />
          </div>

          <div className='form-group' style={{width: '50%', textAlign: 'center', marginBottom: '15px' }}>
            <label htmlFor='fecha'>Fecha de la Visita</label>
            <input type='date' className='form-control' id='fecha' style={{marginTop: '5px' }} />
          </div>

          <div className='form-group' style={{width: '50%', textAlign: 'center', marginBottom: '15px' }}>
            <label htmlFor='hora'>Hora de la Visita</label>
            <input type='time' className='form-control' id='hora' style={{marginTop: '5px' }} />
          </div>

          <div className='form-group' style={{textAlign: 'center', marginBottom: '15px' }}>
            <label htmlFor='motivo'>¿Estacionamiento?</label>
            <input type='checkbox' className='form-control' id='estacionamiento' style={{marginTop: '5px' }} />
          </div>

          <button type='submit' className='btn btn-primary' style={{width: '50%', marginTop: '15px' }}>
            Registrar
          </button>
        </form>        
      </div>
    </div>
  );
}

export default RegistrarVisitas;
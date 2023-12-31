import React from 'react';
import { Button } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import swal from 'sweetalert';


const RegistrarVisitas = () => {
  const divStyle = {
    maxWidth: '100%',
    maxHeight: '75px',
    minWidth: '100%',
    minHeight: '75px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',

  };
  const buttonStyle = {
    maxWidth: '100%',
    maxHeight: '50px',
    minWidth: '50%',
    fontSize: '13px',
    fontFamily: ['Open Sans', 'sans-serif'],
    minHeight: '50px',
    backgroundColor: 'black',
  };
  const form_control = {
    width: '60%',

    marginTop: '5px',

    padding: '5px',
    marginLeft: '20px',
    marginRight: '20px',
    border: 'none',
    borderBottom: '.2em solid rgb(0, 0, 0)',
    borderRadius: '5px',

    fontSize: '1 em',
  };

  const mostrarConfirmacion=()=> swal({
      text: "Visita Registrada",
      icon: "success",
      buttons: "Aceptar"
    }).then(() => {
      window.location.href = "/"
      setValue(true);
    });

  return (
    <div className='page' style={{ backgroundColor: 'white' }}>
      <div>
        <a href="/">
          <ArrowBackIosIcon style={{ fontSize: 25, marginTop: 5, marginLeft: 5 , color: 'black'}} />
        </a>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <h1 style={{fontSize: '22px', display: 'flex', alignItems: 'center', marginTop: '20px' }}>
          <div style={{maxWidth: '80%'}}>Registrar Visita</div>
          <div>
            <GroupAddIcon style={{ fontSize: 40, marginLeft: 10, marginTop: 10 }} />
          </div>
        </h1>
      </div>
    <div className='page' style={{borderRadius:'10px' }}>
      <div className='container' style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <form style={{ width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <div className='form_input' style={{width: '100%', textAlign: 'center', marginBottom: '15px' }}>
            <label htmlFor='nombre'>Nombre de la Visita</label>
            <input type='text' id='nombre' style={form_control} />
          </div>

          <div className='form_input' style={{width: '100%', textAlign: 'center', marginBottom: '15px' }}>
            <label htmlFor='fecha'>Fecha de la Visita</label>
            <input type='date' id='fecha' style={form_control} />
          </div>

          <div className='form_input' style={{width: '100%', textAlign: 'center', marginBottom: '15px' }}>
            <label htmlFor='hora'>Hora de la Visita</label>
            <input type='time' id='hora' style={form_control} />
          </div>

          <div className='form_input' style={{textAlign: 'center', marginBottom: '15px' }}>
            <label htmlFor='motivo'>¿Estacionamiento?</label>
            <input type='checkbox' id='estacionamiento' style={form_control} />
          </div>
          <div style={divStyle}>
            <Button onClick={()=>mostrarConfirmacion()} variant="contained" size="large" style={buttonStyle}>
              Registrar Visita
            </Button>
          </div>
        </form>        
      </div>
    </div>
    </div>
  );

}

export default RegistrarVisitas;
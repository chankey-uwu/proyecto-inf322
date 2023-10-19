import React from 'react';
import '../stylesheets/custodia.css';
import swal from 'sweetalert';
import { Button } from '@mui/material';

const CustodiaPaquetes = (setValue) => {
  
  const mostrarAlerta=()=>{
    swal({
      title: "Advertencia",
      text: "Recuerda que debes confirmar tu recepción solo cuando ya tengas los paquetes en tus manos",
      icon: "warning",
      buttons: ["Cancelar", "Confirmar"]
    }).then((confirmar) => {
      if (confirmar) {
          swal({
            text: "Recepción exitosa",
            icon: "success",
            timer: "1700",  
            buttons: false
          }).then(() => {
            window.location.href = "/"
            setValue(true);
          });
      }
    });
  };

  return (
  <div className='page' style={{backgroundColor: 'white'}}>
      <h1 style={{textAlign: 'center', marginTop: '15px', marginBottom: '45px' }}>Custodia Paquetes</h1>

      <div className='container' style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>

      <table className='table' style={{maxWidth: '80%',maxHeight: '75px',minWidth: '80%',minHeight: '75px'}}>
      <thead>
        <tr>
          <th>Descripción</th>
          <th>Día</th>
          <th>Hora</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Paquete tamaño medio en caja</td>
          <td>27/05</td>
          <td>18:52</td>
        </tr>
        <tr>
          <td>Paquete pequeño en sobre</td>
          <td>01/06</td>
          <td>13:32</td>
        </tr>
      </tbody>
    </table>

    <div style={{maxWidth: '40%',maxHeight: '75px',minWidth: '40%',minHeight: '75px'}}> 
        <Button onClick={()=>mostrarAlerta()} variant="contained" size="large" style={{maxWidth: '100%', maxHeight: '50px', minWidth: '100%', minHeight: '50px', backgroundColor: 'black', marginTop: '40px'}}>
          Confirmar Recepción
        </Button>
    </div>

    </div>
  </div>
  );
};

export default CustodiaPaquetes;
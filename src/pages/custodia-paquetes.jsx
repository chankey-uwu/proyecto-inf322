import React from 'react';
import '../stylesheets/custodia.css';
import swal from 'sweetalert';
import { Button } from '@mui/material';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

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
  const buttonStyle = {
    maxWidth: '100%',
    maxHeight: '50px',
    minWidth: '100%',
    minHeight: '50px',
    backgroundColor: 'black',
    fontSize: '13px',
    padding: '3px',
  };
  return (
    <div className='page' style={{ backgroundColor: 'white' }}>
    <div>
      <a href="/">
        <ArrowBackIosIcon style={{ fontSize: 25, marginTop: 5, marginLeft: 5 , color: 'black'}} />
      </a>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <h1 style={{fontSize: '22px', display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <div style={{maxWidth: '80%'}}>Custodia Paquetes</div>
        <div>
          <Inventory2Icon style={{ fontSize: 40, marginLeft: 10, marginTop: 10 }} />
        </div>
      </h1>
    </div>
  <div className='page' style={{borderRadius:'10px' }}> 
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

    <div style={{maxWidth: '40%',maxHeight: '75px',minWidth: '40%',minHeight: '75px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '20px'}}>
        <Button onClick={()=>mostrarAlerta()} variant="contained" size="large" style={buttonStyle}>
          Confirmar Recepción
        </Button>
    </div>
    </div>
  </div>
</div>
  );
};

export default CustodiaPaquetes;
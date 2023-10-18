import React from 'react';
import '../stylesheets/custodia.css';
import swal from 'sweetalert';

const CustodiaPaquetes = () => {
  const mostrarAlerta=()=>{
    swal({
      title: "Advertencia",
      text: "Recuerda que solo debes confirmar tu recepción cuando ya tengas los paquetes en tus manos",
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
          });
      }
    });
  };

  return (
  <div className='page' style={{backgroundColor: 'white'}}>
      <h1 style={{textAlign: 'center', marginTop: '15px', marginBottom: '45px' }}>Custodia Paquetes</h1>

      <div className='container' style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>

      <table className='table'>
      <thead>
        <tr>
          <th>Descripción</th>
          <th>Hora</th>
          <th>Día</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Paquete tamaño medio en caja</td>
          <td>18:52</td>
          <td>27/05</td>
        </tr>
        <tr>
          <td>Paquete pequeño en sobre</td>
          <td>13:32</td>
          <td>01/06</td>
        </tr>
      </tbody>
    </table>

    <div style={{maxWidth: '25%',maxHeight: '75px',minWidth: '25%',minHeight: '75px'}}> 
        <button onClick={()=>mostrarAlerta()} variant="contained" size="large" style={{maxWidth: '100%', maxHeight: '50px', minWidth: '100%', minHeight: '50px', backgroundColor: 'black', marginTop: '40px', color: 'white', fontSize: '18px'}}>
          Confirmar Recepción
        </button>
    </div>

    </div>
  </div>
  );
};

export default CustodiaPaquetes;
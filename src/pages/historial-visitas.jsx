import React from 'react';
import '../stylesheets/custodia.css';
import swal from 'sweetalert';
import { Button } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const HistorialVisitas = (setValue) => {

  return (
    <div className='page' style={{ backgroundColor: 'white' }}>
    <div>
      <a href="/">
        <ArrowBackIosIcon style={{ fontSize: 25, marginTop: 5, marginLeft: 5 , color: 'black'}} />
      </a>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <h1 style={{fontSize: '22px', display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <div style={{maxWidth: '80%'}}>Historial Visitas</div>
        <div>
          <PeopleAltIcon style={{ fontSize: 40, marginLeft: 10, marginTop: 10 }} />
        </div>
      </h1>
    </div>
  <div className='page' style={{borderRadius:'10px' }}>
      <div className='container' style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <table className='table' style={{maxWidth: '80%',maxHeight: '75px',minWidth: '80%',minHeight: '75px'}}>
        <thead>
          <tr>
            <th>Dpto</th>
            <th>Nombre</th>
            <th>Fecha y Hora</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>303</td>
            <td>Juan Perez</td>
            <td>4/11/2023 13:32</td>
          </tr>
          <tr>
            <td>412</td>
            <td>Jose Perez</td>
            <td>4/11/2023 13:32</td>
          </tr>
          <tr>
            <td>503</td>
            <td>Josefa Perez</td>
            <td>3/11/2023 13:32</td>
          </tr>
        </tbody>
      </table>
      </div>
  </div>
</div>
  );
};

export default HistorialVisitas;
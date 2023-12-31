import React, { useEffect } from 'react'
import { Button } from '@mui/material';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CustodiaPaquetes from './custodia-paquetes';
import MenuIcon from '@mui/icons-material/Menu';

export const HomeConserje = () => {
  const handleCustodiaPaquetesClick = () => {
    if (CustodiaPaquetes.setValue) {
      swal({
        title: "No te han llegado paquetes aún.",
        icon: "info",
        button: "Aceptar"
      });
    } else {
      window.location.href = '/registrar-paquetes';
    }
  };

  const divStyle = {
    maxWidth: '100%',
    maxHeight: '75px',
    minWidth: '100%',
    minHeight: '75px',
  };
  const buttonStyle = {
    maxWidth: '100%',
    maxHeight: '50px',
    minWidth: '100%',
    minHeight: '50px',
    backgroundColor: 'black',
    fontSize: '13px',
    fontFamily: ['Open Sans', 'sans-serif'],
    padding: '3px',
  };
  return (
    <div className='page' style={{backgroundColor: 'white'}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <MenuIcon style={{ fontSize: 30, marginTop: 5, marginLeft: 5 , color: '#d8d4d4'}}/>
        <img src="https://media.0221.com.ar/adjuntos/357/migration/0221/032019/1553553111207.jpg" alt="perfil"
          style={{ height: '50px', width:'50px', borderRadius: '50%'}} />
      </div>

      <h1 className='page__title' style={{fontSize: '50px', textAlign: 'center', marginTop: '20px' }}>Bienvenido Conserje</h1>
      <div className='page' style={{borderRadius:'10px' }}>
        <Link to="/calendario-quincho">
          <div style={divStyle}>
            <Button variant="contained" size="large" style={buttonStyle}>
              Calendario del Quincho
            </Button>
          </div>
        </Link>
        <Link to="/historial-visitas">
          <div style={divStyle}>
            <Button variant="contained" size="large" style={buttonStyle}>
              Historial de Visitas
            </Button>
          </div>
        </Link>
          <div style={divStyle}>
            <Button variant="contained" size="large" onClick={handleCustodiaPaquetesClick} style={buttonStyle}>
              Registrar Paquetes
            </Button>
          </div>
        <div style={divStyle}>
          <Button variant="contained" size="large" style={{fontSize: '13px',fontFamily: ['Open Sans', 'sans-serif'],maxWidth: '100%', maxHeight: '50px', minWidth: '100%', minHeight: '50px'}} disabled disableRipple>
            Chat Vecinos
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HomeConserje
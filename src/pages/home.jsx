import React, { useEffect } from 'react'
import { Button } from '@mui/material';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReservarQuincho from './reservar-quincho';
import CustodiaPaquetes from './custodia-paquetes';
import MenuIcon from '@mui/icons-material/Menu';

export const HomePage = () => {
  const handleCustodiaPaquetesClick = () => {
    if (CustodiaPaquetes.setValue) {
      swal({
        title: "No te han llegado paquetes aún.",
        icon: "info",
        button: "Aceptar"
      });
    } else {
      window.location.href = '/custodia-paquetes';
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
        <img src="https://i.pinimg.com/originals/30/8d/79/308d795c3cac0f8f16610f53df4e1005.jpg" alt="perfil"
          style={{ height: '50px', width:'50px', borderRadius: '50%'}} />
      </div>

      <h1 className='page__title' style={{fontSize: '50px', textAlign: 'center', marginTop: '20px' }}>Bienvenidx</h1>
      <div className='page' style={{borderRadius:'10px' }}>
        <Link to="/reservar-quincho">
          <div style={divStyle}>
            <Button variant="contained" size="large" style={buttonStyle}>
              Reservar Quincho
            </Button>
          </div>
        </Link>
        <Link to="/registrar-visitas">
          <div style={divStyle}>
            <Button variant="contained" size="large" style={buttonStyle}>
              Registrar Visitas
            </Button>
          </div>
        </Link>
          <div style={divStyle}>
            <Button variant="contained" size="large" onClick={handleCustodiaPaquetesClick} style={buttonStyle}>
              Custodia Paquetes
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

export default HomePage

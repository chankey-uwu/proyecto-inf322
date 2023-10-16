import React from 'react'
import { Button } from '@mui/material';
import NavBar from '../components/nav_bar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReservarQuincho from './reservar-quincho';

export const HomePage = () => {
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
  };
  return (
    <div className='page'>
      <h1 className='page__title'>Frontend Sample App</h1>
      <NavBar />
      <h2>Página de Inicio</h2>
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
      <Link to="/custodia-paquetes">
        <div style={divStyle}>
          <Button variant="contained" size="large" style={buttonStyle}>
            Custodia Paquetes
          </Button>
        </div>
      </Link>
      <div style={divStyle}>
        <Button variant="contained" size="large" style={{maxWidth: '100%', maxHeight: '50px', minWidth: '100%', minHeight: '50px'}} disabled disableRipple>
          Chat Vecinos
        </Button>
      </div>
    </div>
  )
}

export default HomePage

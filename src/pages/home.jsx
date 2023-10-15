import React from 'react'
import { Button } from '@mui/material';
import NavBar from '../components/nav_bar'

export const HomePage = () => {
  const divStyle = {
    width: '100%',
    height: '70px',
  };
  return (
    <div className='page'>
      <h1 className='page__title'>Frontend Sample App</h1>
      <NavBar />
      <h2>Página de Inicio</h2>
      <div style={divStyle}><Button style={{maxWidth: '100%', maxHeight: '50px', minWidth: '100%', minHeight: '50px'}} variant="contained" size="large">Reservar Quincho</Button></div> 
      <div style={divStyle}><Button style={{maxWidth: '100%', maxHeight: '50px', minWidth: '100%', minHeight: '50px'}} variant="contained" size="large">Registrar Visitas</Button></div>
      <div style={divStyle}><Button style={{maxWidth: '100%', maxHeight: '50px', minWidth: '100%', minHeight: '50px'}} variant="contained" size="large">Custodia Paquetes</Button></div>
      <div style={divStyle}><Button style={{maxWidth: '100%', maxHeight: '50px', minWidth: '100%', minHeight: '50px'}} variant="contained" size="large">Chat Vecinos</Button></div>
    </div>
  )
}

export default HomePage

import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import '../stylesheets/quincho.css';
import Button from '@mui/material/Button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

const ReservarQuincho = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isHidden, setIsHidden] = useState(true);
  const [fechasReservadas, setFechasReservadas] = useState([
    '2023-10-20',
    '2023-10-25',
    '2023-11-02',
  ]);

  const mostrarConfirmacion = () =>
  swal({
    text: 'Quincho reservado exitosamente',
    icon: 'success',
    buttons: 'Aceptar',
  }).then(() => {
    window.location.href = '/';
    setValue(true);
  });

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setIsHidden(false);
  };

  const handleAceptar = () => {
    if (selectedDate) {
      let formattedDate = selectedDate;
      if (typeof selectedDate !== 'string') {
        formattedDate = dayjs(selectedDate).format('YYYY-MM-DD');
      }
      setFechasReservadas([...fechasReservadas, formattedDate]);
      console.log('Nuevas fechas reservadas:', fechasReservadas);
      console.log('Reserva confirmada para el día:', formattedDate);
      mostrarConfirmacion();
    }
  };

  const handleCancelar = () => {
    // Lógica para el botón Cancelar
    setIsHidden(true);
  };

  const buttonStyle = {
    margin: '0 5%',
    maxWidth: '40%',
    maxHeight: '35px',
    minWidth: '40%',
    minHeight: '25px',
    backgroundColor: 'black',
    fontSize: '10px',
  };

  return (
      <div style={{ backgroundColor: 'white', padding: '20px', margin: '20px' }}>
      <div>
        <a href="/">
          <ArrowBackIosIcon style={{ fontSize: 25, marginTop: 5, marginLeft: 5 , color: 'black'}} />
        </a>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <h1 style={{fontSize: '22px', display: 'flex', alignItems: 'center', marginTop: '20px' }}>
          <div style={{maxWidth: '80%'}}>Reservar Quincho</div>
          <div>
            <CalendarMonthIcon style={{ fontSize: 40, marginLeft: 10, marginTop: 10 }} />
          </div>
        </h1>
      </div>
    <div style={{borderRadius:'10px', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <h4 style={{margin: '20px'}}>Seleccione la fecha en la que desea reservar el quincho:</h4>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        disablePast={true}
        onChange={handleDateChange}
        renderInput={() => <input />}
        shouldDisableDate={(date) => {
          const dateString = dayjs(date).format('YYYY-MM-DD');
          return fechasReservadas.includes(dateString);
        }}
        value={selectedDate}
      />
      </LocalizationProvider>
      </div>
      <div
        style={{ 
          backgroundColor: '#f0f0f0',
          width: '100%',
          display: isHidden ? 'none' : 'block',
          borderRadius: '10px',
          padding: '20px',
          textAlign: 'center',
          marginTop: '20px',
        }}
      > 
        ¿Desea reservar el quincho para el día: {selectedDate ? dayjs(selectedDate).format('DD/MM/YYYY') : ''}?
        <div style={{ marginTop: '10px' }}>
          <Button variant="contained" size="large" style={buttonStyle} onClick={handleAceptar}>
            Aceptar
          </Button>
          <Button variant="contained" size="large" style={buttonStyle} onClick={handleCancelar}>
            Cancelar
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ReservarQuincho;

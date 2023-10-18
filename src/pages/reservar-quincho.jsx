import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import '../stylesheets/quincho.css';

const ReservarQuincho = () => {
  return (
    <div className='page'>
      <h1>Reservar Quincho</h1>
      <div id='block_container' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            disablePast={true}
            id="custom-static-datepicker"
          />
        </LocalizationProvider>
        <div id='bloc2' style={{ width: '50%' }}>
          hola poto
        </div>
      </div>
    </div>
  );
};

export default ReservarQuincho;

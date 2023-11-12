import * as React from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function fakeFetch(date, { signal, highlightedDays }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      resolve({ daysToHighlight: highlightedDays });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException('aborted', 'AbortError'));
    };
  });
}



function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth && highlightedDays.includes(day.format('YYYY-MM-DD'));

  return (
    <Badge
      key={day.toString()}
      overlap="circular"
      badgeContent={isSelected ? '⚫' : undefined}
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}

export default function CalendarioQuincho() {
  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([
    '2023-11-12',
    '2023-11-17',
    '2023-11-22',
    '2023-11-25',
    '2023-12-24',
    '2024-01-01',
  ]);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [reservado, setReservado] = React.useState(false);

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal, highlightedDays
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays();
    return () => requestAbortController.current?.abort();
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsHidden(false);
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', margin: '20px' }}>
      <div>
        <a href="/home-conserje">
          <ArrowBackIosIcon style={{ fontSize: 25, marginTop: 5, marginLeft: 5 , color: 'black'}} />
        </a>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <h1 style={{fontSize: '22px', display: 'flex', alignItems: 'center', marginTop: '20px' }}>
          <div style={{maxWidth: '100%'}}>Reservas de Quincho</div>
            <div>
              <CalendarMonthIcon style={{ fontSize: 40, marginLeft: 10, marginTop: 10 }} />
            </div>
          </h1>
          </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            displayStaticWrapperAs="desktop"
            disablePast
            onChange={handleDateChange}
            slots={{
              day: ServerDay,
            }}
            slotProps={{
              day: {
                highlightedDays,
              },
            }}
          />
        </LocalizationProvider>
        {selectedDate && (
        <div
        style={{ 
          backgroundColor: '#f0f0f0',
          width: '75%',
          borderRadius: '10px',
          padding: '20px',
          textAlign: 'center',
          marginTop: '20px',
        }}> 
        <p style={{ display: 'block' }}>
          Quincho reservado para el día {selectedDate.format('YYYY-MM-DD')}
        </p>
      </div>
    )}
  </div>
  );
}

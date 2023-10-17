import React from 'react';

const Calendar = ({ handleDayClick }) => {
  return (
    <div>
      <div className="calendar-day" onClick={() => handleDayClick('2023-10-20')}>
        20
      </div>
      <div className="calendar-day" onClick={() => handleDayClick('2023-10-21')}>
        21
      </div>
      {/* ... */}
    </div>
  );
};

export default Calendar;

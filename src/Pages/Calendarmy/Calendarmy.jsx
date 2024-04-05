import React, { useState } from 'react'
import  Calendar  from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export default function Calendarmy() {

    const [date, setDate] = useState(new Date());

  return (<>
  <h1 className='text-center'> Calendar</h1>
      <div className='calendar-container m-auto my-4 my-md-5'>
        <Calendar  onChange={setDate} value={date} className={'text-black w-100'} />
      </div>
      <p className='text-center'>
       
        {date.toDateString()}
      </p>
  </>
    
  )
}

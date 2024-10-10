import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns';
import { NavBar } from "../"
import { localizer } from '../../helpers/';

const events = [{
  title: 'Holi',
  notes: 'Hi',
  start: new Date(),
  end: addHours(new Date, 2),
  bgColor: '#fefefe'
}]

export const CalendarPage = () => {

  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log(event, start, end, isSelected)
  }

  return (
    <>
      <NavBar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vs - 80px' }}
        eventPropGetter={eventStyleGetter}
      />
    </>
  )
}

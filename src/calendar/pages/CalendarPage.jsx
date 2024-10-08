import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours, format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US'

import { NavBar } from "../"


const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [{
  title: 'Holi',
  notes: 'Hi',
  start: new Date(),
  end: addHours(new Date, 2),
  bgColor: '#fefefe'
}]

export const CalendarPage = () => {
  return (
    <>
      <NavBar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vs - 80px' }}
      />
    </>
  )
}

import './Calendarr.css'
import {Calendar, dateFnsLocalizer } from "react-big-calendar"
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek"
import getDay from "date-fns/getDay"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState } from 'react'
import DatePicker from "react-datepicker"
import Iframe from 'react-iframe'

const locales = {
    "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
  {
    title: "Grazac Presentation",
    start: new Date(2022, 9, 12),
    end : new Date(2022, 9, 12)
   },  
  {
    title: "Grazac Monthly Meeting",
    start: new Date(2022, 9, 14),
    end : new Date(2022, 9, 14)
   }, 
   {
    title: "Daily Challenge Review",
    start: new Date(2022, 9, 17),
    end : new Date(2022, 9, 17)
   } 
]

const Calendarr = () => {
  return (
    <div>
        {/* <div>
         <Iframe 
              url="https://calendar.google.com/calendar/embed?src=3735e91913424e15713310324c05d8efbf906492bdefb2f5c60b3db49132cdc9%40group.calendar.google.com&ctz=Africa%2FLagos" 
              // style="border: 0" 
              width="350" 
              height="350" 
              frameborder="0" 
              scrolling="no"
            /> 
        </div> */}

        <Calendar localizer={localizer} events={events} 
            startAccessor="start" endAccessor="end"
            style={{height: 500, margin: "50px"}} />
    </div>
  )
}

export default Calendarr
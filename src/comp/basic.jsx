"use client"
import moment from "moment";
import Calendar from "./Calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const events = [
  {
    start: moment("2023-08-18T10:00:00").toDate(),
    end: moment("2023-08-18T11:00:00").toDate(),
    title: "MRI Registration",
  },
  {
    start: moment("2023-08-18T14:00:00").toDate(),
    end: moment("2023-08-18T15:30:00").toDate(),
    title: "ENT Appointment",
  },
];

export default function BasicCalendar() {
  return <Calendar events={events} />;
}
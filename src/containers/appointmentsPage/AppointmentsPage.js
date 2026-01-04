import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import { formatEuropeanDate } from "../../utils/formatEuropeanDate";

export const AppointmentsPage = ({
  appointments,
  contacts,
  addAppointment,
  deleteAppointment
}) => {
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time);

    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  // Prepara le tile con formattazione europea
  const appointmentTiles = appointments.map(appt => ({
    name: appt.title,
    description: {
      Contact: appt.contact,
      Date: formatEuropeanDate(appt.date),
      Time: appt.time
    },
    onDelete: () =>
      deleteAppointment(appt.title, appt.contact, appt.date, appt.time)
  }));

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          contacts={contacts}
          handleSubmit={handleSubmit}
        />
      </section>

      <hr />

      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointmentTiles} />
      </section>
    </div>
  );
};
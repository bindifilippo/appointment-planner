import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  appointments,
  contacts,
  addAppointment,
  deleteAppointment
}) => {
  // State locali per il form
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Submit del form
  const handleSubmit = (e) => {
    e.preventDefault();

    addAppointment(title, contact, date, time);

    // Pulisce il form
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

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
        <TileList
          tiles={appointments}
          onDelete={(appt) =>
            deleteAppointment(appt.title, appt.contact, appt.date, appt.time)
          }
        />
      </section>
    </div>
  );
};
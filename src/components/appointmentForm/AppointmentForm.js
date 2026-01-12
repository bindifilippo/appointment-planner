import React, { useRef } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";


const getTodayString = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  return `${year}-${month}-${day}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const dateRef = useRef(null);
  const timeRef = useRef(null);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>

      <label>
        Contact:
        <ContactPicker
          contacts={contacts}
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </label>

      <label
      onClick={() => dateRef.current?.showPicker()}
      style={{ cursor: "pointer" }}
      >
      Date:
      <input
        ref={dateRef}
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={getTodayString()}
        required
      />
    </label>

    <label
        onClick={() => timeRef.current?.showPicker()}
        style={{ cursor: "pointer" }}
    >
      Time:
    <input
          ref={timeRef}
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
    </label>

      <button type="submit" class="button-add">Add Appointment</button>
    </form>
  );
};
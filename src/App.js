import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate
} from "react-router-dom";

import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
    State variables
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  /*
    add and delete new contact
  */
  const addContact = (name, phone, email) => {
    const newContact = {
      name,
      phone,
      email
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = (name) => {
  setContacts(prev =>
    prev.filter(contact => contact.name !== name)
  );
};

  /*
     add and delete a new appointment
  */
  const addAppointment = (title, contact, date, time) => {
    const newAppointment = {
      title,
      contact,
      date,
      time
    };

    setAppointments(prevAppointments => [
      ...prevAppointments,
      newAppointment
    ]);
  };


  const deleteAppointment = (title, contact, date, time) => {
    setAppointments(prev =>
      prev.filter(
        appt =>
          !(
            appt.title === title &&
            appt.contact === contact &&
            appt.date === date &&
            appt.time === time
          )
      )
    );
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />

        <Route
          path={ROUTES.CONTACTS}
          element={
            <ContactsPage
              contacts={contacts}
              addContact={addContact}
              deleteContact={deleteContact}
            />
          }
        />

        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              appointments={appointments}
              contacts={contacts}
              addAppointment={addAppointment}
              deleteAppointment={deleteAppointment}
            />
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
  
}

export default App;
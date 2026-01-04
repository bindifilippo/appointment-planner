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
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  // ----------------- Contatti -----------------
  const addContact = (name, phone, email) => {
    setContacts(prev => [...prev, { name, phone, email }]);
  };

  const deleteContact = (name) => {
    setContacts(prev => prev.filter(contact => contact.name !== name));
  };

  // ----------------- Appuntamenti -----------------
  const addAppointment = (title, contact, date, time) => {
    setAppointments(prev => [...prev, { title, contact, date, time }]);
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
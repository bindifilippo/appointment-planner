import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact, deleteContact }) => {
  /*
    Local state for form fields
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  /*
    Local state for duplicate check
  */
  const [isDuplicate, setIsDuplicate] = useState(false);

  /*
    Check for duplicate contact name whenever
    the name or contacts change
  */
  useEffect(() => {
    const duplicate = contacts.some(
      contact => contact.name === name
    );
    setIsDuplicate(duplicate);
  }, [name, contacts]);

  /*
    Handle form submission
  */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isDuplicate) {
      addContact(name, phone, email);

      // Clear form after successful submission
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          isDuplicate={isDuplicate}
        />
      </section>

      <hr />

      <section>
        <h2>Contacts</h2>
        <TileList
          tiles={contacts}
          onDelete={(tile) => deleteContact(tile.name)}
        />
      </section>
    </div>
  );
};
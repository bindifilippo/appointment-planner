import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact, deleteContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [isDuplicate, setIsDuplicate] = useState(false);

  useEffect(() => {
    const duplicate = contacts.some(contact => contact.name === name);
    setIsDuplicate(duplicate);
  }, [name, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDuplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  const contactTiles = contacts.map(contact => ({
    name: contact.name,
    description: {
      Phone: contact.phone,
      Email: contact.email
    },
    onDelete: () => deleteContact(contact.name)
  }));

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
        <TileList tiles={contactTiles} />
      </section>
    </div>
  );
};
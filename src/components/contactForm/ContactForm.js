import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Phone:
       <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern="^\+?[0-9\s\-().]{7,20}$"
          placeholder="+39 333 123 4567"
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <button type="submit">Add Contact</button>
    </form>
  );
};
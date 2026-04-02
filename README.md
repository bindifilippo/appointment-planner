# Appointment Planner

## Short intro

Appointment Planner is a single-page React application for managing contacts and appointments in a simple and intuitive way. Users can add contacts, create appointments linked to an existing contact, and switch between the two main sections without reloading the page. The project focuses on clean component structure, basic form validation, and a straightforward user flow.

## Technologies

This project was built with:

- React
- JavaScript
- React Router DOM
- Create React App
- HTML5
- CSS3

## The process

The application was developed by separating the interface into reusable components and page-level containers.

First, I created the main app structure with two routes: one for contacts and one for appointments. Navigation is handled with React Router, which keeps the experience smooth and consistent inside a single-page application.

Then, I split the UI into smaller reusable pieces:
- a contact form for adding new contacts
- an appointment form for creating new appointments
- a contact picker to associate an appointment with an existing contact
- a tile list component to render both contacts and appointments in a consistent way

State is managed in the main `App` component using React hooks, then passed down to the pages through props. This made it easier to keep the logic centralized while keeping the components focused on presentation and interaction.

I also added a few useful details to improve usability:
- duplicate contact name checking
- date and time input fields for appointments
- minimum date restriction to prevent selecting past dates
- formatting appointment dates into European format (`DD/MM/YYYY`)

## What I learned

While building this project, I practiced how to structure a React application into reusable and maintainable components. I improved my understanding of routing in React, form handling with controlled inputs, and state lifting between parent and child components.

## Running the project

To run the project locally:

```bash
npm install
npm start


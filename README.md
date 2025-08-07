# Microfrontends – Frontend Developer Assessment

## Overview

This project demonstrates a **micro-frontend architecture** using two independent Next.js applications:

- **home:** Product listing app ([Vercel deployment](https://microfrontend-home.vercel.app/))
- **cart:** Shopping cart app ([Vercel deployment](https://microfrontend-chi.vercel.app/))

Each app is fully dockerized, can be developed and deployed independently, and follows modern frontend best practices.

---

## Features

- Micro-frontend architecture: Two completely independent Next.js applications
- Modern UI built with Tailwind CSS
- Fully dockerized setup for each app
- Responsive and clean design
- Deployed to Vercel for live demo
- Multi-zone/microfrontend structure

---

## Project Structure


microfrontends/
├── home/
├── cart/
├── README.md
├── docker-compose.yml
└── vercel.json

---

## Deployment
Both apps have been deployed independently as separate projects on Vercel:

- Home app: microfrontend-home.vercel.app

- Cart app: microfrontend-chi.vercel.app

---

## Microfrontend Architecture Notes

- Each app runs as an entirely independent project and can be maintained or scaled separately.

- As is typical for microfrontends, the state (e.g. shopping cart) is not shared between domains due to browser security restrictions (localStorage is per-origin).

- In a production scenario, shared state could be implemented using a backend API, a shared parent app with Module Federation, or solutions like BroadcastChannel.

--- 

## Further Improvements

- Shared cart state via API, Module Federation, or BroadcastChannel

- Combined deployment under a single domain with a reverse proxy for seamless state sharing

- Enhanced CI/CD using GitHub Actions

- Monorepo optimization with Turborepo

--- 

## Key Notes on Task Requirements

- Both microfrontends are fully containerized and can be started independently with Docker Compose for easy local testing.
- This project demonstrates clear separation of concerns, scalable architecture, and design consistency (as required).
- While both apps use localStorage for cart management, cross-domain sharing is not possible in the browser for security reasons. In a production environment, state synchronization would be handled via an API, Module Federation, or a shared parent host.
- The implementation follows modern frontend best practices and incorporates principles from the 12 Factor App methodology and SOLID, as much as possible for a frontend application.
- Design is fully responsive and built with Tailwind CSS for consistency and maintainability.
- Deployment was done via Vercel as recommended (CI/CD ready, optional as per assignment).

--- 

## Learnings and Challenges

- The main challenge in this scenario was simulating cross-app communication between microfrontends on different domains, which is limited by browser security.
- To best reflect a real-world microfrontend architecture, each app was deployed and managed as a fully independent unit, mirroring enterprise frontend patterns.
- Further improvements could include a shared backend API, Module Federation for state sharing, or deployment under a single domain using a reverse proxy.

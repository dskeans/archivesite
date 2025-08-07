# arcHIVE Signup Site

Simple Express + TypeScript app to collect email signups for arcHIVE.

## Features

- POST `/api/signup` — sign up with email and interests
- GET `/api/signups` — admin-only endpoint to list all
- Uses Zod + Drizzle ORM schemas
- Fully typed and easily deployable

## Running Locally

```bash
npm install
npm run start
```

App runs at: [http://localhost:3000](http://localhost:3000)

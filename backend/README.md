# Dharmagya Backend

Express + TypeScript + MongoDB backend for Dharmagya.

## Commands

```bash
npm run dev:backend
npm run seed:backend
npm run test:backend
npm run build:backend
```

Seed login:

```text
rahul@example.com / password123
admin@dharmagya.com / password123
```

The backend listens on `BACKEND_PORT` or `4000` and exposes REST under `/api` plus Socket.IO on the same origin.

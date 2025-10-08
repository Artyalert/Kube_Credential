# OralVis Healthcare - Full Stack MERN Developer Task

A MERN app for patients to upload teeth photos and admins to annotate and generate PDF reports, matching the demo layout.

## Features
- Role-based auth (JWT): Patient uploads/views reports; Admin annotates/generates PDFs.
- Patient: Form upload with details, view submissions & download reports.
- Admin: Dashboard, annotation canvas (rect, circle, arrow, freehand with demo colors), PDF gen with 3 views.
- Storage: Local or AWS S3 (bonus: signed URLs in UI/PDF).
- PDF: Purple header, patient details, 3 simulated views (upper/front/lower), legend, dynamic treatment recs.

## Tech Stack
- Backend: Node.js/Express/MongoDB, Multer, pdf-lib, Sharp/Canvas, AWS SDK.
- Frontend: React, Fabric.js, Axios.
- Auth: JWT.
- DB: MongoDB (Atlas recommended).

## Setup
1. Clone: `git clone <repo-url> oralvis-app && cd oralvis-app`
2. Backend: `cd backend && npm install && cp .env.example .env`
   - Fill: MONGO_URI, JWT_SECRET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, S3_BUCKET (optional).
3. Seed users: `node seeder.js` (patient@test.com/password123, admin@test.com/admin123).
4. Start backend: `npm run dev` (port 5000).
5. Frontend: `cd ../frontend && npm install && cp .env.example .env` (REACT_APP_API_URL=http://localhost:5000).
6. Start frontend: `npm start` (port 3000).
7. For S3: Create private bucket, set CORS for your domain.

## Deployment
- Frontend: Vercel/Netlify (build: npm run build).
- Backend: Render/Heroku (env vars required).
- Demo: [Your Vercel URL] | Test: patient@test.com/password123 (patient), admin@test.com/admin123 (admin).

## API Endpoints
- POST /auth/register {email, password, role=patient}
- POST /auth/login {email, password}
- GET /submissions (role-based)
- POST /submissions (patient upload)
- GET /submissions/:id (admin view)
- PUT /submissions/:id/annotate {annotationJson}
- PUT /submissions/:id/report
- GET /submissions/:id/download

## Screenshots
- [Upload Form]
- [Annotation Canvas]
- [PDF Sample]

## Bonus
- S3 integration with signed URLs.
- Clean UI: Purple theme per demo.

Built by [Your Name].
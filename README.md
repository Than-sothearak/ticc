# TICC Website & Admin Dashboard

This is a Next.js 14 project for managing and displaying content for Techno Innovation Challenge Cambodia (TICC).  
The project includes an admin dashboard, public website, MongoDB database, Google authentication, and AWS S3 image storage.

---

## Getting Started

First, install dependencies:

npm install  
# or  
yarn install  
# or  
pnpm install  
# or  
bun install  

---

Run the development server:

npm run dev  
# or  
yarn dev  
# or  
pnpm dev  
# or  
bun dev  

Open http://localhost:3000 in your browser to see the result.

You can start editing the page by modifying:

app/page.js  

The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load the Inter Google Font.

---

## Environment Variables

Create a `.env.local` file in the project root:

GOOGLE_ID=  
GOOGLE_SECRET=  

MONGODB_URI=  

S3_ACCESS_KEY=  
S3_SECRET_ACCESS_KEY=  
S3_BUCKET_NAME=  

NEXTAUTH_URL=http://localhost:3000/  
AUTH_TRUST_HOST=true  
AUTH_SECRET=  

---

## Database

Database name: ticcDb

Collections:
- admins
- contents
- events
- mentors
- partners

---

## Database Model Diagram

https://drive.google.com/file/d/1s7S75-GDunPzEvLOUfOdvNTi9GFYan1W/view

---

## Tech Stack

Next.js 14  
React  
MongoDB & Mongoose  
NextAuth (Google OAuth)  
AWS S3  
Tailwind CSS  
Node.js  

---

## Notes

Only emails in the admins collection can log in to the admin dashboard.  
Make sure MongoDB and AWS S3 credentials are configured correctly.

---


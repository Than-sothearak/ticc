# TICC Website & Admin Dashboard

This is a Next.js 14 project for managing and displaying content for Techno Innovation Challenge Cambodia (TICC).  
The project includes an admin dashboard, public website, MongoDB database, Google authentication, and AWS S3 image storage.

---

## Getting Started

First, install dependencies:

```
npm install
```
or  
```
yarn install
``` 
or  
```
pnpm install
``` 
---

Run the development server:

```
npm run dev
```
or  
```
yarn dev
``` 
or  
```
pnpm dev
```

Open http://localhost:3000 in your browser to see the result.

You can start editing the page by modifying:

app/page.js  

The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load the Inter Google Font.

---

## Environment Variables

Create a `.env` file in the project root:

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
Collections:
- admins
```{
  "_id": ObjectId("65a1f2c8e9b123456789abcd"),
  "email": "admin@ticc.org"
}
```
- contents
```
{
  "_id": ObjectId("65a1f2c8e9b123456789abce"),
  "apply_link": {
    "title": "Apply Now for TICC 2024",
    "src": "https://ticc.org/apply",
    "deadline": "2024-07-01T00:00:00.000Z",
    "enabled": true
  },
  "information": {
    "enabled": true,
    "poster": [
      "https://s3.amazonaws.com/ticc/poster1.jpg",
      "https://s3.amazonaws.com/ticc/poster2.jpg"
    ],
    "weeks": {
      "week1": "2024-06-01T00:00:00.000Z",
      "week2": "2024-06-08T00:00:00.000Z",
      "week3": "2024-06-15T00:00:00.000Z",
      "week4": "2024-06-22T00:00:00.000Z"
    }
  },
  "slide_show": {
    "images": [
      "https://s3.amazonaws.com/ticc/slide1.jpg",
      "https://s3.amazonaws.com/ticc/slide2.jpg"
    ]
  }
}

```
- events
```
{
  "_id": ObjectId("65a1f2c8e9b123456789abcf"),
  "title": "TICC 2024 Final Pitch",
  "description": "Final pitching event for top 8 teams.",
  "season": "Season 7",
  "year": 2024,
  "images": [
    "https://s3.amazonaws.com/ticc/events/event1.jpg",
    "https://s3.amazonaws.com/ticc/events/event2.jpg"
  ],
  "prototypes": [
    "https://s3.amazonaws.com/ticc/prototypes/proto1.jpg"
  ],
  "postby": "TICC Admin",
  "createdAt": "2024-07-08T10:00:00.000Z",
  "updatedAt": "2024-07-08T12:00:00.000Z"
}

```
- mentors
```
{
  "_id": ObjectId("65a1f2c8e9b123456789abd0"),
  "name": "Dr. Sok Dara",
  "title": "Senior AI Researcher",
  "image": "https://s3.amazonaws.com/ticc/mentors/dara.jpg",
  "year": 2024,
  "createdAt": "2024-06-01T00:00:00.000Z",
  "updatedAt": "2024-06-10T00:00:00.000Z"
}

```
- partners
```
{
  "_id": ObjectId("65a1f2c8e9b123456789abd1"),
  "logos": [
    "https://s3.amazonaws.com/ticc/partners/google.png",
    "https://s3.amazonaws.com/ticc/partners/aws.png"
  ],
  "createdAt": "2024-05-01T00:00:00.000Z",
  "updatedAt": "2024-05-05T00:00:00.000Z"
}

```

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


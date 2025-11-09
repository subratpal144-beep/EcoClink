# EcoClink - Eco-Friendly Keychain Student Entrepreneurship Project

## Overview
EcoClink is a student entrepreneurship project from Class 11 students at Dr. B.R. Ambedkar School of Excellence, Sec-17, Rohini. The project focuses on creating handmade keychains from leftover fabric, promoting sustainability and reducing textile waste.

## Project Details
- **School**: Dr. B.R. Ambedkar School of Excellence, Sector-17, Rohini, New Delhi
- **Contact Email**: ecoclink0012@gmail.com
- **Instagram**: Coming soon (placeholder currently in place)
- **Tagline**: "From Waste to Wow! – Turning leftover fabric into handmade keychains"

## Team Members
Current team members:
1. Subrat Pal
2. Krishika
3. Shadiya Khan
4. Prachi
5. Saloni

Additional team members to be added later.

## Features Implemented

### Frontend
- **Home/Hero Section**: Large hero with logo, tagline, sustainability message, and call-to-action buttons
- **About Section**: Team introduction, mission statement, school information, and value propositions
- **Products Section**: Display of 3 handcrafted keychain products with images, descriptions, and pricing (₹40-₹60)
- **Contact Section**: Working contact form with name, email, and message fields
- **Footer**: Quick links, values, copyright, and visitor counter display
- **Responsive Navigation**: Mobile-friendly hamburger menu with smooth scrolling
- **Visitor Counter**: Tracks unique visitors per session
- **Smooth Animations**: Fade-in effects and smooth scroll behavior throughout

### Backend API Routes
- `POST /api/contact` - Submit contact form (saves to JSON file)
- `GET /api/contacts` - Retrieve all contact submissions (for future admin panel)
- `POST /api/visitors/increment` - Increment visitor counter
- `GET /api/visitors` - Get current visitor count
- `GET /api/products` - Retrieve product data (currently returns static data)

### Data Storage
All data is stored in JSON files in the `data/` directory:
- `data/contacts.json` - Contact form submissions
- `data/visitors.json` - Visitor counter statistics
- `data/products.json` - Product information (can be edited to update products)

## Design System
- **Colors**: Soft green and white palette (eco-friendly theme)
- **Typography**: Poppins font family for modern, clean look
- **Components**: Shadcn UI components with custom eco-friendly styling
- **Responsive**: Mobile-first design with breakpoints for tablet and desktop
- **Animations**: Subtle scroll animations and hover effects

## How to Update Content

### Adding/Editing Products
Edit `data/products.json` to add or modify product information. Each product should have:
```json
{
  "id": "unique-id",
  "name": "Product Name",
  "description": "Product description",
  "priceRange": "₹XX - ₹YY",
  "imageUrl": "/path/to/image.png"
}
```

### Adding Team Members
Edit `client/src/components/About.tsx` and update the `teamMembers` array:
```typescript
const teamMembers = [
  { name: "Name", initials: "XX" },
  // Add more members
];
```

### Adding Instagram Link
Once Instagram is set up:
1. Edit `client/src/components/Contact.tsx`
2. Find the Instagram section and replace the placeholder with:
```tsx
<a href="https://instagram.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer">
  @your_handle
</a>
```

### Viewing Contact Form Submissions
Contact submissions are saved in `data/contacts.json`. You can:
- Read the file directly to see submissions
- Call `GET /api/contacts` endpoint to retrieve all submissions
- Future: Build an admin panel to manage submissions

## Project Structure
```
├── client/
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Products.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── App.tsx          # Main app component
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles
├── server/
│   ├── routes.ts            # API routes
│   ├── storage.ts           # File-based storage
│   └── index.ts             # Express server
├── shared/
│   └── schema.ts            # Shared TypeScript types
├── data/                     # JSON data files (created at runtime)
│   ├── contacts.json
│   ├── visitors.json
│   └── products.json
└── attached_assets/          # Static assets (logo, product images)
```

## Running the Project
The project runs automatically via the "Start application" workflow which executes `npm run dev`. This starts both the Express backend server and Vite frontend development server on port 5000.

## Technology Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI, TanStack Query
- **Backend**: Express.js, Node.js
- **Storage**: File-based JSON storage (no database required)
- **Styling**: Tailwind CSS with custom eco-friendly color scheme
- **Animations**: Framer Motion, Lucide React icons

## Recent Changes
- **2025-11-08**: Initial project creation with full frontend and backend implementation
  - Created all page sections (Home, About, Products, Contact)
  - Implemented working contact form with backend storage
  - Added visitor counter functionality
  - Set up product data management system
  - Designed responsive, eco-friendly UI with green color scheme

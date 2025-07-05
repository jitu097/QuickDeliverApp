# QuickDeliverApp

A Next.js-based Progressive Web Application (PWA) designed for quick delivery and hyperlocal businesses.

## Features

- 🏪 **Shop Management**: Register and manage local shops
- 📦 **Product Catalog**: Browse and manage products
- 🛒 **Order Management**: Track and manage orders
- 👥 **Role-based Access**: Different dashboards for different user roles
- 📱 **PWA Support**: Installable on mobile devices
- 🔐 **Firebase Integration**: Authentication and database
- 🎨 **Responsive Design**: Built with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase account

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.local` and update with your Firebase configuration
   - Add your Firebase project credentials

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
/quickdeliverapp
├── /pages
│   ├── login.jsx
│   ├── signup.jsx
│   ├── dashboard/[role].jsx
│   ├── shop/
│   │   ├── register.jsx
│   │   └── products.jsx
│   └── orders.jsx
├── /components
│   ├── Navbar.jsx
│   └── ProductCard.jsx
├── /lib
│   └── firebase.js
├── /public
│   ├── manifest.json
│   ├── icons/
│   └── service-worker.js
├── /styles
│   └── globals.css
└── .env.local
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## PWA Features

- Service Worker for offline functionality
- Web App Manifest for installability
- Responsive design for all devices
- Push notifications (to be implemented)

## Firebase Setup

1. Create a Firebase project
2. Enable Authentication and Firestore
3. Update the configuration in `lib/firebase.js`
4. Set environment variables in `.env.local`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

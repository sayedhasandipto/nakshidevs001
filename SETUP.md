# ServiceHub Platform Setup Guide

## Project Overview
ServiceHub is a comprehensive online services platform built with Next.js that serves three main user types:
1. **Service Clients** - People seeking various services
2. **Service Providers** - Professionals offering services
3. **Small Businesses** - Businesses looking to establish online presence

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: JavaScript/TypeScript
- **Database**: MongoDB + Mongoose ORM
- **Authentication**: Better Auth
- **Styling**: Tailwind CSS + DaisyUI + Hero UI
- **Payments**: Stripe (ready to integrate)
- **Real-time**: Socket.io (ready to integrate)

## Project Structure

```
/vercel/share/v0-project/
├── app/
│   ├── api/
│   │   └── auth/[...all]/route.js          # Better Auth handler
│   ├── auth/
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   ├── dashboard/page.tsx                   # Main dashboard
│   ├── services/page.tsx                    # Services listing
│   ├── layout.tsx                           # Root layout
│   ├── page.tsx                             # Landing page
│   └── globals.css                          # Global styles
├── lib/
│   ├── db.js                                # MongoDB connection
│   ├── auth.js                              # Better Auth config
│   ├── models/
│   │   ├── User.js
│   │   ├── Service.js
│   │   └── Order.js
│   └── utils.ts
├── components/
│   ├── Navigation.tsx                       # Main navigation
│   ├── auth/
│   │   ├── Login.tsx
│   │   └── SignUp.tsx
├── public/                                  # Static assets
└── .env.example                             # Environment template
```

## Installation & Setup

### 1. Clone/Setup Project
```bash
cd /vercel/share/v0-project
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env.local` and fill in:

```bash
# MongoDB Connection (use MongoDB Atlas or local)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/service-platform

# Generate with: openssl rand -base64 32
BETTER_AUTH_SECRET=your-generated-secret-here

# Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Stripe (optional, for payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

### 4. Start Development Server
```bash
pnpm dev
```
Visit http://localhost:3000

## Features Implemented (Phase 1)

✅ **Landing Page**
- Hero section with CTAs
- Features overview for all three user types
- Services preview
- Responsive design

✅ **Navigation**
- Sticky header with logo
- Navigation links
- Auth buttons (Sign Up / Log In)
- Mobile responsive

✅ **Authentication**
- Sign Up page (with role selection)
- Sign In page
- Better Auth integration ready
- Role-based user types

✅ **Dashboard**
- User welcome screen
- Role-based sidebar navigation
- Quick stats display
- Profile and support access

✅ **Services Catalog**
- Service browsing by category
- Service cards with details
- Filtering system
- Rating and reviews display

✅ **Database Models**
- User model (with role system)
- Service model (with categories)
- Order model (with status tracking)

## Authentication Flow

1. User signs up with email, password, and role
2. Better Auth handles password hashing and session management
3. Dashboard shows role-specific features
4. Session persists with secure cookies

## Next Steps (Phase 2-4)

### Phase 2: Core Features
- [ ] Complete order management system
- [ ] Payment processing with Stripe
- [ ] Service provider management panel
- [ ] Client order tracking

### Phase 3: Real-time Features
- [ ] Support chat system with Socket.io
- [ ] Developer/provider hiring system
- [ ] Notifications

### Phase 4: Advanced Features
- [ ] Analytics dashboard
- [ ] Business website builder
- [ ] Email notifications
- [ ] Advanced reporting

## Important Notes

⚠️ **Environment Variables Required**
- `MONGODB_URI` - Must be set before running
- `BETTER_AUTH_SECRET` - Generate with: `openssl rand -base64 32`

⚠️ **Database Migration**
- Mongoose will auto-create collections on first run
- Models are defined but data needs to be seeded for development

📝 **API Endpoints Ready**
- `POST /api/auth/sign-up` - Register new user
- `POST /api/auth/sign-in` - Login user
- `GET /api/auth/session` - Get current user session
- `POST /api/auth/sign-out` - Logout user

## Development Tips

1. **Hot Reload**: Changes auto-refresh in the browser
2. **Database**: Use MongoDB Atlas for easy cloud setup
3. **Testing**: Test auth flow: sign up → dashboard → log out
4. **Debugging**: Check browser console and Next.js terminal for errors

## Deployment

Ready to deploy on Vercel:
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## Support

For questions or issues, refer to:
- Next.js docs: https://nextjs.org
- MongoDB: https://mongodb.com
- Better Auth: https://www.better-auth.com

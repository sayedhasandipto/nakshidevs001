# ServiceHub - Quick Start Guide

## 🚀 Get Running in 5 Minutes

### Step 1: Install Dependencies
```bash
cd /vercel/share/v0-project
pnpm install
```

### Step 2: Set Up Environment Variables
```bash
cp .env.example .env.local
```

### Step 3: Configure MongoDB

**Option A: MongoDB Atlas (Cloud - Recommended)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Update `MONGODB_URI` in `.env.local`

**Option B: Local MongoDB**
```bash
# If you have MongoDB installed locally
MONGODB_URI=mongodb://localhost:27017/service-platform
```

### Step 4: Generate Auth Secret
```bash
openssl rand -base64 32
```
Copy the output and paste it in `.env.local` as `BETTER_AUTH_SECRET`

### Step 5: Start the Server
```bash
pnpm dev
```

### Step 6: Open in Browser
Visit: **http://localhost:3000**

---

## 🧪 Test the Platform

### Test User Registration
1. Click **"Sign Up"** button
2. Fill in the form:
   - Name: Your Name
   - Email: test@example.com
   - Password: Test@123
   - Role: Select any (Client, Provider, or Business)
3. Click **"Create Account"**
4. You'll be redirected to dashboard

### Test Services Browsing
1. On home page, click **"Explore Services"**
2. Browse the service catalog
3. Click on any service to see details
4. Click **"Order Now"** (requires login)

### Test Login/Logout
1. From dashboard, click **"Log Out"**
2. Use **"Log In"** button
3. Enter your test credentials
4. You're back in dashboard

---

## 📁 Project Structure

```
app/
├── page.tsx              → Landing page
├── auth/
│   ├── signup/page.tsx   → Sign up form
│   └── login/page.tsx    → Login form
├── dashboard/page.tsx    → User dashboard
├── services/
│   ├── page.tsx          → Services list
│   └── [id]/page.tsx     → Service detail
└── api/
    ├── auth/             → Authentication
    ├── services/         → Service CRUD
    └── orders/           → Order management

lib/
├── db.js                 → MongoDB connection
├── auth.js               → Better Auth setup
└── models/               → Database models

components/
├── Navigation.tsx        → Header/nav
└── auth/
    ├── SignUp.tsx
    └── Login.tsx
```

---

## 🔑 Key Environment Variables

| Variable | Example | Required |
|----------|---------|----------|
| `MONGODB_URI` | `mongodb+srv://user:pass@cluster.mongodb.net/db` | ✅ |
| `BETTER_AUTH_SECRET` | `abc123...` | ✅ |
| `NEXT_PUBLIC_APP_URL` | `http://localhost:3000` | ✅ |
| `STRIPE_PUBLIC_KEY` | `pk_test_...` | ❌ |
| `STRIPE_SECRET_KEY` | `sk_test_...` | ❌ |

---

## 🎨 Available Pages

### Public (No Login Required)
- `/` - Landing page
- `/services` - Service catalog
- `/services/[id]` - Service details
- `/auth/login` - Login
- `/auth/signup` - Sign up

### Protected (Login Required)
- `/dashboard` - Main dashboard
- `/dashboard/orders` - Your orders
- `/dashboard/profile` - Profile settings
- `/dashboard/support` - Support chat

---

## 🛠️ Useful Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Check TypeScript
pnpm type-check
```

---

## 🐛 Troubleshooting

### MongoDB Connection Error
**Problem**: `MongoServerError: connect ECONNREFUSED`

**Solution**:
- Check `MONGODB_URI` is correct in `.env.local`
- If using MongoDB Atlas, whitelist your IP (add `0.0.0.0/0`)
- Ensure MongoDB is running (if local)

### Auth Not Working
**Problem**: Can't sign up or login

**Solution**:
- Verify `BETTER_AUTH_SECRET` is set
- Check browser console for errors
- Clear cookies: Settings → Privacy → Clear cookies
- Restart dev server: `Ctrl+C` then `pnpm dev`

### Services Not Loading
**Problem**: Services page shows empty

**Solution**:
- Add sample services via API or database directly
- Check if MongoDB is connected (check terminal)
- Verify `/api/services` returns data

### Styling Issues
**Problem**: Pages look unstyled

**Solution**:
- Hard refresh browser: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)
- Clear Next.js cache: `rm -rf .next`
- Restart dev server: `pnpm dev`

---

## 📝 Sample Test Data

### Add Sample Services (MongoDB Query)
```javascript
db.services.insertMany([
  {
    title: "Birth Certificate Registration",
    description: "Complete birth certificate registration process",
    category: "government",
    price: 500,
    duration: "5-7 days",
    features: ["Document preparation", "Government liaison"],
    providerId: "USER_ID_HERE",
    rating: 4.8,
    active: true
  },
  {
    title: "Web Development",
    description: "Professional website development",
    category: "technical",
    price: 5000,
    duration: "30-45 days",
    features: ["Custom design", "Responsive layout"],
    providerId: "USER_ID_HERE",
    rating: 4.9,
    active: true
  }
])
```

---

## 🌐 Deployment Preview

### Deploy to Vercel
```bash
# Push to GitHub first
git add .
git commit -m "Initial commit"
git push origin main

# Then in Vercel dashboard:
# 1. Click "New Project"
# 2. Select your repository
# 3. Add environment variables
# 4. Deploy
```

### Required Vercel Environment Variables
```
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_generated_secret
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

---

## 📚 Next Steps

1. **Test User Flows** - Register, browse services, login/logout
2. **Add Sample Data** - Use MongoDB to add sample services
3. **Customize** - Modify colors, text, and branding
4. **Integrate Stripe** - Add payment processing (Phase 2)
5. **Launch** - Deploy to Vercel

---

## 💡 Tips & Tricks

### Quick Database Seed
```bash
# Add test user and services via API
curl -X POST http://localhost:3000/api/services \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Service",
    "description": "Test Description",
    "category": "business",
    "price": 1000,
    "providerId": "USER_ID"
  }'
```

### Check Logs
- Server logs: Check terminal where you ran `pnpm dev`
- Browser console: Press `F12` → Console tab
- Network requests: Press `F12` → Network tab

### Browser DevTools
- **F12** - Open developer tools
- **Ctrl+Shift+I** - Open developer tools (alternative)
- **Console tab** - See JavaScript errors
- **Network tab** - Check API calls
- **Application tab** - Check cookies/storage

---

## 🆘 Getting Help

1. **Check README.md** - Full documentation
2. **Check SETUP.md** - Setup instructions
3. **Check terminal logs** - Error messages
4. **Check browser console** - JavaScript errors
5. **Check PHASE_SUMMARY.md** - What's been built

---

## ✅ Checklist for First Time

- [ ] Installed dependencies with `pnpm install`
- [ ] Created `.env.local` file
- [ ] Added `MONGODB_URI` to `.env.local`
- [ ] Generated and added `BETTER_AUTH_SECRET`
- [ ] Started server with `pnpm dev`
- [ ] Opened http://localhost:3000 in browser
- [ ] Successfully signed up with test account
- [ ] Logged in with test account
- [ ] Browsed services
- [ ] Viewed service details

---

**Ready to go! Happy coding! 🎉**

For detailed documentation, see `README.md`
For setup help, see `SETUP.md`
For project overview, see `PHASE_SUMMARY.md`

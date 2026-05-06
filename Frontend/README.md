# Hospital Project Frontend

A modern, responsive healthcare web application built with React, Vite, and Tailwind CSS. This frontend provides a comprehensive platform for patients to book appointments, track health vitals, access AI-powered health advice, and manage their medical records.

## Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Key Features](#key-features)
- [Pages & Components](#pages--components)
- [State Management](#state-management)
- [Styling](#styling)
- [API Integration](#api-integration)
- [UI Components](#ui-components)
- [Authentication Flow](#authentication-flow)
- [Utilities](#utilities)
- [Browser Support](#browser-support)

---

## Overview

The Hospital Project Frontend is a feature-rich healthcare platform designed to provide patients with easy access to:
- Doctor appointments booking and management
- Health vitals tracking and history
- AI-powered health buddy (Ziva Chatbot)
- Medical insurance information
- Health records and reports
- Patient dashboard with analytics
- Responsive design for mobile and desktop

## Tech Stack

### Core Framework
- **React** (^19.2.0) - UI library
- **Vite** (Latest) - Build tool and dev server with HMR
- **React Router DOM** (^7.13.2) - Client-side routing

### Styling & UI
- **Tailwind CSS** (^4.2.1) - Utility-first CSS framework
- **Shadcn UI** (^4.1.0) - High-quality React components
- **Lucide React** (^0.577.0) - Icon library
- **Motion/Framer Motion** (^12.38.0) - Animation library
- **Swiper** (^12.1.2) - Touch slider carousel
- **GSAP** (^3.15.0) - Advanced animations
- **Locomotive Scroll** (^5.0.1) - Smooth scrolling library
- **Recharts** (^3.8.1) - Data visualization and charts

### State Management & Forms
- **Redux Toolkit** (^2.11.2) - State management
- **React Redux** (^9.2.0) - React bindings for Redux
- **React Hook Form** (^7.72.0) - Efficient form handling
- **Zod** (^4.3.6) - Schema validation
- **Hookform Resolvers** (^5.2.2) - Form validation integration

### API & HTTP
- **Axios** (^1.13.6) - HTTP client with interceptors

### Utilities
- **Date-fns** (^4.1.0) - Date manipulation
- **React Hot Toast** (^2.6.0) - Toast notifications
- **Radix UI** (^1.4.3) - Headless UI components
- **Class Variance Authority** (^0.7.1) - Type-safe CSS classes
- **CLSX** (^2.1.1) - Conditional class names
- **Tailwind Merge** (^3.5.0) - Merge Tailwind classes

---

## Project Structure

```
Frontend/
├── src/
│   ├── App.jsx                        # Main app component with routing
│   ├── App.css                        # Global styles
│   ├── main.jsx                       # Entry point
│   ├── index.css                      # Base CSS
│   ├── assets/                        # Static assets (images, icons)
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Navbar.jsx             # Navigation bar
│   │   │   └── HeroSection.jsx        # Landing page hero section
│   │   ├── Pages/
│   │   │   ├── LoginPage.jsx          # User login
│   │   │   ├── SignupPage.jsx         # User registration
│   │   │   ├── BodyPage.jsx           # Homepage content
│   │   │   ├── BookDoctor.jsx         # Appointment booking
│   │   │   ├── PatientDashboard.jsx   # User dashboard with analytics
│   │   │   ├── UserPage.jsx           # User profile management
│   │   │   ├── DoctorPage.jsx         # Doctor information
│   │   │   ├── ServicePage.jsx        # Services offered
│   │   │   ├── PlanPage.jsx           # Subscription plans
│   │   │   ├── ReviewPage.jsx         # Patient reviews/testimonials
│   │   │   ├── FAQPage.jsx            # FAQ section
│   │   │   ├── AboutPage.jsx          # About hospital
│   │   │   ├── TeamPage.jsx           # Team information
│   │   │   ├── Insurance.jsx          # Insurance information
│   │   │   ├── AppointmentDetailsModal.jsx  # Appointment details view
│   │   │   ├── RescheduleModal.jsx    # Reschedule appointments
│   │   │   ├── UpdateVitalsModal.jsx  # Update health vitals
│   │   │   ├── ProtectedRoute.jsx     # Route protection wrapper
│   │   │   └── NotFound.jsx           # 404 page
│   │   ├── GenAi/
│   │   │   └── ZivaChatbot.jsx        # AI health buddy chatbot
│   │   ├── QuickLinks/
│   │   │   ├── Result.jsx             # Medical results/reports
│   │   │   ├── Record.jsx             # Medical records
│   │   │   └── Telehealth.jsx         # Telehealth consultation
│   │   ├── Footer/
│   │   │   └── Footer.jsx             # Footer component
│   │   ├── ui/                        # Shadcn UI components
│   │   │   ├── alert-dialog.jsx
│   │   │   ├── avatar.jsx
│   │   │   ├── badge.jsx
│   │   │   ├── button.jsx
│   │   │   ├── calendar.jsx
│   │   │   ├── card.jsx
│   │   │   ├── checkbox.jsx
│   │   │   ├── dialog.jsx
│   │   │   ├── form.jsx
│   │   │   ├── input.jsx
│   │   │   ├── label.jsx
│   │   │   ├── popover.jsx
│   │   │   ├── progress.jsx
│   │   │   ├── select.jsx
│   │   │   ├── separator.jsx
│   │   │   ├── tabs.jsx
│   │   │   ├── textarea.jsx
│   │   │   └── tooltip.jsx
│   │   └── QuickLinks/
│   │       └── Various quick access components
│   ├── Redux/
│   │   ├── store.js                   # Redux store configuration
│   │   └── Features/
│   │       ├── authentication/
│   │       │   └── authSlice.js       # Auth state management
│   │       └── ui/
│   │           └── uiSlice.js         # UI state management
│   ├── utils/
│   │   └── axiosInstance.js           # Configured Axios with interceptors
│   ├── lib/
│   │   └── utils.js                   # Utility helper functions
│   └── PreLoader/
│       └── PreLoader.jsx              # Loading spinner component
├── public/                            # Static public assets
├── package.json                       # Project dependencies
├── vite.config.js                     # Vite configuration
├── eslint.config.js                   # ESLint configuration
├── jsconfig.json                      # JavaScript configuration
├── components.json                    # Shadcn UI configuration
└── tailwind.config.js                 # Tailwind CSS configuration
```

---

## Installation & Setup

### Prerequisites
- Node.js (v16.x or higher)
- npm or yarn
- Backend server running on `http://localhost:5000`

### Step 1: Clone/Navigate to Project
```bash
cd Frontend
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment
Create a `.env.local` file in the root (if needed):
```
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=Ziva Healthcare
```

### Step 4: Start Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## Running the Application

### Development
```bash
npm run dev
```
- Hot Module Replacement (HMR) enabled for fast development
- Open browser to `http://localhost:5173`
- Changes auto-reload without full page refresh

### Linting
```bash
npm run lint
```
- Checks code quality with ESLint
- Fixes issues automatically

### Build & Deploy
```bash
npm run build
npm run preview
```

---

## Key Features

### 1. **Authentication System**
- User registration and login
- JWT token-based authentication
- Session management with refresh tokens
- Protected routes for authenticated users
- Auto-logout on token expiration

### 2. **Appointment Management**
- Book appointments with available doctors
- View all scheduled appointments
- Cancel appointments (24-hour notice required)
- Reschedule appointments
- Real-time appointment status tracking

### 3. **Patient Dashboard**
- Personalized health analytics with charts
- Vitals history and trends
- Appointment calendar view
- Quick access to medical records
- Health score and wellness metrics

### 4. **Health Vitals Tracking**
- Update health metrics:
  - Blood pressure (Systolic/Diastolic)
  - Heart rate
  - Height and weight
  - Health score
- View historical vitals
- Visual trend analysis with Recharts

### 5. **AI Health Buddy (Ziva Chatbot)**
- AI-powered health advice using Google Gemini
- 24/7 availability
- Context-aware responses
- Multiple language support (English & Hinglish)
- Guides users to book doctor consultations

### 6. **User Profile Management**
- View and edit personal information
- Update medical history
- Manage contact details
- Update health vitals

### 7. **Doctor & Services Information**
- Browse available doctors
- View doctor profiles and specializations
- Explore medical services offered
- Read patient reviews and testimonials

### 8. **Insurance & Plans**
- View subscription plans
- Insurance information
- Plan benefits and coverage

### 9. **Medical Records**
- Access medical reports
- View health records
- Download documents

---

## Pages & Components

### Public Pages
| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero section and features |
| Services | `/services` | Healthcare services overview |
| Doctors | `/doctors` | Available doctors and specializations |
| Plans | `/plans` | Subscription plans and pricing |
| Reviews | `/reviews` | Patient testimonials and ratings |
| FAQ | `/faq` | Frequently asked questions |
| About | `/about` | Hospital information and history |
| Team | `/team` | Medical team and staff |
| Insurance | `/insurance` | Insurance coverage details |

### Authentication Pages
| Page | Route | Description |
|------|-------|-------------|
| Login | `/login` | User login |
| Signup | `/signup` | User registration |

### Protected Pages (Auth Required)
| Page | Route | Description |
|------|-------|-------------|
| Dashboard | `/dashboard` | Patient dashboard with analytics |
| Book Appointment | `/book-appointment` | Appointment booking interface |
| My Profile | `/profile` | User profile management |
| Appointments | `/appointments` | View and manage appointments |
| Results | `/results` | Medical test results |
| Records | `/records` | Medical records and documents |
| Telehealth | `/telehealth` | Online consultation feature |

### Components
| Component | Purpose |
|-----------|---------|
| Navbar | Navigation and menu |
| HeroSection | Landing page banner |
| ZivaChatbot | AI health buddy popup |
| AppointmentDetailsModal | Show appointment details |
| RescheduleModal | Reschedule appointment form |
| UpdateVitalsModal | Update health vitals form |
| ProtectedRoute | Auth route wrapper |
| Footer | Website footer |
| PreLoader | Loading spinner |

---

## State Management

### Redux Store Structure

#### Authentication Slice (`authSlice.js`)
Manages user authentication state:
```javascript
{
  auth: {
    user: {
      _id, name, email, mobileNumber,
      gender, bloodGroup, userHeight, userWeight,
      heartRate, bpSys, bpDia, healthScore, userAddress
    },
    token: "JWT_ACCESS_TOKEN",
    isAuthenticated: boolean,
    loading: boolean,
    error: string
  }
}
```

**Actions**:
- `loginSuccess(user, token)` - Store user on successful login
- `logout()` - Clear auth state
- `updateUser(userData)` - Update user information
- `setLoading(boolean)` - Toggle loading state

#### UI Slice (`uiSlice.js`)
Manages UI state:
```javascript
{
  ui: {
    sidebarOpen: boolean,
    modalOpen: string,
    theme: 'light' | 'dark',
    notification: { message, type }
  }
}
```

**Usage in Components**:
```jsx
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from './Redux/Features/authentication/authSlice';

const MyComponent = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  
  const handleLogin = (userData) => {
    dispatch(loginSuccess(userData));
  };
};
```

---

## Styling

### Tailwind CSS
- Utility-first CSS framework
- Responsive design with breakpoints
- Custom configuration in `tailwind.config.js`
- Dark mode support (ready to implement)

### Shadcn UI Components
Pre-built, customizable components using Tailwind CSS:
- Forms, dialogs, buttons, cards
- Date pickers, dropdowns, tabs
- Accessible and keyboard-friendly

### Animation Libraries
- **Framer Motion/Motion** - React animations
- **GSAP** - Advanced animations and timelines
- **Locomotive Scroll** - Smooth page scrolling
- **Swiper** - Touch-friendly carousels

### Global Styles
- `App.css` - App-specific styles
- `index.css` - Global base styles
- Tailwind directives and custom properties

---

## API Integration

### Axios Instance (`utils/axiosInstance.js`)
Pre-configured Axios with:
- Base URL: `http://localhost:5000`
- Default headers
- Automatic token injection from localStorage
- Request/response interceptors
- Cookie support for refresh tokens

**Usage**:
```javascript
import api from './utils/axiosInstance';

// Get user data
const res = await api.get('/auth/user', {
  headers: { Authorization: `Bearer ${token}` }
});

// Book appointment
const res = await api.post('/zivacare/appointments/bookAppointment', {
  patient, age, symptoms, department, doctorName, doctorId,
  appointmentDate, timeSlot
}, {
  headers: { Authorization: `Bearer ${token}` }
});

// AI Chat
const res = await api.post('/api/ai/ask', {
  message: "I have a headache"
});
```

### API Endpoints Used

**Authentication** (`/api`):
- `POST /auth/register` - Register new user
- `POST /auth/login` - User login
- `GET /auth/user` - Get user profile
- `GET /auth/refresh-token` - Refresh access token
- `GET /auth/logout` - Logout
- `GET /auth/logout-all` - Logout from all devices
- `PUT /auth/update/:id` - Update user profile

**Appointments** (`/zivacare`):
- `POST /appointments/bookAppointment` - Book appointment
- `GET /appointments/getAppointments` - Get user appointments
- `PUT /appointments/cancel/:id` - Cancel appointment
- `PUT /appointments/reschedule/:id` - Reschedule appointment

**AI Chat** (`/api`):
- `POST /ai/ask` - Chat with AI health buddy

---

## UI Components

### Shadcn UI Library
Reusable component library with Tailwind CSS styling:

```jsx
// Button
import { Button } from "@/components/ui/button";
<Button>Click Me</Button>

// Form
import { Form } from "@/components/ui/form";
<Form.Provider {...form}>
  <form>...</form>
</Form.Provider>

// Dialog/Modal
import { Dialog, DialogContent } from "@/components/ui/dialog";
<Dialog>
  <DialogContent>...</DialogContent>
</Dialog>

// Card
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>...</CardContent>
</Card>

// Tabs
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
<Tabs>
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content</TabsContent>
</Tabs>

// Calendar
import { Calendar } from "@/components/ui/calendar";
<Calendar />

// Select
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
<Select>
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
  </SelectContent>
</Select>
```

---

## Authentication Flow

### Login Flow
```
User Enters Credentials
        ↓
POST /auth/login
        ↓
Backend validates & returns accessToken + refreshToken
        ↓
Store accessToken in localStorage (ziva_token)
Store refreshToken in HTTP-only cookie (automatic)
        ↓
Fetch user profile with token
        ↓
Dispatch loginSuccess() action
        ↓
Redirect to dashboard
```

### Token Refresh Flow
```
Access Token Expires (15 min)
        ↓
Axios interceptor catches 401
        ↓
POST /auth/refresh-token (using refresh token cookie)
        ↓
Backend returns new accessToken
        ↓
Retry original request with new token
```

### Protected Routes
```jsx
<ProtectedRoute>
  <Dashboard />
</ProtectedRoute>
```
- Checks authentication state
- Redirects to login if not authenticated
- Shows loading spinner while checking auth

---

## Utilities

### Helper Functions (`utils/axiosInstance.js`)
```javascript
// Configured Axios instance with interceptors
import api from '@/utils/axiosInstance';

// Automatic token injection
// Automatic cookie handling
// Error handling and logging
```

### Utility Functions (`lib/utils.js`)
Common utility functions:
- Class name utilities
- Data formatting functions
- Validation helpers

### Toast Notifications (`react-hot-toast`)
```javascript
import toast from 'react-hot-toast';

toast.success('Appointment booked!');
toast.error('Failed to book appointment');
toast.loading('Loading...');
```

### Date Handling (`date-fns`)
```javascript
import { format, isAfter, addDays } from 'date-fns';

format(new Date(), 'dd/MM/yyyy')
isAfter(date1, date2)
addDays(new Date(), 7)
```

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Optimizations

1. **Code Splitting** - Lazy loading pages with React.lazy()
2. **Image Optimization** - Responsive images and lazy loading
3. **Bundle Size** - Vite's optimized build output
4. **Caching** - Axios request caching strategy
5. **Memoization** - React.memo for expensive components
6. **Virtual Scrolling** - For large lists

---

## Best Practices

### Component Structure
```jsx
// Functional components with hooks
// Clear separation of concerns
// Reusable and composable
```

### State Management
```jsx
// Use Redux for global state
// Use local state for component-level state
// Avoid prop drilling with context/Redux
```

### Error Handling
```jsx
// Try-catch blocks for async operations
// User-friendly error messages
// Console logging for debugging
```

### Form Handling
```jsx
// React Hook Form for efficiency
// Zod for validation
// Clear error messages to users
```

---

## Troubleshooting

### Common Issues

**Backend Not Connecting**
- Ensure backend is running on `http://localhost:5000`
- Check CORS settings in backend
- Verify API endpoints in `axiosInstance.js`

**Token Expiration Issues**
- Check localStorage for `ziva_token`
- Verify refresh token cookie is being set
- Check backend refresh endpoint response

**Component Not Rendering**
- Check route definitions in App.jsx
- Verify lazy loading import statements
- Check browser console for errors

**Styling Issues**
- Run Tailwind CSS rebuild
- Check component className conflicts
- Clear browser cache

---

## Contributing

1. Create feature branches from main
2. Follow component structure patterns
3. Use Redux for state management
4. Test on mobile and desktop
5. Commit messages should be clear

---

## Support & Contact

For issues or questions:
- Check documentation in README files
- Review backend API documentation
- Check console logs for error messages
- Contact the development team

---

**Last Updated**: May 2026
**Version**: 1.0.0

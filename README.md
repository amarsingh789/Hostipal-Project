# Hospital Project - Ziva Healthcare Platform

A comprehensive full-stack healthcare management system built with modern web technologies. This platform enables patients to book appointments, track health vitals, access AI-powered health advice, and manage medical records seamlessly.

![Status](https://img.shields.io/badge/Status-Active%20Development-blue)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express%205.2.1-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![License](https://img.shields.io/badge/License-Private-red)

## Table of Contents
- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Components](#project-components)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Database Models](#database-models)
- [API Overview](#api-overview)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Support](#support)

---

## Project Overview

**Ziva Healthcare Platform** is a full-stack healthcare management solution designed to bridge the gap between patients and healthcare providers. The system provides an intuitive interface for patients to:

- Schedule and manage medical appointments
- Track personal health metrics and vitals
- Communicate with AI health advisor (Ziva Chatbot)
- Access medical records and test results
- View and manage insurance information
- Monitor health analytics and trends

The backend handles all business logic, data persistence, authentication, and integration with AI services, while the frontend provides a responsive, user-friendly interface accessible on both desktop and mobile devices.

---

## Project Structure

```
Hospital-Project/
│
├── Frontend/                          # React-based patient portal
│   ├── src/
│   │   ├── components/               # Reusable React components
│   │   ├── pages/                    # Page components
│   │   ├── Redux/                    # State management
│   │   ├── utils/                    # Utility functions
│   │   └── App.jsx                   # Root component
│   ├── package.json
│   ├── vite.config.js
│   ├── README.md                     # Frontend documentation
│   └── ... (config files)
│
├── Backend/                           # Node.js/Express API server
│   ├── src/
│   │   ├── controllers/              # Business logic
│   │   ├── models/                   # MongoDB schemas
│   │   ├── routes/                   # API endpoints
│   │   ├── middleware/               # Custom middleware
│   │   ├── config/                   # Configuration files
│   │   └── utils/                    # Utility functions
│   ├── server.js                     # Entry point
│   ├── package.json
│   ├── README.md                     # Backend documentation
│   ├── .env                          # Environment variables
│   └── ... (config files)
│
├── README.md                         # This file - Project overview
├── .gitignore
└── ... (project files)
```

---

## Tech Stack

### Frontend
- **Framework**: React ^19.2.0 with Vite
- **Routing**: React Router DOM ^7.13.2
- **State Management**: Redux Toolkit ^2.11.2
- **Styling**: Tailwind CSS ^4.2.1 + Shadcn UI ^4.1.0
- **Forms**: React Hook Form ^7.72.0 + Zod ^4.3.6
- **HTTP Client**: Axios ^1.13.6
- **Animations**: Framer Motion, GSAP, Locomotive Scroll
- **Charts**: Recharts ^3.8.1
- **UI Icons**: Lucide React
- **Notifications**: React Hot Toast

### Backend
- **Runtime**: Node.js with Express.js ^5.2.1
- **Database**: MongoDB with Mongoose ^9.3.1
- **Authentication**: JWT (jsonwebtoken ^9.0.3)
- **Password Hashing**: Bcryptjs ^2.4.3
- **AI Integration**: Google Generative AI (@google/generative-ai)
- **HTTP Utilities**: Morgan (logging), Cookie-parser
- **Date Handling**: Moment.js
- **CORS**: Cross-origin resource sharing configured
- **Environment**: dotenv for configuration management

### Database
- **Primary**: MongoDB
- **Collections**: Users, Appointments, Sessions, OTPs, Vitals History, Lab Results

---

## Features

### 👤 User Management
- User registration with email/mobile verification
- JWT-based authentication with refresh tokens
- Profile management and health information
- Session tracking across devices
- Logout and multi-device logout capabilities

### 📅 Appointment System
- Book appointments with available doctors
- Real-time availability checking
- Prevent double-booking with unique constraints
- Reschedule appointments (24-hour window)
- Cancel appointments with validation
- Appointment status tracking (Pending, Confirmed, Completed, Cancelled)

### 💊 Health Vitals Management
- Track blood pressure, heart rate, height, weight
- Health score calculation
- Vitals history and trends
- Visual analytics dashboard with charts

### 🤖 AI Health Assistant
- Ziva Health Buddy chatbot powered by Google Gemini
- Context-aware health advice
- Multi-language support (English & Hinglish)
- 24/7 availability
- Guides users to book appointments

### 📊 Patient Dashboard
- Personalized health analytics
- Appointment calendar
- Vitals trends visualization
- Quick access to medical records
- Health metrics overview

### 🔒 Security Features
- Password hashing with bcryptjs
- JWT token-based authentication
- HTTP-only, Secure cookies
- CORS protection
- Session management and revocation

### 📱 Responsive Design
- Mobile-first approach
- Tailwind CSS responsive breakpoints
- Touch-friendly UI on mobile devices
- Smooth animations and transitions

---

## Getting Started

### Prerequisites
- **Node.js** (v16.x or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local or Atlas cloud)
- **Git** for version control
- Internet connection for AI service

### Environment Setup

#### Backend Environment Variables
Create `.env` file in `Backend/` folder:
```
MONGO_URI=mongodb://localhost:27017/hospital-project
JWT_SECRET=your_jwt_secret_key_here
GOOGLE_API_KEY=your_google_generative_ai_key
PORT=5000
NODE_ENV=development
```

#### Frontend Environment Variables
Create `.env.local` file in `Frontend/` folder (optional):
```
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=Ziva Healthcare
```

---

## Installation

### Step 1: Clone the Repository
```bash
cd Hospital-Project
```

### Step 2: Backend Setup
```bash
cd Backend
npm install
```

### Step 3: Frontend Setup
```bash
cd ../Frontend
npm install
```

### Step 4: Database Setup
- Ensure MongoDB is running on `mongodb://localhost:27017`
- Or update `MONGO_URI` in Backend/.env with your MongoDB Atlas connection string

---

## Running the Project

### Terminal 1: Start Backend Server
```bash
cd Backend
npm run dev
# or
npm start
```
- Backend runs on: `http://localhost:5000`
- API endpoints available at: `http://localhost:5000/api`

### Terminal 2: Start Frontend Development Server
```bash
cd Frontend
npm run dev
```
- Frontend runs on: `http://localhost:5173`
- Open browser to: `http://localhost:5173`

### Build for Production

**Backend:**
```bash
cd Backend
npm run build
npm start
```

**Frontend:**
```bash
cd Frontend
npm run build
npm run preview
```

---

## Project Components

### Frontend

The frontend is a modern React application providing a user interface for patients to interact with the healthcare platform.

**Key Sections:**
- **Authentication Pages**: Login, Signup, Password Reset
- **Patient Dashboard**: Health analytics, vitals tracking, charts
- **Appointment Management**: Booking, viewing, rescheduling, cancellation
- **User Profile**: Personal information, medical history, contact details
- **Health Records**: Access to medical reports, test results, documents
- **Doctor Directory**: Browse doctors, specializations, availability
- **Insurance & Plans**: View subscription plans and coverage
- **AI Health Buddy**: Chat interface for health advice
- **Navigation**: Responsive navbar, footer, quick links

**For Complete Frontend Documentation:**
→ See [Frontend/README.md](Frontend/README.md)

This includes:
- Tech stack details
- Project structure
- Installation instructions
- Component documentation
- API integration guide
- State management patterns
- Styling approach
- Troubleshooting guide

---

### Backend

The backend is a Node.js/Express server handling all API endpoints, business logic, database operations, and external service integrations.

**Core Modules:**
- **Authentication**: User registration, login, token refresh, logout
- **Appointment Management**: Booking, rescheduling, cancellation, status tracking
- **User Management**: Profile updates, health information, session management
- **AI Integration**: Google Gemini API for health advice
- **Vitals Tracking**: Health metrics storage and retrieval
- **Lab Results**: Medical test results management
- **Session Management**: Multi-device support, token revocation

**API Routes:**
- `/api/auth/` - Authentication endpoints
- `/api/user/` - User management endpoints
- `/zivacare/appointments/` - Appointment endpoints
- `/api/ai/` - AI assistant endpoints
- `/api/patient/` - Patient data endpoints

**For Complete Backend Documentation:**
→ See [Backend/README.md](Backend/README.md)

This includes:
- Tech stack details
- API endpoint documentation
- Request/response formats
- Database models
- Authentication flow
- Error handling
- Best practices
- Troubleshooting guide

---

## Database Models

### 1. User Model
Stores patient and healthcare provider information.
```
{
  name, email, mobileNumber, password (hashed),
  role, gender, dateOfBirth, isEmailVerified,
  bloodGroup, userHeight, userWeight,
  heartRate, bpSys, bpDia, healthScore,
  userAddress, createdAt, updatedAt
}
```

### 2. Appointment Model
Manages appointment bookings and scheduling.
```
{
  patientId (ref User), patient name, age,
  symptoms, department, doctorName, doctorId,
  appointmentDate, timeSlot, status,
  paymentStatus, createdAt, updatedAt
}
```

### 3. Session Model
Tracks user sessions for token management.
```
{
  user (ref User), refreshTokenHash,
  ip, userAgent, revoked, createdAt, updatedAt
}
```

### 4. Vitals History Model
Stores historical health vitals data.
```
{
  userId (ref User), date,
  bloodPressure { systolic, diastolic },
  heartRate, height, weight,
  healthScore, createdAt, updatedAt
}
```

### 5. Lab Result Model
Manages medical test results.
```
{
  userId (ref User), testName,
  resultDate, testValue,
  normalRange, status, createdAt, updatedAt
}
```

### 6. OTP Model
Temporary OTP storage for verification (auto-expires after 5 minutes).
```
{
  mobileNumber, otpHash,
  expiresAt (TTL index)
}
```

---

## API Overview

### Authentication Endpoints
```
POST   /api/auth/register           - Register new user
POST   /api/auth/login              - User login
GET    /api/auth/user               - Get user profile
GET    /api/auth/refresh-token      - Refresh access token
GET    /api/auth/logout             - Logout
GET    /api/auth/logout-all         - Logout from all devices
PUT    /api/auth/update/:id         - Update user profile
```

### Appointment Endpoints
```
POST   /zivacare/appointments/bookAppointment        - Book appointment
GET    /zivacare/appointments/getAppointments        - Get user appointments
PUT    /zivacare/appointments/cancel/:id             - Cancel appointment
PUT    /zivacare/appointments/reschedule/:id         - Reschedule appointment
```

### Patient Endpoints
```
GET    /api/patient/vitals          - Get vitals history
POST   /api/patient/vitals          - Add new vitals
GET    /api/patient/lab-results     - Get lab results
POST   /api/patient/lab-results     - Add lab result
```

### AI Endpoints
```
POST   /api/ai/ask                  - Chat with AI health buddy
```

---

## Development Workflow

### 1. Feature Development

**Backend:**
1. Create route in `Backend/src/routes/`
2. Create controller logic in `Backend/src/controllers/`
3. Define/update model in `Backend/src/models/`
4. Test using Postman/Thunder Client
5. Commit changes

**Frontend:**
1. Create component in `Frontend/src/components/`
2. Create page if needed in `Frontend/src/Pages/`
3. Update Redux state if required in `Frontend/src/Redux/`
4. Test in browser
5. Commit changes

### 2. Git Workflow
```bash
# Create feature branch
git checkout -b feature/feature-name

# Make changes and test
# ...

# Commit changes
git commit -m "Add feature-name functionality"

# Push to remote
git push origin feature/feature-name

# Create Pull Request
```

### 3. Code Quality
- Follow consistent naming conventions
- Add comments for complex logic
- Test thoroughly before committing
- Update documentation when needed

---

## Deployment

### Backend Deployment (Heroku/AWS/Azure)

1. **Prepare for Deployment:**
   ```bash
   cd Backend
   npm run build
   ```

2. **Environment Variables:**
   Set production environment variables on hosting platform:
   - `MONGO_URI` (Production MongoDB)
   - `JWT_SECRET` (Secure secret key)
   - `GOOGLE_API_KEY`
   - `PORT` (Usually 5000)
   - `NODE_ENV=production`

3. **Deploy:**
   - Push to hosting platform (Heroku CLI, AWS Amplify, Azure App Service)
   - Verify API endpoints working

### Frontend Deployment (Vercel/Netlify)

1. **Build:**
   ```bash
   cd Frontend
   npm run build
   ```

2. **Deploy:**
   - Connect repository to Vercel/Netlify
   - Set environment variables
   - Deploy automatically or manually

3. **Configure Frontend URL:**
   - Update API URL to production backend
   - Test all API calls

---

## Troubleshooting

### Backend Issues

**Port 5000 Already in Use:**
```bash
# Kill process using port 5000
lsof -ti:5000 | xargs kill -9

# Or use different port
PORT=5001 npm start
```

**MongoDB Connection Error:**
- Ensure MongoDB is running: `mongod`
- Check `MONGO_URI` in `.env`
- Verify MongoDB credentials for Atlas

**JWT Token Issues:**
- Clear localStorage in browser
- Clear cookies
- Login again
- Check JWT_SECRET consistency

### Frontend Issues

**API Not Connecting:**
- Ensure backend is running on `http://localhost:5000`
- Check browser console for CORS errors
- Verify API URL in `axiosInstance.js`

**Build Errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run dev
```

**Styling Issues:**
```bash
# Rebuild Tailwind CSS
npm run build:css
```

---

## Best Practices

### Code Organization
- Keep components small and focused
- Use meaningful file and variable names
- Separate concerns (UI, Logic, Data)

### State Management
- Use Redux for global state
- Use local state for component-level data
- Avoid prop drilling

### API Calls
- Use consistent error handling
- Always send authorization headers
- Log API errors for debugging

### Security
- Never commit sensitive data to git
- Use `.env` files for secrets
- Validate input on both frontend and backend
- Sanitize database queries

### Performance
- Lazy load components
- Optimize images
- Use React.memo for expensive components
- Cache API responses where appropriate

---

## Contributing

1. **Fork the repository** and create a feature branch
2. **Follow coding standards** and best practices
3. **Write clear commit messages**
4. **Test thoroughly** before submitting PR
5. **Update documentation** as needed
6. **Submit Pull Request** with detailed description

### Commit Message Format
```
[Type] Brief description

Detailed explanation of changes (optional)

- Change 1
- Change 2
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

---

## Support

### Documentation
- Frontend Details: [Frontend/README.md](Frontend/README.md)
- Backend Details: [Backend/README.md](Backend/README.md)

### Common Resources
- [MongoDB Documentation](https://docs.mongodb.com/)
- [React Documentation](https://react.dev/)
- [Express.js Guide](https://expressjs.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### Getting Help
1. Check the relevant README file (Frontend/README.md or Backend/README.md)
2. Review console error messages
3. Check git logs for recent changes
4. Consult project documentation
5. Contact development team

---

## Project Statistics

| Component | Count |
|-----------|-------|
| Frontend Components | 25+ |
| Backend Routes | 12+ |
| Database Models | 6 |
| API Endpoints | 12+ |
| Pages | 15+ |
| UI Components (Shadcn) | 18 |

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | May 2026 | Initial release with full features |
| 0.9.0 | Apr 2026 | Beta version with core features |
| 0.5.0 | Mar 2026 | Alpha version - Basic functionality |

---

## License

This project is proprietary and intended for freelancing purposes. All rights reserved.

---

## Contact & Support

For issues, questions, or suggestions:
- Create an issue in the repository
- Contact the development team
- Check project documentation

---

**Last Updated**: May 6, 2026  
**Project Status**: Active Development  
**Maintainers**: Ziva Healthcare Team

---

## Quick Links

| Link | Description |
|------|-------------|
| [Frontend](Frontend/) | React patient portal |
| [Backend](Backend/) | Node.js API server |
| [Frontend README](Frontend/README.md) | Frontend documentation |
| [Backend README](Backend/README.md) | Backend documentation |

---

**Happy Coding! 🚀**

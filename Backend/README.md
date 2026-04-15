# Backend API Documentation

Welcome to the Hospital Project Backend API Documentation. This document provides detailed information about all available endpoints, required parameters, request/response formats, HTTP status codes, and backend architecture.

## Table of Contents
- [Overview](#overview)
- [Base URL](#base-url)
- [Project Structure](#project-structure)
- [Core Files](#core-files)
- [Configuration](#configuration)
- [Data Models](#data-models)
- [Middleware](#middleware)
- [Controllers](#controllers)
- [Routes](#routes)
- [Utilities](#utilities)
- [Dependencies](#dependencies)
- [Authentication](#authentication)
- [Authentication Endpoints](#authentication-endpoints)
- [Appointment Endpoints](#appointment-endpoints)
- [AI Chat Endpoints](#ai-chat-endpoints)
- [Error Handling](#error-handling)
- [Status Codes Reference](#status-codes-reference)

---

## Overview
The Hospital Project Backend is built with Node.js and Express.js, providing RESTful APIs for user authentication and appointment management. The API uses JWT (JSON Web Tokens) for secure authentication and manages user sessions. MongoDB is used as the primary database for storing users, appointments, sessions, and OTP records.

## Base URL
```
http://localhost:5000/api              # Auth & AI endpoints
http://localhost:5000/zivacare         # Appointment endpoints
```

---

## Project Structure
```
Backend/
├── server.js                          # Entry point - starts the server
├── package.json                       # Project dependencies
├── src/
│   ├── app.js                         # Express app configuration
│   ├── config/
│   │   ├── config.js                  # Configuration loader
│   │   └── database.js                # MongoDB connection
│   ├── models/
│   │   ├── user.model.js              # User schema
│   │   ├── appointment.model.js       # Appointment schema
│   │   ├── session.model.js           # Session schema for token management
│   │   └── otp.model.js               # OTP schema (for future use)
│   ├── controllers/
│   │   ├── auth.controllers.js        # Authentication logic
│   │   ├── appointment.controllers.js # Appointment management logic
│   │   └── ai.controllers.js          # AI chat functionality (Gemini API)
│   ├── middleware/
│   │   └── auth.middleware.js         # JWT verification middleware
│   ├── routes/
│   │   ├── auth.route.js              # Authentication routes
│   │   ├── appointment.route.js       # Appointment routes
│   │   └── ai.route.js                # AI chat routes
│   └── utils/
│       └── utils.js                   # Utility functions (OTP generation, etc.)
```

---

## Core Files

### server.js
**Purpose**: Entry point of the application

**What it does**:
- Imports the Express app configuration
- Imports and executes database connection
- Starts the Express server on port 5000
- Logs success message when server is running

```javascript
import app from "./src/app.js";
import connectDB from "./src/config/database.js";

connectDB()

app.listen(5000, ()=> {
    console.log("Server are working now");
})
```

### src/app.js
**Purpose**: Express application setup and middleware configuration

**Key Features**:
- Sets up Express middleware (JSON parser, URL encoder)
- Configures Morgan for HTTP request logging (dev mode)
- Enables Cookie Parser for handling cookies
- Sets up CORS (Cross-Origin Resource Sharing) with frontend URL
- Mounts authentication and appointment routes

**CORS Configuration**:
- Allowed Origin: `http://localhost:5173` (Frontend)
- Allowed Methods: GET, POST, PUT, DELETE
- Credentials: Enabled (for cookie transmission)

**Route Mounting**:
- `/api` → Authentication routes
- `/api/ai` → AI chat routes
- `/zivacare` → Appointment routes

```javascript
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgon('dev'));
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))
app.use('/api', authRoute)
app.use('/api/ai', aiRoutes)
app.use('/zivacare', apointRoute)
```

---

## Configuration

### src/config/config.js
**Purpose**: Load and validate environment variables

**Loaded Variables**:
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT signing/verification

**Error Handling**:
Throws errors if required environment variables are missing

```javascript
if(!process.env.MONGO_URI){
    throw new Error ('MONGO_URI is not defined in enviroment variables')
}
if(!process.env.JWT_SECRET){
    throw new Error ('JWT_SECRET is not defined in enviroment variables')
}
```

### src/config/database.js
**Purpose**: Establish MongoDB connection

**Features**:
- Uses Mongoose for ODM (Object Document Mapper)
- Reads MONGO_URI from config
- Logs success/error messages

```javascript
async function connectDB(){
    await mongoose.connect(config.MONGO_URI)
    console.log("Database is successfully connect")
}
```

---

## Data Models

### User Model (`src/models/user.model.js`)
**Schema Name**: `User`

**Fields**:
| Field | Type | Required | Validation | Description |
|-------|------|----------|-----------|-------------|
| name | String | Yes | Max 30 chars | User's full name |
| email | String | Yes | Valid email, Unique | User's email address |
| mobileNumber | String | Yes | 10-digit Indian format, Unique | User's mobile number |
| password | String | Yes | Min 6 chars | Hashed password (not selected by default) |
| role | Enum | No | ['patient'] | User role (default: patient) |
| gender | Enum | No | ['male', 'female', 'other', 'prefer not to say'] | User's gender |
| dateOfBirth | Date | No | - | User's birth date |
| isEmailVerified | Boolean | No | - | Email verification status (default: false) |
| bloodGroup | Enum | No | ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] | User's blood group |
| userHeight | Number | No | Min 0 | Height in cm |
| userWeight | Number | No | Min 0 | Weight in kg |
| heartRate | Number | No | - | Heart rate (bpm) |
| bpSys | Number | No | - | Systolic blood pressure |
| bpDia | Number | No | - | Diastolic blood pressure |
| healthScore | Number | No | - | Overall health score (0-100) |
| userAddress | String | No | - | User's address |

**Timestamps**: Automatically tracks `createdAt` and `updatedAt`

**Validations**:
- Email OR MobileNumber must be provided
- Email must be unique and valid format
- MobileNumber must start with 6-9 and be 10 digits

### Appointment Model (`src/models/appointment.model.js`)
**Schema Name**: `Appointment`

**Fields**:
| Field | Type | Required | Validation | Description |
|-------|------|----------|-----------|-------------|
| patientId | ObjectId | Yes | Reference to User | Patient user ID |
| patient | String | Yes | Max 30 chars | Patient name |
| age | Number | Yes | 1-120 | Patient age |
| symptoms | String | No | Max 500 chars | Description of symptoms |
| department | Enum | Yes | ['cardiology', 'neurology', 'orthopedics', 'general', 'pediatrics', 'gastroenterology'] | Medical department |
| doctorName | String | Yes | - | Assigned doctor name |
| doctorId | String | Yes | - | Unique doctor identifier |
| appointmentDate | Date | Yes | - | Scheduled appointment date |
| timeSlot | String | Yes | Format: "HH:MM AM/PM" | Appointment time |
| status | Enum | No | ['Pending', 'Confirmed', 'Completed', 'Cancelled'] | Appointment status (default: Pending) |
| paymentStatus | Enum | No | ['Unpaid', 'Paid', 'Refunded'] | Payment status (default: Unpaid) |

**Timestamps**: Automatically tracks `createdAt` and `updatedAt`

**Indexes**:
- Unique compound index on: `doctorId`, `appointmentDate`, `timeSlot`
- Prevents double-booking of time slots

### Session Model (`src/models/session.model.js`)
**Schema Name**: `session`

**Purpose**: Track user sessions and manage refresh token revocation

**Fields**:
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| user | ObjectId | Yes | Reference to User |
| refreshTokenHash | String | Yes | Hashed refresh token |
| ip | String | Yes | Client IP address |
| userAgent | String | Yes | Client browser/device info |
| revoked | Boolean | No | Session revocation flag (default: false) |

**Use Cases**:
- Track active sessions per user
- Enable logout from all devices
- Prevent token replay attacks

### OTP Model (`src/models/otp.model.js`)
**Schema Name**: `Otp`

**Purpose**: Store OTP for OTP-based authentication (currently unused)

**Fields**:
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| mobileNumber | String | Yes | Mobile number for OTP |
| otpHash | String | Yes | Hashed OTP value |
| expiresAt | Date | Yes | OTP expiration time |

**Features**:
- Auto-deletes after 300 seconds (5 minutes) via TTL index
- Stores hashed OTP for security

---

## Middleware

### src/middleware/auth.middleware.js
**Function**: `verifyToken(req, res, next)`

**Purpose**: Validate JWT tokens for protected routes

**How it works**:
1. Extracts token from Authorization header (Bearer format)
2. Verifies token signature using JWT_SECRET
3. Decodes token and attaches user data to `req.user`
4. Calls `next()` to proceed to controller

**Token Structure**:
```javascript
{
  id: user._id,
  sessionId: session._id,
  iat: <issued-at>,
  exp: <expiration>
}
```

**Error Handling**:
- `401 Unauthorized`: No token or invalid format
- `403 Forbidden`: Invalid or expired token

**Usage in Routes**:
```javascript
router.post('/bookAppointment', verifyToken, appointmentRoute.bookAppointment)
```

---

## Controllers

### src/controllers/auth.controllers.js
**Purpose**: Handle all authentication logic

**Exported Functions**:

1. **register(req, res)**
   - Creates new user account
   - Hashes password using SHA256
   - Generates refresh and access tokens
   - Creates session record
   - Sets refreshToken cookie

2. **login(req, res)**
   - Verifies email and password
   - Creates new session
   - Generates tokens
   - Returns user profile with access token

3. **userData(req, res)**
   - Fetches current user's full profile
   - Requires valid Bearer token
   - Returns all user fields including vitals

4. **refreshToken(req, res)**
   - Generates new access token
   - Optionally renews refresh token if expiring soon
   - Checks session validity

5. **logout(req, res)**
   - Revokes current session
   - Clears refreshToken cookie
   - Single device logout

6. **logoutAll(req, res)**
   - Revokes all user sessions
   - Multi-device logout
   - Forces re-login on all devices

7. **updateProfile(req, res)**
   - Updates user profile information
   - Supports partial updates
   - Validates data before updating

### src/controllers/appointment.controllers.js
**Purpose**: Handle appointment management

**Exported Functions**:

1. **bookAppointment(req, res)**
   - Creates new appointment
   - Checks for duplicate bookings
   - Prevents overbooking

2. **getAppointments(req, res)**
   - Retrieves all user appointments
   - Sorted by date (latest first)
   - Returns count and appointment list

3. **cancelAppointment(req, res)**
   - Cancels pending/confirmed appointments
   - Enforces 24-hour cancellation window
   - Updates appointment status

4. **rescheduleAppointment(req, res)**
   - Changes appointment date/time
   - Validates new slot availability
   - Enforces 24-hour rescheduling window
   - Prevents conflicts with other bookings

### src/controllers/ai.controllers.js
**Purpose**: Handle AI-powered health chat functionality using Google Gemini API

**Dependencies**:
- `@google/generative-ai`: Google's Generative AI library

**Exported Functions**:

1. **askAI(req, res)**
   - Receives user message for health-related queries
   - Sends prompt to Google Gemini AI model
   - Returns AI-generated response

**Features**:
- Uses Gemini Flash model for fast responses
- Smart system prompt with context-aware behavior:
  - Casual, friendly tone like WhatsApp conversation
  - Supports Hinglish (mix of Hindi and English)
  - Provides basic health tips for symptoms
  - Guides users to book doctor consultation when needed
  - No medical prescription capabilities
- Keeps responses short (1-2 sentences max)
- Empathetic and human-like interaction

**Request Format**:
```javascript
{
  message: "User's health question or greeting"
}
```

**Response Format**:
```javascript
{
  message: "AI-generated response based on user query"
}
```

**Error Handling**:
- Returns 400 if message is empty
- Returns 500 with friendly message if API fails

---

## Routes

### src/routes/auth.route.js
**Base URL**: `/api`

| Method | Endpoint | Controller | Authentication | Description |
|--------|----------|-----------|-----------------|-------------|
| POST | `/auth/register` | register | No | Create new account |
| POST | `/auth/login` | login | No | User login |
| GET | `/auth/user` | userData | Bearer Token | Get user profile |
| GET | `/auth/refresh-token` | refreshToken | Cookie | Refresh access token |
| GET | `/auth/logout` | logout | Cookie | Logout from device |
| GET | `/auth/logout-all` | logoutAll | Cookie | Logout from all devices |
| PUT | `/auth/update/:id` | updateProfile | No | Update profile |

### src/routes/appointment.route.js
**Base URL**: `/zivacare`

| Method | Endpoint | Controller | Authentication | Description |
|--------|----------|-----------|-----------------|-------------|
| POST | `/appointments/bookAppointment` | bookAppointment | Bearer Token | Book new appointment |
| GET | `/appointments/getAppointments` | getAppointments | Bearer Token | Get user appointments |
| PUT | `/appointments/cancel/:id` | cancelAppointment | Bearer Token | Cancel appointment |
| PUT | `/appointments/reschedule/:id` | rescheduleAppointment | Bearer Token | Reschedule appointment |

### src/routes/ai.route.js
**Base URL**: `/api/ai`

| Method | Endpoint | Controller | Authentication | Description |
|--------|----------|-----------|-----------------|-------------|
| POST | `/ai/ask` | askAI | No | Chat with AI health buddy |

---

## Utilities

### src/utils/utils.js
**Utility Functions**:

**1. generateOtp()**
```javascript
export function generateOtp(){
    return Math.floor(100000 + Math.random() * 900000).toString()
}
```
- Generates 6-digit random OTP
- Returns as string
- Currently used for OTP-based authentication (future feature)

---

## Dependencies

### package.json Scripts
```json
{
  "scripts": {
    "dev": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

### Production Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| **express** | ^5.2.1 | Web framework |
| **mongoose** | ^9.3.1 | MongoDB ODM |
| **jsonwebtoken** | ^9.0.3 | JWT token generation/verification |
| **bcryptjs** | ^3.0.3 | Password hashing (installed but not actively used) |
| **cookie-parser** | ^1.4.7 | Parse cookies from HTTP headers |
| **cors** | ^2.8.6 | Cross-Origin Resource Sharing |
| **dotenv** | ^17.3.1 | Load environment variables |
| **morgan** | ^1.10.1 | HTTP request logger |
| **moment** | ^2.30.1 | Date/time manipulation (appointment scheduling) |
| **@google/generative-ai** | Latest | Google Gemini AI for health chat feature |

---



## Authentication

### Token Usage
Most endpoints require authentication using JWT Bearer tokens. Include the token in the request header:

```
Authorization: Bearer <accessToken>
```

### Token Details
- **Access Token**: Expires in 15 minutes
- **Refresh Token**: Expires in 7 days (stored as HTTP-only cookie)
- **Token Secret**: Configured in environment variables

---

## Authentication Endpoints

### 1. Register User
**Endpoint**: `POST /auth/register`

**Description**: Register a new user account

**Request Headers**:
```
Content-Type: application/json
```

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "mobileNumber": "9876543210",
  "password": "password123"
}
```

**Field Validation**:
- `name` (String, Required): Maximum 30 characters
- `email` (String, Required, Unique): Valid email format
- `mobileNumber` (String, Required, Unique): Valid 10-digit Indian mobile number (6-9 start)
- `password` (String, Required): Minimum 6 characters

**Response** (201 Created):
```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "mobileNumber": "9876543210"
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Responses**:
- `409 Conflict`: User with the same email or mobile number already exists
- `400 Bad Request`: Validation errors

---

### 2. Login User
**Endpoint**: `POST /auth/login`

**Description**: Login to existing user account

**Request Headers**:
```
Content-Type: application/json
```

**Request Body**:
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Field Validation**:
- `email` (String, Required): Valid email format
- `password` (String, Required): Must be correct

**Response** (200 OK):
```json
{
  "message": "Logged in Successfully",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "mobileNumber": "9876543210",
    "gender": "male",
    "bloodGroup": "O+",
    "userHeight": "180",
    "userWeight": "75",
    "userAddress": "123 Main St",
    "dateOfBirth": "1990-01-15",
    "heartRate": "72",
    "bpSys": "120",
    "bpDia": "80",
    "healthScore": "85"
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Cookies Set**:
- `refreshToken`: HTTP-only, Secure, SameSite=Strict, Max-Age: 604800000ms (7 days)

**Error Responses**:
- `401 Unauthorized`: Invalid email or password
- `400 Bad Request`: Missing required fields

---

### 3. Get User Data
**Endpoint**: `GET /auth/user`

**Description**: Retrieve authenticated user's profile information

**Request Headers**:
```
Authorization: Bearer <accessToken>
Content-Type: application/json
```

**Request Parameters**: None

**Response** (200 OK):
```json
{
  "message": "User Fetched Successfully",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "mobileNumber": "9876543210",
    "gender": "male",
    "bloodGroup": "O+",
    "userHeight": "180",
    "userWeight": "75",
    "userAddress": "123 Main St",
    "dateOfBirth": "1990-01-15",
    "heartRate": "72",
    "bpSys": "120",
    "bpDia": "80",
    "healthScore": "85"
  }
}
```

**Error Responses**:
- `401 Unauthorized`: Invalid or expired access token
- `404 Not Found`: User not found
- `500 Internal Server Error`: Server error

---

### 4. Refresh Access Token
**Endpoint**: `GET /auth/refresh-token`

**Description**: Get a new access token using refresh token

**Request Headers**:
```
Content-Type: application/json
```

**Cookies Required**:
- `refreshToken`: Must be present in cookies

**Response** (200 OK):
```json
{
  "message": "Access token refreshed successfully",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Note**: If refresh token is expiring within 48 hours, a new refresh token will be issued

**Error Responses**:
- `401 Unauthorized`: Refresh token not found or invalid
- `400 Bad Request`: Refresh token not found in cookies

---

### 5. Logout User
**Endpoint**: `GET /auth/logout`

**Description**: Logout user from current device/session

**Request Headers**:
```
Content-Type: application/json
```

**Cookies Required**:
- `refreshToken`: Must be present in cookies

**Response** (200 OK):
```json
{
  "message": "User is successfully Logout"
}
```

**Side Effects**:
- Current session is revoked
- `refreshToken` cookie is cleared
- Access token becomes invalid after expiration

**Error Responses**:
- `400 Bad Request`: Refresh token not found

---

### 6. Logout from All Devices
**Endpoint**: `GET /auth/logout-all`

**Description**: Logout user from all active sessions/devices

**Request Headers**:
```
Content-Type: application/json
```

**Cookies Required**:
- `refreshToken`: Must be present in cookies

**Response** (200 OK):
```json
{
  "message": "Log out from all device successfully"
}
```

**Side Effects**:
- All user sessions are revoked
- User must login again on all devices
- `refreshToken` cookie is cleared

**Error Responses**:
- `400 Bad Request`: Refresh token not found

---

### 7. Update User Profile
**Endpoint**: `PUT /auth/update/:id`

**Description**: Update user profile information

**Request Headers**:
```
Content-Type: application/json
```

**URL Parameters**:
- `id` (String, Required): User ID (MongoDB ObjectId)

**Request Body** (All fields are optional):
```json
{
  "name": "Jane Doe",
  "gender": "female",
  "dateOfBirth": "1992-05-20",
  "bloodGroup": "B+",
  "userHeight": "165",
  "userWeight": "65",
  "userAddress": "456 Oak Ave",
  "heartRate": "70",
  "bpSys": "118",
  "bpDia": "78",
  "healthScore": "88"
}
```

**Response** (200 OK):
```json
{
  "message": "Profile updated successfully",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Jane Doe",
    "email": "john@example.com",
    "mobileNumber": "9876543210",
    "gender": "female",
    "dateOfBirth": "1992-05-20",
    "bloodGroup": "B+",
    "userHeight": "165",
    "userWeight": "65",
    "userAddress": "456 Oak Ave",
    "heartRate": "70",
    "bpSys": "118",
    "bpDia": "78",
    "healthScore": "88"
  }
}
```

**Error Responses**:
- `404 Not Found`: User not found
- `500 Internal Server Error`: Validation error or server error

---

## Appointment Endpoints

### 1. Book Appointment
**Endpoint**: `POST /appointments/bookAppointment`

**Description**: Book a new appointment with a doctor

**Authentication**: Required (verifyToken middleware)

**Request Headers**:
```
Authorization: Bearer <accessToken>
Content-Type: application/json
```

**Request Body**:
```json
{
  "patient": "John Doe",
  "age": 35,
  "symptoms": "Chest pain and shortness of breath",
  "department": "cardiology",
  "doctorName": "Dr. Rajesh Kumar",
  "doctorId": "doc_123",
  "appointmentDate": "2025-04-20",
  "timeSlot": "10:00 AM"
}
```

**Field Validation**:
- `patient` (String, Required): Maximum 30 characters
- `age` (Number, Required): Between 1 and 120
- `symptoms` (String, Optional): Maximum 500 characters
- `department` (String, Required): Enum: cardiology, neurology, orthopedics, general, pediatrics, gastroenterology
- `doctorName` (String, Required): Doctor's name
- `doctorId` (String, Required): Unique doctor identifier
- `appointmentDate` (Date, Required): Future appointment date
- `timeSlot` (String, Required): Format "HH:MM AM/PM"

**Response** (201 Created):
```json
{
  "message": "Appointment booked successfully.",
  "appointment": {
    "id": "507f1f77bcf86cd799439012",
    "patient": "John Doe",
    "age": 35,
    "symptoms": "Chest pain and shortness of breath",
    "department": "cardiology",
    "doctorName": "Dr. Rajesh Kumar",
    "doctorId": "doc_123",
    "appointmentDate": "2025-04-20",
    "timeSlot": "10:00 AM"
  }
}
```

**Error Responses**:
- `409 Conflict`: User already has an appointment with the same doctor at the same time/date
- `500 Internal Server Error`: Error booking appointment
- `401 Unauthorized`: Invalid or missing token

---

### 2. Get All Appointments
**Endpoint**: `GET /appointments/getAppointments`

**Description**: Retrieve all appointments for the authenticated user

**Authentication**: Required (verifyToken middleware)

**Request Headers**:
```
Authorization: Bearer <accessToken>
Content-Type: application/json
```

**Request Parameters**: None

**Response** (200 OK):
```json
{
  "message": "Appointments retrieved successfully.",
  "success": true,
  "count": 2,
  "appointments": [
    {
      "_id": "507f1f77bcf86cd799439012",
      "patientId": "507f1f77bcf86cd799439011",
      "patient": "John Doe",
      "age": 35,
      "symptoms": "Chest pain",
      "department": "cardiology",
      "doctorName": "Dr. Rajesh Kumar",
      "doctorId": "doc_123",
      "appointmentDate": "2025-04-20",
      "timeSlot": "10:00 AM",
      "status": "Pending",
      "createdAt": "2025-04-10T10:30:00.000Z",
      "updatedAt": "2025-04-10T10:30:00.000Z"
    }
  ]
}
```

**Sorting**: Results are sorted by appointmentDate in descending order (latest first)

**Error Responses**:
- `401 Unauthorized`: Invalid or missing token
- `401 Unauthorized`: Error retrieving appointments

---

### 3. Cancel Appointment
**Endpoint**: `PUT /appointments/cancel/:id`

**Description**: Cancel an existing appointment

**Authentication**: Required (verifyToken middleware)

**Request Headers**:
```
Authorization: Bearer <accessToken>
Content-Type: application/json
```

**URL Parameters**:
- `id` (String, Required): Appointment ID (MongoDB ObjectId)

**Request Body**: None

**Cancellation Rules**:
- Can only cancel appointments with status 'Pending' or 'Confirmed'
- Cannot cancel appointments within 24 hours of scheduled time
- Cannot cancel already 'Cancelled' or 'Completed' appointments

**Response** (200 OK):
```json
{
  "success": true,
  "message": "Appointment cancelled successfully.",
  "appointment": {
    "_id": "507f1f77bcf86cd799439012",
    "patientId": "507f1f77bcf86cd799439011",
    "patient": "John Doe",
    "age": 35,
    "symptoms": "Chest pain",
    "department": "cardiology",
    "doctorName": "Dr. Rajesh Kumar",
    "doctorId": "doc_123",
    "appointmentDate": "2025-04-20",
    "timeSlot": "10:00 AM",
    "status": "Cancelled"
  }
}
```

**Error Responses**:
- `404 Not Found`: Appointment not found
- `400 Bad Request`: Cannot cancel appointment within 24 hours or appointment already cancelled/completed
- `500 Internal Server Error`: Server error while cancelling
- `401 Unauthorized`: Invalid or missing token

---

### 4. Reschedule Appointment
**Endpoint**: `PUT /appointments/reschedule/:id`

**Description**: Reschedule an existing appointment to a new date/time

**Authentication**: Required (verifyToken middleware)

**Request Headers**:
```
Authorization: Bearer <accessToken>
Content-Type: application/json
```

**URL Parameters**:
- `id` (String, Required): Appointment ID (MongoDB ObjectId)

**Request Body**:
```json
{
  "newDate": "2025-04-25",
  "newTimeSlot": "02:00 PM"
}
```

**Field Validation**:
- `newDate` (Date, Required): New appointment date
- `newTimeSlot` (String, Required): Format "HH:MM AM/PM"

**Rescheduling Rules**:
- Can only reschedule appointments with status 'Pending' or 'Confirmed'
- Cannot reschedule appointments within 24 hours of scheduled time
- Cannot reschedule to a time slot already booked by another patient with the same doctor
- New time slot must be available

**Response** (200 OK):
```json
{
  "success": true,
  "message": "Appointment rescheduled successfully.",
  "appointment": {
    "_id": "507f1f77bcf86cd799439012",
    "patientId": "507f1f77bcf86cd799439011",
    "patient": "John Doe",
    "age": 35,
    "symptoms": "Chest pain",
    "department": "cardiology",
    "doctorName": "Dr. Rajesh Kumar",
    "doctorId": "doc_123",
    "appointmentDate": "2025-04-25",
    "timeSlot": "02:00 PM",
    "status": "Pending"
  }
}
```

**Error Responses**:
- `400 Bad Request`: 
  - New date or time slot missing
  - Cannot reschedule within 24 hours of appointment
  - Appointment status not 'Pending' or 'Confirmed'
  - Selected time slot already booked
- `404 Not Found`: Appointment not found
- `500 Internal Server Error`: Server error while rescheduling
- `401 Unauthorized`: Invalid or missing token

---

## AI Chat Endpoints

### 1. Ask AI Health Buddy
**Endpoint**: `POST /ai/ask`

**Description**: Chat with Ziva, the AI health buddy, for general health queries, symptoms, and wellness advice

**Base URL**: `http://localhost:5000/api/ai`

**Request Headers**:
```
Content-Type: application/json
```

**Request Body**:
```json
{
  "message": "I have a headache, what should I do?"
}
```

**Field Validation**:
- `message` (String, Required): User's health query or greeting (no length limit)

**Response** (200 OK):
```json
{
  "message": "Oh, apna dhyan rakho! Zyada pani piye, thoda rest lo. Agar zyada dikkat ho toh app par doctor se 'Book a Consult' kar sakte ho."
}
```

**AI Features**:
- **Context Awareness**:
  - Greetings: Warm, friendly response asking how you're feeling
  - Symptoms: Empathetic response with basic safety tips + doctor consultation suggestion
  - Health Questions: Practical, casual advice in user's language
  
- **Language Support**:
  - English: Professional yet friendly tone
  - Hindi/Hinglish: Casual WhatsApp-like conversation style
  - Mixed: Adapts to user's language preference
  
- **Response Style**:
  - Maximum 1-2 sentences (conversational)
  - Empathetic and warm tone
  - No medical prescriptions
  - Guides to doctor consultation when needed

**Example Requests**:

**Example 1: Greeting**
```json
{
  "message": "Hi, kaise ho?"
}
```
Response:
```json
{
  "message": "Hey! Mai thik hoon, sukriya. Aap kaisa feel kar rahe ho aaj? Kuch alag tha ya sirf check-in kar rahe ho? 😊"
}
```

**Example 2: Symptom Query**
```json
{
  "message": "I'm having chest pain and shortness of breath"
}
```
Response:
```json
{
  "message": "That sounds concerning, please take it seriously. Try to stay calm and sit down. You should consult a doctor right away using our 'Book a Consult' feature."
}
```

**Example 3: Health Tip Request**
```json
{
  "message": "What's good for glowing skin?"
}
```
Response:
```json
{
  "message": "Drink plenty of water, get good sleep, and protect from sun! Natural glow aata hai when you're healthy inside out ✨"
}
```

**Error Responses**:
- `400 Bad Request`: Message field is missing or empty
  ```json
  {
    "message": "Please provide a message."
  }
  ```

- `500 Internal Server Error`: API unavailable
  ```json
  {
    "reply": "Sorry, my servers are a bit busy right now. Please try again in a moment!"
  }
  ```

**Important Notes**:
- No authentication required (open endpoint)
- AI responses are generated in real-time using Google Gemini Flash model
- Responses are contextual and adapt to user's language
- Not a medical diagnosis tool - guides users to professional help when needed
- Response time: ~2-5 seconds typically

---

## Error Handling

### Standard Error Response Format
```json
{
  "message": "Error description",
  "success": false,
  "error": "Additional error details (optional)"
}
```

### Common Error Messages
| Status | Message | Cause |
|--------|---------|-------|
| 400 | Bad Request | Missing or invalid request parameters |
| 401 | Unauthorized | Missing or invalid authentication token |
| 404 | Not Found | Resource doesn't exist |
| 409 | Conflict | Duplicate entry or conflicting state |
| 500 | Internal Server Error | Server-side error |

---

## Status Codes Reference

### Success Codes
| Code | Meaning | Usage |
|------|---------|-------|
| 200 | OK | Successful GET, PUT requests |
| 201 | Created | Successful POST requests (resource created) |

### Client Error Codes
| Code | Meaning | Usage |
|------|---------|-------|
| 400 | Bad Request | Invalid request format or missing fields |
| 401 | Unauthorized | Invalid or expired authentication token |
| 404 | Not Found | Resource not found in database |
| 409 | Conflict | Duplicate entry or state conflict |

### Server Error Codes
| Code | Meaning | Usage |
|------|---------|-------|
| 500 | Internal Server Error | Unexpected server error |

---

## Best Practices

1. **Token Management**
   - Always include Bearer token in Authorization header
   - Handle token expiration and refresh automatically
   - Store refresh token securely (HTTP-only cookie)

2. **Error Handling**
   - Check status codes and handle errors appropriately
   - Display user-friendly error messages
   - Log errors for debugging

3. **Rate Limiting**
   - Implement rate limiting on client side
   - Respect server response times
   - Avoid repeated requests

4. **Data Validation**
   - Validate all user input before sending to server
   - Use correct date/time formats
   - Ensure required fields are provided

5. **Security**
   - Never expose sensitive data in client-side logs
   - Use HTTPS for all API requests
   - Keep tokens secure and update them regularly

---

For more information or support, please contact the development team.

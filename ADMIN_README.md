# Admin Functionality for Newspaper Upload

This document describes the admin functionality that has been added to the newspaper application for uploading newspapers to the backend.

## Features

### 1. Admin Authentication
- **Login System**: Secure admin login with username/password authentication
- **Session Management**: Admin sessions are persisted using localStorage
- **Demo Credentials**: 
  - Username: `admin`
  - Password: `admin123`

### 2. Admin Panel
- **Protected Access**: Only accessible to authenticated admin users
- **Navigation**: Clean interface with sections for upload, analytics, and settings
- **Logout Functionality**: Secure logout that clears admin session

### 3. Newspaper Upload
- **File Validation**: Only accepts PDF files with size limit of 50MB
- **Date Selection**: Allows selection of publication date
- **Upload Progress**: Visual feedback during upload process
- **Error Handling**: Comprehensive error messages and validation
- **Demo Mode**: Toggle between demo simulation and real API calls

## How to Use

### Accessing Admin Panel

1. **From Main Page**: Click the "Admin" button in the header
2. **Login**: Enter admin credentials (admin/admin123)
3. **Access Panel**: Once authenticated, you'll be redirected to the admin panel

### Uploading Newspapers

1. **Select Date**: Choose the publication date for the newspaper
2. **Choose File**: Click "Choose File" and select a PDF newspaper file
3. **Validate**: The system will validate file type and size
4. **Upload**: Click "Upload Newspaper" to send to backend
5. **Monitor**: Watch for success/error messages

### API Configuration

The upload functionality is configured to send files to the `/xyz` route on your backend:

```typescript
// API endpoint configuration in src/utils/api.ts
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

// Upload endpoint
POST ${API_BASE_URL}/xyz
```

#### Request Format
- **Method**: POST
- **Content-Type**: multipart/form-data
- **Body**:
  - `newspaper`: PDF file
  - `date`: Publication date (YYYY-MM-DD format)

#### Expected Response
```json
{
  "success": true,
  "message": "Newspaper uploaded successfully!",
  "fileName": "newspaper-2025-01-15.pdf",
  "fileUrl": "/papers/newspaper-2025-01-15.pdf"
}
```

## File Structure

```
src/
├── contexts/
│   └── AuthContext.tsx          # Authentication context
├── components/
│   ├── AdminLogin.tsx           # Admin login form
│   ├── AdminPanel.tsx           # Main admin panel
│   ├── NewspaperUpload.tsx      # Upload functionality
│   └── Header.tsx               # Updated with admin button
├── utils/
│   └── api.ts                   # API utility functions
└── App.tsx                      # Updated with auth provider
```

## Security Features

1. **Authentication Required**: Admin panel only accessible after login
2. **Session Persistence**: Admin status maintained across browser sessions
3. **Secure Logout**: Properly clears authentication state
4. **Input Validation**: File type and size validation
5. **Error Handling**: Comprehensive error messages without exposing sensitive data

## Demo Mode vs Real API

The upload component includes a toggle to switch between:

- **Demo Mode**: Simulates upload with random success/failure (default)
- **Real API**: Connects to actual backend endpoint

To use with real backend:
1. Set `useDemoMode` to `false` in the toggle
2. Ensure backend is running on configured URL
3. Backend should handle POST requests to `/xyz` route

## Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:3000
```

## Backend Requirements

Your backend should implement:

1. **POST /xyz** - Handle newspaper upload
   - Accept multipart/form-data
   - Validate file type (PDF only)
   - Store file with appropriate naming
   - Return success/error response

2. **GET /newspapers** - List uploaded newspapers (optional)
3. **DELETE /xyz/:filename** - Delete newspaper (optional)

## Testing

1. **Login Test**: Try logging in with correct/incorrect credentials
2. **Upload Test**: Test with valid PDF files and invalid files
3. **Demo Mode**: Test upload simulation
4. **Real API**: Test with actual backend (when available)

## Notes

- The admin functionality is completely frontend-only as requested
- No backend files were created
- All API calls are prepared but use demo simulation by default
- The system is ready to integrate with your backend when available 
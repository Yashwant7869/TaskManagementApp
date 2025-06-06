# Copilot Instructions for Task Management App

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a Next.js Task Management Application with the following features:
- User Authentication (Sign up, Login, Logout)
- Task CRUD operations (Create, Read, Update, Delete)
- Task categorization and due dates
- Search functionality
- Responsive design with TailwindCSS

## Tech Stack
- **Frontend**: Next.js 15 with App Router, React, TailwindCSS
- **Backend**: Next.js API routes
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js with credentials provider
- **Icons**: Lucide React, Heroicons
- **Styling**: TailwindCSS with responsive design

## Code Guidelines
- Use JavaScript (not TypeScript)
- Follow React functional components with hooks
- Implement proper error handling and loading states
- Use TailwindCSS for styling with mobile-first approach
- Maintain clean, readable, and maintainable code
- Follow Next.js 15 App Router conventions
- Use proper SEO and accessibility practices

## Folder Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Protected dashboard pages
│   └── layout.js          # Root layout
├── components/            # Reusable React components
│   ├── ui/               # Basic UI components
│   ├── auth/             # Authentication components
│   └── tasks/            # Task-related components
├── lib/                  # Utility libraries
│   ├── db.js            # Database connection
│   ├── auth.js          # Authentication config
│   └── utils.js         # Helper utilities
└── models/              # Database models
    ├── User.js
    └── Task.js
```

## Key Features Implementation Notes
- Use MongoDB for data persistence
- Implement protected routes with middleware
- Create responsive design for mobile and desktop
- Use proper form validation and error handling
- Implement search with debouncing
- Use date-fns for date formatting and manipulation

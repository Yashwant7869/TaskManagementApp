# TaskMaster - Task Management Application

A comprehensive task management application built with Next.js, featuring user authentication, CRUD operations, task categorization, due dates, and search functionality.

## Features

- **User Authentication**: Secure sign up, login, and logout functionality
- **Task Management**: Create, read, update, and delete tasks
- **Task Categorization**: Organize tasks by categories (Personal, Work, Shopping, Health, Finance, Education, Other)
- **Priority Levels**: Set task priorities (Low, Medium, High)
- **Due Dates**: Set and track task deadlines
- **Search Functionality**: Find tasks quickly with real-time search
- **Responsive Design**: Mobile-first design that works on all devices
- **Status Tracking**: Mark tasks as pending or completed

## Tech Stack

- **Frontend**: Next.js 15 with App Router, React, TailwindCSS
- **Backend**: Next.js API routes
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT with HTTP-only cookies
- **Icons**: Lucide React, Heroicons
- **Styling**: TailwindCSS with responsive design
- **Date Handling**: date-fns

## Prerequisites

Before running this application, make sure you have:

- Node.js (v18 or higher)
- MongoDB database (local or MongoDB Atlas)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd task-management-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   │   ├── register/  # User registration
│   │   │   ├── login/     # User login
│   │   │   ├── logout/    # User logout
│   │   │   └── me/        # User profile
│   │   └── tasks/         # Task management endpoints
│   │       ├── route.js   # CRUD operations for tasks
│   │       └── [id]/      # Individual task operations
│   ├── auth/              # Authentication pages
│   │   ├── login/         # Login page
│   │   └── register/      # Registration page
│   ├── dashboard/         # Protected dashboard
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── components/            # Reusable React components
│   ├── ui/               # Basic UI components
│   │   ├── Button.js     # Button component
│   │   ├── Input.js      # Input component
│   │   ├── Textarea.js   # Textarea component
│   │   ├── Select.js     # Select component
│   │   └── Card.js       # Card component
│   ├── auth/             # Authentication components
│   │   ├── LoginForm.js  # Login form
│   │   └── RegisterForm.js # Registration form
│   └── tasks/            # Task-related components
│       ├── TaskForm.js   # Task creation/editing form
│       └── TaskCard.js   # Task display card
├── lib/                  # Utility libraries
│   ├── db.js            # Database connection
│   ├── auth.js          # Authentication utilities
│   └── utils.js         # Helper utilities
├── models/              # Database models
│   ├── User.js          # User model
│   └── Task.js          # Task model
└── middleware.js        # Route protection middleware
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user profile

### Tasks
- `GET /api/tasks` - Get all tasks for authenticated user
- `POST /api/tasks` - Create a new task
- `GET /api/tasks/[id]` - Get specific task
- `PUT /api/tasks/[id]` - Update specific task
- `DELETE /api/tasks/[id]` - Delete specific task

## Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required),
  createdAt: Date,
  updatedAt: Date
}
```

### Task Model
```javascript
{
  title: String (required),
  description: String,
  category: String (enum: Personal, Work, Shopping, Health, Finance, Education, Other),
  priority: String (enum: Low, Medium, High),
  status: String (enum: pending, completed),
  dueDate: Date,
  userId: ObjectId (required),
  createdAt: Date,
  updatedAt: Date
}
```

## Features in Detail

### Authentication
- Secure password hashing with bcryptjs
- JWT token-based authentication
- HTTP-only cookies for security
- Protected routes with middleware

### Task Management
- Create tasks with title, description, category, priority, and due date
- Edit existing tasks
- Mark tasks as completed or pending
- Delete tasks
- Filter tasks by status, category, and priority
- Search tasks by title or description

### User Interface
- Responsive design for mobile and desktop
- Clean and modern UI with TailwindCSS
- Interactive components with proper loading states
- Error handling and user feedback
- Accessible design following best practices

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Guidelines

- Use JavaScript (not TypeScript)
- Follow React functional components with hooks
- Implement proper error handling and loading states
- Use TailwindCSS for styling with mobile-first approach
- Maintain clean, readable, and maintainable code
- Follow Next.js 15 App Router conventions

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set up environment variables in Vercel dashboard
4. Deploy

### Other Platforms

1. Build the application: `npm run build`
2. Set up environment variables
3. Deploy the `.next` folder and `package.json`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue in the GitHub repository or contact the development team.

# TaskMaster - Task Management Application

A modern, full-stack task management application built with Next.js that helps you organize your tasks, track progress, and achieve your goals efficiently.

![TaskMaster](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-blue?style=for-the-badge&logo=tailwindcss)

## ✨ Features

### 🔐 Authentication
- **User Registration** - Create new accounts with email and password
- **Secure Login** - JWT-based authentication with HTTP-only cookies
- **Session Management** - Persistent login sessions with automatic logout
- **Protected Routes** - Middleware-based route protection for dashboard access

### 📋 Task Management
- **Create Tasks** - Add tasks with title, description, category, priority, and due dates
- **Edit Tasks** - Update existing tasks with inline editing
- **Delete Tasks** - Remove tasks with confirmation dialogs
- **Task Status** - Toggle between pending and completed states
- **Task Categories** - Organize tasks by Personal, Work, Shopping, Health, Finance, Education, and Other
- **Priority Levels** - Set task priorities as Low, Medium, or High with visual indicators

### 🎯 Advanced Features
- **Real-time Search** - Debounced search functionality across task titles and descriptions
- **Smart Filtering** - Filter tasks by category, status (pending/completed), and combinations
- **Due Date Tracking** - Visual indicators for overdue tasks with time calculations
- **Responsive Design** - Mobile-first design that works on all devices
- **Task Statistics** - Dashboard overview showing total, pending, and completed tasks
- **User Profile** - User information display and management

### 🎨 User Experience
- **Modern UI** - Clean, intuitive interface built with TailwindCSS
- **Loading States** - Smooth loading indicators for all async operations
- **Error Handling** - Comprehensive error messages and validation
- **Accessibility** - WCAG compliant with proper ARIA labels and keyboard navigation
- **Dark Mode Ready** - UI components designed for easy dark mode implementation

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with modern hooks
- **[TailwindCSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful SVG icons
- **[Heroicons](https://heroicons.com/)** - Additional icon set

### Backend
- **[Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)** - Serverless API endpoints
- **[MongoDB Atlas](https://www.mongodb.com/atlas)** - Cloud database service
- **[Mongoose](https://mongoosejs.com/)** - MongoDB object modeling

### Authentication & Security
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication library
- **[bcryptjs](https://www.npmjs.com/package/bcryptjs)** - Password hashing
- **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)** - JWT token generation
- **HTTP-only Cookies** - Secure token storage

### Utilities
- **[date-fns](https://date-fns.org/)** - Date manipulation and formatting
- **[clsx](https://www.npmjs.com/package/clsx)** - Conditional className utility

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **MongoDB Atlas** account (free tier available)

### Installation

1. **Clone the repository**
   ```powershell
   git clone <repository-url>
   cd task
   ```

2. **Install dependencies**
   ```powershell
   npm install
   ```

3. **Set up environment variables**
   ```powershell
   copy .env.example .env.local
   ```

4. **Configure your `.env.local` file**
   ```bash
   # Database - MongoDB Atlas
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority

   # Authentication
   NEXTAUTH_SECRET=your-super-secret-key-here
   NEXTAUTH_URL=http://localhost:3000

   # JWT
   JWT_SECRET=your-jwt-secret-key-here
   ```

5. **Start the development server**
   ```powershell
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### MongoDB Atlas Setup

1. **Create Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas/database)
   - Sign up for a free account

2. **Create Cluster**
   - Choose "Build a Database"
   - Select "M0 Sandbox" (FREE)
   - Choose your preferred cloud provider and region

3. **Database Access**
   - Go to "Database Access" in sidebar
   - Click "Add New Database User"
   - Create username and password
   - Give "Read and write to any database" permissions

4. **Network Access**
   - Go to "Network Access" in sidebar
   - Click "Add IP Address"
   - Choose "Allow Access from Anywhere" (0.0.0.0/0) for development

5. **Get Connection String**
   - Go to "Database" in sidebar
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string and update your `.env.local`

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   └── tasks/         # Task management endpoints
│   ├── auth/              # Authentication pages
│   │   ├── login/         # Login page
│   │   └── register/      # Registration page
│   ├── dashboard/         # Protected dashboard
│   ├── layout.js          # Root layout component
│   ├── page.js            # Landing page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── auth/              # Authentication components
│   ├── tasks/             # Task-related components
│   └── ui/                # Basic UI components
├── lib/                   # Utility libraries
│   ├── auth.js            # Authentication utilities
│   ├── db.js              # Database connection
│   └── utils.js           # Helper functions
└── models/                # Database models
    ├── User.js            # User schema
    └── Task.js            # Task schema
```

## 🎯 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Tasks
- `GET /api/tasks` - Get user tasks (with filtering)
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/[id]` - Update task
- `DELETE /api/tasks/[id]` - Delete task

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```powershell
   npm install -g vercel
   ```

2. **Deploy**
   ```powershell
   vercel
   ```

3. **Set Environment Variables**
   In Vercel dashboard, add:
   - `MONGODB_URI` - Your MongoDB Atlas connection string
   - `NEXTAUTH_SECRET` - Strong random string for production
   - `NEXTAUTH_URL` - Your production domain
   - `JWT_SECRET` - Strong random string for JWT

### Other Platforms
- **Netlify** - Supports Next.js with serverless functions
- **Railway** - Easy deployment with database integration
- **AWS/Google Cloud/Azure** - Enterprise-grade hosting options

## 🧪 Available Scripts

```powershell
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🔧 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB Atlas connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `NEXTAUTH_SECRET` | Secret for NextAuth.js sessions | `your-super-secret-key` |
| `NEXTAUTH_URL` | Application URL | `http://localhost:3000` |
| `JWT_SECRET` | Secret for JWT token generation | `your-jwt-secret` |

## 📊 Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  createdAt: Date,
  updatedAt: Date
}
```

### Task Model
```javascript
{
  title: String (required),
  description: String,
  category: String (Personal, Work, Shopping, Health, Finance, Education, Other),
  priority: String (Low, Medium, High),
  status: String (pending, completed),
  dueDate: Date,
  userId: ObjectId (required, ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

## 🎨 UI Components

### Reusable Components
- **Button** - Multiple variants (default, ghost, outline, destructive)
- **Input** - Form input with validation styling
- **Card** - Content container with consistent styling
- **Select** - Dropdown selection component
- **Textarea** - Multi-line text input

### Task Components
- **TaskCard** - Individual task display with actions
- **TaskForm** - Create/edit task modal form

### Auth Components
- **LoginForm** - User authentication form
- **RegisterForm** - User registration form
- **BackButton** - Navigation helper component

## 🔒 Security Features

- **Password Hashing** - bcryptjs with salt rounds
- **JWT Tokens** - Secure authentication tokens
- **HTTP-only Cookies** - Prevent XSS attacks
- **CSRF Protection** - Built-in Next.js protection
- **Input Validation** - Client and server-side validation
- **Protected Routes** - Middleware-based authentication

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Include error messages and steps to reproduce

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [MongoDB](https://www.mongodb.com/) for the database platform
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icons

---

**Built with ❤️ using Next.js and MongoDB Atlas**

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

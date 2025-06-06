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

 
 

  

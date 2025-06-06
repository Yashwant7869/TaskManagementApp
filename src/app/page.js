import Link from "next/link";
import { CheckSquare, Users, Calendar, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <CheckSquare className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">TaskMaster</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/auth/login"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Organize Your Tasks
            <span className="block text-blue-600">Get Things Done</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A powerful task management application to help you stay organized, 
            track your progress, and achieve your goals efficiently.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/auth/register"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-200"
            >
              Get Started Free
            </Link>
            <Link
              href="/auth/login"
              className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold transition duration-200"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <CheckSquare className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Task Management</h3>
            <p className="text-gray-600">Create, edit, and organize your tasks with ease</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Due Dates</h3>
            <p className="text-gray-600">Set deadlines and never miss important tasks</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Categories</h3>
            <p className="text-gray-600">Organize tasks by projects and priorities</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Search className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Search</h3>
            <p className="text-gray-600">Find any task quickly with powerful search</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Organized?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of users who have already transformed their productivity with TaskMaster.
          </p>
          <Link
            href="/auth/register"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-200 inline-block"
          >
            Start Managing Tasks Today
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <CheckSquare className="h-6 w-6 text-blue-400" />
            <span className="ml-2 text-lg font-bold">TaskMaster</span>
          </div>
          <p className="text-gray-400">
            © 2025 TaskMaster.
          </p>
        </div>
      </footer>
    </div>
  );
}

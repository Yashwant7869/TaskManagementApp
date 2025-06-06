'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import TaskCard from '@/components/tasks/TaskCard';
import TaskForm from '@/components/tasks/TaskForm';
import { debounce } from '@/lib/utils';
import { Plus, Search, LogOut, User } from 'lucide-react';

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'personal', label: 'Personal' },
  { value: 'work', label: 'Work' },
  { value: 'shopping', label: 'Shopping' },
  { value: 'health', label: 'Health' },
  { value: 'finance', label: 'Finance' },
  { value: 'education', label: 'Education' },
  { value: 'other', label: 'Other' },
];

const statuses = [
  { value: 'all', label: 'All Tasks' },
  { value: 'pending', label: 'Pending' },
  { value: 'completed', label: 'Completed' },
];

export default function DashboardPage() {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    status: 'all',
  });
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Debounced search function
  const debouncedFetchTasks = useCallback(
    debounce((searchFilters) => {
      fetchTasks(searchFilters);
    }, 300),
    []
  );

  // Fetch user data
  const fetchUser = async () => {
    try {
      const response = await fetch('/api/auth/me');
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        router.push('/auth/login');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      router.push('/auth/login');
    }
  };

  // Fetch tasks
  const fetchTasks = async (searchFilters = filters) => {
    try {
      const params = new URLSearchParams();
      if (searchFilters.search) params.append('search', searchFilters.search);
      if (searchFilters.category !== 'all') params.append('category', searchFilters.category);
      if (searchFilters.status !== 'all') params.append('status', searchFilters.status);

      const response = await fetch(`/api/tasks?${params.toString()}`);
      if (response.ok) {
        const data = await response.json();
        setTasks(data.tasks);
      } else {
        console.error('Failed to fetch tasks');
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Create or update task
  const handleTaskSubmit = async (taskData) => {
    try {
      const url = editingTask ? `/api/tasks/${editingTask._id}` : '/api/tasks';
      const method = editingTask ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });

      if (response.ok) {
        fetchTasks();
        setIsTaskFormOpen(false);
        setEditingTask(null);
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to save task');
      }
    } catch (error) {
      throw error;
    }
  };

  // Delete task
  const handleDeleteTask = async (taskId) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchTasks();
      } else {
        console.error('Failed to delete task');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Toggle task status
  const handleToggleTaskStatus = async (taskId, newStatus) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        fetchTasks();
      } else {
        console.error('Failed to update task status');
      }
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  // Handle filter changes
  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    if (key === 'search') {
      debouncedFetchTasks(newFilters);
    } else {
      fetchTasks(newFilters);
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/auth/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Edit task
  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsTaskFormOpen(true);
  };

  // Close task form
  const handleCloseTaskForm = () => {
    setIsTaskFormOpen(false);
    setEditingTask(null);
  };

  useEffect(() => {
    fetchUser();
    fetchTasks();
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  const pendingTasks = tasks.filter(task => task.status === 'pending');
  const completedTasks = tasks.filter(task => task.status === 'completed');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Task Manager</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-700">{user?.name}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600">Total Tasks</p>
                <p className="text-2xl font-bold text-gray-900">{tasks.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{pendingTasks.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">{completedTasks.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 sm:max-w-xs">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search tasks..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange('search', e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="sm:w-48"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </Select>
              <Select
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="sm:w-40"
              >
                {statuses.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </Select>
            </div>
            <Button
              onClick={() => setIsTaskFormOpen(true)}
              className="flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Add Task</span>
            </Button>
          </div>
        </div>

        {/* Tasks */}
        <div className="space-y-4">
          {tasks.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-4">No tasks found</div>
              <Button onClick={() => setIsTaskFormOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Create your first task
              </Button>
            </div>
          ) : (
            tasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
                onToggleStatus={handleToggleTaskStatus}
              />
            ))
          )}
        </div>
      </main>

      {/* Task Form Modal */}
      <TaskForm
        isOpen={isTaskFormOpen}
        onClose={handleCloseTaskForm}
        onSubmit={handleTaskSubmit}
        task={editingTask}
      />
    </div>
  );
}

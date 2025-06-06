'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { formatDate, formatDateDistance, isOverdue, cn } from '@/lib/utils';
import { CheckCircle, Circle, Edit, Trash2, Calendar, Flag } from 'lucide-react';

const categoryColors = {
  personal: 'bg-blue-100 text-blue-800',
  work: 'bg-purple-100 text-purple-800',
  shopping: 'bg-green-100 text-green-800',
  health: 'bg-red-100 text-red-800',
  finance: 'bg-yellow-100 text-yellow-800',
  education: 'bg-indigo-100 text-indigo-800',
  other: 'bg-gray-100 text-gray-800',
};

const priorityColors = {
  low: 'text-green-600',
  medium: 'text-yellow-600',
  high: 'text-red-600',
};

export default function TaskCard({ task, onEdit, onDelete, onToggleStatus }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleStatus = async () => {
    setIsLoading(true);
    try {
      await onToggleStatus(task._id, task.status === 'pending' ? 'completed' : 'pending');
    } catch (error) {
      console.error('Error toggling task status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await onDelete(task._id);
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    }
  };

  const overdue = task.dueDate && isOverdue(task.dueDate) && task.status === 'pending';

  return (
    <Card className={cn(
      'transition-all hover:shadow-md',
      task.status === 'completed' && 'opacity-75',
      overdue && 'border-red-200 bg-red-50'
    )}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3 flex-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleToggleStatus}
              disabled={isLoading}
              className="mt-0.5 h-6 w-6 p-0"
            >
              {task.status === 'completed' ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <Circle className="h-5 w-5 text-gray-400" />
              )}
            </Button>

            <div className="flex-1 min-w-0">
              <h3 className={cn(
                'font-medium text-gray-900',
                task.status === 'completed' && 'line-through text-gray-500'
              )}>
                {task.title}
              </h3>
              
              {task.description && (
                <p className={cn(
                  'mt-1 text-sm text-gray-600',
                  task.status === 'completed' && 'line-through text-gray-400'
                )}>
                  {task.description}
                </p>
              )}

              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                <span className={cn(
                  'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium',
                  categoryColors[task.category]
                )}>
                  {task.category.charAt(0).toUpperCase() + task.category.slice(1)}
                </span>

                <div className={cn('flex items-center gap-1', priorityColors[task.priority])}>
                  <Flag className="h-3 w-3" />
                  <span className="text-xs font-medium">
                    {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                  </span>
                </div>

                {task.dueDate && (
                  <div className={cn(
                    'flex items-center gap-1 text-xs',
                    overdue ? 'text-red-600' : 'text-gray-500'
                  )}>
                    <Calendar className="h-3 w-3" />
                    <span>
                      {formatDate(task.dueDate)}
                    </span>
                  </div>
                )}
              </div>

              {overdue && (
                <div className="mt-2 text-xs text-red-600 font-medium">
                  Overdue by {formatDateDistance(task.dueDate)}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-1 ml-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onEdit(task)}
              className="h-8 w-8"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDelete}
              className="h-8 w-8 text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

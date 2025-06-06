import { clsx } from 'clsx';
import { format, isToday, isTomorrow, isYesterday, parseISO, formatDistanceToNow } from 'date-fns';

export function cn(...inputs) {
  return clsx(inputs);
}

export function formatDate(date) {
  if (!date) return '';
  
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  
  if (isToday(parsedDate)) {
    return 'Today';
  } else if (isTomorrow(parsedDate)) {
    return 'Tomorrow';
  } else if (isYesterday(parsedDate)) {
    return 'Yesterday';
  } else {
    return format(parsedDate, 'MMM dd, yyyy');
  }
}

export function formatDateDistance(date) {
  if (!date) return '';
  
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  return formatDistanceToNow(parsedDate, { addSuffix: true });
}

export function isOverdue(dueDate) {
  if (!dueDate) return false;
  const parsedDate = typeof dueDate === 'string' ? parseISO(dueDate) : dueDate;
  return parsedDate < new Date() && !isToday(parsedDate);
}

export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

import { cn } from '@/lib/utils';

export function Button({ className, variant = 'default', size = 'default', children, ...props }) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    default: 'bg-blue-600 text-white shadow hover:bg-blue-700',
    destructive: 'bg-red-600 text-white shadow-sm hover:bg-red-700',
    outline: 'border border-gray-300 bg-white shadow-sm hover:bg-gray-50',
    secondary: 'bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200',
    ghost: 'hover:bg-gray-100',
    link: 'text-blue-600 underline-offset-4 hover:underline',
  };

  const sizes = {
    default: 'h-9 px-4 py-2',
    sm: 'h-8 rounded-md px-3 text-xs',
    lg: 'h-10 rounded-md px-8',
    icon: 'h-9 w-9',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

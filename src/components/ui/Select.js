import { cn } from '@/lib/utils';

export function Select({ className, children, ...props }) {
  return (
    <select
      className={cn(
        'flex h-9 w-full rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}

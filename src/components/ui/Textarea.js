import { cn } from '@/lib/utils';

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        'flex min-h-[60px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}

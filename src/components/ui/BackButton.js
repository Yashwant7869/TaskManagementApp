'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function BackButton({ 
  href = '/', 
  label = 'Back', 
  useRouter: useRouterBack = false,
  className = ''
}) {
  const router = useRouter();

  const handleBack = () => {
    if (useRouterBack) {
      router.back();
    }
  };

  const defaultClasses = "flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200";
  const combinedClasses = `${defaultClasses} ${className}`;

  if (useRouterBack) {
    return (
      <button 
        onClick={handleBack}
        className={combinedClasses}
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        <span className="text-sm font-medium">{label}</span>
      </button>
    );
  }

  return (
    <Link 
      href={href}
      className={combinedClasses}
    >
      <ArrowLeftIcon className="h-5 w-5 mr-2" />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}

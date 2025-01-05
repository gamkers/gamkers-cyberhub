import React from 'react';

interface HeroButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function HeroButton({ variant, children }: HeroButtonProps) {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
        variant === 'primary'
          ? 'bg-green-600 hover:bg-green-700 text-white'
          : 'border border-gray-700 hover:border-green-500 text-gray-300 hover:text-green-400'
      }`}
    >
      {children}
    </button>
  );
}
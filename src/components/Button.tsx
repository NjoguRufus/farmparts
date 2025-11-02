import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gradient-to-r from-[#0A1A3F] to-[#070F2B] text-white hover:shadow-xl hover:scale-105',
    secondary: 'bg-white text-[#0A1A3F] border-2 border-[#0A1A3F] hover:bg-[#0A1A3F] hover:text-white',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A1A3F]',
    gold: 'bg-gradient-to-r from-[#D4A017] to-[#B8880F] text-white hover:shadow-xl hover:scale-105',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

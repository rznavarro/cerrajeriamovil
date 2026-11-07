import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg',
    lg: 'text-xl sm:text-2xl',
  };

  const subSizes = {
    sm: 'text-[10px] sm:text-xs',
    md: 'text-xs sm:text-sm',
    lg: 'text-sm sm:text-base',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Key icon inside stylized circle, 2px amber stroke */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Outer circle with 2px amber stroke */}
          <circle cx="22" cy="22" r="20" stroke="#F5B21A" strokeWidth="2" />
          
          {/* Key head and shaft */}
          <path
            d="M17 17a5 5 0 1 0 7.07 0l7.29 7.29a1.5 1.5 0 0 1 0 2.12l-1.41 1.41a1.5 1.5 0 0 1-2.12 0L26.41 26.4l-1.41 1.41a1 1 0 0 1-1.41 0l-.7-.7a1 1 0 0 1 0-1.42l1.41-1.41-1.41-1.41a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.41 0l1.41 1.41 1.41-1.41-5.75-5.75A4.98 4.98 0 0 0 17 17Z"
            stroke="#F5B21A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Keyhole inside head */}
          <circle cx="17.5" cy="17.5" r="1.75" fill="#F5B21A" />
        </svg>
      </div>

      {/* Wordmark text */}
      <div className="flex flex-col leading-tight">
        <span
          className={`font-heading font-extrabold uppercase tracking-tight text-white ${titleSizes[size]}`}
          style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800 }}
        >
          CERRAJERÍA MÓVIL
        </span>
        <span
          className={`font-heading font-semibold text-[#F5B21A] ${subSizes[size]}`}
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 600,
            letterSpacing: '0.2em',
          }}
        >
          24 · GDL
        </span>
      </div>
    </div>
  );
};

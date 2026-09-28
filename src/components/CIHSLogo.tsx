import React from 'react';
import logo from '../assets/logo/cihs-logo.png';

interface CIHSLogoProps {
  variant?: 'full' | 'badge-only' | 'footer';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
}

export const CIHSLogo: React.FC<CIHSLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const logoWidth = size === 'sm' ? 140 : size === 'lg' ? 220 : 180;

  return (
    <img
      src={logo}
      alt="City Institute of Health Sciences"
      style={{ width: logoWidth }}
      className={`h-auto object-contain ${className}`}
    />
  );
};
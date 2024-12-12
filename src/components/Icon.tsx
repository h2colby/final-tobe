import React from 'react';

interface IconProps {
  name: string;
  size?: 's' | 'm' | 'l';
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 'm', className }) => {
  // You can implement actual icon rendering logic here
  // For now, returning a simple placeholder
  return (
    <span className={`icon icon-${name} icon-${size} ${className || ''}`}>
      {name}
    </span>
  );
}; 
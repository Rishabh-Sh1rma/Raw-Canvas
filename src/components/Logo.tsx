import React from 'react';

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <img 
      src="https://i.ibb.co/hJ5DJ4g6/favicon.jpg" 
      alt="Rawcanvas Logo" 
      className={`rounded-lg object-cover ${className}`} 
      referrerPolicy="no-referrer"
    />
  );
}

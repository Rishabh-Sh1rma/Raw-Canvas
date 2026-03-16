import React from 'react';
import { Logo } from './Logo';

export function SimpleFooter() {
  return (
    <footer className="py-12 px-6 border-t border-white/10 text-center text-sm text-gray-500 flex flex-col items-center gap-6 bg-[#050505] relative z-10">
      <Logo className="w-12 h-12 grayscale opacity-50" />
      <p>© Rawcanvas 2026. All Rights Reserved</p>
      <a href="mailto:Info@rawcanvas.co" className="hover:text-white transition-colors">Info@rawcanvas.co</a>
    </footer>
  );
}

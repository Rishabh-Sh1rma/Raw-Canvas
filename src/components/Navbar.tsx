import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/src/utils/cn";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/5">
      <Link to="/" className="flex items-center gap-2 text-white font-semibold text-xl tracking-tight">
        <Logo className="w-8 h-8" />
        Rawcanvas
      </Link>
      
      <div className="hidden md:flex items-center gap-2">
        <NavLink href="/#about">About</NavLink>
        <NavLink href="/#process">Process</NavLink>
        <NavLink href="/#contact">Contact</NavLink>
        <Link 
          to="/free-training" 
          className="px-4 py-1.5 rounded-full border border-white/10 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
        >
          Free Training
        </Link>
        <div className="w-px h-4 bg-white/20 mx-2"></div>
        <a 
          href="/#contact" 
          className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
        >
          Book a call
        </a>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="px-4 py-1.5 rounded-full border border-white/10 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
    >
      {children}
    </a>
  );
}

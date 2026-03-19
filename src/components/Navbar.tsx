import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/src/utils/cn";
import { Logo } from "./Logo";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-white font-semibold text-xl tracking-tight">
          <Logo className="w-8 h-8" />
          Rawcanvas
        </Link>
        
        {/* Desktop Menu */}
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
            href="https://calendly.com/pulkit-rawcanvas/discovery-call-x-pulkit" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Book a call
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#050505] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <a href="/#about" onClick={toggleMenu} className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="/#process" onClick={toggleMenu} className="text-gray-300 hover:text-white transition-colors">Process</a>
          <a href="/#contact" onClick={toggleMenu} className="text-gray-300 hover:text-white transition-colors">Contact</a>
          <Link 
            to="/free-training" 
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Free Training
          </Link>
          <a 
            href="https://calendly.com/pulkit-rawcanvas/discovery-call-x-pulkit" 
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="mt-2 px-4 py-2 text-center rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Book a call
          </a>
        </div>
      )}
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

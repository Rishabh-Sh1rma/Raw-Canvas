import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Link to="/" className="flex items-center gap-2 text-white font-semibold text-2xl tracking-tight mb-6">
            <Logo className="w-10 h-10" />
            Rawcanvas
          </Link>
          <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
            Creative ally for teams building with purpose, guided by design systems and human-focused thinking.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <a href="/#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="/#process" className="text-gray-400 hover:text-white transition-colors">Process</a>
            <a href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex flex-col gap-4">
            <a href="https://www.instagram.com/rawcanvas.ai/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/company/raw-canvas-ai/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© Rawcanvas 2026. All Rights Reserved</p>
        <a href="mailto:Info@rawcanvas.co" className="hover:text-white transition-colors">Info@rawcanvas.co</a>
      </div>
    </footer>
  );
}

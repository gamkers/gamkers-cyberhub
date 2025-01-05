import { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    "Introduction",
    "Networking",
    "OS & Scripting",
    "Web Security",
    "Ethical Hacking",
    "Advanced Topics"
  ];

  return (
    <nav className="cyber-gradient border-b border-green-900/50 fixed w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Terminal className="h-8 w-8 text-green-400" />
            <span className="ml-2 text-xl font-bold text-white">
              GAMKERS <span className="text-green-400">Cyber Hub</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} 
                 className="nav-item">
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} 
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-green-900/50">
            {navItems.map((item) => (
              <a key={item}
                 href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                 className="block px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-black/50"
                 onClick={() => setIsOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
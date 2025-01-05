
import { Terminal } from 'lucide-react';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-800 bg-black/95 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Terminal className="h-8 w-8 text-green-500" />
            <span className="ml-2 text-xl font-bold text-white">Gamkers Cyber Hub</span>
          </div>
          <NavLinks />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
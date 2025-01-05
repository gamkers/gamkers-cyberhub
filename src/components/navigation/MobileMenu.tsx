import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#introduction", label: "Introduction" },
    { href: "#networking", label: "Networking" },
    { href: "#os-scripting", label: "OS & Scripting" },
    { href: "#web-security", label: "Web Security" },
    { href: "#ethical-hacking", label: "Ethical Hacking" },
    { href: "#advanced-topics", label: "Advanced Topics" },
    { href: "#certifications", label: "Certifications" },
  ];

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-green-400">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black border-b border-gray-800 py-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-gray-900"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
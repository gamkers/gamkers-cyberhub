
import NavLink from './NavLink';

export default function NavLinks() {
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
    <div className="hidden md:flex items-center space-x-1">
      {links.map((link) => (
        <NavLink key={link.href} href={link.href}>
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}
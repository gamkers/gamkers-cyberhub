
import { Bug, Scan } from 'lucide-react';

const tools = [
  {
    icon: Bug,
    name: 'Burp Suite',
    description: 'Web vulnerability scanner and proxy tool for security testing',
    link: 'https://portswigger.net/burp'
  },
  {
    icon: Scan,
    name: 'OWASP ZAP',
    description: 'Open-source web application security scanner',
    link: 'https://www.zaproxy.org'
  }
];

export default function SecurityTools() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-8">Security Testing Tools</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <a
              key={index}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg card-gradient border border-gray-800 hover:glow-green transition-all duration-300"
            >
              <Icon className="h-8 w-8 text-green-500 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">{tool.name}</h4>
              <p className="text-gray-400">{tool.description}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
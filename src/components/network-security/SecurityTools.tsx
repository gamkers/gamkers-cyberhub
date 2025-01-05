
import { Network, Search, Shield } from 'lucide-react';

const tools = [
  {
    icon: Network,
    name: 'Suricata',
    description: 'High-performance network IDS, IPS, and security monitoring',
    link: 'https://suricata.io/'
  },
  {
    icon: Search,
    name: 'Zeek',
    description: 'Network security monitor for threat detection',
    link: 'https://zeek.org/'
  },
  {
    icon: Shield,
    name: 'Security Onion',
    description: 'Linux distribution for threat hunting and monitoring',
    link: 'https://securityonionsolutions.com/'
  }
];

export default function SecurityTools() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-8">Security Monitoring Tools</h3>
      <div className="grid md:grid-cols-3 gap-6">
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
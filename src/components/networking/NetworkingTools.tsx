
import { Search, Shield } from 'lucide-react';

const tools = [
  {
    icon: Search,
    name: 'Wireshark',
    description: 'Network protocol analyzer for packet inspection and troubleshooting',
    link: 'https://www.wireshark.org'
  },
  {
    icon: Shield,
    name: 'Nmap',
    description: 'Network scanner for security auditing and network discovery',
    link: 'https://nmap.org'
  }
];

export default function NetworkingTools() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-8">Essential Networking Tools</h3>
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
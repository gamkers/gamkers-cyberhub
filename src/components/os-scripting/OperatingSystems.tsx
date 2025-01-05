
import { Terminal, MonitorIcon } from 'lucide-react';

const systems = [
  {
    icon: Terminal,
    name: 'Linux (Kali)',
    description: 'Security-focused Linux distribution with pre-installed penetration testing tools',
    features: ['Command Line Interface', 'Package Management', 'System Administration', 'Security Tools']
  },
  {
    icon: MonitorIcon,
    name: 'Windows',
    description: 'Master PowerShell and Windows system administration for enterprise environments',
    features: ['PowerShell', 'Active Directory', 'System Configuration', 'Security Policies']
  }
];

export default function OperatingSystems() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-8">Operating Systems</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {systems.map((system, index) => {
          const Icon = system.icon;
          return (
            <div key={index} className="p-6 rounded-lg card-gradient border border-gray-800 hover:glow-green transition-all duration-300">
              <Icon className="h-8 w-8 text-green-500 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">{system.name}</h4>
              <p className="text-gray-400 mb-4">{system.description}</p>
              <ul className="space-y-2">
                {system.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
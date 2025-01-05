
import { Shield, Lock, AlertTriangle } from 'lucide-react';

const firewalls = [
  {
    icon: Shield,
    name: 'pfSense',
    description: 'Open-source firewall and router platform',
    features: ['Packet Filtering', 'VPN Support', 'Traffic Shaping', 'Load Balancing']
  },
  {
    icon: Lock,
    name: 'OPNsense',
    description: 'Security-focused firewall based on FreeBSD',
    features: ['Intrusion Detection', 'Traffic Analysis', 'Web Filtering', 'High Availability']
  },
  {
    icon: AlertTriangle,
    name: 'Snort IDS',
    description: 'Network intrusion detection and prevention',
    features: ['Real-time Analysis', 'Protocol Analysis', 'Content Searching', 'Packet Logging']
  }
];

export default function FirewallSection() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-8">Firewall Solutions</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {firewalls.map((firewall, index) => {
          const Icon = firewall.icon;
          return (
            <div key={index} className="p-6 rounded-lg card-gradient border border-gray-800 hover:glow-green transition-all duration-300">
              <Icon className="h-8 w-8 text-green-500 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">{firewall.name}</h4>
              <p className="text-gray-400 mb-4">{firewall.description}</p>
              <ul className="space-y-2">
                {firewall.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-green-400 flex items-center gap-2">
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
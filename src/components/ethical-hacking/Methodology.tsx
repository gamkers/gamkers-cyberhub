
import { Search, Scan, Key, Flag, Shield } from 'lucide-react';

const steps = [
  {
    icon: Search,
    name: 'Reconnaissance',
    description: 'Gather information about the target system',
    techniques: ['OSINT', 'Network Mapping', 'Social Engineering']
  },
  {
    icon: Scan,
    name: 'Scanning',
    description: 'Identify vulnerabilities and potential entry points',
    techniques: ['Port Scanning', 'Vulnerability Assessment', 'Service Enumeration']
  },
  {
    icon: Key,
    name: 'Gaining Access',
    description: 'Exploit identified vulnerabilities to gain system access',
    techniques: ['Exploitation', 'Password Attacks', 'Web Application Attacks']
  },
  {
    icon: Flag,
    name: 'Post Exploitation',
    description: 'Maintain access and document findings',
    techniques: ['Privilege Escalation', 'Data Exfiltration', 'Persistence']
  },
  {
    icon: Shield,
    name: 'Reporting',
    description: 'Document findings and provide remediation steps',
    techniques: ['Risk Assessment', 'Mitigation Strategies', 'Documentation']
  }
];

export default function Methodology() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-8">Hacking Methodology</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="p-6 rounded-lg card-gradient border border-gray-800 hover:glow-green transition-all duration-300">
              <Icon className="h-8 w-8 text-green-500 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">{step.name}</h4>
              <p className="text-gray-400 mb-4">{step.description}</p>
              <ul className="space-y-1">
                {step.techniques.map((technique, idx) => (
                  <li key={idx} className="text-sm text-green-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    {technique}
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
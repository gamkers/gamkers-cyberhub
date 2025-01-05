
import { ShieldAlert, Code, UserX, Database, Link } from 'lucide-react';

const vulnerabilities = [
  {
    icon: Database,
    name: 'SQL Injection',
    description: 'Malicious SQL queries that can read or modify database data',
    impact: 'Data breach, unauthorized access'
  },
  {
    icon: Code,
    name: 'Cross-Site Scripting (XSS)',
    description: 'Injecting malicious scripts into web pages viewed by users',
    impact: 'Session hijacking, defacement'
  },
  {
    icon: UserX,
    name: 'Broken Authentication',
    description: 'Flaws in authentication and session management',
    impact: 'Account takeover, identity theft'
  },
  {
    icon: ShieldAlert,
    name: 'CSRF',
    description: 'Forcing users to perform unwanted actions',
    impact: 'Unauthorized transactions'
  },
  {
    icon: Link,
    name: 'Broken Access Control',
    description: 'Insufficient authorization checks',
    impact: 'Privilege escalation'
  }
];

export default function VulnerabilitiesList() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-8">Common Web Vulnerabilities</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vulnerabilities.map((vuln, index) => {
          const Icon = vuln.icon;
          return (
            <div key={index} className="p-6 rounded-lg card-gradient border border-gray-800 hover:glow-green transition-all duration-300">
              <Icon className="h-8 w-8 text-green-500 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">{vuln.name}</h4>
              <p className="text-gray-400 mb-2">{vuln.description}</p>
              <p className="text-sm text-red-400">Impact: {vuln.impact}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
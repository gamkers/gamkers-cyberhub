
import { Cloud, Shield, Key, Lock, UserCheck, FileCheck } from 'lucide-react';

const principles = [
  {
    icon: Lock,
    name: 'Data Encryption',
    description: 'Ensuring sensitive data is encrypted both at rest and in transit to protect against unauthorized access'
  },
  {
    icon: UserCheck,
    name: 'Access Controls',
    description: 'Implementing strong authentication and role-based access control (RBAC) to limit access to cloud resources'
  },
  {
    icon: FileCheck,
    name: 'Compliance',
    description: 'Ensuring cloud services comply with regulations and standards, such as GDPR or HIPAA'
  }
];

const platforms = [
  {
    icon: Cloud,
    name: 'AWS Security',
    description: 'Amazon Web Services security services and best practices',
    features: ['IAM', 'KMS', 'Security Groups', 'WAF']
  },
  {
    icon: Shield,
    name: 'Azure Security',
    description: 'Microsoft Azure security solutions and tools',
    features: ['Azure AD', 'Key Vault', 'Security Center', 'Sentinel']
  },
  {
    icon: Key,
    name: 'Google Cloud Security',
    description: 'Security solutions to protect workloads on Google Cloud Platform',
    features: ['Cloud IAM', 'KMS', 'Security Command Center', 'Cloud Armor']
  }
];

export default function CloudSecurity() {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-2xl font-bold text-white mb-8">Cloud Security Principles</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div key={index} className="p-6 rounded-lg card-gradient border border-gray-800 hover:glow-green transition-all duration-300">
                <Icon className="h-8 w-8 text-green-500 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">{principle.name}</h4>
                <p className="text-gray-400">{principle.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white mb-8">Cloud Security Platforms</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div key={index} className="p-6 rounded-lg card-gradient border border-gray-800 hover:glow-green transition-all duration-300">
                <Icon className="h-8 w-8 text-green-500 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">{platform.name}</h4>
                <p className="text-gray-400 mb-4">{platform.description}</p>
                <ul className="space-y-2">
                  {platform.features.map((feature, idx) => (
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
        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
          <p className="text-green-400 font-medium">Pro Tip:</p>
          <p className="text-gray-400">Regularly review and update security policies and configurations to address new cloud security threats.</p>
        </div>
      </div>
    </div>
  );
}
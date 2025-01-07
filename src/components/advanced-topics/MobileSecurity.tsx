
import {Shield, Search } from 'lucide-react';

const tools = [
  {
    icon: Shield,
    name: 'Drozer',
    description: 'Android security assessment framework',
    link: 'https://github.com/FSecureLABS/drozer'
  },
  {
    icon: Search,
    name: 'MobSF',
    description: 'Mobile Security Framework for app analysis',
    link: 'https://github.com/MobSF/Mobile-Security-Framework-MobSF'
  }
];

export default function MobileSecurity() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-8">Mobile Security</h3>
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
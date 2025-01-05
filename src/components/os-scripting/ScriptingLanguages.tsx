
import { FileCode, Shell } from 'lucide-react';

const languages = [
  {
    icon: FileCode,
    name: 'Python',
    description: 'Popular scripting language for automation and security tools',
    useCases: [
      'Network scanning',
      'Data analysis',
      'Exploit development',
      'Automation scripts'
    ]
  },
  {
    icon: Shell,
    name: 'Bash Scripting',
    description: 'Shell scripting for Linux system automation and task management',
    useCases: [
      'System automation',
      'Log analysis',
      'File management',
      'Security auditing'
    ]
  }
];

export default function ScriptingLanguages() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-8">Scripting Languages</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {languages.map((lang, index) => {
          const Icon = lang.icon;
          return (
            <div key={index} className="p-6 rounded-lg card-gradient border border-gray-800 hover:glow-green transition-all duration-300">
              <Icon className="h-8 w-8 text-green-500 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">{lang.name}</h4>
              <p className="text-gray-400 mb-4">{lang.description}</p>
              <div className="space-y-2">
                <h5 className="text-sm font-medium text-green-400">Common Use Cases:</h5>
                <ul className="grid grid-cols-2 gap-2">
                  {lang.useCases.map((useCase, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
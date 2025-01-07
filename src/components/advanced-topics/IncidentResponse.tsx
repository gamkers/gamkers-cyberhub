
import { AlertTriangle, Search, FileSearch, Shield, RefreshCw, BookOpen } from 'lucide-react';

const steps = [
  {
    icon: AlertTriangle,
    name: 'Preparation',
    description: 'Developing policies and incident response plans, along with training staff on how to handle security incidents',
    tools: ['Response Plans', 'Staff Training', 'Documentation']
  },
  {
    icon: Search,
    name: 'Identification',
    description: 'Detecting and determining the scope of the security breach',
    tools: ['Monitoring Tools', 'Log Analysis', 'Threat Detection']
  },
  {
    icon: Shield,
    name: 'Containment',
    description: 'Isolating the compromised systems to prevent further damage',
    tools: ['System Isolation', 'Network Segmentation', 'Access Control']
  },
  {
    icon: FileSearch,
    name: 'Eradication',
    description: 'Identifying and removing the root cause of the breach, such as malware or vulnerabilities',
    tools: ['Malware Removal', 'Vulnerability Patching', 'System Hardening']
  },
  {
    icon: RefreshCw,
    name: 'Recovery',
    description: 'Restoring and validating affected systems and services to ensure they are free from threats',
    tools: ['System Restoration', 'Data Recovery', 'Service Validation']
  },
  {
    icon: BookOpen,
    name: 'Lessons Learned',
    description: 'Documenting the incident, identifying weaknesses, and improving response strategies',
    tools: ['Incident Documentation', 'Process Improvement', 'Team Debriefing']
  }
];

const tools = [
  {
    name: 'Splunk',
    description: 'Platform for searching, monitoring, and analyzing machine-generated big data',
    link: 'https://www.splunk.com/'
  },
  {
    name: 'SANS DFIR Toolkit',
    description: 'Collection of free incident response and forensic tools',
    link: 'https://www.sans.org/tools/'
  }
];

export default function IncidentResponse() {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-2xl font-bold text-white mb-8">Incident Response</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="p-6 rounded-lg card-gradient border border-gray-800 hover:glow-green transition-all duration-300">
                <Icon className="h-8 w-8 text-green-500 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">{step.name}</h4>
                <p className="text-gray-400 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.tools.map((tool, idx) => (
                    <li key={idx} className="text-sm text-green-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h4 className="text-xl font-bold text-white mb-6">Essential Tools</h4>
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg card-gradient border border-gray-800 hover:glow-green transition-all duration-300"
            >
              <h5 className="text-lg font-semibold text-white mb-2">{tool.name}</h5>
              <p className="text-gray-400">{tool.description}</p>
            </a>
          ))}
        </div>
        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
          <p className="text-green-400 font-medium">Pro Tip:</p>
          <p className="text-gray-400">Regularly conduct incident response drills (such as tabletop exercises) to test your organization's preparedness and response capabilities.</p>
        </div>
      </div>
    </div>
  );
}
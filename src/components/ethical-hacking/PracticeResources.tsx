
import { Box, Target, Server } from 'lucide-react';

const platforms = [
  {
    icon: Box,
    name: 'Hack The Box',
    description: 'Practice on real-world penetration testing labs',
    link: 'https://www.hackthebox.com'
  },
  {
    icon: Target,
    name: 'TryHackMe',
    description: 'Learn cybersecurity through hands-on practice',
    link: 'https://tryhackme.com'
  },
  {
    icon: Server,
    name: 'VulnHub',
    description: 'Download vulnerable virtual machines for practice',
    link: 'https://www.vulnhub.com'
  }
];

export default function PracticeResources() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-8">Practice Platforms</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {platforms.map((platform, index) => {
          const Icon = platform.icon;
          return (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg card-gradient border border-gray-800 hover:glow-green transition-all duration-300"
            >
              <Icon className="h-8 w-8 text-green-500 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">{platform.name}</h4>
              <p className="text-gray-400">{platform.description}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
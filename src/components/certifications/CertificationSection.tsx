
import { Award, Shield, Book, FileCheck, Search, Code, Cloud } from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    name: 'CompTIA Security+',
    description: 'Foundational certification covering essential security concepts and best practices',
    level: 'Foundation'
  },
  {
    icon: Code,
    name: 'Certified Ethical Hacker (CEH)',
    description: 'Skills and knowledge needed to identify vulnerabilities and threats in systems',
    level: 'Intermediate'
  },
  {
    icon: Award,
    name: 'CISSP',
    description: 'Advanced certification validating expertise in designing and managing security programs',
    level: 'Advanced'
  },
  {
    icon: FileCheck,
    name: 'CISM',
    description: 'Focuses on managing and governing an enterprise\'s information security program',
    level: 'Advanced'
  },
  {
    icon: Search,
    name: 'CISA',
    description: 'Emphasizes information systems auditing, control, and security',
    level: 'Advanced'
  },
  {
    icon: Shield,
    name: 'CompTIA CySA+',
    description: 'Centers on threat detection, analysis, and response strategies',
    level: 'Intermediate'
  },
  {
    icon: Award,
    name: 'CASP+',
    description: 'Advanced certification for experienced security professionals',
    level: 'Advanced'
  },
  {
    icon: Book,
    name: 'GSEC',
    description: 'Validates knowledge of information security concepts and hands-on skills',
    level: 'Intermediate'
  },
  {
    icon: Code,
    name: 'OSCP',
    description: 'Hands-on penetration testing certification focused on practical skills',
    level: 'Advanced'
  },
  {
    icon: Cloud,
    name: 'CCSP',
    description: 'Covers cloud security architecture, governance, and risk management',
    level: 'Advanced'
  }
];

export default function CertificationSection() {
  return (
    <section id="certifications" className="py-20 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Key Certifications</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400">Industry-recognized certifications to validate your expertise</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div key={index} className="p-6 rounded-lg card-gradient border border-gray-800 hover:glow-green transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="h-8 w-8 text-green-500" />
                  <div>
                    <h4 className="text-xl font-semibold text-white">{cert.name}</h4>
                    <span className={`text-sm ${
                      cert.level === 'Advanced' ? 'text-red-400' :
                      cert.level === 'Intermediate' ? 'text-yellow-400' :
                      'text-green-400'
                    }`}>
                      {cert.level}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400">{cert.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
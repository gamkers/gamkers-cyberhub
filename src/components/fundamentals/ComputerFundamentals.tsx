
import ResourceSection from './ResourceSection';
import ImportanceCard from './ImportanceCard';
import { Cpu, HardDrive } from 'lucide-react';

export default function ComputerFundamentals() {
  const examples = [
    {
      icon: HardDrive,
      title: "Memory Analysis",
      description: "Understanding how RAM functions can aid in memory dump analysis."
    },
    {
      icon: Cpu,
      title: "Performance Optimization",
      description: "Knowing about CPUs and GPUs helps optimize performance for password cracking tools."
    },
    {
      icon: HardDrive,
      title: "Hardware Security",
      description: "Knowledge of hardware helps in exploiting vulnerabilities like cold boot attacks or hardware-based debugging."
    }
  ];

  return (
    <section id="fundamentals" className="py-20 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Computer Fundamentals</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">Why Important</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {examples.map((example, index) => (
              <ImportanceCard key={index} {...example} />
            ))}
          </div>
        </div>

        <ResourceSection />
      </div>
    </section>
  );
}
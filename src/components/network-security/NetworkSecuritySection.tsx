
import FirewallSection from './FirewallSection';
import SecurityTools from './SecurityTools';
import LearningResources from './LearningResources';

export default function NetworkSecuritySection() {
  return (
    <section id="network-security" className="py-20 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Network Security</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400">Master network security tools and configurations</p>
        </div>
        <div className="space-y-16">
          <FirewallSection />
          <SecurityTools />
          <LearningResources />
        </div>
      </div>
    </section>
  );
}

import CloudSecurity from './CloudSecurity';
import MobileSecurity from './MobileSecurity';
import IncidentResponse from './IncidentResponse';
import LearningResources from './LearningResources';

export default function AdvancedTopicsSection() {
  return (
    <section id="advanced-topics" className="py-20 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Advanced Topics</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400">Explore advanced cybersecurity concepts and tools</p>
        </div>
        <div className="space-y-16">
          <CloudSecurity />
          <MobileSecurity />
          <IncidentResponse />
          <LearningResources />
        </div>
      </div>
    </section>
  );
}
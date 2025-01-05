
import ProtocolsList from './ProtocolsList';
import NetworkingTools from './NetworkingTools';
import ResourceVideos from './ResourceVideos';

export default function NetworkingSection() {
  return (
    <section id="networking" className="py-20 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Networking Concepts</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400">Master the fundamentals of computer networking</p>
        </div>
        <div className="space-y-16">
          <ProtocolsList />
          <NetworkingTools />
          <ResourceVideos />
        </div>
      </div>
    </section>
  );
}

import RoadmapList from './RoadmapList';

export default function Introduction() {
  return (
    <section id="introduction" className="py-20 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Introduction to Ethical Hacking</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-gray-300 text-lg leading-relaxed">
            Ethical hacking is the practice of testing and securing computer systems, networks, 
            and applications by identifying and exploiting vulnerabilities before malicious 
            attackers can. It helps organizations safeguard their digital assets, ensuring 
            confidentiality, integrity, and availability.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Roadmap to Ethical Hacking
          </h3>
          <RoadmapList />
        </div>
      </div>
    </section>
  );
}
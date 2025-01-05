import React from 'react';
import { Shield, Users, Globe } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <FeatureCard 
            icon={Shield}
            title="Expert-Led Training"
            description="Founded by cybersecurity experts with real-world experience"
          />
          <FeatureCard 
            icon={Users}
            title="Supportive Community"
            description="Join a community of learners and professionals"
          />
          <FeatureCard 
            icon={Globe}
            title="Global Impact"
            description="Help create a safer online world through education"
          />
        </div>

        <div className="prose prose-invert mx-auto">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            At Gamkers, our mission is to empower the next generation of cybersecurity professionals 
            by providing the knowledge, tools, and resources they need to succeed in a rapidly 
            evolving digital world.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            We are passionate about making cybersecurity education accessible and impactful for 
            everyone, from beginners to experienced professionals. Join us in shaping the future 
            of cybersecurity and creating a safer online world.
          </p>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-lg card-gradient border border-gray-800 hover:glow-green transition-all duration-300">
      <Icon className="h-12 w-12 text-green-500 mb-4 mx-auto" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
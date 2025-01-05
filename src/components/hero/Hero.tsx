
import { Terminal, Shield, Code } from 'lucide-react';
import HeroButton from './HeroButton';

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-32 pb-16 hero-gradient">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-green-900/20" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-6">
            <Terminal className="h-16 w-16 text-green-500" />
            <Shield className="h-16 w-16 text-green-400" />
            <Code className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Master the Art of <span className="text-green-400">Cybersecurity</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Comprehensive resources and practical knowledge to help you navigate
            the complex world of cybersecurity and ethical hacking.
          </p>
          <div className="flex justify-center gap-4">
            <HeroButton variant="primary">Start Learning</HeroButton>
            <HeroButton variant="secondary">Browse Topics</HeroButton>
          </div>
        </div>
      </div>
    </div>
  );
}
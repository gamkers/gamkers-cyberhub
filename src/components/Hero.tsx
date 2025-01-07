
import { Shield, Terminal, Lock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen pt-16 overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
          alt="Cybersecurity Background"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <Terminal className="h-12 w-12 text-green-400 animate-pulse" />
            <Shield className="h-12 w-12 text-green-500" />
            <Lock className="h-12 w-12 text-green-400 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Master</span>
            <span className="text-green-400"> Cybersecurity</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Dive into the world of ethical hacking and cybersecurity. Learn from basics 
            to advanced techniques with hands-on practice.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg 
                             font-medium transition-all duration-200 hover:shadow-lg 
                             hover:shadow-green-500/20">
              Start Learning
            </button>
            <button className="px-8 py-3 border border-green-800 hover:border-green-400 
                             text-green-400 rounded-lg font-medium transition-all duration-200
                             hover:shadow-lg hover:shadow-green-500/10">
              View Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
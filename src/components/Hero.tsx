
import { Shield, Terminal, Lock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="hero-gradient min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
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
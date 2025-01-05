
import { Check } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  price: {
    current: number;
    original: number;
  };
  features: string[];
}

export default function CourseCard({ title, description, price, features }: CourseCardProps) {
  return (
    <div className="p-6 rounded-lg card-gradient border border-gray-800 hover:glow-green transition-all duration-300">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      
      <div className="mb-6">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-bold text-green-500">₹{price.current}</span>
          <span className="text-lg text-gray-500 line-through">₹{price.original}</span>
        </div>
        <span className="text-sm text-green-400">Prelaunch Price</span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <a 
        href="https://course.gamkers.in/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-200 text-center"
      >
        Enroll Now
      </a>
    </div>
  );
}
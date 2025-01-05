
import { LucideIcon } from 'lucide-react';

interface RoadmapStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  number: number;
}

export default function RoadmapStep({ icon: Icon, title, description, number }: RoadmapStepProps) {
  return (
    <div className="p-6 rounded-lg card-gradient border border-gray-800 hover:glow-green transition-all duration-300 relative">
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-black font-bold">
        {number}
      </div>
      <Icon className="h-8 w-8 text-green-500 mb-4" />
      <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
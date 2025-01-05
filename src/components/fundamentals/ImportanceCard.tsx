
import { LucideIcon } from 'lucide-react';

interface ImportanceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ImportanceCard({ icon: Icon, title, description }: ImportanceCardProps) {
  return (
    <div className="p-6 rounded-lg card-gradient border border-gray-800 hover:glow-green transition-all duration-300">
      <Icon className="h-8 w-8 text-green-500 mb-4" />
      <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
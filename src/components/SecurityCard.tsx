
import { LucideIcon } from 'lucide-react';

interface SecurityCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function SecurityCard({ title, description, Icon }: SecurityCardProps) {
  return (
    <div className="card-gradient p-6 rounded-xl border border-gray-800 hover:glow transition-all duration-300">
      <Icon className="h-12 w-12 text-blue-500 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
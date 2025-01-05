
import VideoList from './VideoList';
import ResourceLinks from './ResourceLinks';

export default function ResourceSection() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-8">Resources to Learn Basic IT Concepts</h3>
      <div className="space-y-12">
        <VideoList />
        <ResourceLinks />
      </div>
    </div>
  );
}
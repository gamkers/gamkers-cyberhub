
import VideoSlider from '../shared/VideoSlider';

const videos = [
  {
    title: "pfSense Setup Guide",
    id: "lUzSsX4T4WQ"
  },
  {
    title: "OPNsense Tutorial Series",
    id: "PLXHMZDvOn5sVAhOGZOUVk5Hfk0k1q-It2",
  },
  {
    title: "Network Security Deep Dive",
    id: "tNWj5uGIqok"
  }
];

export default function LearningResources() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-8">Learning Resources</h3>
      <VideoSlider videos={videos} />
    </div>
  );
}
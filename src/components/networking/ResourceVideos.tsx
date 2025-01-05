
import VideoSlider from '../shared/VideoSlider';

const networkingVideos = [
  {
    title: "CCNA 200-301 Full Course",
    id: "PLIhvC56v63IJVXv0GJcl9vO5Z6znCVb1P",
    
  },
  {
    title: "Network Protocols Deep Dive",
    id: "3NDhETVfrp0"
  },
  {
    title: "OSI Model Explained",
    id: "IPvYjXCsTg8"
  },
  {
    title: "Network Engineering Course",
    id: "qiQR5rTSshw"
  },
  {
    title: "Wireshark Tutorial",
    id: "n4muxtqLhN4"
  }
];

export default function ResourceVideos() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-8">Learning Resources</h3>
      <VideoSlider videos={networkingVideos} />
    </div>
  );
}
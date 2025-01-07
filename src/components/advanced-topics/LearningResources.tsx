
import VideoSlider from '../shared/VideoSlider';

const videos = [
  {
    title: "AWS Complete Tutorial 2023",
    id: "B8i49C8fC3E"
  },
  {
    title: "Azure Tutorial For Beginners",
    id: "Nbnht4fvTDs"
  },
  {
    title: "Cloud Security",
    id: "PLsfnCRA9QVnSj4gbP5W1W5W1CXjPRhe1oE2",

  },
  {
    title: "Android Drozer",
    id: "PLxeJU39M7tLEd7wb_6RYy6N5-oniK8d2W",
 
  },
  {
    title: "Scanning Mobile Apps with MobSF",
    id: "j21EBhpr_4U"
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
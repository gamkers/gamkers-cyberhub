
import VideoSlider from '../shared/VideoSlider';

const videos = [
  {
    title: "Ethical Hacking Course (Part 1)",
    id: "3FNYvj2U0HM"
  },
  {
    title: "Ethical Hacking Course (Part 2)",
    id: "sH4JCwjybGs"
  },
  {
    title: "Bug Bounty Course 2024",
    id: "TTw-EY7F1rM"
  },
  {
    title: "HackTheBox Starting Point",
    id: "PLHUKi1UlEgOINz5PLYb9yu7evQZ_5MQ21",
  },
  {
    title: "Active Directory Hacking",
    id: "VXxH4n684HE"
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

import VideoSlider from '../shared/VideoSlider';

const videos = [
  {
    title: "Bug Bounty Course",
    id: "PLtZtNPs3fJyDUJttw2sJVU69IKfqY7XPn",
  },
  {
    title: "Web Application Hacking",
    id: "wMO_My5gsDI"
  },
  {
    title: "Hacking Web Applications",
    id: "1GJ_LwNw6sc"
  },
  {
    title: "Burp Suite Tutorial",
    id: "IWWYNDiwYOA"
  },
  {
    title: "OWASP ZAP Tutorial",
    id: "QJ5u_dHwoAk"
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

import VideoSlider from '../shared/VideoSlider';

const videos = [
  {
    title: "Linux Commands Full Course",
    id: "ZtqBQ68cfJc"
  },
  {
    title: "PowerShell Tutorial",
    id: "ZOoCaWyifmI"
  },
  {
    title: "Python for Beginners",
    id: "qwAFL1597eM"
  },
  {
    title: "Python in Tamil",
    id: "m67-bOpOoPU"
  },
  {
    title: "Bash Scripting Tutorial",
    id: "tK9Oc6AEnR4"
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
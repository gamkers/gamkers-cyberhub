
import RoadmapStep from './RoadmapStep';
import { 
  Monitor, Network, Terminal, Globe, Shield, Brain, Award, Target, RefreshCw 
} from 'lucide-react';

export default function RoadmapList() {
  const steps = [
    {
      icon: Monitor,
      title: "Computer Fundamentals",
      description: "Learn computer hardware, software, and basic programming to build a strong foundation."
    },
    {
      icon: Network,
      title: "Networking Concepts",
      description: "Study protocols (TCP/IP, HTTP), IP addressing, and tools like Wireshark and Nmap for network security."
    },
    {
      icon: Terminal,
      title: "Operating Systems",
      description: "Focus on Linux (Kali, Ubuntu) and scripting with Bash, PowerShell, and Python."
    },
    {
      icon: Globe,
      title: "Web Security Basics",
      description: "Understand web technologies (HTML, CSS, JavaScript) and common vulnerabilities like SQLi and XSS."
    },
    {
      icon: Shield,
      title: "Ethical Hacking Techniques",
      description: "Practice reconnaissance, scanning, exploiting vulnerabilities, and covering tracks using tools like Metasploit."
    },
    {
      icon: Brain,
      title: "Advanced Topics",
      description: "Study reverse engineering, malware analysis, exploit development, and cloud security."
    },
    {
      icon: Award,
      title: "Certify Your Skills",
      description: "Pursue certifications like CEH, OSCP, or CISSP to validate expertise and advance your career."
    },
    {
      icon: Target,
      title: "Practice Regularly",
      description: "Engage with hands-on platforms like TryHackMe, Hack The Box, and Bug Bounty programs."
    },
    {
      icon: RefreshCw,
      title: "Stay Updated",
      description: "Follow cybersecurity blogs, forums, and attend conferences to keep up with the latest trends and threats."
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => (
        <RoadmapStep
          key={index}
          icon={step.icon}
          title={step.title}
          description={step.description}
          number={index + 1}
        />
      ))}
    </div>
  );
}
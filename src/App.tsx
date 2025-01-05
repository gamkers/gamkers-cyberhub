
import Navbar from './components/navigation/Navbar';
import Hero from './components/Hero';
import Introduction from './components/introduction/Introduction';
import NetworkingSection from './components/networking/NetworkingSection';
import OSScriptingSection from './components/os-scripting/OSScriptingSection';
import WebSecuritySection from './components/web-security/WebSecuritySection';
import EthicalHackingSection from './components/ethical-hacking/EthicalHackingSection';
import NetworkSecuritySection from './components/network-security/NetworkSecuritySection';
import MalwareAnalysisSection from './components/malware-analysis/MalwareAnalysisSection';
import ComputerFundamentals from './components/fundamentals/ComputerFundamentals';
import AboutUs from './components/about/AboutUs';
import Courses from './components/courses/Courses';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <AboutUs />
      <Courses />
      <Introduction />
      <ComputerFundamentals />
      <NetworkingSection />
      <OSScriptingSection />
      <WebSecuritySection />
      <EthicalHackingSection />
      <NetworkSecuritySection />
      <MalwareAnalysisSection />
      
    </div>
  );
}

export default App;

import OperatingSystems from './OperatingSystems';
import ScriptingLanguages from './ScriptingLanguages';
import LearningResources from './LearningResources';

export default function OSScriptingSection() {
  return (
    <section id="os-scripting" className="py-20 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Operating Systems & Scripting</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400">Master the tools and languages for system automation</p>
        </div>
        <div className="space-y-16">
          <OperatingSystems />
          <ScriptingLanguages />
          <LearningResources />
        </div>
      </div>
    </section>
  );
}
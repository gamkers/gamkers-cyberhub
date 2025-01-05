
import CourseCard from './CourseCard';

export default function Courses() {
  const bootcampFeatures = [
    "Comprehensive Python Programming",
    "Ethical Hacking Fundamentals",
    "Real-world Projects",
    "24/7 Support",
    "Lifetime Access",
    "Certificate of Completion"
  ];

  return (
    <section id="courses" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Bootcamp Courses</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400">Get Two Comprehensive Courses in One Bootcamp</p>
        </div>

        <div className="max-w-lg mx-auto">
          <CourseCard
            title="Master Python and Ethical Hacking"
            description="Learn by Building Real Tools! Start your journey into cybersecurity with our comprehensive bootcamp."
            price={{
              current: 499,
              original: 1000
            }}
            features={bootcampFeatures}
          />
        </div>
      </div>
    </section>
  );
}
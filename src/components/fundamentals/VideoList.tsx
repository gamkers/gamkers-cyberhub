import  { useRef } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

export default function VideoList() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const videos = [
    { title: "Computer Types and Parts", id: "VbDrWHkOLro" },
    { title: "Motherboards", id: "5AqK29t3fXA" },
    { title: "Processors (CPU)", id: "VlOeLfV-ATA" },
    { title: "Random Access Memory (RAM)", id: "zqbq7OJgheo" },
    { title: "Storage Devices", id: "MIsETwOqmHQ" }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <button 
          onClick={() => scroll('left')}
          className="p-2 rounded-full bg-black/80 text-green-500 hover:bg-black hover:text-green-400 transition-all"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {videos.map((video, index) => (
          <div key={index} className="flex-none w-[400px]">
            <div className="p-4 rounded-lg card-gradient border border-gray-800 hover:glow-green transition-all duration-300">
              <div className="aspect-video mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Play className="h-4 w-4 text-green-500" />
                {video.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <button 
          onClick={() => scroll('right')}
          className="p-2 rounded-full bg-black/80 text-green-500 hover:bg-black hover:text-green-400 transition-all"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

import { Book, Globe } from 'lucide-react';

export default function ResourceLinks() {
  const books = [
    {
      title: "Computer Science Distilled",
      author: "Wladston Ferreira Filho",
      description: "A concise guide to the essential concepts in computer science."
    },
    {
      title: "How Computers Work",
      author: "Ron White",
      description: "A visual and comprehensive guide to understanding how computers operate."
    }
  ];

  const websites = [
    {
      title: "CompTIA IT Fundamentals+",
      url: "https://www.comptia.org",
      description: "Structured IT learning pathways"
    },
    {
      title: "Khan Academy - Computer Science",
      url: "https://www.khanacademy.org/computing/computer-science",
      description: "Free courses on computer science fundamentals"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Book className="h-5 w-5 text-green-500" />
          Recommended Books
        </h4>
        <div className="space-y-4">
          {books.map((book, index) => (
            <div key={index} className="p-4 rounded-lg card-gradient border border-gray-800">
              <h5 className="text-lg font-medium text-white mb-1">{book.title}</h5>
              <p className="text-sm text-green-400 mb-2">by {book.author}</p>
              <p className="text-gray-400 text-sm">{book.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Globe className="h-5 w-5 text-green-500" />
          Online Resources
        </h4>
        <div className="space-y-4">
          {websites.map((site, index) => (
            <a
              key={index}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg card-gradient border border-gray-800 hover:glow-green transition-all duration-300"
            >
              <h5 className="text-lg font-medium text-white mb-1">{site.title}</h5>
              <p className="text-gray-400 text-sm">{site.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
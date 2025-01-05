
import { Network, Lock, Mail, FileDown, Terminal } from 'lucide-react';

const protocols = [
  {
    icon: Network,
    name: 'TCP/IP',
    description: 'Core internet protocols for data transmission and routing'
  },
  {
    icon: Lock,
    name: 'HTTP/HTTPS',
    description: 'Web protocols for secure data transfer between client and server'
  },
  {
    icon: Mail,
    name: 'SMTP/POP/IMAP',
    description: 'Email protocols for sending and receiving messages'
  },
  {
    icon: FileDown,
    name: 'FTP/SFTP',
    description: 'File transfer protocols for uploading and downloading files'
  },
  {
    icon: Terminal,
    name: 'SSH',
    description: 'Secure Shell protocol for encrypted remote system administration'
  }
];

export default function ProtocolsList() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-8">Essential Network Protocols</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {protocols.map((protocol, index) => {
          const Icon = protocol.icon;
          return (
            <div key={index} className="p-6 rounded-lg card-gradient border border-gray-800 hover:glow-green transition-all duration-300">
              <Icon className="h-8 w-8 text-green-500 mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">{protocol.name}</h4>
              <p className="text-gray-400">{protocol.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
import { Camera, AlertTriangle, MapPin } from 'lucide-react';

interface VideoPlayerProps {
  id: string;
  name: string;
  location: string;
  status: string;
  streamUrl: string;
  alerts: string[];
  quality: string;
}

export default function VideoPlayer({
  id,
  name,
  location,
  status,
  streamUrl,
  alerts,
  quality,
}: VideoPlayerProps) {
  const isOffline = status === 'Offline';

  return (
    <div className="bg-dark-800 border border-neon-cyan/20 rounded-lg overflow-hidden hover:border-neon-cyan/50 transition-all">
      <div className="aspect-video bg-dark-900 relative">
        {isOffline ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Camera className="w-16 h-16 text-gray-600 mb-2" />
            <p className="text-gray-500 font-medium">Camera Offline</p>
          </div>
        ) : (
          <video
            className="w-full h-full object-cover"
            controls
            muted
            loop
            autoPlay
          >
            <source src={streamUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {!isOffline && alerts.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-col space-y-1">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className="bg-neon-red/90 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 animate-pulse"
              >
                <AlertTriangle className="w-3 h-3" />
                <span>{alert}</span>
              </div>
            ))}
          </div>
        )}

        <div className="absolute bottom-2 left-2 bg-dark-900/90 px-3 py-1 rounded-full text-xs font-medium text-neon-cyan border border-neon-cyan/30">
          {quality}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-white font-bold text-sm">{name}</h3>
            <p className="text-gray-400 text-xs font-mono mt-1">{id}</p>
          </div>
          <div className={`px-2 py-1 rounded text-xs font-medium ${
            isOffline ? 'bg-gray-700 text-gray-400' : 'bg-neon-green/20 text-neon-green'
          }`}>
            {status}
          </div>
        </div>

        <div className="flex items-center space-x-2 text-gray-400 text-xs">
          <MapPin className="w-3 h-3" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}

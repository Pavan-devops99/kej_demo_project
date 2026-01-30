import { useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import mockCCTV from '../data/mockCCTV.json';
import { Camera, Grid, List } from 'lucide-react';

type ViewMode = 'grid' | 'list';

export default function CCTV() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredCameras = mockCCTV.filter(
    (camera) => statusFilter === 'All' || camera.status === statusFilter
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">CCTV Surveillance</h1>
          <p className="text-gray-400">Live camera feeds and incident monitoring</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-dark-800 border border-neon-cyan/30 rounded-lg p-4">
          <h3 className="text-gray-400 text-sm mb-1">Total Cameras</h3>
          <p className="text-3xl font-bold text-neon-cyan">{mockCCTV.length}</p>
        </div>
        <div className="bg-dark-800 border border-neon-green/30 rounded-lg p-4">
          <h3 className="text-gray-400 text-sm mb-1">Online</h3>
          <p className="text-3xl font-bold text-neon-green">
            {mockCCTV.filter((c) => c.status === 'Active').length}
          </p>
        </div>
        <div className="bg-dark-800 border border-neon-red/30 rounded-lg p-4">
          <h3 className="text-gray-400 text-sm mb-1">Alerts</h3>
          <p className="text-3xl font-bold text-neon-red">
            {mockCCTV.filter((c) => c.alerts.length > 0).length}
          </p>
        </div>
      </div>

      <div className="bg-dark-800 border border-neon-cyan/20 rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mb-6">
          <div className="flex items-center space-x-2">
            <Camera className="w-5 h-5 text-neon-cyan" />
            <h2 className="text-xl font-bold text-white">Camera Feeds</h2>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <button
                onClick={() => setStatusFilter('All')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  statusFilter === 'All'
                    ? 'bg-neon-cyan text-dark-900'
                    : 'bg-dark-700 text-gray-400 hover:text-neon-cyan'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setStatusFilter('Active')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  statusFilter === 'Active'
                    ? 'bg-neon-green text-dark-900'
                    : 'bg-dark-700 text-gray-400 hover:text-neon-green'
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setStatusFilter('Offline')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  statusFilter === 'Offline'
                    ? 'bg-gray-600 text-white'
                    : 'bg-dark-700 text-gray-400 hover:text-gray-300'
                }`}
              >
                Offline
              </button>
            </div>

            <div className="h-8 w-px bg-dark-700"></div>

            <div className="flex space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid'
                    ? 'bg-neon-cyan text-dark-900'
                    : 'bg-dark-700 text-gray-400 hover:text-neon-cyan'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'list'
                    ? 'bg-neon-cyan text-dark-900'
                    : 'bg-dark-700 text-gray-400 hover:text-neon-cyan'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
              : 'space-y-4'
          }
        >
          {filteredCameras.map((camera) => (
            <VideoPlayer
              key={camera.id}
              id={camera.id}
              name={camera.name}
              location={camera.location}
              status={camera.status}
              streamUrl={camera.streamUrl}
              alerts={camera.alerts}
              quality={camera.quality}
            />
          ))}
        </div>

        {filteredCameras.length === 0 && (
          <div className="flex items-center justify-center h-64 text-gray-400">
            <p>No cameras match the selected filter</p>
          </div>
        )}
      </div>
    </div>
  );
}

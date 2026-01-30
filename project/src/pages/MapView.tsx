import { useState } from 'react';
import CityMap from '../components/CityMap';
import mockIncidents from '../data/mockIncidents.json';
import mockSensors from '../data/mockSensors.json';
import { Layers, MapPin, Radio } from 'lucide-react';

type LayerType = 'incidents' | 'sensors' | 'all';

export default function MapView() {
  const [activeLayer, setActiveLayer] = useState<LayerType>('all');

  const incidentMarkers = mockIncidents.map((incident) => ({
    id: incident.id,
    coordinates: incident.coordinates as [number, number],
    type: incident.type,
    severity: incident.severity,
    status: incident.status,
    popup: `
      <div class="p-2">
        <h3 class="font-bold text-white mb-2">${incident.type}</h3>
        <p class="text-gray-300 text-sm mb-1">${incident.location}</p>
        <p class="text-sm mb-1"><strong>Severity:</strong> ${incident.severity}</p>
        <p class="text-sm mb-1"><strong>Status:</strong> ${incident.status}</p>
        <p class="text-sm"><strong>Affected:</strong> ${incident.affectedPopulation} people</p>
      </div>
    `,
  }));

  const sensorMarkers = mockSensors
    .filter((s) => s.status === 'Alert')
    .map((sensor) => ({
      id: sensor.id,
      coordinates: sensor.coordinates as [number, number],
      type: sensor.type,
      severity: sensor.alertLevel,
      status: sensor.status,
      popup: `
      <div class="p-2">
        <h3 class="font-bold text-white mb-2">${sensor.type} Sensor</h3>
        <p class="text-gray-300 text-sm mb-1">${sensor.location}</p>
        <p class="text-sm mb-1"><strong>Value:</strong> ${sensor.currentValue} ${sensor.unit}</p>
        <p class="text-sm mb-1"><strong>Threshold:</strong> ${sensor.threshold} ${sensor.unit}</p>
        <p class="text-sm"><strong>Alert:</strong> ${sensor.alertLevel}</p>
      </div>
    `,
    }));

  const markers =
    activeLayer === 'incidents'
      ? incidentMarkers
      : activeLayer === 'sensors'
      ? sensorMarkers
      : [...incidentMarkers, ...sensorMarkers];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Interactive Map</h1>
          <p className="text-gray-400">Geospatial visualization of incidents and sensors</p>
        </div>
      </div>

      <div className="bg-dark-800 border border-neon-cyan/20 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Layers className="w-5 h-5 text-neon-cyan" />
            <h2 className="text-xl font-bold text-white">Map Layers</h2>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setActiveLayer('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeLayer === 'all'
                  ? 'bg-neon-cyan text-dark-900'
                  : 'bg-dark-700 text-gray-400 hover:text-neon-cyan'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveLayer('incidents')}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 ${
                activeLayer === 'incidents'
                  ? 'bg-neon-red text-white'
                  : 'bg-dark-700 text-gray-400 hover:text-neon-red'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Incidents</span>
            </button>
            <button
              onClick={() => setActiveLayer('sensors')}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 ${
                activeLayer === 'sensors'
                  ? 'bg-neon-purple text-white'
                  : 'bg-dark-700 text-gray-400 hover:text-neon-purple'
              }`}
            >
              <Radio className="w-4 h-4" />
              <span>Sensors</span>
            </button>
          </div>
        </div>

        <CityMap markers={markers} height="700px" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-dark-700 border border-neon-red/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-bold">Active Incidents</h3>
              <div className="w-3 h-3 bg-neon-red rounded-full animate-pulse"></div>
            </div>
            <p className="text-3xl font-bold text-neon-red">
              {mockIncidents.filter((i) => i.status === 'Active').length}
            </p>
            <p className="text-gray-400 text-sm mt-1">
              {mockIncidents.filter((i) => i.severity === 'Critical').length} Critical
            </p>
          </div>

          <div className="bg-dark-700 border border-neon-orange/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-bold">Sensor Alerts</h3>
              <div className="w-3 h-3 bg-neon-orange rounded-full"></div>
            </div>
            <p className="text-3xl font-bold text-neon-orange">
              {mockSensors.filter((s) => s.status === 'Alert').length}
            </p>
            <p className="text-gray-400 text-sm mt-1">
              {mockSensors.filter((s) => s.alertLevel === 'Critical').length} Critical
            </p>
          </div>

          <div className="bg-dark-700 border border-neon-cyan/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-bold">Coverage Area</h3>
              <div className="w-3 h-3 bg-neon-cyan rounded-full"></div>
            </div>
            <p className="text-3xl font-bold text-neon-cyan">95%</p>
            <p className="text-gray-400 text-sm mt-1">City-wide monitoring</p>
          </div>
        </div>
      </div>
    </div>
  );
}

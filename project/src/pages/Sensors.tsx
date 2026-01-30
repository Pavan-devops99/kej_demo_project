import { useState } from 'react';
import SensorCard from '../components/SensorCard';
import mockSensors from '../data/mockSensors.json';
import mockTimeseries from '../data/mockTimeseries.json';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Radio, TrendingUp, X } from 'lucide-react';

export default function Sensors() {
  const [selectedSensor, setSelectedSensor] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredSensors = mockSensors.filter(
    (sensor) => filterStatus === 'All' || sensor.status === filterStatus
  );

  const selectedSensorData = selectedSensor
    ? mockSensors.find((s) => s.id === selectedSensor)
    : null;

  const timeseriesData = selectedSensor && mockTimeseries[selectedSensor as keyof typeof mockTimeseries]
    ? mockTimeseries[selectedSensor as keyof typeof mockTimeseries].map((point: { timestamp: string; value: number }) => ({
        time: new Date(point.timestamp).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        }),
        value: point.value,
      }))
    : [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Sensor Network</h1>
          <p className="text-gray-400">Monitor environmental and infrastructure sensors</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-dark-800 border border-neon-cyan/30 rounded-lg p-4">
          <h3 className="text-gray-400 text-sm mb-1">Total Sensors</h3>
          <p className="text-3xl font-bold text-neon-cyan">{mockSensors.length}</p>
        </div>
        <div className="bg-dark-800 border border-neon-green/30 rounded-lg p-4">
          <h3 className="text-gray-400 text-sm mb-1">Active</h3>
          <p className="text-3xl font-bold text-neon-green">
            {mockSensors.filter((s) => s.status === 'Active').length}
          </p>
        </div>
        <div className="bg-dark-800 border border-neon-red/30 rounded-lg p-4">
          <h3 className="text-gray-400 text-sm mb-1">Alerts</h3>
          <p className="text-3xl font-bold text-neon-red">
            {mockSensors.filter((s) => s.status === 'Alert').length}
          </p>
        </div>
        <div className="bg-dark-800 border border-neon-orange/30 rounded-lg p-4">
          <h3 className="text-gray-400 text-sm mb-1">Critical</h3>
          <p className="text-3xl font-bold text-neon-orange">
            {mockSensors.filter((s) => s.alertLevel === 'Critical').length}
          </p>
        </div>
      </div>

      {selectedSensorData && (
        <div className="bg-dark-800 border border-neon-cyan/20 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-6 h-6 text-neon-cyan" />
              <div>
                <h2 className="text-xl font-bold text-white">
                  {selectedSensorData.type} Sensor Trend
                </h2>
                <p className="text-gray-400 text-sm">{selectedSensorData.id}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedSensor(null)}
              className="text-gray-400 hover:text-neon-red transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {timeseriesData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={timeseriesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2d2d44" />
                <XAxis dataKey="time" stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1a1a24',
                    border: '1px solid rgba(0, 255, 255, 0.3)',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: '#ffffff' }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#00ffff"
                  strokeWidth={2}
                  dot={{ fill: '#00ffff', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-[300px] flex items-center justify-center text-gray-400">
              <p>No timeseries data available for this sensor</p>
            </div>
          )}
        </div>
      )}

      <div className="bg-dark-800 border border-neon-cyan/20 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Radio className="w-5 h-5 text-neon-cyan" />
            <h2 className="text-xl font-bold text-white">Sensor Grid</h2>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setFilterStatus('All')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filterStatus === 'All'
                  ? 'bg-neon-cyan text-dark-900'
                  : 'bg-dark-700 text-gray-400 hover:text-neon-cyan'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterStatus('Active')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filterStatus === 'Active'
                  ? 'bg-neon-green text-dark-900'
                  : 'bg-dark-700 text-gray-400 hover:text-neon-green'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setFilterStatus('Alert')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filterStatus === 'Alert'
                  ? 'bg-neon-red text-white'
                  : 'bg-dark-700 text-gray-400 hover:text-neon-red'
              }`}
            >
              Alert
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSensors.map((sensor) => (
            <SensorCard
              key={sensor.id}
              sensor={sensor}
              onClick={() => setSelectedSensor(sensor.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

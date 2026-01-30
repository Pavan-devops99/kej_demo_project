import { Activity, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface Sensor {
  id: string;
  type: string;
  location: string;
  status: string;
  currentValue: number;
  unit: string;
  threshold: number;
  lastUpdate: string;
  alertLevel: string;
}

interface SensorCardProps {
  sensor: Sensor;
  onClick?: () => void;
}

const alertColors = {
  Critical: {
    bg: 'from-neon-red/20 to-dark-800',
    border: 'border-neon-red/30',
    text: 'text-neon-red',
  },
  High: {
    bg: 'from-neon-orange/20 to-dark-800',
    border: 'border-neon-orange/30',
    text: 'text-neon-orange',
  },
  Normal: {
    bg: 'from-neon-green/20 to-dark-800',
    border: 'border-neon-green/30',
    text: 'text-neon-green',
  },
};

export default function SensorCard({ sensor, onClick }: SensorCardProps) {
  const colors = alertColors[sensor.alertLevel as keyof typeof alertColors] || alertColors.Normal;
  const isAlert = sensor.alertLevel !== 'Normal';

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const percentage = Math.min((sensor.currentValue / sensor.threshold) * 100, 100);

  return (
    <div
      onClick={onClick}
      className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <Activity className={`w-5 h-5 ${colors.text}`} />
            <h3 className="text-white font-bold">{sensor.type}</h3>
          </div>
          <p className="text-gray-400 text-sm">{sensor.id}</p>
        </div>
        {isAlert ? (
          <AlertTriangle className={`w-6 h-6 ${colors.text} animate-pulse`} />
        ) : (
          <CheckCircle className={`w-6 h-6 ${colors.text}`} />
        )}
      </div>

      <div className="mb-4">
        <div className="flex items-end space-x-2 mb-2">
          <span className="text-white text-4xl font-bold">{sensor.currentValue}</span>
          <span className="text-gray-400 text-lg mb-1">{sensor.unit}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Threshold: {sensor.threshold} {sensor.unit}</span>
          <span className={`font-medium ${colors.text}`}>
            {percentage.toFixed(0)}%
          </span>
        </div>
        <div className="mt-2 h-2 bg-dark-700 rounded-full overflow-hidden">
          <div
            className={`h-full ${colors.bg} transition-all`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Location:</span>
          <span className="text-white">{sensor.location.split(',')[0]}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Status:</span>
          <span className={`${colors.text} font-medium`}>{sensor.status}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-400">
          <Clock className="w-4 h-4" />
          <span>Updated: {formatDate(sensor.lastUpdate)}</span>
        </div>
      </div>

      {isAlert && (
        <div className={`mt-4 px-3 py-2 rounded ${colors.bg} border ${colors.border}`}>
          <p className={`text-xs font-medium ${colors.text}`}>
            Alert: Value exceeds threshold by {((sensor.currentValue - sensor.threshold) / sensor.threshold * 100).toFixed(1)}%
          </p>
        </div>
      )}
    </div>
  );
}

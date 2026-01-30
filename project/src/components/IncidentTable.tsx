import { AlertCircle, Clock, MapPin, Users } from 'lucide-react';

interface Incident {
  id: string;
  type: string;
  severity: string;
  status: string;
  location: string;
  reportedAt: string;
  assignedTo: string;
  affectedPopulation: number;
}

interface IncidentTableProps {
  incidents: Incident[];
  onIncidentClick?: (incident: Incident) => void;
}

const severityColors = {
  Critical: 'text-neon-red border-neon-red bg-neon-red/10',
  High: 'text-neon-orange border-neon-orange bg-neon-orange/10',
  Medium: 'text-neon-yellow border-neon-yellow bg-neon-yellow/10',
  Low: 'text-neon-blue border-neon-blue bg-neon-blue/10',
};

const statusColors = {
  Active: 'text-neon-red bg-neon-red/10',
  Pending: 'text-neon-yellow bg-neon-yellow/10',
  Resolved: 'text-neon-green bg-neon-green/10',
};

export default function IncidentTable({ incidents, onIncidentClick }: IncidentTableProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="bg-dark-800 border border-neon-cyan/20 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neon-cyan/20">
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Severity
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Reported
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Affected
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-700">
            {incidents.map((incident) => (
              <tr
                key={incident.id}
                onClick={() => onIncidentClick?.(incident)}
                className="hover:bg-dark-700 cursor-pointer transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-neon-cyan font-mono text-sm">{incident.id}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-gray-400" />
                    <span className="text-white">{incident.type}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      severityColors[incident.severity as keyof typeof severityColors]
                    }`}
                  >
                    {incident.severity}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      statusColors[incident.status as keyof typeof statusColors]
                    }`}
                  >
                    {incident.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{incident.location}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300 text-sm">{formatDate(incident.reportedAt)}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300 text-sm">{incident.affectedPopulation}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

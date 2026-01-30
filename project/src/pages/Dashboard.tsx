import { useEffect, useState } from 'react';
import { AlertCircle, Activity, TrendingUp, Clock, Radio, Brain } from 'lucide-react';
import KPICard from '../components/KPICard';
import CityMap from '../components/CityMap';
import mockInsights from '../data/mockInsights.json';
import mockIncidents from '../data/mockIncidents.json';

export default function Dashboard() {
  const [insights] = useState(mockInsights.insights);
  const [kpis] = useState(mockInsights.kpis);

  const mapMarkers = mockIncidents
    .filter((i) => i.status === 'Active')
    .map((incident) => ({
      id: incident.id,
      coordinates: incident.coordinates as [number, number],
      type: incident.type,
      severity: incident.severity,
      status: incident.status,
      popup: `<strong>${incident.type}</strong><br/>${incident.location}<br/>Severity: ${incident.severity}`,
    }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Command Dashboard</h1>
          <p className="text-gray-400">Real-time emergency response overview</p>
        </div>
        <div className="text-right">
          <p className="text-gray-400 text-sm">Last Updated</p>
          <p className="text-neon-cyan font-mono text-lg">
            {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <KPICard
          title="Active Incidents"
          value={kpis.activeIncidents}
          icon={AlertCircle}
          color="red"
          trend="up"
          trendValue="+2"
        />
        <KPICard
          title="Critical Alerts"
          value={kpis.criticalAlerts}
          icon={Activity}
          color="orange"
          trend="down"
          trendValue="-1"
        />
        <KPICard
          title="Sensors Critical"
          value={kpis.sensorsCritical}
          icon={Radio}
          color="cyan"
          trend="neutral"
          trendValue="0"
        />
        <KPICard
          title="Avg Response Time"
          value={kpis.responseTime}
          icon={Clock}
          color="blue"
          trend="down"
          trendValue="-1.2m"
        />
        <KPICard
          title="Resource Usage"
          value={`${kpis.resourceUtilization}%`}
          icon={TrendingUp}
          color="purple"
          trend="up"
          trendValue="+5%"
        />
        <KPICard
          title="AI Accuracy"
          value={`${kpis.aiPredictionAccuracy}%`}
          icon={Brain}
          color="green"
          trend="up"
          trendValue="+2%"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <div className="bg-dark-800 border border-neon-cyan/20 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Live Incident Map</h2>
            <CityMap markers={mapMarkers} height="500px" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-dark-800 border border-neon-cyan/20 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="w-6 h-6 text-neon-purple" />
              <h2 className="text-xl font-bold text-white">AI Insights</h2>
            </div>
            <div className="space-y-3 max-h-[460px] overflow-y-auto pr-2">
              {insights.slice(0, 3).map((insight) => (
                <div
                  key={insight.id}
                  className={`bg-dark-700 border rounded-lg p-4 ${
                    insight.priority === 'Critical'
                      ? 'border-neon-red/30'
                      : insight.priority === 'High'
                      ? 'border-neon-orange/30'
                      : 'border-neon-blue/30'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-bold text-sm">{insight.title}</h3>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        insight.priority === 'Critical'
                          ? 'bg-neon-red/20 text-neon-red'
                          : insight.priority === 'High'
                          ? 'bg-neon-orange/20 text-neon-orange'
                          : 'bg-neon-blue/20 text-neon-blue'
                      }`}
                    >
                      {insight.priority}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs mb-3">{insight.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-neon-cyan text-xs font-medium">
                      Confidence: {(insight.confidence * 100).toFixed(0)}%
                    </span>
                    <span className="text-gray-500 text-xs">
                      {new Date(insight.timestamp).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark-800 border border-neon-cyan/20 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {mockIncidents.slice(0, 5).map((incident) => (
            <div
              key={incident.id}
              className="flex items-center justify-between p-4 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`w-2 h-2 rounded-full ${
                    incident.severity === 'Critical'
                      ? 'bg-neon-red animate-pulse'
                      : incident.severity === 'High'
                      ? 'bg-neon-orange'
                      : 'bg-neon-blue'
                  }`}
                ></div>
                <div>
                  <p className="text-white font-medium">{incident.type} - {incident.location}</p>
                  <p className="text-gray-400 text-sm">
                    Reported {new Date(incident.reportedAt).toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    incident.status === 'Active'
                      ? 'bg-neon-red/20 text-neon-red'
                      : incident.status === 'Pending'
                      ? 'bg-neon-yellow/20 text-neon-yellow'
                      : 'bg-neon-green/20 text-neon-green'
                  }`}
                >
                  {incident.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

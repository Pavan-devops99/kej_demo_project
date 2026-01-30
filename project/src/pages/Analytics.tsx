import { BarChart3, TrendingUp, ExternalLink } from 'lucide-react';

export default function Analytics() {
  const powerBiUrl = import.meta.env.VITE_POWERBI_KEY || 'https://app.powerbi.com/view';

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Analytics & Reports</h1>
          <p className="text-gray-400">Advanced data visualization and insights</p>
        </div>
        <a
          href={powerBiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-900 font-bold py-2 px-6 rounded-lg hover:shadow-neon-cyan transition-all flex items-center space-x-2"
        >
          <ExternalLink className="w-5 h-5" />
          <span>Open in Power BI</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-dark-800 border border-neon-cyan/30 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-dark-700 border border-neon-cyan/30 rounded-lg">
              <TrendingUp className="w-6 h-6 text-neon-cyan" />
            </div>
            <div>
              <h3 className="text-white font-bold">Response Efficiency</h3>
              <p className="text-gray-400 text-sm">Last 30 days</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Avg Response Time</span>
              <span className="text-neon-cyan font-bold">8.5 min</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Resolution Rate</span>
              <span className="text-neon-green font-bold">94%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Resource Efficiency</span>
              <span className="text-neon-blue font-bold">87%</span>
            </div>
          </div>
        </div>

        <div className="bg-dark-800 border border-neon-purple/30 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-dark-700 border border-neon-purple/30 rounded-lg">
              <BarChart3 className="w-6 h-6 text-neon-purple" />
            </div>
            <div>
              <h3 className="text-white font-bold">Incident Trends</h3>
              <p className="text-gray-400 text-sm">Monthly breakdown</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Fire Incidents</span>
              <span className="text-neon-red font-bold">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Flood Events</span>
              <span className="text-neon-blue font-bold">8</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Other</span>
              <span className="text-neon-orange font-bold">15</span>
            </div>
          </div>
        </div>

        <div className="bg-dark-800 border border-neon-green/30 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-dark-700 border border-neon-green/30 rounded-lg">
              <TrendingUp className="w-6 h-6 text-neon-green" />
            </div>
            <div>
              <h3 className="text-white font-bold">AI Performance</h3>
              <p className="text-gray-400 text-sm">Prediction accuracy</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Pattern Detection</span>
              <span className="text-neon-green font-bold">92%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Risk Assessment</span>
              <span className="text-neon-green font-bold">89%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Early Warning</span>
              <span className="text-neon-green font-bold">85%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark-800 border border-neon-cyan/20 rounded-lg overflow-hidden">
        <div className="p-6 border-b border-neon-cyan/20">
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-neon-cyan" />
            <h2 className="text-xl font-bold text-white">Power BI Dashboard</h2>
          </div>
          <p className="text-gray-400 text-sm mt-1">
            Interactive reports and data visualization
          </p>
        </div>

        <div className="relative" style={{ height: '800px' }}>
          <iframe
            src={powerBiUrl}
            className="w-full h-full border-0"
            title="Power BI Analytics Dashboard"
            allowFullScreen
          />
          <div className="absolute inset-0 flex items-center justify-center bg-dark-900/80 pointer-events-none">
            <div className="text-center pointer-events-auto">
              <BarChart3 className="w-16 h-16 text-neon-cyan mx-auto mb-4" />
              <p className="text-white text-lg font-bold mb-2">Power BI Dashboard</p>
              <p className="text-gray-400 mb-4">Configure VITE_POWERBI_KEY to display analytics</p>
              <a
                href={powerBiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-neon-cyan text-dark-900 font-bold py-2 px-6 rounded-lg hover:shadow-neon-cyan transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Open External Dashboard</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-dark-800 border border-neon-cyan/20 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Report Generation</h2>
          <div className="space-y-3">
            <button className="w-full bg-dark-700 hover:bg-dark-600 border border-neon-cyan/30 text-white py-3 px-4 rounded-lg transition-all text-left">
              <div className="flex items-center justify-between">
                <span className="font-medium">Daily Incident Report</span>
                <span className="text-neon-cyan text-sm">Generate →</span>
              </div>
            </button>
            <button className="w-full bg-dark-700 hover:bg-dark-600 border border-neon-cyan/30 text-white py-3 px-4 rounded-lg transition-all text-left">
              <div className="flex items-center justify-between">
                <span className="font-medium">Weekly Performance Summary</span>
                <span className="text-neon-cyan text-sm">Generate →</span>
              </div>
            </button>
            <button className="w-full bg-dark-700 hover:bg-dark-600 border border-neon-cyan/30 text-white py-3 px-4 rounded-lg transition-all text-left">
              <div className="flex items-center justify-between">
                <span className="font-medium">Monthly Analytics Report</span>
                <span className="text-neon-cyan text-sm">Generate →</span>
              </div>
            </button>
            <button className="w-full bg-dark-700 hover:bg-dark-600 border border-neon-cyan/30 text-white py-3 px-4 rounded-lg transition-all text-left">
              <div className="flex items-center justify-between">
                <span className="font-medium">Custom Date Range Report</span>
                <span className="text-neon-cyan text-sm">Generate →</span>
              </div>
            </button>
          </div>
        </div>

        <div className="bg-dark-800 border border-neon-cyan/20 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Export Options</h2>
          <div className="space-y-3">
            <button className="w-full bg-dark-700 hover:bg-dark-600 border border-neon-purple/30 text-white py-3 px-4 rounded-lg transition-all text-left">
              <div className="flex items-center justify-between">
                <span className="font-medium">Export as PDF</span>
                <span className="text-neon-purple text-sm">Download →</span>
              </div>
            </button>
            <button className="w-full bg-dark-700 hover:bg-dark-600 border border-neon-purple/30 text-white py-3 px-4 rounded-lg transition-all text-left">
              <div className="flex items-center justify-between">
                <span className="font-medium">Export as Excel</span>
                <span className="text-neon-purple text-sm">Download →</span>
              </div>
            </button>
            <button className="w-full bg-dark-700 hover:bg-dark-600 border border-neon-purple/30 text-white py-3 px-4 rounded-lg transition-all text-left">
              <div className="flex items-center justify-between">
                <span className="font-medium">Export as CSV</span>
                <span className="text-neon-purple text-sm">Download →</span>
              </div>
            </button>
            <button className="w-full bg-dark-700 hover:bg-dark-600 border border-neon-purple/30 text-white py-3 px-4 rounded-lg transition-all text-left">
              <div className="flex items-center justify-between">
                <span className="font-medium">Export as JSON</span>
                <span className="text-neon-purple text-sm">Download →</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

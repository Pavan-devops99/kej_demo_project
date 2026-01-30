import { useState } from 'react';
import { Settings as SettingsIcon, Bell, Shield, Database, Map, Cpu } from 'lucide-react';

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">System Settings</h1>
        <p className="text-gray-400">Configure application preferences and system parameters</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-dark-800 border border-neon-cyan/20 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Bell className="w-5 h-5 text-neon-cyan" />
            <h2 className="text-xl font-bold text-white">Notifications</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-dark-700 rounded-lg">
              <div>
                <h3 className="text-white font-medium">Push Notifications</h3>
                <p className="text-gray-400 text-sm">Receive alerts for critical incidents</p>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications ? 'bg-neon-cyan' : 'bg-dark-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-dark-700 rounded-lg">
              <div>
                <h3 className="text-white font-medium">Email Alerts</h3>
                <p className="text-gray-400 text-sm">Daily summary reports</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-neon-cyan">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-dark-700 rounded-lg">
              <div>
                <h3 className="text-white font-medium">SMS Alerts</h3>
                <p className="text-gray-400 text-sm">Emergency notifications only</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-neon-cyan">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-dark-800 border border-neon-cyan/20 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-6">
            <SettingsIcon className="w-5 h-5 text-neon-cyan" />
            <h2 className="text-xl font-bold text-white">General Settings</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-dark-700 rounded-lg">
              <div>
                <h3 className="text-white font-medium">Auto Refresh</h3>
                <p className="text-gray-400 text-sm">Update data every 30 seconds</p>
              </div>
              <button
                onClick={() => setAutoRefresh(!autoRefresh)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  autoRefresh ? 'bg-neon-cyan' : 'bg-dark-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    autoRefresh ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-dark-700 rounded-lg">
              <div>
                <h3 className="text-white font-medium">Dark Mode</h3>
                <p className="text-gray-400 text-sm">Optimize for night viewing</p>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  darkMode ? 'bg-neon-cyan' : 'bg-dark-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="p-4 bg-dark-700 rounded-lg">
              <h3 className="text-white font-medium mb-2">Language</h3>
              <select className="w-full px-4 py-2 bg-dark-600 border border-neon-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan">
                <option>English (US)</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-dark-800 border border-neon-cyan/20 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Map className="w-5 h-5 text-neon-cyan" />
            <h2 className="text-xl font-bold text-white">Map Configuration</h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-dark-700 rounded-lg">
              <h3 className="text-white font-medium mb-2">Default Map Style</h3>
              <select className="w-full px-4 py-2 bg-dark-600 border border-neon-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan">
                <option>Dark Theme</option>
                <option>Light Theme</option>
                <option>Satellite</option>
                <option>Terrain</option>
              </select>
            </div>

            <div className="p-4 bg-dark-700 rounded-lg">
              <h3 className="text-white font-medium mb-2">Mapbox API Key</h3>
              <input
                type="text"
                placeholder="Enter API key"
                className="w-full px-4 py-2 bg-dark-600 border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
              />
              <p className="text-gray-400 text-xs mt-2">
                Used for map tiles and geocoding services
              </p>
            </div>

            <div className="p-4 bg-dark-700 rounded-lg">
              <h3 className="text-white font-medium mb-2">Default Zoom Level</h3>
              <input
                type="range"
                min="1"
                max="20"
                defaultValue="12"
                className="w-full"
              />
              <div className="flex justify-between text-gray-400 text-xs mt-1">
                <span>City</span>
                <span>Street</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dark-800 border border-neon-cyan/20 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Cpu className="w-5 h-5 text-neon-cyan" />
            <h2 className="text-xl font-bold text-white">AI Configuration</h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-dark-700 rounded-lg">
              <h3 className="text-white font-medium mb-2">Prediction Sensitivity</h3>
              <input
                type="range"
                min="1"
                max="100"
                defaultValue="75"
                className="w-full"
              />
              <div className="flex justify-between text-gray-400 text-xs mt-1">
                <span>Conservative</span>
                <span>Aggressive</span>
              </div>
            </div>

            <div className="p-4 bg-dark-700 rounded-lg">
              <h3 className="text-white font-medium mb-2">Model Version</h3>
              <select className="w-full px-4 py-2 bg-dark-600 border border-neon-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan">
                <option>v2.5 (Latest)</option>
                <option>v2.4 (Stable)</option>
                <option>v2.3 (Legacy)</option>
              </select>
            </div>

            <div className="flex items-center justify-between p-4 bg-dark-700 rounded-lg">
              <div>
                <h3 className="text-white font-medium">Auto-learning</h3>
                <p className="text-gray-400 text-sm">Improve predictions over time</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-neon-cyan">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-dark-800 border border-neon-cyan/20 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Database className="w-5 h-5 text-neon-cyan" />
            <h2 className="text-xl font-bold text-white">Data Management</h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-dark-700 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-medium">Storage Usage</h3>
                <span className="text-neon-cyan font-bold">67%</span>
              </div>
              <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-neon-cyan to-neon-blue w-2/3"></div>
              </div>
              <p className="text-gray-400 text-xs mt-2">2.1 GB of 3.0 GB used</p>
            </div>

            <button className="w-full bg-dark-700 hover:bg-dark-600 border border-neon-cyan/30 text-white py-3 px-4 rounded-lg transition-all">
              <div className="flex items-center justify-between">
                <span className="font-medium">Clear Cache</span>
                <span className="text-neon-cyan text-sm">Clean →</span>
              </div>
            </button>

            <button className="w-full bg-dark-700 hover:bg-dark-600 border border-neon-red/30 text-white py-3 px-4 rounded-lg transition-all">
              <div className="flex items-center justify-between">
                <span className="font-medium">Export All Data</span>
                <span className="text-neon-red text-sm">Download →</span>
              </div>
            </button>
          </div>
        </div>

        <div className="bg-dark-800 border border-neon-cyan/20 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Shield className="w-5 h-5 text-neon-cyan" />
            <h2 className="text-xl font-bold text-white">Security</h2>
          </div>

          <div className="space-y-4">
            <button className="w-full bg-dark-700 hover:bg-dark-600 border border-neon-cyan/30 text-white py-3 px-4 rounded-lg transition-all text-left">
              <div className="flex items-center justify-between">
                <span className="font-medium">Change Password</span>
                <span className="text-neon-cyan text-sm">Update →</span>
              </div>
            </button>

            <button className="w-full bg-dark-700 hover:bg-dark-600 border border-neon-cyan/30 text-white py-3 px-4 rounded-lg transition-all text-left">
              <div className="flex items-center justify-between">
                <span className="font-medium">Two-Factor Authentication</span>
                <span className="text-neon-green text-sm">Enabled ✓</span>
              </div>
            </button>

            <button className="w-full bg-dark-700 hover:bg-dark-600 border border-neon-cyan/30 text-white py-3 px-4 rounded-lg transition-all text-left">
              <div className="flex items-center justify-between">
                <span className="font-medium">Session Management</span>
                <span className="text-neon-cyan text-sm">View →</span>
              </div>
            </button>

            <button className="w-full bg-dark-700 hover:bg-dark-600 border border-neon-cyan/30 text-white py-3 px-4 rounded-lg transition-all text-left">
              <div className="flex items-center justify-between">
                <span className="font-medium">API Keys</span>
                <span className="text-neon-cyan text-sm">Manage →</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button className="px-6 py-2 bg-dark-700 text-gray-400 rounded-lg hover:bg-dark-600 transition-all">
          Reset to Defaults
        </button>
        <button className="px-6 py-2 bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-900 font-bold rounded-lg hover:shadow-neon-cyan transition-all">
          Save Changes
        </button>
      </div>
    </div>
  );
}

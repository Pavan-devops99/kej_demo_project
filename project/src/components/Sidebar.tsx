import {
  LayoutDashboard,
  Map,
  AlertCircle,
  Radio,
  Camera,
  BarChart3,
  Settings
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Map, label: 'Map View', path: '/map' },
  { icon: AlertCircle, label: 'Incidents', path: '/incidents' },
  { icon: Radio, label: 'Sensors', path: '/sensors' },
  { icon: Camera, label: 'CCTV', path: '/cctv' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-dark-800 border-r border-neon-cyan/20 min-h-screen sticky top-16">
      <div className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 shadow-neon-cyan'
                  : 'text-gray-400 hover:text-neon-cyan hover:bg-dark-700'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>

      <div className="p-4 mt-8">
        <div className="bg-dark-700 border border-neon-blue/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">System Status</span>
            <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
          </div>
          <p className="text-white text-lg font-bold">Operational</p>
          <p className="text-gray-400 text-xs mt-1">All systems online</p>
        </div>
      </div>
    </aside>
  );
}

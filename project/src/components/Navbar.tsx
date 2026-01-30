import { Bell, User, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-dark-800 border-b border-neon-cyan/20 px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-lg flex items-center justify-center shadow-neon-cyan">
              <span className="text-dark-900 font-bold text-xl">AI</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">DisasterResponse</h1>
              <p className="text-gray-400 text-xs">AI-Powered Emergency System</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <Bell className="w-6 h-6 text-neon-cyan cursor-pointer hover:text-neon-blue transition-colors" />
            <span className="absolute -top-1 -right-1 bg-neon-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>

          <Link to="/settings">
            <Settings className="w-6 h-6 text-gray-400 cursor-pointer hover:text-neon-cyan transition-colors" />
          </Link>

          <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity">
            <User className="w-6 h-6 text-gray-400" />
            <div className="text-sm">
              <p className="text-white font-medium">Admin User</p>
              <p className="text-gray-400 text-xs">System Operator</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

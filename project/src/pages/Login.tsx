import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, Shield } from 'lucide-react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-neon-cyan/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-neon-blue/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-md w-full">
        <div className="bg-dark-800 border border-neon-cyan/30 rounded-2xl shadow-2xl p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-2xl flex items-center justify-center shadow-neon-cyan mb-4">
              <Shield className="w-10 h-10 text-dark-900" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">AI Disaster Response</h1>
            <p className="text-gray-400 text-center">Emergency Management System</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-400 mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-dark-700 border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-dark-700 border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-900 font-bold py-3 px-6 rounded-lg hover:shadow-neon-cyan transition-all flex items-center justify-center space-x-2"
            >
              <LogIn className="w-5 h-5" />
              <span>Sign In</span>
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-dark-700">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>Emergency Access: Contact System Administrator</p>
        </div>
      </div>
    </div>
  );
}

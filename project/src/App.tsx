import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import MapView from './pages/MapView';
import Incidents from './pages/Incidents';
import Sensors from './pages/Sensors';
import CCTV from './pages/CCTV';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <div className="min-h-screen bg-dark-900">
              <Navbar />
              <div className="flex">
                <Sidebar />
                <main className="flex-1 p-6">
                  <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/map" element={<MapView />} />
                    <Route path="/incidents" element={<Incidents />} />
                    <Route path="/sensors" element={<Sensors />} />
                    <Route path="/cctv" element={<CCTV />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </main>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

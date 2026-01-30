import { useState } from 'react';
import IncidentTable from '../components/IncidentTable';
import mockIncidents from '../data/mockIncidents.json';
import { Filter, Search, Download } from 'lucide-react';

export default function Incidents() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [severityFilter, setSeverityFilter] = useState('All');

  const filteredIncidents = mockIncidents.filter((incident) => {
    const matchesSearch =
      incident.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      incident.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      incident.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || incident.status === statusFilter;
    const matchesSeverity = severityFilter === 'All' || incident.severity === severityFilter;
    return matchesSearch && matchesStatus && matchesSeverity;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Incident Management</h1>
          <p className="text-gray-400">Track and manage emergency incidents</p>
        </div>
        <button className="bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-900 font-bold py-2 px-6 rounded-lg hover:shadow-neon-cyan transition-all flex items-center space-x-2">
          <Download className="w-5 h-5" />
          <span>Export Report</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-dark-800 border border-neon-red/30 rounded-lg p-4">
          <h3 className="text-gray-400 text-sm mb-1">Active</h3>
          <p className="text-3xl font-bold text-neon-red">
            {mockIncidents.filter((i) => i.status === 'Active').length}
          </p>
        </div>
        <div className="bg-dark-800 border border-neon-yellow/30 rounded-lg p-4">
          <h3 className="text-gray-400 text-sm mb-1">Pending</h3>
          <p className="text-3xl font-bold text-neon-yellow">
            {mockIncidents.filter((i) => i.status === 'Pending').length}
          </p>
        </div>
        <div className="bg-dark-800 border border-neon-green/30 rounded-lg p-4">
          <h3 className="text-gray-400 text-sm mb-1">Resolved</h3>
          <p className="text-3xl font-bold text-neon-green">
            {mockIncidents.filter((i) => i.status === 'Resolved').length}
          </p>
        </div>
        <div className="bg-dark-800 border border-neon-orange/30 rounded-lg p-4">
          <h3 className="text-gray-400 text-sm mb-1">Critical</h3>
          <p className="text-3xl font-bold text-neon-orange">
            {mockIncidents.filter((i) => i.severity === 'Critical').length}
          </p>
        </div>
      </div>

      <div className="bg-dark-800 border border-neon-cyan/20 rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mb-6">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-neon-cyan" />
            <h2 className="text-xl font-bold text-white">Filter Incidents</h2>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search incidents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-dark-700 border border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent w-full md:w-64"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 bg-dark-700 border border-neon-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Resolved">Resolved</option>
            </select>

            <select
              value={severityFilter}
              onChange={(e) => setSeverityFilter(e.target.value)}
              className="px-4 py-2 bg-dark-700 border border-neon-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent"
            >
              <option value="All">All Severity</option>
              <option value="Critical">Critical</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>

        <div className="mb-4 text-gray-400 text-sm">
          Showing {filteredIncidents.length} of {mockIncidents.length} incidents
        </div>

        <IncidentTable incidents={filteredIncidents} />
      </div>
    </div>
  );
}

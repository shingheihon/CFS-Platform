import React from 'react';
import { AlertCircle, TrendingUp, Users, FileText, Activity, MapPin } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: 'Active Incidents', value: '47', change: '+12%', icon: AlertCircle, color: 'text-red-400' },
    { label: 'Open Cases', value: '128', change: '+5%', icon: FileText, color: 'text-blue-400' },
    { label: 'Officers on Duty', value: '89', change: '-3%', icon: Users, color: 'text-emerald-400' },
    { label: 'AI Alerts', value: '23', change: '+18%', icon: Activity, color: 'text-yellow-400' }
  ];

  const recentIncidents = [
    { id: 'INC-2025-0421', type: 'Burglary', location: 'High Street, MidShire', priority: 'High', status: 'Dispatched', time: '14:32' },
    { id: 'INC-2025-0420', type: 'Traffic Collision', location: 'A40 Junction 5', priority: 'Medium', status: 'In Progress', time: '13:15' },
    { id: 'INC-2025-0419', type: 'Assault', location: 'Park Avenue', priority: 'High', status: 'Under Investigation', time: '12:48' },
    { id: 'INC-2025-0418', type: 'Theft', location: 'Shopping Centre', priority: 'Low', status: 'Resolved', time: '11:22' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Operational Dashboard</h1>
        <p className="text-slate-400">Real-time overview of MidShire Police operations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
              <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                {stat.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-400" />
            Recent Incidents
          </h2>
          <div className="space-y-3">
            {recentIncidents.map((incident) => (
              <div key={incident.id} className="bg-slate-900 border border-slate-700 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="text-white font-semibold">{incident.id}</div>
                    <div className="text-sm text-slate-400">{incident.type}</div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    incident.priority === 'High' ? 'bg-red-500/20 text-red-400' :
                    incident.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {incident.priority}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                  <MapPin className="w-4 h-4" />
                  {incident.location}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-emerald-400">{incident.status}</span>
                  <span className="text-slate-500">{incident.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            Crime Trends (Last 7 Days)
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-300">Burglary</span>
                <span className="text-white font-semibold">24</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-300">Theft</span>
                <span className="text-white font-semibold">18</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-300">Assault</span>
                <span className="text-white font-semibold">12</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-300">Traffic Violations</span>
                <span className="text-white font-semibold">31</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-lg font-semibold transition-colors">
            Register Incident
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg font-semibold transition-colors">
            Create Case
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg font-semibold transition-colors">
            Upload Evidence
          </button>
          <button className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-lg font-semibold transition-colors">
            Run AI Analysis
          </button>
        </div>
      </div>
    </div>
  );
}
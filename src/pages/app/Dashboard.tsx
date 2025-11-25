import React from 'react';
import { AlertCircle, TrendingUp, Users, FileText, Activity, MapPin } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: 'Active Incidents', value: '47', change: '+12%', icon: AlertCircle, color: 'text-red-500' },
    { label: 'Open Cases', value: '128', change: '+5%', icon: FileText, color: 'text-brand-blue' },
    { label: 'Officers on Duty', value: '89', change: '-3%', icon: Users, color: 'text-brand-yellow' },
    { label: 'AI Alerts', value: '23', change: '+18%', icon: Activity, color: 'text-orange-500' }
  ];

  const recentIncidents = [
    { id: 'INC-2025-0421', type: 'Burglary', location: 'Manchester M12345', priority: 'High', status: 'Dispatched', time: '14:32' },
    { id: 'INC-2025-0420', type: 'Traffic Collision', location: 'Manchester M12345', priority: 'Medium', status: 'In Progress', time: '13:15' },
    { id: 'INC-2025-0419', type: 'Assault', location: 'Manchester M12345', priority: 'High', status: 'Under Investigation', time: '12:48' },
    { id: 'INC-2025-0418', type: 'Theft', location: 'Manchester M12345', priority: 'Low', status: 'Resolved', time: '11:22' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Operational Dashboard</h1>
        <p className="text-slate-600">Real-time overview of MidShire Police operations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
              <span className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
            <div className="text-sm text-slate-500">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-500" />
            Recent Incidents
          </h2>
          <div className="space-y-3">
            {recentIncidents.map((incident) => (
              <div key={incident.id} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="text-slate-900 font-semibold">{incident.id}</div>
                    <div className="text-sm text-slate-500">{incident.type}</div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${incident.priority === 'High' ? 'bg-red-100 text-red-700' :
                    incident.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                    {incident.priority}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                  <MapPin className="w-4 h-4" />
                  {incident.location}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-brand-blue font-medium">{incident.status}</span>
                  <span className="text-slate-500">{incident.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-brand-blue" />
            Crime Trends (Last 7 Days)
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-600">Burglary</span>
                <span className="text-slate-900 font-semibold">24</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-600">Theft</span>
                <span className="text-slate-900 font-semibold">18</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-brand-yellow h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-600">Assault</span>
                <span className="text-slate-900 font-semibold">12</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-600">Traffic Violations</span>
                <span className="text-slate-900 font-semibold">31</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-brand-blue h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-blue p-4 rounded-lg font-semibold transition-colors">
            Register Incident
          </button>
          <button className="bg-brand-blue hover:bg-brand-blue/90 text-white p-4 rounded-lg font-semibold transition-colors">
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
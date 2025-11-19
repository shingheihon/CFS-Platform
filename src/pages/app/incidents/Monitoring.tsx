import React from 'react';
import { Activity, MapPin, Clock, Radio } from 'lucide-react';

export default function IncidentMonitoring() {
  const activeIncidents = [
    { id: 'INC-2025-0425', type: 'Armed Robbery', officer: 'PC Wilson', status: 'En Route', location: 'Bank Street', eta: '3 min', progress: 40 },
    { id: 'INC-2025-0424', type: 'Domestic Disturbance', officer: 'PC Thompson', status: 'On Scene', location: 'Oak Avenue', eta: 'Arrived', progress: 70 },
    { id: 'INC-2025-0423', type: 'Traffic Collision', officer: 'PC Brown', status: 'Investigating', location: 'A40 Junction', eta: 'Arrived', progress: 85 }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Incident Monitoring</h1>
        <p className="text-slate-400">Real-time tracking of active incidents and officer status</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div className="text-emerald-400 text-sm font-semibold mb-2">Active</div>
          <div className="text-3xl font-bold text-white">12</div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div className="text-blue-400 text-sm font-semibold mb-2">En Route</div>
          <div className="text-3xl font-bold text-white">5</div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div className="text-yellow-400 text-sm font-semibold mb-2">On Scene</div>
          <div className="text-3xl font-bold text-white">7</div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div className="text-purple-400 text-sm font-semibold mb-2">Resolved Today</div>
          <div className="text-3xl font-bold text-white">34</div>
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-emerald-400" />
          Live Incident Feed
        </h2>
        <div className="space-y-4">
          {activeIncidents.map((incident) => (
            <div key={incident.id} className="bg-slate-900 border border-slate-700 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-white font-semibold mb-1">{incident.id}</div>
                  <div className="text-slate-400 text-sm">{incident.type}</div>
                </div>
                <span className={`px-3 py-1 rounded text-xs font-semibold ${
                  incident.status === 'En Route' ? 'bg-blue-500/20 text-blue-400' :
                  incident.status === 'On Scene' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-purple-500/20 text-purple-400'
                }`}>
                  {incident.status}
                </span>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-3 text-sm">
                <div className="flex items-center gap-2 text-slate-400">
                  <Radio className="w-4 h-4" />
                  <span>{incident.officer}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span>{incident.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span>ETA: {incident.eta}</span>
                </div>
              </div>

              <div className="mb-2">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Progress</span>
                  <span>{incident.progress}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div 
                    className="bg-emerald-500 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${incident.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-sm font-semibold transition-colors">
                  View Details
                </button>
                <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded text-sm font-semibold transition-colors">
                  Contact Officer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Live Map View</h2>
        <div className="bg-slate-900 border border-slate-700 rounded-lg h-96 flex items-center justify-center text-slate-400">
          <div className="text-center">
            <MapPin className="w-16 h-16 mx-auto mb-4 text-slate-600" />
            <p>Interactive map showing officer locations and incident sites</p>
          </div>
        </div>
      </div>
    </div>
  );
}
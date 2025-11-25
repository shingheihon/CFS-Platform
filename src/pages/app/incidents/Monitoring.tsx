import React from 'react';
import { Activity, MapPin, Clock, Radio } from 'lucide-react';

export default function IncidentMonitoring() {
  const activeIncidents = [
    { id: 'INC-2025-0425', type: 'Armed Robbery', officer: 'PC Wilson', status: 'En Route', location: 'Manchester M12345', eta: '3 min', progress: 40 },
    { id: 'INC-2025-0424', type: 'Domestic Disturbance', officer: 'PC Thompson', status: 'On Scene', location: 'Manchester M12345', eta: 'Arrived', progress: 70 },
    { id: 'INC-2025-0423', type: 'Traffic Collision', officer: 'PC Brown', status: 'Investigating', location: 'Manchester M12345', eta: 'Arrived', progress: 85 }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Incident Monitoring</h1>
        <p className="text-slate-600">Real-time tracking of active incidents and officer status</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <div className="text-green-600 text-sm font-semibold mb-2">Active</div>
          <div className="text-3xl font-bold text-slate-900">12</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <div className="text-brand-blue text-sm font-semibold mb-2">En Route</div>
          <div className="text-3xl font-bold text-slate-900">5</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <div className="text-brand-yellow text-sm font-semibold mb-2">On Scene</div>
          <div className="text-3xl font-bold text-slate-900">7</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <div className="text-purple-600 text-sm font-semibold mb-2">Resolved Today</div>
          <div className="text-3xl font-bold text-slate-900">34</div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-green-600" />
          Live Incident Feed
        </h2>
        <div className="space-y-4">
          {activeIncidents.map((incident) => (
            <div key={incident.id} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-slate-900 font-semibold mb-1">{incident.id}</div>
                  <div className="text-slate-600 text-sm">{incident.type}</div>
                </div>
                <span className={`px-3 py-1 rounded text-xs font-semibold ${incident.status === 'En Route' ? 'bg-blue-100 text-blue-700' :
                  incident.status === 'On Scene' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                  {incident.status}
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-3 text-sm">
                <div className="flex items-center gap-2 text-slate-500">
                  <Radio className="w-4 h-4" />
                  <span>{incident.officer}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <MapPin className="w-4 h-4" />
                  <span>{incident.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Clock className="w-4 h-4" />
                  <span>ETA: {incident.eta}</span>
                </div>
              </div>

              <div className="mb-2">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>Progress</span>
                  <span>{incident.progress}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${incident.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <button className="flex-1 bg-brand-blue hover:bg-brand-blue/90 text-white px-3 py-1.5 rounded text-sm font-semibold transition-colors">
                  View Details
                </button>
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded text-sm font-semibold transition-colors">
                  Contact Officer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Live Map View</h2>
        <div className="bg-slate-50 border border-slate-200 rounded-lg h-96 flex items-center justify-center text-slate-400">
          <div className="text-center">
            <MapPin className="w-16 h-16 mx-auto mb-4 text-slate-300" />
            <p>Interactive map showing officer locations and incident sites</p>
          </div>
        </div>
      </div>
    </div>
  );
}
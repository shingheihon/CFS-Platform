import React from 'react';
import { Radio, MapPin, Users, Clock } from 'lucide-react';

export default function IncidentDispatch() {
  const availableOfficers = [
    { id: 'OFF-4521', name: 'PC James Wilson', status: 'Available', location: 'Sector A', distance: '1.2 km' },
    { id: 'OFF-4522', name: 'PC Emma Thompson', status: 'Available', location: 'Sector B', distance: '2.8 km' },
    { id: 'OFF-4523', name: 'PC David Brown', status: 'On Break', location: 'Station', distance: '4.1 km' },
    { id: 'OFF-4524', name: 'PC Sarah Davis', status: 'Available', location: 'Sector C', distance: '3.5 km' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Incident Dispatch</h1>
        <p className="text-slate-400">Assign officers and resources to active incidents</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Radio className="w-5 h-5 text-emerald-400" />
            Active Dispatch
          </h2>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="text-white font-semibold mb-1">INC-2025-0425</div>
                <div className="text-slate-400 text-sm">Armed Robbery in Progress</div>
              </div>
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded text-xs font-semibold">
                Critical
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
              <MapPin className="w-4 h-4" />
              <span>Bank Street, MidShire City Centre</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Clock className="w-4 h-4" />
              <span>Reported 3 minutes ago</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-semibold">Dispatch Details</h3>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Number of Units Required</label>
              <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>1 Unit</option>
                <option>2 Units</option>
                <option>3 Units</option>
                <option>4+ Units</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Special Requirements</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-slate-300">
                  <input type="checkbox" className="rounded bg-slate-900 border-slate-700" />
                  <span className="text-sm">Armed Response Unit</span>
                </label>
                <label className="flex items-center gap-2 text-slate-300">
                  <input type="checkbox" className="rounded bg-slate-900 border-slate-700" />
                  <span className="text-sm">K9 Unit</span>
                </label>
                <label className="flex items-center gap-2 text-slate-300">
                  <input type="checkbox" className="rounded bg-slate-900 border-slate-700" />
                  <span className="text-sm">Ambulance</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-400" />
            Available Officers
          </h2>
          <div className="space-y-3">
            {availableOfficers.map((officer) => (
              <div key={officer.id} className="bg-slate-900 border border-slate-700 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="text-white font-semibold">{officer.name}</div>
                    <div className="text-slate-400 text-sm">{officer.id}</div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    officer.status === 'Available' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {officer.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-400 mb-3">
                  <span>{officer.location}</span>
                  <span>{officer.distance} away</span>
                </div>
                {officer.status === 'Available' && (
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
                    Assign to Incident
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-semibold mb-1">Ready to Dispatch</h3>
            <p className="text-slate-400 text-sm">Review assignments and confirm dispatch</p>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Confirm Dispatch
          </button>
        </div>
      </div>
    </div>
  );
}
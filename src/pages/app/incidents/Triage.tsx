import React from 'react';
import { AlertTriangle, Clock, CheckCircle } from 'lucide-react';

export default function IncidentTriage() {
  const incidents = [
    { id: 'INC-2025-0425', type: 'Armed Robbery', location: 'Bank Street', priority: 'Critical', time: '2 min ago', status: 'Pending' },
    { id: 'INC-2025-0424', type: 'Domestic Disturbance', location: 'Oak Avenue', priority: 'High', time: '8 min ago', status: 'Pending' },
    { id: 'INC-2025-0423', type: 'Vandalism', location: 'Park Road', priority: 'Medium', time: '15 min ago', status: 'Triaged' },
    { id: 'INC-2025-0422', type: 'Noise Complaint', location: 'High Street', priority: 'Low', time: '22 min ago', status: 'Triaged' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Incident Triage</h1>
        <p className="text-slate-400">Assess and prioritize incoming incidents for dispatch</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="w-6 h-6 text-red-400" />
            <h3 className="text-lg font-semibold text-white">Critical</h3>
          </div>
          <div className="text-3xl font-bold text-white">3</div>
          <p className="text-sm text-slate-400 mt-1">Require immediate attention</p>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-6 h-6 text-yellow-400" />
            <h3 className="text-lg font-semibold text-white">Pending</h3>
          </div>
          <div className="text-3xl font-bold text-white">8</div>
          <p className="text-sm text-slate-400 mt-1">Awaiting triage assessment</p>
        </div>

        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-6 h-6 text-emerald-400" />
            <h3 className="text-lg font-semibold text-white">Triaged</h3>
          </div>
          <div className="text-3xl font-bold text-white">24</div>
          <p className="text-sm text-slate-400 mt-1">Ready for dispatch</p>
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Triage Queue</h2>
        <div className="space-y-3">
          {incidents.map((incident) => (
            <div key={incident.id} className="bg-slate-900 border border-slate-700 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-white font-semibold mb-1">{incident.id}</div>
                  <div className="text-slate-400 text-sm">{incident.type}</div>
                  <div className="text-slate-500 text-sm">{incident.location}</div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`px-3 py-1 rounded text-xs font-semibold ${
                    incident.priority === 'Critical' ? 'bg-red-500/20 text-red-400' :
                    incident.priority === 'High' ? 'bg-orange-500/20 text-orange-400' :
                    incident.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {incident.priority}
                  </span>
                  <span className="text-xs text-slate-500">{incident.time}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {incident.status === 'Pending' ? (
                  <>
                    <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
                      Approve & Dispatch
                    </button>
                    <button className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
                      Request More Info
                    </button>
                    <button className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
                      Reject
                    </button>
                  </>
                ) : (
                  <div className="flex items-center gap-2 text-emerald-400 text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>Triaged - Ready for dispatch</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
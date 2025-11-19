import React from 'react';
import { Activity, User, Clock } from 'lucide-react';

export default function ActivityLogs() {
  const logs = [
    { time: '14:32', officer: 'PC Wilson', action: 'Arrived on scene', incident: 'INC-2025-0425', type: 'status' },
    { time: '14:28', officer: 'PC Wilson', action: 'Dispatched to incident', incident: 'INC-2025-0425', type: 'dispatch' },
    { time: '14:15', officer: 'PC Thompson', action: 'Completed evidence collection', incident: 'INC-2025-0420', type: 'evidence' },
    { time: '14:02', officer: 'DI Mitchell', action: 'Updated case notes', incident: 'INC-2025-0418', type: 'update' },
    { time: '13:45', officer: 'PC Brown', action: 'Interviewed witness', incident: 'INC-2025-0419', type: 'investigation' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Officer Activity Logs</h1>
        <p className="text-slate-400">Comprehensive timeline of officer actions and incident updates</p>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-400" />
            Activity Timeline
          </h2>
          <div className="flex gap-2">
            <select className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>All Officers</option>
              <option>PC Wilson</option>
              <option>PC Thompson</option>
              <option>DI Mitchell</option>
            </select>
            <select className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Today</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {logs.map((log, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/20 border-2 border-emerald-500">
                  <Clock className="w-5 h-5 text-emerald-400" />
                </div>
                {index < logs.length - 1 && (
                  <div className="w-0.5 h-full bg-slate-700 mt-2"></div>
                )}
              </div>
              
              <div className="flex-1 bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="text-white font-semibold mb-1">{log.action}</div>
                    <div className="flex items-center gap-3 text-sm text-slate-400">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {log.officer}
                      </span>
                      <span>•</span>
                      <span>{log.incident}</span>
                    </div>
                  </div>
                  <span className="text-sm text-slate-500">{log.time}</span>
                </div>
                <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                  log.type === 'status' ? 'bg-blue-500/20 text-blue-400' :
                  log.type === 'dispatch' ? 'bg-emerald-500/20 text-emerald-400' :
                  log.type === 'evidence' ? 'bg-purple-500/20 text-purple-400' :
                  log.type === 'investigation' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-slate-500/20 text-slate-400'
                }`}>
                  {log.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
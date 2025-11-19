import React from 'react';
import { Network, Link as LinkIcon, Users, MapPin } from 'lucide-react';

export default function CaseLinkAnalysis() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Case Link Analysis</h1>
        <p className="text-slate-400">Identify connections between cases, suspects, and locations</p>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Network Visualization</h2>
        <div className="bg-slate-900 border border-slate-700 rounded-lg h-96 flex items-center justify-center">
          <div className="text-center">
            <Network className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">Interactive network graph showing case relationships</p>
            <p className="text-slate-500 text-sm mt-2">Nodes represent cases, suspects, and locations</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <LinkIcon className="w-5 h-5 text-emerald-400" />
            Linked Cases
          </h2>
          <div className="space-y-3">
            {[
              { from: 'CASE-2025-001', to: 'CASE-2025-003', strength: 'Strong', reason: 'Same suspect vehicle' },
              { from: 'CASE-2025-001', to: 'INC-2025-0421', strength: 'Medium', reason: 'Similar MO' },
              { from: 'CASE-2025-002', to: 'INC-2025-0419', strength: 'Strong', reason: 'Location proximity' }
            ].map((link, index) => (
              <div key={index} className="bg-slate-900 border border-slate-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-semibold">{link.from} ↔ {link.to}</div>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    link.strength === 'Strong' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {link.strength}
                  </span>
                </div>
                <div className="text-sm text-slate-400">{link.reason}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-400" />
            Common Suspects
          </h2>
          <div className="space-y-3">
            {[
              { name: 'John Smith', cases: 3, risk: 'High' },
              { name: 'Michael Brown', cases: 2, risk: 'Medium' },
              { name: 'David Wilson', cases: 2, risk: 'Low' }
            ].map((suspect, index) => (
              <div key={index} className="bg-slate-900 border border-slate-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-semibold">{suspect.name}</div>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    suspect.risk === 'High' ? 'bg-red-500/20 text-red-400' :
                    suspect.risk === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {suspect.risk} Risk
                  </span>
                </div>
                <div className="text-sm text-slate-400">Linked to {suspect.cases} cases</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-purple-400" />
          Geographic Clustering
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { area: 'City Centre', incidents: 12, trend: 'up' },
            { area: 'Park Avenue District', incidents: 8, trend: 'stable' },
            { area: 'Industrial Estate', incidents: 5, trend: 'down' }
          ].map((cluster, index) => (
            <div key={index} className="bg-slate-900 border border-slate-700 rounded-lg p-4">
              <div className="text-white font-semibold mb-2">{cluster.area}</div>
              <div className="text-2xl font-bold text-white mb-1">{cluster.incidents}</div>
              <div className={`text-sm font-semibold ${
                cluster.trend === 'up' ? 'text-red-400' :
                cluster.trend === 'down' ? 'text-emerald-400' :
                'text-slate-400'
              }`}>
                {cluster.trend === 'up' ? '↑ Increasing' : cluster.trend === 'down' ? '↓ Decreasing' : '→ Stable'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
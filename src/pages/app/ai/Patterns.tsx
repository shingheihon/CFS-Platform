import React from 'react';
import { Network, TrendingUp, MapPin, Clock } from 'lucide-react';

export default function PatternAnalysis() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Pattern Recognition</h1>
        <p className="text-slate-400">AI-powered crime pattern detection and analysis</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <Network className="w-8 h-8 text-purple-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">12</div>
          <div className="text-sm text-slate-400">Patterns Detected</div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <TrendingUp className="w-8 h-8 text-emerald-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">89%</div>
          <div className="text-sm text-slate-400">Confidence Score</div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <MapPin className="w-8 h-8 text-blue-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">5</div>
          <div className="text-sm text-slate-400">Geographic Clusters</div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <Clock className="w-8 h-8 text-yellow-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">3</div>
          <div className="text-sm text-slate-400">Temporal Patterns</div>
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Detected Patterns</h2>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-lg p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Organized Burglary Series</h3>
                <p className="text-slate-400 text-sm">Pattern ID: PTN-2025-001</p>
              </div>
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded text-xs font-semibold">
                High Confidence: 94%
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-slate-900/50 rounded p-3">
                <div className="text-slate-400 text-xs mb-1">Linked Incidents</div>
                <div className="text-white font-bold text-xl">8</div>
              </div>
              <div className="bg-slate-900/50 rounded p-3">
                <div className="text-slate-400 text-xs mb-1">Time Pattern</div>
                <div className="text-white font-bold text-xl">2-4 AM</div>
              </div>
              <div className="bg-slate-900/50 rounded p-3">
                <div className="text-slate-400 text-xs mb-1">Geographic Area</div>
                <div className="text-white font-bold text-xl">City Centre</div>
              </div>
            </div>
            <div className="bg-slate-900/50 rounded p-3 mb-3">
              <h4 className="text-white font-semibold mb-2 text-sm">Pattern Characteristics</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Entry method: Forced rear door/window</li>
                <li>• Target: Residential properties, high-value electronics</li>
                <li>• Vehicle: Dark-colored van observed in 6/8 incidents</li>
                <li>• Suspects: 2-3 individuals, coordinated approach</li>
              </ul>
            </div>
            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded font-semibold transition-colors">
              View Full Analysis
            </button>
          </div>

          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-lg p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Vehicle Theft Network</h3>
                <p className="text-slate-400 text-sm">Pattern ID: PTN-2025-002</p>
              </div>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded text-xs font-semibold">
                Medium Confidence: 78%
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-slate-900/50 rounded p-3">
                <div className="text-slate-400 text-xs mb-1">Linked Incidents</div>
                <div className="text-white font-bold text-xl">12</div>
              </div>
              <div className="bg-slate-900/50 rounded p-3">
                <div className="text-slate-400 text-xs mb-1">Time Pattern</div>
                <div className="text-white font-bold text-xl">Evening</div>
              </div>
              <div className="bg-slate-900/50 rounded p-3">
                <div className="text-slate-400 text-xs mb-1">Geographic Area</div>
                <div className="text-white font-bold text-xl">Multiple</div>
              </div>
            </div>
            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded font-semibold transition-colors">
              View Full Analysis
            </button>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Pattern Visualization</h2>
        <div className="bg-slate-900 border border-slate-700 rounded-lg h-96 flex items-center justify-center">
          <div className="text-center">
            <Network className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">Interactive pattern visualization and network graph</p>
          </div>
        </div>
      </div>
    </div>
  );
}
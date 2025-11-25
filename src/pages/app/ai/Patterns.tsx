import React from 'react';
import { Network, TrendingUp, MapPin, Clock } from 'lucide-react';

export default function PatternAnalysis() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Pattern Recognition</h1>
        <p className="text-slate-600">AI-powered crime pattern detection and analysis</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <Network className="w-8 h-8 text-purple-600 mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">12</div>
          <div className="text-sm text-slate-500">Patterns Detected</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <TrendingUp className="w-8 h-8 text-brand-blue mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">89%</div>
          <div className="text-sm text-slate-500">Confidence Score</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <MapPin className="w-8 h-8 text-brand-blue mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">5</div>
          <div className="text-sm text-slate-500">Geographic Clusters</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <Clock className="w-8 h-8 text-brand-yellow mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">3</div>
          <div className="text-sm text-slate-500">Temporal Patterns</div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Detected Patterns</h2>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 rounded-lg p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-slate-900 font-bold text-lg mb-1">Organized Burglary Series</h3>
                <p className="text-slate-500 text-sm">Pattern ID: PTN-2025-001</p>
              </div>
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded text-xs font-semibold">
                High Confidence: 94%
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white/50 rounded p-3 border border-slate-100">
                <div className="text-slate-500 text-xs mb-1">Linked Incidents</div>
                <div className="text-slate-900 font-bold text-xl">8</div>
              </div>
              <div className="bg-white/50 rounded p-3 border border-slate-100">
                <div className="text-slate-500 text-xs mb-1">Time Pattern</div>
                <div className="text-slate-900 font-bold text-xl">2-4 AM</div>
              </div>
              <div className="bg-white/50 rounded p-3 border border-slate-100">
                <div className="text-slate-500 text-xs mb-1">Geographic Area</div>
                <div className="text-slate-900 font-bold text-xl">City Centre</div>
              </div>
            </div>
            <div className="bg-white/50 rounded p-3 mb-3 border border-slate-100">
              <h4 className="text-slate-900 font-semibold mb-2 text-sm">Pattern Characteristics</h4>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Entry method: Forced rear door/window</li>
                <li>• Target: Residential properties, high-value electronics</li>
                <li>• Vehicle: Dark-coloured van observed in 6/8 incidents</li>
                <li>• Suspects: 2-3 individuals, coordinated approach</li>
              </ul>
            </div>
            <button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white px-4 py-2 rounded font-semibold transition-colors">
              View Full Analysis
            </button>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-100 rounded-lg p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-slate-900 font-bold text-lg mb-1">Vehicle Theft Network</h3>
                <p className="text-slate-500 text-sm">Pattern ID: PTN-2025-002</p>
              </div>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded text-xs font-semibold">
                Medium Confidence: 78%
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white/50 rounded p-3 border border-slate-100">
                <div className="text-slate-500 text-xs mb-1">Linked Incidents</div>
                <div className="text-slate-900 font-bold text-xl">12</div>
              </div>
              <div className="bg-white/50 rounded p-3 border border-slate-100">
                <div className="text-slate-500 text-xs mb-1">Time Pattern</div>
                <div className="text-slate-900 font-bold text-xl">Evening</div>
              </div>
              <div className="bg-white/50 rounded p-3 border border-slate-100">
                <div className="text-slate-500 text-xs mb-1">Geographic Area</div>
                <div className="text-slate-900 font-bold text-xl">Multiple</div>
              </div>
            </div>
            <button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white px-4 py-2 rounded font-semibold transition-colors">
              View Full Analysis
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Pattern Visualization</h2>
        <div className="bg-slate-50 border border-slate-200 rounded-lg h-96 flex items-center justify-center">
          <div className="text-center">
            <Network className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500">Interactive pattern visualization and network graph</p>
          </div>
        </div>
      </div>
    </div>
  );
}
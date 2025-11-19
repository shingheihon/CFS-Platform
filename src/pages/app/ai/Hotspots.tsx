import React from 'react';
import { MapPin, Flame, TrendingUp } from 'lucide-react';

export default function HotspotDetection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Hotspot Detection</h1>
        <p className="text-slate-400">Geographic crime concentration analysis</p>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Crime Hotspot Map</h2>
        <div className="bg-slate-900 border border-slate-700 rounded-lg h-96 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">Interactive heat map showing crime concentration</p>
            <p className="text-slate-500 text-sm mt-2">Red zones indicate high-activity areas</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Flame className="w-5 h-5 text-red-400" />
            Active Hotspots
          </h2>
          <div className="space-y-3">
            {[
              { name: 'City Centre - High Street', incidents: 24, trend: 'up', severity: 'Critical' },
              { name: 'Park Avenue District', incidents: 18, trend: 'stable', severity: 'High' },
              { name: 'Shopping Centre Area', incidents: 12, trend: 'down', severity: 'Medium' }
            ].map((hotspot, index) => (
              <div key={index} className="bg-slate-900 border border-slate-700 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="text-white font-semibold mb-1">{hotspot.name}</div>
                    <div className="text-sm text-slate-400">{hotspot.incidents} incidents (7 days)</div>
                  </div>
                  <span className={`px-3 py-1 rounded text-xs font-semibold ${
                    hotspot.severity === 'Critical' ? 'bg-red-500/20 text-red-400' :
                    hotspot.severity === 'High' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {hotspot.severity}
                  </span>
                </div>
                <div className={`flex items-center gap-2 text-sm ${
                  hotspot.trend === 'up' ? 'text-red-400' :
                  hotspot.trend === 'down' ? 'text-emerald-400' :
                  'text-slate-400'
                }`}>
                  <TrendingUp className="w-4 h-4" />
                  <span>
                    {hotspot.trend === 'up' ? 'Increasing' : hotspot.trend === 'down' ? 'Decreasing' : 'Stable'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Hotspot Analysis</h2>
          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">City Centre - High Street</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Primary Crime Type:</span>
                  <span className="text-white">Theft & Burglary</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Peak Hours:</span>
                  <span className="text-white">22:00 - 04:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Radius:</span>
                  <span className="text-white">500m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Risk Score:</span>
                  <span className="text-red-400 font-bold">8.7/10</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <h4 className="text-blue-400 font-semibold mb-2 text-sm">Recommended Actions</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Increase patrol frequency during peak hours</li>
                <li>• Deploy additional CCTV coverage</li>
                <li>• Coordinate with local businesses</li>
                <li>• Community engagement initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Hotspot Statistics</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
            <div className="text-2xl font-bold text-white mb-1">8</div>
            <div className="text-sm text-slate-400">Active Hotspots</div>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
            <div className="text-2xl font-bold text-white mb-1">142</div>
            <div className="text-sm text-slate-400">Total Incidents</div>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
            <div className="text-2xl font-bold text-white mb-1">3.2 km²</div>
            <div className="text-sm text-slate-400">Coverage Area</div>
          </div>
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
            <div className="text-2xl font-bold text-white mb-1">24</div>
            <div className="text-sm text-slate-400">Officers Deployed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
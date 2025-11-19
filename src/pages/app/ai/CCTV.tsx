import React from 'react';
import { Video, Play, Download, Search } from 'lucide-react';

export default function CCTVViewer() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">CCTV Ingestion Viewer</h1>
        <p className="text-slate-400">Real-time CCTV feed monitoring and AI analysis</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Live Feed</h2>
          <div className="bg-slate-900 border border-slate-700 rounded-lg aspect-video flex items-center justify-center mb-4">
            <div className="text-center">
              <Video className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">CCTV Feed: High Street - Camera 04</p>
              <p className="text-slate-500 text-sm mt-2">Live Stream</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded font-semibold transition-colors flex items-center justify-center gap-2">
              <Play className="w-4 h-4" />
              Play
            </button>
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold transition-colors flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Download
            </button>
            <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-semibold transition-colors flex items-center justify-center gap-2">
              <Search className="w-4 h-4" />
              Analyze
            </button>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">AI Detection</h2>
          <div className="space-y-3">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
              <div className="text-red-400 font-semibold text-sm mb-1">Suspicious Activity</div>
              <p className="text-slate-300 text-xs">Person loitering near entrance</p>
              <p className="text-slate-500 text-xs mt-1">Confidence: 87%</p>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
              <div className="text-yellow-400 font-semibold text-sm mb-1">Vehicle Alert</div>
              <p className="text-slate-300 text-xs">Unregistered vehicle detected</p>
              <p className="text-slate-500 text-xs mt-1">Confidence: 92%</p>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
              <div className="text-blue-400 font-semibold text-sm mb-1">Crowd Detection</div>
              <p className="text-slate-300 text-xs">15+ people gathered</p>
              <p className="text-slate-500 text-xs mt-1">Confidence: 95%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Camera Network</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { id: 'CAM-01', location: 'High Street North', status: 'Active' },
            { id: 'CAM-02', location: 'High Street South', status: 'Active' },
            { id: 'CAM-03', location: 'Park Avenue', status: 'Active' },
            { id: 'CAM-04', location: 'Shopping Centre', status: 'Active' },
            { id: 'CAM-05', location: 'Train Station', status: 'Offline' },
            { id: 'CAM-06', location: 'City Hall', status: 'Active' },
            { id: 'CAM-07', location: 'Industrial Estate', status: 'Active' },
            { id: 'CAM-08', location: 'Residential North', status: 'Active' }
          ].map((camera) => (
            <div key={camera.id} className="bg-slate-900 border border-slate-700 rounded-lg p-4 cursor-pointer hover:border-emerald-500 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <Video className="w-5 h-5 text-slate-400" />
                <span className={`w-2 h-2 rounded-full ${
                  camera.status === 'Active' ? 'bg-emerald-400' : 'bg-red-400'
                }`}></span>
              </div>
              <div className="text-white font-semibold text-sm mb-1">{camera.id}</div>
              <div className="text-slate-400 text-xs">{camera.location}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Recent Captures</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
              <div className="aspect-video bg-slate-800 flex items-center justify-center">
                <Video className="w-12 h-12 text-slate-600" />
              </div>
              <div className="p-3">
                <div className="text-white font-semibold text-sm mb-1">Incident INC-2025-042{i}</div>
                <div className="text-slate-400 text-xs mb-2">15 Jan 2025, 14:3{i}</div>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded text-xs font-semibold transition-colors">
                  View Footage
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
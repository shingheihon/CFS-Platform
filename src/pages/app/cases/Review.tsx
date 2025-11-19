import React from 'react';
import { FileText, User, Calendar, AlertCircle } from 'lucide-react';

export default function ReviewCaseFiles() {
  const cases = [
    { id: 'CASE-2025-001', title: 'Organized Burglary Ring Investigation', detective: 'DI Mitchell', incidents: 8, status: 'Active', priority: 'High', updated: '2 hours ago' },
    { id: 'CASE-2025-002', title: 'Assault Series - Park Avenue Area', detective: 'DI Thompson', incidents: 4, status: 'Under Review', priority: 'Medium', updated: '1 day ago' },
    { id: 'CASE-2025-003', title: 'Vehicle Theft Network', detective: 'DI Wilson', incidents: 12, status: 'Active', priority: 'Critical', updated: '3 hours ago' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Review Case Files</h1>
        <p className="text-slate-400">Access and review detailed case information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div className="text-emerald-400 text-sm font-semibold mb-2">Active Cases</div>
          <div className="text-3xl font-bold text-white">24</div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div className="text-yellow-400 text-sm font-semibold mb-2">Under Review</div>
          <div className="text-3xl font-bold text-white">8</div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div className="text-blue-400 text-sm font-semibold mb-2">Closed This Month</div>
          <div className="text-3xl font-bold text-white">42</div>
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Case Files</h2>
        <div className="space-y-4">
          {cases.map((caseFile) => (
            <div key={caseFile.id} className="bg-slate-900 border border-slate-700 rounded-lg p-5">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-white font-bold text-lg mb-1">{caseFile.title}</div>
                  <div className="text-slate-400 text-sm">{caseFile.id}</div>
                </div>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded text-xs font-semibold ${
                    caseFile.priority === 'Critical' ? 'bg-red-500/20 text-red-400' :
                    caseFile.priority === 'High' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {caseFile.priority}
                  </span>
                  <span className={`px-3 py-1 rounded text-xs font-semibold ${
                    caseFile.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {caseFile.status}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                <div className="flex items-center gap-2 text-slate-400">
                  <User className="w-4 h-4" />
                  <span>Lead: {caseFile.detective}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <AlertCircle className="w-4 h-4" />
                  <span>{caseFile.incidents} linked incidents</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span>Updated {caseFile.updated}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded font-semibold transition-colors">
                  Open Case File
                </button>
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold transition-colors">
                  View Timeline
                </button>
                <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-semibold transition-colors">
                  Evidence
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
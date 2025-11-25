import React from 'react';
import { FileText, User, Calendar, AlertCircle } from 'lucide-react';

export default function ReviewCaseFiles() {
  const cases = [
    { id: 'CASE-2025-001', title: 'Organised Burglary Ring Investigation', detective: 'DI Mitchell', incidents: 8, status: 'Active', priority: 'High', updated: '2 hours ago' },
    { id: 'CASE-2025-002', title: 'Assault Series - Park Avenue Area', detective: 'DI Thompson', incidents: 4, status: 'Under Review', priority: 'Medium', updated: '1 day ago' },
    { id: 'CASE-2025-003', title: 'Vehicle Theft Network', detective: 'DI Wilson', incidents: 12, status: 'Active', priority: 'Critical', updated: '3 hours ago' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Review Case Files</h1>
        <p className="text-slate-600">Access and review detailed case information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <div className="text-green-600 text-sm font-semibold mb-2">Active Cases</div>
          <div className="text-3xl font-bold text-slate-900">24</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <div className="text-brand-yellow text-sm font-semibold mb-2">Under Review</div>
          <div className="text-3xl font-bold text-slate-900">8</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <div className="text-brand-blue text-sm font-semibold mb-2">Closed This Month</div>
          <div className="text-3xl font-bold text-slate-900">42</div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Case Files</h2>
        <div className="space-y-4">
          {cases.map((caseFile) => (
            <div key={caseFile.id} className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-slate-900 font-bold text-lg mb-1">{caseFile.title}</div>
                  <div className="text-slate-500 text-sm">{caseFile.id}</div>
                </div>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded text-xs font-semibold ${caseFile.priority === 'Critical' ? 'bg-red-100 text-red-700' :
                    caseFile.priority === 'High' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                    {caseFile.priority}
                  </span>
                  <span className={`px-3 py-1 rounded text-xs font-semibold ${caseFile.status === 'Active' ? 'bg-green-100 text-green-700' :
                    'bg-blue-100 text-blue-700'
                    }`}>
                    {caseFile.status}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                <div className="flex items-center gap-2 text-slate-500">
                  <User className="w-4 h-4" />
                  <span>Lead: {caseFile.detective}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <AlertCircle className="w-4 h-4" />
                  <span>{caseFile.incidents} linked incidents</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Calendar className="w-4 h-4" />
                  <span>Updated {caseFile.updated}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-brand-blue hover:bg-brand-blue/90 text-white px-4 py-2 rounded font-semibold transition-colors">
                  Open Case File
                </button>
                <button className="flex-1 bg-brand-yellow hover:bg-brand-yellow/90 text-brand-blue px-4 py-2 rounded font-semibold transition-colors">
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
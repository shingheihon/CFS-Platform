import React from 'react';
import { Search, FileText, Calendar, MapPin } from 'lucide-react';

export default function CaseInquiry() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Case Inquiry</h1>
        <p className="text-slate-600">Search and retrieve incident and case information</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Search Cases</h2>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Incident/Case ID</label>
              <input
                type="text"
                placeholder="INC-2025-XXXX or CASE-XXXX"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Incident Type</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue">
                <option>All Types</option>
                <option>Burglary</option>
                <option>Theft</option>
                <option>Assault</option>
                <option>Traffic</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Date From</label>
              <input
                type="date"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Date To</label>
              <input
                type="date"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue">
                <option>All Statuses</option>
                <option>Active</option>
                <option>Under Investigation</option>
                <option>Resolved</option>
                <option>Closed</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
            <input
              type="text"
              placeholder="Search by location..."
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>

          <button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2">
            <Search className="w-4 h-4" />
            Search Cases
          </button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Search Results</h2>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-slate-900 font-semibold mb-1">INC-2025-042{i}</div>
                  <div className="text-slate-500 text-sm">Burglary - Residential</div>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-semibold">
                  Under Investigation
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-500 mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Manchester M12345</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>15 Jan 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Assigned to DI Mitchell</span>
                </div>
              </div>
              <button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
                View Full Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
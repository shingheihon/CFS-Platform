import React from 'react';
import { Search, Filter, Download } from 'lucide-react';

export default function IncidentSearch() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Incident Search</h1>
        <p className="text-slate-600">Advanced search and filtering for incidents</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search incidents by ID, type, location, or keywords..."
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>
          <button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Search
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-600 px-4 py-2 rounded-lg transition-colors">
            <Filter className="w-4 h-4" />
            Advanced Filters
          </button>
          <button className="flex items-center gap-2 bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-600 px-4 py-2 rounded-lg transition-colors">
            <Download className="w-4 h-4" />
            Export Results
          </button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900">Search Results</h2>
          <span className="text-slate-500 text-sm">Showing 1-10 of 247 results</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left text-slate-600 font-semibold py-3 px-4">Incident ID</th>
                <th className="text-left text-slate-600 font-semibold py-3 px-4">Type</th>
                <th className="text-left text-slate-600 font-semibold py-3 px-4">Location</th>
                <th className="text-left text-slate-600 font-semibold py-3 px-4">Date</th>
                <th className="text-left text-slate-600 font-semibold py-3 px-4">Status</th>
                <th className="text-left text-slate-600 font-semibold py-3 px-4">Priority</th>
                <th className="text-left text-slate-600 font-semibold py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-3 px-4 text-slate-900 font-mono">INC-2025-042{i}</td>
                  <td className="py-3 px-4 text-slate-600">Burglary</td>
                  <td className="py-3 px-4 text-slate-600">High Street</td>
                  <td className="py-3 px-4 text-slate-600">15 Jan 2025</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-semibold">
                      Active
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-semibold">
                      High
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-brand-blue hover:text-brand-blue/80 text-sm font-semibold">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button className="bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-600 px-4 py-2 rounded-lg transition-colors">
            Previous
          </button>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-lg font-semibold transition-colors ${page === 1
                    ? 'bg-brand-blue text-white'
                    : 'bg-slate-50 border border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button className="bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-600 px-4 py-2 rounded-lg transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
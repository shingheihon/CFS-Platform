import React from 'react';
import { FileText, Calendar, Download } from 'lucide-react';

export default function DailyReports() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Generate Daily Reports</h1>
        <p className="text-slate-600">Automated daily operational reports</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Generate Report</h2>
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Report Date</label>
              <input
                type="date"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Report Type</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue">
                <option>Daily Summary</option>
                <option>Incident Report</option>
                <option>Resource Utilization</option>
                <option>Performance Metrics</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Generate Report
          </button>
        </form>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Reports</h2>
        <div className="space-y-3">
          {[
            { name: 'Daily Summary - 15 Jan 2025', date: '15 Jan 2025', type: 'Summary', size: '2.4 MB' },
            { name: 'Incident Report - 14 Jan 2025', date: '14 Jan 2025', type: 'Incidents', size: '1.8 MB' },
            { name: 'Daily Summary - 14 Jan 2025', date: '14 Jan 2025', type: 'Summary', size: '2.1 MB' }
          ].map((report, index) => (
            <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-brand-blue" />
                <div>
                  <div className="text-slate-900 font-semibold">{report.name}</div>
                  <div className="text-sm text-slate-500">{report.type} • {report.size}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
                  View
                </button>
                <button className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-blue px-4 py-2 rounded text-sm font-semibold transition-colors flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
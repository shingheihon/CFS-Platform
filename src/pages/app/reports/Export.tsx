import React from 'react';
import { Download, FileText, Table } from 'lucide-react';

export default function ExportReports() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Export Reports</h1>
        <p className="text-slate-400">Export data and reports in various formats</p>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Export Configuration</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Data Source</label>
            <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Incidents</option>
              <option>Cases</option>
              <option>Evidence</option>
              <option>Officers</option>
              <option>Analytics</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Date From</label>
              <input
                type="date"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Date To</label>
              <input
                type="date"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Export Format</label>
            <div className="grid md:grid-cols-3 gap-4">
              <button
                type="button"
                className="bg-slate-900 border-2 border-emerald-500 rounded-lg p-4 text-center hover:bg-slate-800 transition-colors"
              >
                <FileText className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-white font-semibold">PDF</div>
                <div className="text-slate-400 text-xs">Formatted Report</div>
              </button>
              <button
                type="button"
                className="bg-slate-900 border-2 border-slate-700 rounded-lg p-4 text-center hover:bg-slate-800 hover:border-emerald-500 transition-colors"
              >
                <Table className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Excel</div>
                <div className="text-slate-400 text-xs">Spreadsheet Data</div>
              </button>
              <button
                type="button"
                className="bg-slate-900 border-2 border-slate-700 rounded-lg p-4 text-center hover:bg-slate-800 hover:border-emerald-500 transition-colors"
              >
                <FileText className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <div className="text-white font-semibold">CSV</div>
                <div className="text-slate-400 text-xs">Raw Data</div>
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export Data
          </button>
        </form>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Recent Exports</h2>
        <div className="space-y-3">
          {[
            { name: 'Incidents_Jan2025.pdf', date: '15 Jan 2025', size: '4.2 MB', format: 'PDF' },
            { name: 'Cases_Q4_2024.xlsx', date: '14 Jan 2025', size: '2.8 MB', format: 'Excel' },
            { name: 'Evidence_Report.csv', date: '13 Jan 2025', size: '1.5 MB', format: 'CSV' }
          ].map((file, index) => (
            <div key={index} className="bg-slate-900 border border-slate-700 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-emerald-400" />
                <div>
                  <div className="text-white font-semibold">{file.name}</div>
                  <div className="text-sm text-slate-400">{file.format} • {file.size} • {file.date}</div>
                </div>
              </div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
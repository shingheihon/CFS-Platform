import React from 'react';
import { Download, FileText, Table } from 'lucide-react';

export default function ExportReports() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Export Reports</h1>
        <p className="text-slate-600">Export data and reports in various formats</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Export Configuration</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Data Source</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue">
              <option>Incidents</option>
              <option>Cases</option>
              <option>Evidence</option>
              <option>Officers</option>
              <option>Analytics</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Export Format</label>
            <div className="grid md:grid-cols-3 gap-4">
              <button
                type="button"
                className="bg-slate-50 border-2 border-brand-blue rounded-lg p-4 text-center hover:bg-slate-100 transition-colors"
              >
                <FileText className="w-8 h-8 text-brand-blue mx-auto mb-2" />
                <div className="text-slate-900 font-semibold">PDF</div>
                <div className="text-slate-500 text-xs">Formatted Report</div>
              </button>
              <button
                type="button"
                className="bg-slate-50 border-2 border-slate-200 rounded-lg p-4 text-center hover:bg-slate-100 hover:border-brand-blue transition-colors"
              >
                <Table className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <div className="text-slate-900 font-semibold">Excel</div>
                <div className="text-slate-500 text-xs">Spreadsheet Data</div>
              </button>
              <button
                type="button"
                className="bg-slate-50 border-2 border-slate-200 rounded-lg p-4 text-center hover:bg-slate-100 hover:border-brand-blue transition-colors"
              >
                <FileText className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <div className="text-slate-900 font-semibold">CSV</div>
                <div className="text-slate-500 text-xs">Raw Data</div>
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export Data
          </button>
        </form>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Exports</h2>
        <div className="space-y-3">
          {[
            { name: 'Incidents_Jan2025.pdf', date: '15 Jan 2025', size: '4.2 MB', format: 'PDF' },
            { name: 'Cases_Q4_2024.xlsx', date: '14 Jan 2025', size: '2.8 MB', format: 'Excel' },
            { name: 'Evidence_Report.csv', date: '13 Jan 2025', size: '1.5 MB', format: 'CSV' }
          ].map((file, index) => (
            <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-brand-blue" />
                <div>
                  <div className="text-slate-900 font-semibold">{file.name}</div>
                  <div className="text-sm text-slate-500">{file.format} • {file.size} • {file.date}</div>
                </div>
              </div>
              <button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-4 py-2 rounded text-sm font-semibold transition-colors flex items-center gap-2">
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
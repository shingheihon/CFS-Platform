import React from 'react';
import { FileText, Download, Printer } from 'lucide-react';

export default function LegalDocumentGeneration() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Legal Document Generation</h1>
        <p className="text-slate-600">Generate official legal documents for cases</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Generate Document</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Case ID</label>
            <input
              type="text"
              placeholder="CASE-2025-XXX"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Document Type</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue">
              <option>Select document type...</option>
              <option>Arrest Warrant</option>
              <option>Search Warrant</option>
              <option>Charge Sheet</option>
              <option>Evidence Report</option>
              <option>Case Summary</option>
              <option>Witness Statement</option>
              <option>Court Submission</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Prepared By</label>
              <input
                type="text"
                value="DI Sarah Mitchell"
                disabled
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Date</label>
              <input
                type="date"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Additional Notes</label>
            <textarea
              rows={4}
              placeholder="Add any specific details or instructions..."
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Generate Document
          </button>
        </form>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Generated Documents</h2>
        <div className="space-y-3">
          {[
            { name: 'Arrest Warrant - John Smith', case: 'CASE-2025-001', date: '15 Jan 2025', type: 'Warrant' },
            { name: 'Evidence Report - Burglary Series', case: 'CASE-2025-001', date: '14 Jan 2025', type: 'Report' },
            { name: 'Witness Statement - Jane Doe', case: 'CASE-2025-002', date: '13 Jan 2025', type: 'Statement' }
          ].map((doc, index) => (
            <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-slate-900 font-semibold mb-1">{doc.name}</div>
                  <div className="text-sm text-slate-600">{doc.case} • {doc.date}</div>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                  {doc.type}
                </span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-brand-blue hover:bg-brand-blue/90 text-white px-4 py-2 rounded text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
                <button className="flex-1 bg-brand-yellow hover:bg-brand-yellow/90 text-brand-blue px-4 py-2 rounded text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                  <Printer className="w-4 h-4" />
                  Print
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
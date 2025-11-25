import React from 'react';
import { Upload, Shield, Lock } from 'lucide-react';

export default function UploadEvidence() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Upload Evidence</h1>
        <p className="text-slate-600">Securely upload and store case evidence</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Evidence Upload Form</h2>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Case/Incident ID</label>
              <input
                type="text"
                placeholder="CASE-2025-XXX or INC-2025-XXXX"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Evidence Type</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue">
                <option>Select type...</option>
                <option>Physical Evidence Photo</option>
                <option>CCTV Footage</option>
                <option>Document</option>
                <option>Audio Recording</option>
                <option>Digital Evidence</option>
                <option>Forensic Report</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Evidence Description</label>
            <textarea
              rows={3}
              placeholder="Detailed description of the evidence..."
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            ></textarea>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Collection Date</label>
              <input
                type="datetime-local"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Collected By</label>
              <input
                type="text"
                placeholder="Officer name or ID..."
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>

          <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-brand-blue transition-colors cursor-pointer">
            <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-900 font-semibold mb-2">Drop files here or click to upload</p>
            <p className="text-slate-600 text-sm">Supports: JPG, PNG, MP4, PDF, DOC (Max 500MB)</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <h3 className="text-green-700 font-semibold mb-1">Security Features</h3>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• End-to-end encryption during upload</li>
                  <li>• Cryptographic hash verification</li>
                  <li>• Automatic chain of custody logging</li>
                  <li>• Tamper-proof storage</li>
                </ul>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            <Lock className="w-4 h-4" />
            Upload Securely
          </button>
        </form>
      </div>
    </div>
  );
}
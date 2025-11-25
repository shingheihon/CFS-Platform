import React from 'react';
import { Upload, File, Image, Video, AlertCircle } from 'lucide-react';

export default function EvidenceUpload() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Evidence Upload</h1>
        <p className="text-slate-600">Upload and attach evidence to incidents</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Upload Evidence</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Related Incident ID</label>
            <input
              type="text"
              placeholder="INC-2025-XXXX"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Evidence Type</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue">
              <option>Select evidence type...</option>
              <option>Photograph</option>
              <option>Video Recording</option>
              <option>Document</option>
              <option>Audio Recording</option>
              <option>Physical Evidence Photo</option>
              <option>CCTV Footage</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
            <textarea
              rows={3}
              placeholder="Describe the evidence..."
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            ></textarea>
          </div>

          <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-brand-blue transition-colors cursor-pointer bg-slate-50">
            <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-900 font-semibold mb-2">Drop files here or click to upload</p>
            <p className="text-slate-500 text-sm">Supports: JPG, PNG, MP4, PDF, DOC (Max 100MB)</p>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Upload Evidence
            </button>
            <button
              type="button"
              className="text-slate-600 hover:text-slate-900 px-6 py-2 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-brand-blue mt-0.5" />
          <div>
            <h3 className="text-brand-blue font-semibold mb-1">Evidence Handling Guidelines</h3>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>• All evidence is encrypted and stored securely</li>
              <li>• Chain of custody is automatically logged</li>
              <li>• Evidence integrity is verified using cryptographic hashing</li>
              <li>• Access is restricted based on role and case assignment</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Recently Uploaded</h2>
        <div className="space-y-3">
          {[
            { name: 'crime_scene_photo_01.jpg', type: 'Image', size: '2.4 MB', time: '5 min ago', icon: Image },
            { name: 'witness_statement.pdf', type: 'Document', size: '156 KB', time: '12 min ago', icon: File },
            { name: 'cctv_footage_bank.mp4', type: 'Video', size: '45.2 MB', time: '1 hour ago', icon: Video }
          ].map((file, index) => (
            <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-blue/10 rounded-lg">
                  <file.icon className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <div className="text-slate-900 font-semibold">{file.name}</div>
                  <div className="text-sm text-slate-500">{file.type} • {file.size}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-slate-500">{file.time}</div>
                <button className="text-brand-blue hover:text-brand-blue/80 text-sm font-semibold mt-1">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
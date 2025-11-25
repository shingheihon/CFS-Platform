import React from 'react';
import { Brain, FileText, Sparkles } from 'lucide-react';

export default function AISummary() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">AI Incident Summary</h1>
        <p className="text-slate-600">AI-generated summaries and insights for incidents</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Generate AI Summary</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Incident/Case ID</label>
            <input
              type="text"
              placeholder="INC-2025-XXXX or CASE-2025-XXX"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>
          <button
            type="submit"
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            <Brain className="w-4 h-4" />
            Generate Summary
          </button>
        </form>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-bold text-slate-900">AI-Generated Summary</h2>
          <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-semibold">
            INC-2025-0421
          </span>
        </div>

        <div className="space-y-4">
          <div className="bg-white/50 border border-slate-200 rounded-lg p-4">
            <h3 className="text-slate-900 font-semibold mb-2">Executive Summary</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Armed robbery incident at Bank Street branch occurred on 15 January 2025 at approximately 14:30.
              Two suspects entered the premises, one armed with a handgun. Approximately £12,000 stolen.
              No injuries reported. CCTV footage captured clear images of both suspects. Vehicle registration
              identified as stolen from previous incident (INC-2025-0418).
            </p>
          </div>

          <div className="bg-white/50 border border-slate-200 rounded-lg p-4">
            <h3 className="text-slate-900 font-semibold mb-2">Key Facts</h3>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>• <strong>Time:</strong> 15 Jan 2025, 14:30</li>
              <li>• <strong>Location:</strong> Bank Street, Manchester City Centre</li>
              <li>• <strong>Suspects:</strong> 2 (Male, 25-35 years, armed)</li>
              <li>• <strong>Stolen Amount:</strong> £12,000</li>
              <li>• <strong>Weapon:</strong> Handgun (unconfirmed model)</li>
              <li>• <strong>Vehicle:</strong> Blue Ford Focus, Reg: AB12 CDE (Stolen)</li>
            </ul>
          </div>

          <div className="bg-white/50 border border-slate-200 rounded-lg p-4">
            <h3 className="text-slate-900 font-semibold mb-2">AI Insights</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <p className="text-slate-600">
                  <strong>Pattern Match:</strong> MO similar to 3 previous robberies in the area (CASE-2025-001)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <p className="text-slate-600">
                  <strong>Vehicle Link:</strong> Stolen vehicle connects to INC-2025-0418 (reported 2 days prior)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <p className="text-slate-600">
                  <strong>Suspect Profile:</strong> Facial recognition suggests possible match with known offender database
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/50 border border-slate-200 rounded-lg p-4">
            <h3 className="text-slate-900 font-semibold mb-2">Recommended Actions</h3>
            <ul className="text-slate-600 text-sm space-y-1">
              <li>1. Cross-reference CCTV with facial recognition database</li>
              <li>2. Investigate connection to CASE-2025-001</li>
              <li>3. Issue ANPR alert for vehicle AB12 CDE</li>
              <li>4. Interview witnesses at scene</li>
              <li>5. Coordinate with forensics for weapon analysis</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Brain className="w-5 h-5 text-brand-blue mt-0.5" />
          <div>
            <h3 className="text-brand-blue font-semibold mb-1">AI Summary Features</h3>
            <p className="text-slate-600 text-sm">
              Summaries are generated using advanced NLP models trained on police case data.
              All AI-generated content is reviewed and can be edited by investigating officers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
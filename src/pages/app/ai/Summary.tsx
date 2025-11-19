import React from 'react';
import { Brain, FileText, Sparkles } from 'lucide-react';

export default function AISummary() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">AI Incident Summary</h1>
        <p className="text-slate-400">AI-generated summaries and insights for incidents</p>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Generate AI Summary</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Incident/Case ID</label>
            <input
              type="text"
              placeholder="INC-2025-XXXX or CASE-2025-XXX"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            <Brain className="w-4 h-4" />
            Generate Summary
          </button>
        </form>
      </div>

      <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-6 h-6 text-purple-400" />
          <h2 className="text-xl font-bold text-white">AI-Generated Summary</h2>
          <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs font-semibold">
            INC-2025-0421
          </span>
        </div>

        <div className="space-y-4">
          <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">Executive Summary</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Armed robbery incident at Bank Street branch occurred on 15 January 2025 at approximately 14:30. 
              Two suspects entered the premises, one armed with a handgun. Approximately £12,000 stolen. 
              No injuries reported. CCTV footage captured clear images of both suspects. Vehicle registration 
              identified as stolen from previous incident (INC-2025-0418).
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">Key Facts</h3>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• <strong>Time:</strong> 15 Jan 2025, 14:30</li>
              <li>• <strong>Location:</strong> Bank Street, MidShire City Centre</li>
              <li>• <strong>Suspects:</strong> 2 (Male, 25-35 years, armed)</li>
              <li>• <strong>Stolen Amount:</strong> £12,000</li>
              <li>• <strong>Weapon:</strong> Handgun (unconfirmed model)</li>
              <li>• <strong>Vehicle:</strong> Blue Ford Focus, Reg: AB12 CDE (Stolen)</li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">AI Insights</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <p className="text-slate-300">
                  <strong>Pattern Match:</strong> MO similar to 3 previous robberies in the area (CASE-2025-001)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <p className="text-slate-300">
                  <strong>Vehicle Link:</strong> Stolen vehicle connects to INC-2025-0418 (reported 2 days prior)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <p className="text-slate-300">
                  <strong>Suspect Profile:</strong> Facial recognition suggests possible match with known offender database
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">Recommended Actions</h3>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>1. Cross-reference CCTV with facial recognition database</li>
              <li>2. Investigate connection to CASE-2025-001</li>
              <li>3. Issue ANPR alert for vehicle AB12 CDE</li>
              <li>4. Interview witnesses at scene</li>
              <li>5. Coordinate with forensics for weapon analysis</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Brain className="w-5 h-5 text-blue-400 mt-0.5" />
          <div>
            <h3 className="text-blue-400 font-semibold mb-1">AI Summary Features</h3>
            <p className="text-slate-300 text-sm">
              Summaries are generated using advanced NLP models trained on police case data. 
              All AI-generated content is reviewed and can be edited by investigating officers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
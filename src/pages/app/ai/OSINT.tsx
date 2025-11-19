import React from 'react';
import { Globe, Twitter, MessageCircle, AlertCircle } from 'lucide-react';

export default function OSINTFeed() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">OSINT / Social Media Feed</h1>
        <p className="text-slate-400">Open-source intelligence and social media monitoring</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <Globe className="w-8 h-8 text-blue-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">247</div>
          <div className="text-sm text-slate-400">Monitored Sources</div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <AlertCircle className="w-8 h-8 text-yellow-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">18</div>
          <div className="text-sm text-slate-400">Flagged Posts</div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <MessageCircle className="w-8 h-8 text-emerald-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">1,247</div>
          <div className="text-sm text-slate-400">Posts Analyzed (24h)</div>
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Social Media Feed</h2>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm font-semibold">
              Twitter
            </button>
            <button className="px-3 py-1 bg-slate-700 text-slate-300 rounded text-sm font-semibold">
              Facebook
            </button>
            <button className="px-3 py-1 bg-slate-700 text-slate-300 rounded text-sm font-semibold">
              Instagram
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <div className="flex items-start gap-3 mb-3">
              <Twitter className="w-5 h-5 text-blue-400 mt-1" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white font-semibold">@user_alert_247</span>
                  <span className="text-slate-500 text-sm">• 15 min ago</span>
                  <span className="px-2 py-0.5 bg-red-500/20 text-red-400 rounded text-xs font-semibold">
                    High Priority
                  </span>
                </div>
                <p className="text-slate-300 text-sm mb-2">
                  "Just witnessed suspicious activity near Bank Street. Multiple people acting strange around the ATMs. #MidShire #Safety"
                </p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-semibold transition-colors">
                    Create Incident
                  </button>
                  <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-semibold transition-colors">
                    Investigate
                  </button>
                  <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded text-xs font-semibold transition-colors">
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
            <div className="flex items-start gap-3 mb-3">
              <MessageCircle className="w-5 h-5 text-emerald-400 mt-1" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white font-semibold">@concerned_citizen</span>
                  <span className="text-slate-500 text-sm">• 1 hour ago</span>
                  <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded text-xs font-semibold">
                    Medium Priority
                  </span>
                </div>
                <p className="text-slate-300 text-sm mb-2">
                  "Increased police presence in City Centre tonight. Anyone know what's happening? #MidShirePolice"
                </p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-semibold transition-colors">
                    Monitor
                  </button>
                  <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded text-xs font-semibold transition-colors">
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
            <div className="flex items-start gap-3 mb-3">
              <Globe className="w-5 h-5 text-purple-400 mt-1" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white font-semibold">Local News - MidShire Times</span>
                  <span className="text-slate-500 text-sm">• 2 hours ago</span>
                </div>
                <p className="text-slate-300 text-sm mb-2">
                  "Police appeal for witnesses following incident on High Street. Anyone with information should contact 101."
                </p>
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-semibold transition-colors">
                  View Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Trending Topics</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { tag: '#MidShireSafety', mentions: 247, sentiment: 'Neutral' },
            { tag: '#BankStreetIncident', mentions: 142, sentiment: 'Concerned' },
            { tag: '#PolicePresence', mentions: 89, sentiment: 'Positive' }
          ].map((topic, index) => (
            <div key={index} className="bg-slate-900 border border-slate-700 rounded-lg p-4">
              <div className="text-white font-semibold mb-1">{topic.tag}</div>
              <div className="text-slate-400 text-sm mb-2">{topic.mentions} mentions</div>
              <span className={`px-2 py-1 rounded text-xs font-semibold ${
                topic.sentiment === 'Positive' ? 'bg-emerald-500/20 text-emerald-400' :
                topic.sentiment === 'Concerned' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-slate-500/20 text-slate-400'
              }`}>
                {topic.sentiment}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
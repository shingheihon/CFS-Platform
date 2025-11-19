import React from 'react';
import { TrendingUp, Target, Activity, Users } from 'lucide-react';

export default function KPIsAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">KPIs & Analytics</h1>
        <p className="text-slate-400">Key performance indicators and operational metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <Target className="w-8 h-8 text-emerald-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">87.4%</div>
          <div className="text-sm text-slate-400 mb-2">Resolution Rate</div>
          <div className="text-emerald-400 text-xs font-semibold">↑ 3.2% vs last month</div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <Activity className="w-8 h-8 text-blue-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">8.2 min</div>
          <div className="text-sm text-slate-400 mb-2">Avg Response Time</div>
          <div className="text-emerald-400 text-xs font-semibold">↓ 1.1 min faster</div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <Users className="w-8 h-8 text-purple-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">94.2%</div>
          <div className="text-sm text-slate-400 mb-2">Officer Utilization</div>
          <div className="text-emerald-400 text-xs font-semibold">↑ 2.1% improvement</div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <TrendingUp className="w-8 h-8 text-yellow-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">1,247</div>
          <div className="text-sm text-slate-400 mb-2">Incidents (MTD)</div>
          <div className="text-red-400 text-xs font-semibold">↑ 8.3% vs last month</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Performance Trends</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-300">Case Closure Rate</span>
                <span className="text-white font-semibold">85%</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-300">Evidence Processing</span>
                <span className="text-white font-semibold">92%</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-300">Citizen Satisfaction</span>
                <span className="text-white font-semibold">78%</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Monthly Comparison</h2>
          <div className="space-y-3">
            {[
              { metric: 'Total Incidents', current: 1247, previous: 1152, change: '+8.3%' },
              { metric: 'Resolved Cases', current: 1089, previous: 1045, change: '+4.2%' },
              { metric: 'Response Time', current: '8.2 min', previous: '9.3 min', change: '-11.8%' },
              { metric: 'Officer Hours', current: 12840, previous: 12450, change: '+3.1%' }
            ].map((item, index) => (
              <div key={index} className="bg-slate-900 border border-slate-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-300 text-sm">{item.metric}</span>
                  <span className={`text-xs font-semibold ${
                    item.change.startsWith('+') && !item.metric.includes('Time') ? 'text-emerald-400' :
                    item.change.startsWith('-') && item.metric.includes('Time') ? 'text-emerald-400' :
                    'text-red-400'
                  }`}>
                    {item.change}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Current: {item.current}</span>
                  <span>Previous: {item.previous}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
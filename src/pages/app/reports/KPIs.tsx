import React from 'react';
import { TrendingUp, Target, Activity, Users } from 'lucide-react';

export default function KPIsAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">KPIs & Analytics</h1>
        <p className="text-slate-600">Key performance indicators and operational metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <Target className="w-8 h-8 text-brand-blue mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">87.4%</div>
          <div className="text-sm text-slate-500 mb-2">Resolution Rate</div>
          <div className="text-green-600 text-xs font-semibold">↑ 3.2% vs last month</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <Activity className="w-8 h-8 text-brand-blue mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">8.2 min</div>
          <div className="text-sm text-slate-500 mb-2">Avg Response Time</div>
          <div className="text-green-600 text-xs font-semibold">↓ 1.1 min faster</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <Users className="w-8 h-8 text-brand-blue mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">94.2%</div>
          <div className="text-sm text-slate-500 mb-2">Officer Utilization</div>
          <div className="text-green-600 text-xs font-semibold">↑ 2.1% improvement</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <TrendingUp className="w-8 h-8 text-brand-yellow mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">1,247</div>
          <div className="text-sm text-slate-500 mb-2">Incidents (MTD)</div>
          <div className="text-red-600 text-xs font-semibold">↑ 8.3% vs last month</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Performance Trends</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-600">Case Closure Rate</span>
                <span className="text-slate-900 font-semibold">85%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-brand-blue h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-600">Evidence Processing</span>
                <span className="text-slate-900 font-semibold">92%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-brand-blue h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-600">Citizen Satisfaction</span>
                <span className="text-slate-900 font-semibold">78%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-brand-yellow h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Monthly Comparison</h2>
          <div className="space-y-3">
            {[
              { metric: 'Total Incidents', current: 1247, previous: 1152, change: '+8.3%' },
              { metric: 'Resolved Cases', current: 1089, previous: 1045, change: '+4.2%' },
              { metric: 'Response Time', current: '8.2 min', previous: '9.3 min', change: '-11.8%' },
              { metric: 'Officer Hours', current: 12840, previous: 12450, change: '+3.1%' }
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-600 text-sm">{item.metric}</span>
                  <span className={`text-xs font-semibold ${item.change.startsWith('+') && !item.metric.includes('Time') ? 'text-green-600' :
                      item.change.startsWith('-') && item.metric.includes('Time') ? 'text-green-600' :
                        'text-red-600'
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
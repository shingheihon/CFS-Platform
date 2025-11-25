import React from 'react';
import { BarChart3, PieChart, TrendingUp, Calendar } from 'lucide-react';

export default function DashboardAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Analytics Dashboard</h1>
        <p className="text-slate-600">Comprehensive data insights and performance metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-6 h-6 text-brand-blue" />
            <h3 className="text-lg font-semibold text-slate-900">Incident Volume</h3>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">1,247</div>
          <p className="text-sm text-slate-600">Total incidents this month</p>
          <div className="mt-4 text-green-600 text-sm font-semibold">↑ 8.3% from last month</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-brand-blue" />
            <h3 className="text-lg font-semibold text-slate-900">Resolution Rate</h3>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">87.4%</div>
          <p className="text-sm text-slate-600">Cases resolved successfully</p>
          <div className="mt-4 text-green-600 text-sm font-semibold">↑ 3.2% improvement</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-brand-blue" />
            <h3 className="text-lg font-semibold text-slate-900">Avg Response Time</h3>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">8.2 min</div>
          <p className="text-sm text-slate-600">Average time to dispatch</p>
          <div className="mt-4 text-green-600 text-sm font-semibold">↓ 1.1 min faster</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Crime Type Distribution</h2>
          <div className="h-64 flex items-center justify-center text-slate-400">
            <PieChart className="w-16 h-16 mb-2" />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span className="text-sm text-slate-600">Burglary (32%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-sm text-slate-600">Theft (28%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded"></div>
              <span className="text-sm text-slate-600">Assault (18%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span className="text-sm text-slate-600">Other (22%)</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Monthly Trend Analysis</h2>
          <div className="h-64 flex items-center justify-center text-slate-400">
            <BarChart3 className="w-16 h-16 mb-2" />
          </div>
          <p className="text-sm text-slate-600 text-center mt-4">
            Incident trends over the past 12 months showing seasonal patterns
          </p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Key Performance Indicators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl font-bold text-slate-900 mb-1">94.2%</div>
            <div className="text-sm text-slate-600">Officer Utilisation</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 mb-1">2,847</div>
            <div className="text-sm text-slate-600">Evidence Items Logged</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 mb-1">156</div>
            <div className="text-sm text-slate-600">AI Alerts Generated</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 mb-1">99.8%</div>
            <div className="text-sm text-slate-600">System Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );
}
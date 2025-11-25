import React from 'react';
import { Bell, AlertTriangle, TrendingUp, MapPin } from 'lucide-react';

export default function AIAlerts() {
  const alerts = [
    {
      id: 'AI-ALERT-042',
      type: 'Pattern Detection',
      severity: 'High',
      message: 'Unusual spike in burglaries detected in City Centre area',
      time: '15 min ago',
      details: '8 incidents in 48 hours - 300% above baseline'
    },
    {
      id: 'AI-ALERT-041',
      type: 'Suspect Match',
      severity: 'Critical',
      message: 'Facial recognition match for wanted suspect',
      time: '1 hour ago',
      details: 'Match confidence: 94% - Location: High Street CCTV'
    },
    {
      id: 'AI-ALERT-040',
      type: 'Vehicle Alert',
      severity: 'Medium',
      message: 'Stolen vehicle detected on ANPR network',
      time: '2 hours ago',
      details: 'Vehicle: AB12 CDE - Last seen: A40 Junction 5'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">AI Alerts Feed</h1>
        <p className="text-slate-600">Real-time AI-generated alerts and notifications</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-red-50 border border-red-100 rounded-lg p-6">
          <AlertTriangle className="w-8 h-8 text-red-600 mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">4</div>
          <div className="text-sm text-slate-500">Critical Alerts</div>
        </div>
        <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-6">
          <Bell className="w-8 h-8 text-brand-yellow mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">12</div>
          <div className="text-sm text-slate-500">Active Alerts</div>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
          <TrendingUp className="w-8 h-8 text-brand-blue mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">87%</div>
          <div className="text-sm text-slate-500">Accuracy Rate</div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Active Alerts</h2>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`bg-slate-50 border rounded-lg p-4 ${alert.severity === 'Critical' ? 'border-red-200' :
                  alert.severity === 'High' ? 'border-orange-200' :
                    'border-yellow-200'
                }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${alert.severity === 'Critical' ? 'bg-red-100' :
                      alert.severity === 'High' ? 'bg-orange-100' :
                        'bg-yellow-100'
                    }`}>
                    <AlertTriangle className={`w-5 h-5 ${alert.severity === 'Critical' ? 'text-red-600' :
                        alert.severity === 'High' ? 'text-orange-600' :
                          'text-yellow-600'
                      }`} />
                  </div>
                  <div>
                    <div className="text-slate-900 font-semibold mb-1">{alert.message}</div>
                    <div className="text-sm text-slate-500">{alert.type} • {alert.id}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`px-3 py-1 rounded text-xs font-semibold ${alert.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                      alert.severity === 'High' ? 'bg-orange-100 text-orange-700' :
                        'bg-yellow-100 text-yellow-700'
                    }`}>
                    {alert.severity}
                  </span>
                  <span className="text-xs text-slate-500">{alert.time}</span>
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded p-3 mb-3">
                <p className="text-sm text-slate-600">{alert.details}</p>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-brand-blue hover:bg-brand-blue/90 text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
                  Investigate
                </button>
                <button className="flex-1 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded text-sm font-semibold transition-colors">
                  View Details
                </button>
                <button className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 px-4 py-2 rounded text-sm font-semibold transition-colors">
                  Dismiss
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Alert Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Pattern Detection', count: 8, icon: TrendingUp },
            { name: 'Facial Recognition', count: 3, icon: Bell },
            { name: 'Vehicle Alerts', count: 5, icon: MapPin },
            { name: 'Anomaly Detection', count: 6, icon: AlertTriangle }
          ].map((category, index) => (
            <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <category.icon className="w-6 h-6 text-brand-blue mb-2" />
              <div className="text-xl font-bold text-slate-900 mb-1">{category.count}</div>
              <div className="text-sm text-slate-500">{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
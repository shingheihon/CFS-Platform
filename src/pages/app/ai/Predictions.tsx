import React from 'react';
import { TrendingUp, MapPin, Calendar, AlertTriangle } from 'lucide-react';

export default function CrimePredictions() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Crime Forecasting</h1>
        <p className="text-slate-600">Predictive analytics for crime trends and resource allocation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <TrendingUp className="w-8 h-8 text-brand-blue mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">+12%</div>
          <div className="text-sm text-slate-500">Predicted Increase (Next 7 Days)</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <MapPin className="w-8 h-8 text-red-600 mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">3</div>
          <div className="text-sm text-slate-500">High-Risk Areas</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
          <Calendar className="w-8 h-8 text-brand-blue mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">Fri-Sun</div>
          <div className="text-sm text-slate-500">Peak Risk Period</div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">7-Day Forecast</h2>
        <div className="space-y-4">
          {[
            { day: 'Monday', risk: 'Low', incidents: 8, confidence: 87 },
            { day: 'Tuesday', risk: 'Low', incidents: 9, confidence: 85 },
            { day: 'Wednesday', risk: 'Medium', incidents: 12, confidence: 82 },
            { day: 'Thursday', risk: 'Medium', incidents: 14, confidence: 80 },
            { day: 'Friday', risk: 'High', incidents: 18, confidence: 78 },
            { day: 'Saturday', risk: 'High', incidents: 22, confidence: 75 },
            { day: 'Sunday', risk: 'High', incidents: 20, confidence: 76 }
          ].map((forecast, index) => (
            <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-4">
                  <div className="text-slate-900 font-semibold w-24">{forecast.day}</div>
                  <span className={`px-3 py-1 rounded text-xs font-semibold ${forecast.risk === 'High' ? 'bg-red-100 text-red-700' :
                      forecast.risk === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                    }`}>
                    {forecast.risk} Risk
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-slate-900 font-bold">{forecast.incidents}</div>
                    <div className="text-xs text-slate-500">Predicted Incidents</div>
                  </div>
                  <div className="text-right">
                    <div className="text-brand-blue font-bold">{forecast.confidence}%</div>
                    <div className="text-xs text-slate-500">Confidence</div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${forecast.risk === 'High' ? 'bg-red-600' :
                      forecast.risk === 'Medium' ? 'bg-brand-yellow' :
                        'bg-green-600'
                    }`}
                  style={{ width: `${(forecast.incidents / 25) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Recommended Resource Allocation</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { area: 'City Centre', officers: 12, priority: 'High' },
            { area: 'Industrial Estate', officers: 6, priority: 'Medium' },
            { area: 'Residential North', officers: 8, priority: 'Medium' }
          ].map((allocation, index) => (
            <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-slate-900 font-semibold">{allocation.area}</h3>
                <span className={`px-2 py-1 rounded text-xs font-semibold ${allocation.priority === 'High' ? 'bg-red-100 text-red-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                  {allocation.priority}
                </span>
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">{allocation.officers}</div>
              <div className="text-sm text-slate-500">Recommended Officers</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-brand-blue mt-0.5" />
          <div>
            <h3 className="text-brand-blue font-semibold mb-1">Prediction Methodology</h3>
            <p className="text-slate-600 text-sm">
              Forecasts are generated using machine learning models trained on historical crime data,
              weather patterns, events, and socioeconomic factors. Predictions should be used as guidance
              alongside operational judgment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
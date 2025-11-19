import React from 'react';
import { Shield, CheckCircle, AlertTriangle } from 'lucide-react';

export default function GDPRCompliance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">GDPR Compliance Checks</h1>
        <p className="text-slate-400">Data protection and privacy compliance monitoring</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
          <CheckCircle className="w-8 h-8 text-emerald-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">98.7%</div>
          <div className="text-sm text-slate-400">Compliance Score</div>
        </div>
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
          <Shield className="w-8 h-8 text-blue-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">2,847</div>
          <div className="text-sm text-slate-400">Protected Records</div>
        </div>
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
          <AlertTriangle className="w-8 h-8 text-yellow-400 mb-3" />
          <div className="text-2xl font-bold text-white mb-1">3</div>
          <div className="text-sm text-slate-400">Pending Reviews</div>
        </div>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Compliance Checklist</h2>
        <div className="space-y-3">
          {[
            { item: 'Data Encryption at Rest', status: 'Compliant', details: 'AES-256 encryption enabled' },
            { item: 'Data Encryption in Transit', status: 'Compliant', details: 'TLS 1.3 enforced' },
            { item: 'Access Control & Authentication', status: 'Compliant', details: 'MFA enabled for all users' },
            { item: 'Data Retention Policies', status: 'Compliant', details: 'Auto-deletion after 7 years' },
            { item: 'Right to be Forgotten', status: 'Compliant', details: 'Automated deletion workflow' },
            { item: 'Data Subject Access Requests', status: 'Review', details: '3 pending requests' },
            { item: 'Breach Notification Procedures', status: 'Compliant', details: '72-hour notification protocol' },
            { item: 'Privacy Impact Assessments', status: 'Compliant', details: 'Last review: 10 Jan 2025' }
          ].map((check, index) => (
            <div key={index} className="bg-slate-900 border border-slate-700 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-white font-semibold mb-1">{check.item}</div>
                  <div className="text-sm text-slate-400">{check.details}</div>
                </div>
                <span className={`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1 ${
                  check.status === 'Compliant' ? 'bg-emerald-500/20 text-emerald-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {check.status === 'Compliant' ? <CheckCircle className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                  {check.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-emerald-400 mt-0.5" />
          <div>
            <h3 className="text-emerald-400 font-semibold mb-1">GDPR Compliance Status</h3>
            <p className="text-slate-300 text-sm">
              System is fully compliant with GDPR regulations. All data processing activities are documented 
              and regularly audited. Last compliance audit: 10 January 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
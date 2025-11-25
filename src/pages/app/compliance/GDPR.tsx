import React from 'react';
import { Shield, CheckCircle, AlertTriangle, FileText, Clock } from 'lucide-react';

export default function GDPRCompliance() {
  const auditLogs = [
    { user: 'DI Mitchell', action: 'searched Person ID 4521', timestamp: '16 Jan 2025, 14:23', type: 'search' },
    { user: 'PC Wilson', action: 'viewed Evidence EVD-2025-0042', timestamp: '16 Jan 2025, 13:15', type: 'view' },
    { user: 'System Admin', action: 'exported GDPR compliance report', timestamp: '16 Jan 2025, 09:30', type: 'export' },
    { user: 'DI Thompson', action: 'accessed Case CASE-2025-001', timestamp: '15 Jan 2025, 16:45', type: 'access' },
    { user: 'PC Davis', action: 'modified Incident INC-2025-0421', timestamp: '15 Jan 2025, 14:12', type: 'modify' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">GDPR Compliance Checks</h1>
        <p className="text-slate-600">Data protection and privacy compliance monitoring</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 shadow-sm">
          <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">98.7%</div>
          <div className="text-sm text-slate-600">Compliance Score</div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-sm">
          <Shield className="w-8 h-8 text-brand-blue mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">2,847</div>
          <div className="text-sm text-slate-600">Protected Records</div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 shadow-sm">
          <AlertTriangle className="w-8 h-8 text-brand-yellow mb-3" />
          <div className="text-2xl font-bold text-slate-900 mb-1">3</div>
          <div className="text-sm text-slate-600">Pending Reviews</div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Compliance Checklist</h2>
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
            <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-slate-900 font-semibold mb-1">{check.item}</div>
                  <div className="text-sm text-slate-600">{check.details}</div>
                </div>
                <span className={`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1 ${check.status === 'Compliant' ? 'bg-green-100 text-green-700' :
                  'bg-yellow-100 text-yellow-700'
                  }`}>
                  {check.status === 'Compliant' ? <CheckCircle className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                  {check.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Audit Log Section */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-brand-blue" />
          <h2 className="text-xl font-bold text-slate-900">Audit Log</h2>
          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
            Real-time Monitoring
          </span>
        </div>
        <p className="text-slate-600 text-sm mb-4">
          All data access and modifications are logged for GDPR compliance and security auditing.
        </p>
        <div className="space-y-2">
          {auditLogs.map((log, index) => (
            <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-3 hover:bg-slate-100 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-slate-900 font-semibold">{log.user}</span>
                    <span className="text-slate-600">{log.action}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock className="w-3 h-3" />
                    <span>{log.timestamp}</span>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${log.type === 'search' ? 'bg-purple-100 text-purple-700' :
                    log.type === 'view' ? 'bg-blue-100 text-blue-700' :
                      log.type === 'export' ? 'bg-orange-100 text-orange-700' :
                        log.type === 'access' ? 'bg-green-100 text-green-700' :
                          'bg-yellow-100 text-yellow-700'
                  }`}>
                  {log.type}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-slate-200">
          <button className="text-brand-blue hover:text-brand-blue/80 text-sm font-semibold">
            View Full Audit Trail →
          </button>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-green-600 mt-0.5" />
          <div>
            <h3 className="text-green-700 font-semibold mb-1">GDPR Compliance Status</h3>
            <p className="text-slate-700 text-sm">
              System is fully compliant with GDPR regulations. All data processing activities are documented
              and regularly audited. Last compliance audit: 10 January 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
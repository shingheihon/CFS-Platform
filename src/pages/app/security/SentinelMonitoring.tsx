import React, { useState } from 'react';
import { Shield, Activity, AlertTriangle, Eye, Search, Database, Clock, User, TrendingUp } from 'lucide-react';

interface SecurityEvent {
    id: string;
    timestamp: string;
    eventType: 'Login' | 'Search' | 'Access Denied' | 'Data Export' | 'Modification';
    user: string;
    action: string;
    resource: string;
    ipAddress: string;
    riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
    status: 'Success' | 'Failed' | 'Blocked';
}

interface ThreatAlert {
    id: string;
    severity: 'Low' | 'Medium' | 'High' | 'Critical';
    type: string;
    user: string;
    description: string;
    timestamp: string;
    status: 'Active' | 'Investigating' | 'Resolved';
}

export default function SentinelMonitoring() {
    const [timeRange, setTimeRange] = useState('24h');

    const recentEvents: SecurityEvent[] = [
        {
            id: 'EVT-001',
            timestamp: '2025-01-25 15:23:14',
            eventType: 'Search',
            user: 'PC Wilson (Badge #4521)',
            action: 'Searched Person ID 8842',
            resource: 'PNC Database',
            ipAddress: '192.168.1.45',
            riskLevel: 'Low',
            status: 'Success'
        },
        {
            id: 'EVT-002',
            timestamp: '2025-01-25 15:19:08',
            eventType: 'Access Denied',
            user: 'Officer Smith (Badge #4589)',
            action: 'Attempted to access restricted case',
            resource: 'CASE-2025-CLASSIFIED',
            ipAddress: '192.168.1.67',
            riskLevel: 'High',
            status: 'Blocked'
        },
        {
            id: 'EVT-003',
            timestamp: '2025-01-25 15:15:32',
            eventType: 'Login',
            user: 'DI Mitchell (Badge #4500)',
            action: 'Successful MFA login',
            resource: 'CFS Platform',
            ipAddress: '192.168.1.23',
            riskLevel: 'Low',
            status: 'Success'
        },
        {
            id: 'EVT-004',
            timestamp: '2025-01-25 15:12:45',
            eventType: 'Data Export',
            user: 'PC Thompson (Badge #4522)',
            action: 'Exported evidence metadata',
            resource: 'Evidence Store',
            ipAddress: '192.168.1.34',
            riskLevel: 'Medium',
            status: 'Success'
        },
        {
            id: 'EVT-005',
            timestamp: '2025-01-25 15:08:19',
            eventType: 'Search',
            user: 'PC Davis (Badge #4524)',
            action: 'Multiple rapid searches (Anomaly)',
            resource: 'Local DB',
            ipAddress: '192.168.1.89',
            riskLevel: 'High',
            status: 'Success'
        }
    ];

    const threatAlerts: ThreatAlert[] = [
        {
            id: 'ALERT-001',
            severity: 'High',
            type: 'Unauthorised Access Attempt',
            user: 'Officer Smith (Badge #4589)',
            description: 'Multiple failed attempts to access classified case files outside authorised hours',
            timestamp: '2025-01-25 15:19:08',
            status: 'Investigating'
        },
        {
            id: 'ALERT-002',
            severity: 'Medium',
            type: 'Anomalous Behavior',
            user: 'PC Davis (Badge #4524)',
            description: '15 person lookups in 3 minutes - possible personal misuse',
            timestamp: '2025-01-25 15:08:19',
            status: 'Active'
        },
        {
            id: 'ALERT-003',
            severity: 'Low',
            type: 'Unusual Login Location',
            user: 'PC Brown (Badge #4523)',
            description: 'Login from new IP address outside normal pattern',
            timestamp: '2025-01-25 14:45:22',
            status: 'Resolved'
        }
    ];

    const getEventTypeColor = (type: string) => {
        switch (type) {
            case 'Login':
                return 'bg-blue-100 text-blue-700';
            case 'Search':
                return 'bg-purple-100 text-purple-700';
            case 'Access Denied':
                return 'bg-red-100 text-red-700';
            case 'Data Export':
                return 'bg-orange-100 text-orange-700';
            case 'Modification':
                return 'bg-yellow-100 text-yellow-700';
            default:
                return 'bg-slate-100 text-slate-700';
        }
    };

    const getRiskColor = (risk: string) => {
        switch (risk) {
            case 'Critical':
                return 'bg-red-600 text-white';
            case 'High':
                return 'bg-orange-500 text-white';
            case 'Medium':
                return 'bg-yellow-500 text-white';
            case 'Low':
                return 'bg-green-500 text-white';
            default:
                return 'bg-slate-500 text-white';
        }
    };

    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case 'Critical':
                return 'bg-red-100 text-red-700 border-red-300';
            case 'High':
                return 'bg-orange-100 text-orange-700 border-orange-300';
            case 'Medium':
                return 'bg-yellow-100 text-yellow-700 border-yellow-300';
            case 'Low':
                return 'bg-blue-100 text-blue-700 border-blue-300';
            default:
                return 'bg-slate-100 text-slate-700 border-slate-300';
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Sentinel Security Monitoring</h1>
                <p className="text-slate-600">Microsoft Sentinel SIEM - Real-time security telemetry and compliance</p>
            </div>

            {/* Sentinel Integration Banner */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-blue-600" />
                    <div>
                        <h3 className="text-blue-900 font-bold text-sm">MICROSOFT SENTINEL SIEM ENABLED</h3>
                    </div>
                </div>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <Activity className="w-6 h-6 text-brand-blue" />
                        <span className="text-xs font-semibold text-green-600">+12%</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-900">2,847</div>
                    <div className="text-xs text-slate-600">Events (24h)</div>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <Eye className="w-6 h-6 text-purple-600" />
                        <span className="text-xs font-semibold text-green-600">Normal</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-900">1,542</div>
                    <div className="text-xs text-slate-600">User Searches</div>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <AlertTriangle className="w-6 h-6 text-orange-600" />
                        <span className="text-xs font-semibold text-orange-600">+3</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-900">8</div>
                    <div className="text-xs text-slate-600">Failed Access</div>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <TrendingUp className="w-6 h-6 text-red-600" />
                        <span className="text-xs font-semibold text-red-600">Active</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-900">2</div>
                    <div className="text-xs text-slate-600">Threat Alerts</div>
                </div>
            </div>

            {/* Threat Alerts */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                        Insider Threat Alerts
                    </h2>
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">
                        {threatAlerts.filter(a => a.status === 'Active').length} Active
                    </span>
                </div>

                <div className="space-y-3">
                    {threatAlerts.map((alert) => (
                        <div key={alert.id} className={`border-2 rounded-lg p-4 ${getSeverityColor(alert.severity)}`}>
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-bold">{alert.type}</h3>
                                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${getRiskColor(alert.severity)}`}>
                                            {alert.severity}
                                        </span>
                                    </div>
                                    <p className="text-sm font-semibold mb-1">{alert.user}</p>
                                    <p className="text-sm">{alert.description}</p>
                                </div>
                                <span className={`px-3 py-1 rounded text-xs font-semibold ${alert.status === 'Active' ? 'bg-red-600 text-white' :
                                    alert.status === 'Investigating' ? 'bg-yellow-600 text-white' :
                                        'bg-green-600 text-white'
                                    }`}>
                                    {alert.status}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-xs mt-2 pt-2 border-t opacity-75">
                                <Clock className="w-3 h-3" />
                                <span>{alert.timestamp}</span>
                                <span className="mx-2">•</span>
                                <span className="font-mono">{alert.id}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Security Events */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <Database className="w-5 h-5 text-brand-blue" />
                        Security Event Stream
                    </h2>
                    <select
                        value={timeRange}
                        onChange={(e) => setTimeRange(e.target.value)}
                        className="bg-slate-50 border border-slate-200 rounded px-3 py-1 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    >
                        <option value="1h">Last Hour</option>
                        <option value="24h">Last 24 Hours</option>
                        <option value="7d">Last 7 Days</option>
                    </select>
                </div>

                <div className="space-y-2">
                    {recentEvents.map((event) => (
                        <div key={event.id} className="bg-slate-50 border border-slate-200 rounded-lg p-3 hover:bg-slate-100 transition-colors">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className={`px-2 py-0.5 rounded text-xs font-semibold ${getEventTypeColor(event.eventType)}`}>
                                            {event.eventType}
                                        </span>
                                        <span className="text-sm font-semibold text-slate-900">{event.action}</span>
                                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${getRiskColor(event.riskLevel)}`}>
                                            {event.riskLevel}
                                        </span>
                                    </div>
                                    <div className="grid md:grid-cols-4 gap-2 text-xs text-slate-600 mt-2">
                                        <div>
                                            <User className="w-3 h-3 inline mr-1" />
                                            {event.user}
                                        </div>
                                        <div>
                                            <Database className="w-3 h-3 inline mr-1" />
                                            {event.resource}
                                        </div>
                                        <div>
                                            <span className="font-mono">{event.ipAddress}</span>
                                        </div>
                                        <div>
                                            <Clock className="w-3 h-3 inline mr-1" />
                                            {event.timestamp}
                                        </div>
                                    </div>
                                </div>
                                <span className={`px-2 py-1 rounded text-xs font-semibold ml-4 ${event.status === 'Success' ? 'bg-green-100 text-green-700' :
                                    event.status === 'Failed' ? 'bg-red-100 text-red-700' :
                                        'bg-orange-100 text-orange-700'
                                    }`}>
                                    {event.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Compliance & Audit Info */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-green-900 font-semibold mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Immutable Audit Trail & Compliance
                </h3>
                <ul className="text-green-800 text-sm space-y-1">
                    <li>• <strong>Immutable Logging:</strong> All events written to Azure Sentinel with blockchain-style integrity</li>
                    <li>• <strong>Compliance Reporting:</strong> Automatic GDPR, SOC 2, and ISO 27001 audit trail generation</li>
                    <li>• <strong>Insider Threat Detection:</strong> AI-powered anomaly detection for unauthorised data access</li>
                    <li>• <strong>Real-time Alerting:</strong> Instant notifications for suspicious behavior patterns</li>
                    <li>• <strong>Retention:</strong> 7-year tamper-proof log retention in Azure storage</li>
                </ul>
            </div>
        </div>
    );
}

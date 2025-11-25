import React, { useState } from 'react';
import { Wifi, WifiOff, AlertTriangle } from 'lucide-react';

export default function NetworkStatus() {
    const [isOnline, setIsOnline] = useState(true);

    return (
        <div className="space-y-4">
            {/* Network Status Card */}
            <div className={`border-2 rounded-lg p-4 transition-all ${isOnline
                    ? 'bg-green-50 border-green-300'
                    : 'bg-amber-50 border-amber-300'
                }`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {isOnline ? (
                            <Wifi className="w-6 h-6 text-green-600" />
                        ) : (
                            <WifiOff className="w-6 h-6 text-amber-600" />
                        )}
                        <div>
                            <h3 className={`font-bold text-sm ${isOnline ? 'text-green-900' : 'text-amber-900'
                                }`}>
                                {isOnline ? 'Connected to Mainframe' : 'Offline - Edge Mode'}
                            </h3>
                            <p className={`text-xs mt-0.5 ${isOnline ? 'text-green-700' : 'text-amber-700'
                                }`}>
                                {isOnline
                                    ? 'ISDN link active • All systems operational'
                                    : 'Using local cache • Limited functionality'}
                            </p>
                        </div>
                    </div>

                    {/* Toggle Switch */}
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-slate-600">
                            {isOnline ? 'Online' : 'Offline'}
                        </span>
                        <button
                            onClick={() => setIsOnline(!isOnline)}
                            className={`relative w-14 h-7 rounded-full transition-colors ${isOnline ? 'bg-green-500' : 'bg-amber-500'
                                }`}
                        >
                            <div
                                className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${isOnline ? 'right-0.5' : 'left-0.5'
                                    }`}
                            />
                        </button>
                    </div>
                </div>

                {/* Signal Strength Indicator */}
                <div className="mt-3 flex items-center gap-1">
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((bar) => (
                            <div
                                key={bar}
                                className={`w-1.5 rounded-sm transition-all ${isOnline
                                        ? bar <= 5 ? 'bg-green-600 h-' + (bar * 2) : 'bg-slate-300 h-2'
                                        : bar <= 2 ? 'bg-amber-600 h-' + (bar * 2) : 'bg-slate-300 h-2'
                                    }`}
                                style={{ height: isOnline ? `${bar * 4}px` : (bar <= 2 ? `${bar * 4}px` : '8px') }}
                            />
                        ))}
                    </div>
                    <span className={`text-xs font-medium ml-2 ${isOnline ? 'text-green-700' : 'text-amber-700'
                        }`}>
                        {isOnline ? 'Signal: Strong (5/5)' : 'Signal: Weak (2/5)'}
                    </span>
                </div>
            </div>

            {/* Offline Warning Banner */}
            {!isOnline && (
                <div className="bg-amber-100 border-2 border-amber-400 rounded-lg p-4 animate-pulse">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
                        <div>
                            <h3 className="text-amber-900 font-bold text-sm">
                                ⚠ NETWORK LOST. SWITCHING TO LOCAL CACHE.
                            </h3>
                            <p className="text-amber-800 text-xs mt-1">
                                Connection to mainframe systems unavailable. Operating in offline mode using locally cached data.
                                Some features may be limited. Data will synchronise when connection is restored.
                            </p>
                            <div className="mt-2 flex gap-2">
                                <button
                                    onClick={() => setIsOnline(true)}
                                    className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1 rounded text-xs font-semibold transition-colors"
                                >
                                    Retry Connection
                                </button>
                                <button className="bg-white hover:bg-amber-50 text-amber-900 border border-amber-300 px-3 py-1 rounded text-xs font-semibold transition-colors">
                                    View Cached Data
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Connection Details */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                <h4 className="text-slate-700 font-semibold text-xs mb-2">Connection Details</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                        <span className="text-slate-500">Protocol:</span>
                        <span className="ml-2 text-slate-900 font-mono">
                            {isOnline ? 'ISDN' : 'N/A'}
                        </span>
                    </div>
                    <div>
                        <span className="text-slate-500">Latency:</span>
                        <span className="ml-2 text-slate-900 font-mono">
                            {isOnline ? '~1500ms' : '---'}
                        </span>
                    </div>
                    <div>
                        <span className="text-slate-500">Last Sync:</span>
                        <span className="ml-2 text-slate-900 font-mono">
                            {isOnline ? new Date().toLocaleTimeString() : 'Unavailable'}
                        </span>
                    </div>
                    <div>
                        <span className="text-slate-500">Mode:</span>
                        <span className="ml-2 text-slate-900 font-mono">
                            {isOnline ? 'Online' : 'Edge'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

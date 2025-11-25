import React, { useState } from 'react';
import { FileText, MapPin, Camera, Mic, Users, Clock, AlertCircle } from 'lucide-react';

export default function IncidentReporting() {
    const [formData, setFormData] = useState({
        incidentType: '',
        priority: '',
        location: '',
        description: '',
        suspectCount: '',
        victimCount: '',
        witnessCount: ''
    });

    const incidentTypes = [
        'Burglary',
        'Robbery',
        'Assault',
        'Theft',
        'Domestic Disturbance',
        'Traffic Collision',
        'Shoplifting',
        'Criminal Damage',
        'Public Order Offence',
        'Drug Offence',
        'Other'
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Incident report submitted:', formData);
        // Simulate successful submission
        alert('Incident report submitted successfully!');
    };

    const newLocal = <h3 className="text-green-900 font-semibold mb-2 flex items-center gap-2">
        <AlertCircle className="w-5 h-5" />
        Workflow Information
    </h3>;
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Incident Reporting</h1>
                <p className="text-slate-600">Submit new incident reports directly from the field</p>
            </div>

            {/* Main Form */}
            <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-6">Submit Incident Report</h2>

                {/* Basic Information */}
                <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Incident Type <span className="text-red-600">*</span>
                            </label>
                            <select
                                required
                                value={formData.incidentType}
                                onChange={(e) => setFormData({ ...formData, incidentType: e.target.value })}
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                            >
                                <option value="">Select incident type...</option>
                                {incidentTypes.map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Priority Level <span className="text-red-600">*</span>
                            </label>
                            <select
                                required
                                value={formData.priority}
                                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                            >
                                <option value="">Select priority...</option>
                                <option value="critical">Critical</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            <MapPin className="w-4 h-4 inline mr-1" />
                            Location <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            placeholder="Enter street address or landmark..."
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                        />
                        <p className="text-xs text-slate-500 mt-2">
                            <strong>Auto-detected GPS:</strong> 53.4808° N, -2.2426° W (Manchester City Centre)
                        </p>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Incident Description <span className="text-red-600">*</span>
                        </label>
                        <textarea
                            required
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            rows={6}
                            placeholder="Provide detailed description of the incident, including what happened, when it occurred, and any relevant details..."
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                        />
                        <p className="text-xs text-slate-500 mt-1">
                            Be as detailed as possible. Include names, descriptions, vehicles, weapons, etc.
                        </p>
                    </div>

                    {/* People Involved */}
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                        <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            People Involved
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-slate-600 mb-2">Suspects</label>
                                <input
                                    type="number"
                                    min="0"
                                    value={formData.suspectCount}
                                    onChange={(e) => setFormData({ ...formData, suspectCount: e.target.value })}
                                    placeholder="0"
                                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-slate-600 mb-2">Victims</label>
                                <input
                                    type="number"
                                    min="0"
                                    value={formData.victimCount}
                                    onChange={(e) => setFormData({ ...formData, victimCount: e.target.value })}
                                    placeholder="0"
                                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-slate-600 mb-2">Witnesses</label>
                                <input
                                    type="number"
                                    min="0"
                                    value={formData.witnessCount}
                                    onChange={(e) => setFormData({ ...formData, witnessCount: e.target.value })}
                                    placeholder="0"
                                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Evidence Attachment */}
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                        <h3 className="text-sm font-semibold text-slate-700 mb-4">Attach Immediate Evidence (Optional)</h3>
                        <div className="grid md:grid-cols-3 gap-3">
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 bg-white border border-slate-300 hover:border-brand-blue hover:bg-blue-50 text-slate-700 px-4 py-3 rounded-lg transition-colors"
                            >
                                <Camera className="w-5 h-5 text-brand-blue" />
                                <span className="text-sm font-medium">Take Photo</span>
                            </button>
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 bg-white border border-slate-300 hover:border-brand-blue hover:bg-blue-50 text-slate-700 px-4 py-3 rounded-lg transition-colors"
                            >
                                <Mic className="w-5 h-5 text-brand-blue" />
                                <span className="text-sm font-medium">Record Audio</span>
                            </button>
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 bg-white border border-slate-300 hover:border-brand-blue hover:bg-blue-50 text-slate-700 px-4 py-3 rounded-lg transition-colors"
                            >
                                <FileText className="w-5 h-5 text-brand-blue" />
                                <span className="text-sm font-medium">Attach File</span>
                            </button>
                        </div>
                        <p className="text-xs text-slate-500 mt-3">
                            Evidence will be automatically sent to Digital Custody for cryptographic hashing and blockchain verification.
                        </p>
                    </div>

                    {/* Metadata */}
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                            <Clock className="w-4 h-4 text-amber-600 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-semibold text-amber-900 mb-2">Auto-Tagged Metadata</h4>
                                <div className="grid md:grid-cols-2 gap-2 text-xs">
                                    <div>
                                        <span className="font-semibold text-amber-800">Timestamp:</span>
                                        <span className="ml-2 text-amber-700">{new Date().toLocaleString()}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-amber-800">Officer:</span>
                                        <span className="ml-2 text-amber-700">PC Wilson (Badge #4521)</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-amber-800">GPS Coordinates:</span>
                                        <span className="ml-2 text-amber-700 font-mono">53.4808° N, -2.2426° W</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-amber-800">Device ID:</span>
                                        <span className="ml-2 text-amber-700 font-mono">MDT-UK-4521</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200">
                    <button
                        type="button"
                        className="bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Save as Draft
                    </button>
                    <button
                        type="submit"
                        className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
                    >
                        <FileText className="w-5 h-5" />
                        Submit Report
                    </button>
                </div>
            </form>
        </div>
    );
}

import React from 'react';
import { AlertCircle, MapPin, Phone, User } from 'lucide-react';

export default function IncidentRegistration() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Incident Registration</h1>
        <p className="text-slate-400">Register new incidents from calls, reports, or field observations</p>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Incident Type</label>
              <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Select incident type...</option>
                <option>Burglary</option>
                <option>Theft</option>
                <option>Assault</option>
                <option>Traffic Collision</option>
                <option>Domestic Disturbance</option>
                <option>Suspicious Activity</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Priority Level</label>
              <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Select priority...</option>
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Location
            </label>
            <input
              type="text"
              placeholder="Enter incident location..."
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
            <textarea
              rows={4}
              placeholder="Provide detailed description of the incident..."
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                <User className="w-4 h-4" />
                Reporter Name
              </label>
              <input
                type="text"
                placeholder="Name of person reporting..."
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="Contact phone number..."
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Register Incident
            </button>
            <button
              type="button"
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Save as Draft
            </button>
            <button
              type="button"
              className="text-slate-400 hover:text-white px-6 py-2 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-400 mt-0.5" />
          <div>
            <h3 className="text-blue-400 font-semibold mb-1">Registration Guidelines</h3>
            <p className="text-slate-300 text-sm">
              Ensure all mandatory fields are completed. For critical incidents, dispatch will be automatically notified. 
              All incident data is encrypted and logged for audit compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
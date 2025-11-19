import React from 'react';
import { CheckSquare, Clock, User } from 'lucide-react';

export default function TaskAssignment() {
  const tasks = [
    { id: 'TASK-001', title: 'Interview witness at 42 Oak Street', assignee: 'PC Wilson', priority: 'High', due: '2 hours', status: 'In Progress' },
    { id: 'TASK-002', title: 'Collect CCTV footage from Bank Street', assignee: 'PC Thompson', priority: 'Critical', due: '1 hour', status: 'Pending' },
    { id: 'TASK-003', title: 'Complete incident report for INC-2025-0420', assignee: 'DI Mitchell', priority: 'Medium', due: '4 hours', status: 'Pending' },
    { id: 'TASK-004', title: 'Follow up with forensics on evidence', assignee: 'PC Brown', priority: 'Low', due: '1 day', status: 'Completed' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Task Assignment</h1>
        <p className="text-slate-400">Assign and track tasks for incident investigation</p>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Create New Task</h2>
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Task Title</label>
              <input
                type="text"
                placeholder="Enter task description..."
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Related Incident</label>
              <input
                type="text"
                placeholder="INC-2025-XXXX"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Assign To</label>
              <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Select officer...</option>
                <option>PC Wilson</option>
                <option>PC Thompson</option>
                <option>DI Mitchell</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Priority</label>
              <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Due Date</label>
              <input
                type="datetime-local"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Create Task
          </button>
        </form>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Active Tasks</h2>
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="bg-slate-900 border border-slate-700 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3">
                  <CheckSquare className={`w-5 h-5 mt-0.5 ${task.status === 'Completed' ? 'text-emerald-400' : 'text-slate-500'}`} />
                  <div>
                    <div className="text-white font-semibold mb-1">{task.title}</div>
                    <div className="text-sm text-slate-400">{task.id}</div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded text-xs font-semibold ${
                  task.priority === 'Critical' ? 'bg-red-500/20 text-red-400' :
                  task.priority === 'High' ? 'bg-orange-500/20 text-orange-400' :
                  task.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {task.priority}
                </span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4 text-slate-400">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {task.assignee}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Due in {task.due}
                  </span>
                </div>
                <span className={`font-semibold ${
                  task.status === 'Completed' ? 'text-emerald-400' :
                  task.status === 'In Progress' ? 'text-blue-400' :
                  'text-yellow-400'
                }`}>
                  {task.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
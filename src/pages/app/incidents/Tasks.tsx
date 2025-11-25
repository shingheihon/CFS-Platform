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
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Task Assignment</h1>
        <p className="text-slate-600">Assign and track tasks for incident investigation</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Create New Task</h2>
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Task Title</label>
              <input
                type="text"
                placeholder="Enter task description..."
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Related Incident</label>
              <input
                type="text"
                placeholder="INC-2025-XXXX"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Assign To</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue">
                <option>Select officer...</option>
                <option>PC Wilson</option>
                <option>PC Thompson</option>
                <option>DI Mitchell</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Priority</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue">
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Due Date</label>
              <input
                type="datetime-local"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Create Task
          </button>
        </form>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Active Tasks</h2>
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3">
                  <CheckSquare className={`w-5 h-5 mt-0.5 ${task.status === 'Completed' ? 'text-green-600' : 'text-slate-400'}`} />
                  <div>
                    <div className="text-slate-900 font-semibold mb-1">{task.title}</div>
                    <div className="text-sm text-slate-500">{task.id}</div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded text-xs font-semibold ${task.priority === 'Critical' ? 'bg-red-100 text-red-700' :
                    task.priority === 'High' ? 'bg-orange-100 text-orange-700' :
                      task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                  }`}>
                  {task.priority}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4 text-slate-500">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {task.assignee}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Due in {task.due}
                  </span>
                </div>
                <span className={`font-semibold ${task.status === 'Completed' ? 'text-green-600' :
                    task.status === 'In Progress' ? 'text-blue-600' :
                      'text-yellow-600'
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
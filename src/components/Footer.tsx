import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue border-t border-brand-blue/80 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><a href="#" className="hover:text-brand-yellow">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-yellow">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-yellow">GDPR Compliance</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><a href="#" className="hover:text-brand-yellow">Documentation</a></li>
              <li><a href="#" className="hover:text-brand-yellow">API Reference</a></li>
              <li><a href="#" className="hover:text-brand-yellow">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>Emergency: 999</li>
              <li>Non-Emergency: 101</li>
              <li>support@midshire.police.uk</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-blue/80 pt-6 text-center text-slate-300 text-sm">
          <p>© 2025 MidShire Police. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
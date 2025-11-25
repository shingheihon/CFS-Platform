import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-blue border-b border-brand-blue/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-brand-yellow" />
          <div>
            <div className="text-white font-bold text-lg">MidShire Police</div>
            <div className="text-brand-yellow text-xs uppercase tracking-wider">Crime Fighting System</div>
          </div>
        </Link>
        <Link
          to="/app/dashboard"
          className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-blue px-6 py-2 rounded-lg font-semibold transition-colors"
        >
          Demo Access
        </Link>
      </div>
    </header>
  );
};

export default Header;
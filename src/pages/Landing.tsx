import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Brain, FileCheck, Lock, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 flex flex-col">
      <Header />

      <main className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
                <span className="text-emerald-400 text-sm font-medium">Next-Generation Law Enforcement Platform</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Crime Fighting System
                <span className="block text-emerald-400 mt-2">Real-time Intelligence</span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Integrate data. Detect patterns. Act faster. Empowering MidShire Police with unified intelligence, AI-assisted analysis, and secure case management.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <Brain className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Automated Threat Detection</h3>
                    <p className="text-slate-400 text-sm">AI-powered pattern recognition and real-time alerts</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Intelligent Risk Assessment</h3>
                    <p className="text-slate-400 text-sm">Predictive analytics for crime hotspots and trends</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <FileCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Compliance Made Simple</h3>
                    <p className="text-slate-400 text-sm">GDPR-compliant with automated audit trails</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <Lock className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Adaptive Security Insights</h3>
                    <p className="text-slate-400 text-sm">Zero-trust architecture with continuous monitoring</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/app/dashboard"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  See Our Prototype
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <a
                  href="https://www.canva.com/design/DAG4w2CMG-c/PdgmEuYOaE1100AIIctn-Q/edit?utm_content=DAG4w2CMG-c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors border border-slate-700"
                >
                  Our Case Presentation
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-6 flex flex-col items-center justify-center"
                >
                  <Brain className="w-16 h-16 text-emerald-400 mb-3" />
                  <span className="text-white font-semibold">AI Intelligence</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-6 flex flex-col items-center justify-center mt-12"
                >
                  <FileCheck className="w-16 h-16 text-emerald-400 mb-3" />
                  <span className="text-white font-semibold">Case Files</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-6 flex flex-col items-center justify-center"
                >
                  <Shield className="w-16 h-16 text-emerald-400 mb-3" />
                  <span className="text-white font-semibold">Police Shield</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-6 flex flex-col items-center justify-center mt-12"
                >
                  <TrendingUp className="w-16 h-16 text-emerald-400 mb-3" />
                  <span className="text-white font-semibold">Data Integration</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
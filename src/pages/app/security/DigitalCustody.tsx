import React, { useState } from 'react';
import { Upload, Shield, CheckCircle, Hash, Database, AlertCircle } from 'lucide-react';

interface EvidenceItem {
    id: string;
    filename: string;
    type: string;
    size: string;
    uploadedAt: string;
    hash: string;
    blockchainStatus: 'Verified' | 'Pending' | 'Failed';
    uploader: string;
}

export default function DigitalCustody() {
    const [dragActive, setDragActive] = useState(false);
    const [uploadedItems, setUploadedItems] = useState<EvidenceItem[]>([
        {
            id: 'EVD-2025-0048',
            filename: 'uav_footage_bankst_robbery.mp4',
            type: 'UAV Video',
            size: '247 MB',
            uploadedAt: '16 Jan 2025, 14:45',
            hash: '0x7a8f9c2e4b1d3f5a6e8c9d0b2a4f6e8c',
            blockchainStatus: 'Verified',
            uploader: 'PC Wilson'
        },
        {
            id: 'EVD-2025-0049',
            filename: 'crime_scene_photo_001.jpg',
            type: 'Photo',
            size: '4.2 MB',
            uploadedAt: '16 Jan 2025, 14:32',
            hash: '0x3c2e1a4f6b8d9e0c7a5f3b1d2e4c6a8f',
            blockchainStatus: 'Verified',
            uploader: 'DI Mitchell'
        },
        {
            id: 'EVD-2025-0050',
            filename: 'witness_interview_audio.m4a',
            type: 'Audio Recording',
            size: '12.8 MB',
            uploadedAt: '16 Jan 2025, 13:15',
            hash: '0x9d0b2a4f6e8c7a5f3b1d2e4c6a8f9c2e',
            blockchainStatus: 'Pending',
            uploader: 'PC Thompson'
        }
    ]);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        // Simulated file upload
        console.log('Files dropped:', e.dataTransfer.files);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Verified':
                return 'bg-green-100 text-green-700 border-green-200';
            case 'Pending':
                return 'bg-yellow-100 text-yellow-700 border-yellow-200';
            case 'Failed':
                return 'bg-red-100 text-red-700 border-red-200';
            default:
                return 'bg-slate-100 text-slate-700 border-slate-200';
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Digital Custody</h1>
                <p className="text-slate-600">Evidence integrity and blockchain-assured chain of custody</p>
            </div>

            {/* Blockchain Assurance Banner */}
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
                <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    <div>
                        <h3 className="text-green-900 font-bold text-sm">BLOCKCHAIN ASSURANCE ENABLED</h3>
                        <p className="text-green-700 text-xs mt-0.5">
                            All evidence is cryptographically hashed and recorded on an immutable blockchain ledger for court admissibility.
                        </p>
                    </div>
                </div>
            </div>

            {/* Upload Section */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Ingest Evidence</h2>

                <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${dragActive
                            ? 'border-brand-blue bg-blue-50'
                            : 'border-slate-300 hover:border-brand-blue'
                        }`}
                >
                    <Upload className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                    <h3 className="text-slate-900 font-semibold text-lg mb-2">
                        Drop evidence files here or click to browse
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                        Supported: UAV Video (MP4, MOV), Photos (JPG, PNG), Audio (M4A, MP3), Documents (PDF)
                    </p>
                    <p className="text-slate-500 text-xs">
                        Maximum file size: 2GB • Files will be automatically hashed and blockchain-verified
                    </p>
                </div>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="text-blue-900 font-semibold text-sm mb-2">Cryptographic Integrity Process</h4>
                    <ul className="text-blue-800 text-xs space-y-1">
                        <li>• <strong>Hash Calculation:</strong> SHA-256 cryptographic hash computed on upload</li>
                        <li>• <strong>Blockchain Recording:</strong> Hash submitted to immutable distributed ledger</li>
                        <li>• <strong>Court Admissibility:</strong> Tamper-proof audit trail ensures evidence integrity</li>
                        <li>• <strong>Automatic Custody Log:</strong> All access and modifications logged with timestamps</li>
                    </ul>
                </div>
            </div>

            {/* Evidence List */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-slate-900">Ingested Evidence</h2>
                    <span className="text-slate-600 text-sm">{uploadedItems.length} items</span>
                </div>

                <div className="space-y-3">
                    {uploadedItems.map((item) => (
                        <div key={item.id} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-slate-900 font-semibold">{item.filename}</h3>
                                        <span className="px-2 py-0.5 bg-slate-200 text-slate-700 rounded text-xs font-medium">
                                            {item.type}
                                        </span>
                                    </div>
                                    <p className="text-slate-600 text-sm font-mono">{item.id}</p>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <span className={`px-3 py-1 rounded text-xs font-bold border-2 flex items-center gap-1 ${getStatusColor(item.blockchainStatus)}`}>
                                        {item.blockchainStatus === 'Verified' && <CheckCircle className="w-3 h-3" />}
                                        {item.blockchainStatus === 'Pending' && <AlertCircle className="w-3 h-3" />}
                                        ✔ {item.blockchainStatus}
                                    </span>
                                    <span className="text-xs text-slate-500">{item.size}</span>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-3 mb-3">
                                <div className="bg-white border border-slate-200 rounded p-2">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Hash className="w-3 h-3 text-brand-blue" />
                                        <span className="text-xs font-semibold text-slate-600">Cryptographic Hash</span>
                                    </div>
                                    <p className="text-xs font-mono text-slate-900 break-all">{item.hash}</p>
                                </div>
                                <div className="bg-white border border-slate-200 rounded p-2">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Database className="w-3 h-3 text-purple-600" />
                                        <span className="text-xs font-semibold text-slate-600">Blockchain Record</span>
                                    </div>
                                    <p className="text-xs text-slate-700">
                                        {item.blockchainStatus === 'Verified'
                                            ? `Block #${Math.floor(Math.random() * 1000000)} • Confirmed`
                                            : 'Awaiting confirmation...'}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-200">
                                <span>Uploaded by <strong className="text-slate-700">{item.uploader}</strong></span>
                                <span>{item.uploadedAt}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chain of Custody */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Chain of Custody Verification</h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-green-700 font-semibold">All Evidence Blockchain Verified</h3>
                                <span className="px-2 py-0.5 bg-green-600 text-white rounded text-xs font-bold flex items-center gap-1">
                                    ✔ Blockchain Verified
                                </span>
                            </div>
                            <p className="text-slate-700 text-sm mb-3">
                                Every evidence item has been cryptographically hashed and recorded on an immutable blockchain ledger.
                                Integrity and chain of custody are guaranteed for court admissibility.
                            </p>
                            <div className="grid md:grid-cols-3 gap-3 text-xs">
                                <div>
                                    <span className="text-green-700 font-semibold">Total Items:</span>
                                    <span className="ml-2 text-slate-900">{uploadedItems.length}</span>
                                </div>
                                <div>
                                    <span className="text-green-700 font-semibold">Verified:</span>
                                    <span className="ml-2 text-slate-900">{uploadedItems.filter(i => i.blockchainStatus === 'Verified').length}</span>
                                </div>
                                <div>
                                    <span className="text-green-700 font-semibold">Pending:</span>
                                    <span className="ml-2 text-slate-900">{uploadedItems.filter(i => i.blockchainStatus === 'Pending').length}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

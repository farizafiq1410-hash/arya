import React from 'react';
import { X, Award, Calendar, Hash, Building2 } from 'lucide-react';
import { CertificationItem } from '../data/portfolioData';

interface CertificateModalProps {
  item: CertificationItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-left">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                {item.title}
              </h3>
              <p className="text-xs text-blue-600 mt-0.5">{item.issuer}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Image View */}
        <div className="p-4 bg-slate-50 flex items-center justify-center overflow-auto flex-1">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="max-h-[50vh] sm:max-h-[55vh] w-auto object-contain rounded-lg border border-slate-200 shadow-sm"
          />
        </div>

        {/* Metadata Details */}
        <div className="p-6 bg-white border-t border-slate-100 space-y-3 shrink-0 text-left">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {item.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 border-t border-slate-100">
            {item.credentialId && (
              <div className="flex items-center gap-1.5 font-mono">
                <Hash className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-slate-800">{item.credentialId}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              <span>{item.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-blue-600" />
              <span>{item.category}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

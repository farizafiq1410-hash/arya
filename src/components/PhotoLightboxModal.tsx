import React from 'react';
import { X } from 'lucide-react';

interface PhotoLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  description?: string;
  tag?: string;
}

export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  description,
  tag
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with title and close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white">
          <div className="text-left">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate max-w-md">
              {title}
            </h3>
            {tag && <span className="text-xs text-blue-600 font-medium">{tag}</span>}
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image viewport */}
        <div className="max-h-[70vh] overflow-auto p-4 flex items-center justify-center bg-slate-50">
          <img
            src={imageSrc}
            alt={title}
            referrerPolicy="no-referrer"
            className="max-h-[65vh] w-auto object-contain rounded-lg border border-slate-200 shadow-sm"
          />
        </div>

        {/* Description footer */}
        {description && (
          <div className="px-6 py-4 bg-white border-t border-slate-100 text-left">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

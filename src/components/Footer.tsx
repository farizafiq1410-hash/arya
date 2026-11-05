import React from 'react';
import { Mail, Phone, Instagram, FileDown, MapPin } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { NavPage } from './Navbar';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-100/70 border-t border-slate-200 text-slate-600 text-sm mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-3 text-left">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-black shadow-sm">
                AF
              </span>
              <span className="text-base font-bold text-slate-900 tracking-tight">
                {PROFILE_DATA.name}
              </span>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md leading-relaxed">
              Public Speaker, Moderator, & Youth Empowerment Enthusiast. Lebih dari 10 tahun mendedikasikan diri dalam komunikasi publik di 200+ forum regional dan nasional.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>{PROFILE_DATA.location}</span>
              <span aria-hidden="true">·</span>
              <span className="text-blue-600 font-medium">Duta Maritim Sulsel 2023</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Navigasi
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-blue-600 transition-colors"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-blue-600 transition-colors"
                >
                  Tentang Arya
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('experience');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-blue-600 transition-colors"
                >
                  Pengalaman Publik
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('certifications');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-blue-600 transition-colors"
                >
                  Sertifikasi & Lisensi
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-blue-600 transition-colors"
                >
                  Kontak & Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts */}
          <div className="text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Kontak Langsung
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href={PROFILE_DATA.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>+62 {PROFILE_DATA.phone.replace(/^0/, '')}</span>
              </a>
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="flex items-center gap-2 hover:text-blue-600 transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span className="truncate">{PROFILE_DATA.email}</span>
              </a>
              <a
                href={PROFILE_DATA.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors group"
              >
                <Instagram className="w-3.5 h-3.5 text-blue-600" />
                <span>{PROFILE_DATA.instagram}</span>
              </a>
              <a
                href={PROFILE_DATA.pdfPath}
                download
                className="inline-flex items-center gap-1.5 px-3 py-1.5 mt-2 rounded-lg bg-white text-xs font-medium text-slate-700 hover:text-blue-600 border border-slate-200 hover:border-blue-300 shadow-sm transition-colors"
              >
                <FileDown className="w-3.5 h-3.5 text-blue-600" />
                <span>Unduh Portofolio PDF</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 mt-10 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 {PROFILE_DATA.name}. All rights reserved.</p>
          <p>
            Certified Public Speaking Specialist · BNSP RI Kehumasan
          </p>
        </div>
      </div>
    </footer>
  );
};

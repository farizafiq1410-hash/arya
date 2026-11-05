import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  FileDown,
  Hash,
  Calendar,
  ExternalLink,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { CERTIFICATIONS, CertificationItem, PROFILE_DATA } from '../data/portfolioData';
import { CertificateModal } from '../components/CertificateModal';

export const CertificationsView: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const categories = ['All', 'Akreditasi Profesi', 'Pendidikan Khusus', 'Penghargaan Forum'];

  const filteredCerts = CERTIFICATIONS.filter((c) => {
    return categoryFilter === 'All' || c.category === categoryFilter;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20 text-left">
      {/* SECTION HEADER */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Kredensial & Akreditasi Resmi</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Sertifikasi & Lisensi Keahlian
        </h1>
        <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
          Bukti kompetensi komunikasi publik terverifikasi standar nasional BNSP RI, spesialisasi Certified Public Speaking Specialist (CPSS), dan pelatihan intensif Choky Sitohang Speaking Inc.
        </p>
      </div>

      {/* TOP 2 ACCREDITATION HIGHLIGHT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* BNSP RI */}
        <div className="p-8 rounded-2xl bg-white border border-blue-200 shadow-md shadow-blue-500/5 flex flex-col justify-between hover:border-blue-400 transition-all duration-200">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Resmi BNSP RI
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              Sertifikat Kompetensi BNSP Republik Indonesia
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Diterbitkan oleh Badan Nasional Sertifikasi Profesi (BNSP) melalui LSP Public Relations Nusantara untuk bidang Kehumasan dengan Skema Klaster Public Speaking.
            </p>
            <div className="pt-2 space-y-1 font-mono text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div>No. Sertifikat: <strong className="text-slate-900">HMS.1878.01433.2025</strong></div>
              <div>No. Registrasi: <strong className="text-slate-900">70203.2432.0.0008010.2025</strong></div>
            </div>
          </div>

          <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">24 Oktober 2025</span>
            <button
              onClick={() => setSelectedCert(CERTIFICATIONS[0])}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>Lihat Dokumen</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* CPSS */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 shadow-sm transition-all duration-200 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </span>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Spesialisasi CPSS
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              Certified Public Speaking Specialist (CPSS)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Program spesialisasi berbicara publik dari PT Provisia Consulting Indonesia, membuktikan penguasaan teknik retorika panggung, tata vokal, dan presentasi persuasif.
            </p>
            <div className="pt-2 space-y-1 font-mono text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div>No. Registrasi: <strong className="text-slate-900">0001/PI-OLCPSS7/1415072025</strong></div>
              <div>Gelar Profesi: <strong className="text-blue-600">C.PSS.</strong></div>
            </div>
          </div>

          <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">23 Juli 2025</span>
            <button
              onClick={() => setSelectedCert(CERTIFICATIONS[1])}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>Lihat Dokumen</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* CATALOG GRID */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Katalog Sertifikat & Piagam Penghargaan
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Pilih kategori atau klik kartu untuk melihat pratinjau dokumen fisik.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  categoryFilter === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat === 'All' ? 'Semua Kategori' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid with clean hover effects */}
        <div key={categoryFilter} className="animate-fade-in-fast grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/8 hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] bg-slate-50 p-4 flex items-center justify-center border-b border-slate-100">
                <img
                  src={cert.image}
                  alt={cert.title}
                  referrerPolicy="no-referrer"
                  className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded"
                />
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-white/90 text-blue-600 border border-slate-200">
                  {cert.category}
                </span>
              </div>

              <div className="p-5 space-y-2 text-left flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-blue-600 font-medium">{cert.issuer}</p>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{cert.date}</span>
                  <span className="text-blue-600 font-semibold flex items-center gap-1">
                    Pratinjau <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULL BOARD ARTIFACT VIEWER */}
      <section className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">
              Lembar Arsip Dokumen Resmi
            </h3>
            <p className="text-xs text-slate-600">
              Halaman 5 & 6 dari berkas portofolio resmi Achmad Arya Raqhi Fauzan.
            </p>
          </div>
          <a
            href={PROFILE_DATA.pdfPath}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white transition-all shadow-sm shrink-0"
          >
            <FileDown className="w-4 h-4 text-blue-100" />
            <span>Unduh PDF Portofolio</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl overflow-hidden bg-slate-50 p-3 border border-slate-100">
            <img
              src="/assets/pdf-pages/certificates-board-1.png"
              alt="Lembar Sertifikat BNSP & Pelatihan"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain rounded"
            />
            <p className="text-[11px] text-slate-600 text-center font-medium mt-2">
              Sertifikat BNSP RI, CPSS, Choky Sitohang, & Irwani Pane Institute
            </p>
          </div>

          <div className="rounded-xl overflow-hidden bg-slate-50 p-3 border border-slate-100">
            <img
              src="/assets/pdf-pages/certificates-board-2.png"
              alt="Lembar Sertifikat Narasumber / Moderator"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain rounded"
            />
            <p className="text-[11px] text-slate-600 text-center font-medium mt-2">
              Sertifikat Narasumber / Moderator MNC University, IDE Indonesia, Edukatif.id, IEEE
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <CertificateModal
        item={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
};

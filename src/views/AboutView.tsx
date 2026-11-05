import React from 'react';
import {
  Compass,
  CheckCircle2,
  FileDown,
  ArrowRight,
  Heart,
  Volume2,
  Users2,
  Target
} from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { NavPage } from '../components/Navbar';

interface AboutViewProps {
  onNavigate: (page: NavPage) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const pillars = [
    {
      icon: Target,
      title: 'Impactful Delivery',
      desc: 'Setiap materi diramu agar tidak sekadar didengarkan, tetapi mengkristal menjadi aksi konkret dan resolusi nyata bagi audiens.'
    },
    {
      icon: Volume2,
      title: 'Interactive Engagement',
      desc: 'Menciptakan ruang dialog dua arah yang hidup, hangat, dan inklusif—memecah kebekuan panggung sejak menit pertama.'
    },
    {
      icon: Heart,
      title: 'Empathetic Connection',
      desc: 'Memahami karakter, keresahan, dan dinamika audiens lintas generasi, dari pelajar, aktivis pemuda, hingga jajaran profesional.'
    },
    {
      icon: Users2,
      title: 'Youth Empowerment',
      desc: 'Berfokus pada pengembangan daya kepemimpinan, integritas, dan kapasitas generasi penerus bangsa menyongsong Indonesia Emas 2045.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20 text-left">
      {/* SECTION 1: BIO OVERVIEW */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
            <Compass className="w-3.5 h-3.5" />
            <span>Biografi & Profil</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Menyalakan Asa Melalui Kekuatan Komunikasi
          </h1>

          <p className="text-base text-slate-600 leading-relaxed">
            {PROFILE_DATA.bioLong}
          </p>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Filosofi Komunikasi
            </div>
            <p className="text-sm italic text-slate-700 leading-relaxed">
              "{PROFILE_DATA.philosophy}"
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-all flex items-center gap-2"
            >
              <span>Ajak Berkolaborasi</span>
              <ArrowRight className="w-4 h-4 text-blue-200" />
            </button>
            <a
              href={PROFILE_DATA.pdfPath}
              download
              className="px-5 py-3 text-sm font-medium text-slate-700 hover:text-blue-600 bg-white rounded-xl border border-slate-200 shadow-xs hover:bg-slate-50 transition-colors flex items-center gap-2"
            >
              <FileDown className="w-4 h-4 text-blue-600" />
              <span>Unduh Portofolio PDF</span>
            </a>
          </div>
        </div>

        {/* Portrait Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm rounded-2xl bg-white p-2.5 border border-slate-200 shadow-lg group">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 relative">
              <img
                src={PROFILE_DATA.portraitImage}
                alt="Achmad Arya Raqhi Fauzan"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-left text-white">
                <span className="text-xs font-bold block">{PROFILE_DATA.name}</span>
                <p className="text-[11px] text-blue-200">Duta Maritim Sulsel 2023 · BNSP RI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 4 PILAR KOMUNIKASI ARYA */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Prinsip & Nilai
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            4 Pilar Komunikasi Arya Fauzan
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl">
            Prinsip utama yang senantiasa dihadirkan dalam setiap penampilan panggung maupun ruang kelas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: ADVOKASI MARITIM */}
      <section className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Advokasi Maritim & Kebangsaan
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Duta Maritim Indonesia Aspeksindo Sulsel 2023
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Terpilih mewakili Sulawesi Selatan dalam agenda nasional Asosiasi Pemerintah Daerah Kepulauan dan Pesisir Seluruh Indonesia (ASPEKSINDO). Arya aktif menyuarakan potensi kemaritiman, pemberdayaan masyarakat pesisir, dan edukasi bagi anak-anak pulau di media nasional seperti Kompas TV dan TVRI.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>Advokasi Kebijakan Pesisir</span>
            </div>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>Edukasi Kepulauan 3T</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 p-2">
          <img
            src="/assets/pdf-pages/gallery-mosaic.png"
            alt="Dokumentasi Arya di forum maritim dan talkshow nasional"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

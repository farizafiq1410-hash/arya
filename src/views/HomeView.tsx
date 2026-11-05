import React from 'react';
import {
  Mic,
  Award,
  Users,
  Compass,
  ArrowRight,
  FileDown,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import {
  PROFILE_DATA,
  EXPERIENCES,
  PARTNERS_LIST,
  TESTIMONIALS
} from '../data/portfolioData';
import { NavPage } from '../components/Navbar';

interface HomeViewProps {
  onNavigate: (page: NavPage) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const featuredEvents = EXPERIENCES.filter((e) => e.isHighlight).slice(0, 4);

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* HERO SECTION */}
      <section className="relative pt-8 sm:pt-16 pb-12 overflow-hidden">
        {/* Very subtle airy blue ambient background */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-100/50 blur-[100px] rounded-full pointer-events-none -z-10 animate-glow-pulse" />
        <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-sky-100/60 blur-[80px] rounded-full pointer-events-none -z-10 animate-glow-pulse" style={{ animationDelay: '2.5s' }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Typographic Hierarchy */}
            <div className="lg:col-span-7 space-y-6 text-left animate-fade-in">
              {/* Kicker */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 shadow-xs">
                <Mic className="w-3.5 h-3.5" />
                <span>Public Speaker & Komunikator</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance">
                Achmad Arya{' '}
                <span className="text-blue-600">Raqhi Fauzan</span>
                <span className="text-slate-500 font-normal text-2xl sm:text-4xl">, C.PSS.</span>
              </h1>

              {/* Sub-headline */}
              <p className="text-lg sm:text-xl font-medium text-slate-700">
                Public Speaker, Moderator, & Youth Empowerment Enthusiast
              </p>

              {/* Lead Body Paragraph */}
              <p className="text-base text-slate-600 max-w-xl leading-relaxed">
                Berpengalaman lebih dari 10 tahun di bidang komunikasi dan telah berbicara di berbagai forum lokal maupun nasional. Membantu anak muda, instansi, dan institusi pendidikan menghadirkan komunikasi yang berbobot, terstruktur, dan menggerakkan.
              </p>

              {/* CTA Group */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm hover:shadow-md hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2"
                >
                  <span>Hubungi Saya</span>
                  <ArrowRight className="w-4 h-4 text-blue-100" />
                </button>

                <button
                  onClick={() => onNavigate('experience')}
                  className="px-5 py-3.5 text-sm sm:text-base font-medium text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2"
                >
                  <span>Lihat Pengalaman</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                <a
                  href={PROFILE_DATA.pdfPath}
                  download
                  className="px-4 py-3.5 text-xs sm:text-sm font-medium text-slate-600 hover:text-blue-600 rounded-xl border border-transparent hover:border-slate-200 hover:bg-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-1.5"
                >
                  <FileDown className="w-4 h-4 text-blue-600" />
                  <span>Unduh PDF</span>
                </a>
              </div>

              {/* Clean trust credentials */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Sertifikasi BNSP RI</span>
                </div>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Certified Public Speaking Specialist</span>
                </div>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Duta Maritim Sulsel '23</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Minimalist Portrait Card with Soft Float */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in-delayed">
              <div className="relative w-full max-w-[360px] sm:max-w-[400px] animate-float-gentle">
                {/* Subtle soft shadow backdrop */}
                <div className="relative rounded-2xl bg-white p-2.5 border border-slate-200/80 shadow-xl shadow-slate-200/60 overflow-hidden group">
                  <div className="relative rounded-xl overflow-hidden bg-slate-50 aspect-[3/4] flex items-end justify-center">
                    <img
                      src={PROFILE_DATA.portraitImage}
                      alt="Achmad Arya Raqhi Fauzan, C.PSS."
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="eager"
                    />

                    {/* Minimalist floating label */}
                    <div className="absolute bottom-3 inset-x-3 p-3 rounded-lg bg-white/95 backdrop-blur-sm border border-slate-200 shadow-sm text-left transition-transform duration-300 group-hover:-translate-y-0.5">
                      <div className="text-xs font-bold text-slate-900">
                        {PROFILE_DATA.name}
                      </div>
                      <div className="text-[11px] text-blue-600 flex items-center justify-between mt-0.5 font-medium">
                        <span>BNSP RI Klaster Public Speaking</span>
                        <span className="text-slate-500 font-mono">Index 4.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MINIMALIST METRICS STRIP */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {PROFILE_DATA.stats.map((stat, idx) => (
              <div key={idx} className={`text-left ${idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}>
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight font-mono tabular-nums">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOCUS TOPICS SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Fokus Materi
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Topik Pembahasan Unggulan
          </h2>
          <p className="text-slate-600 text-sm max-w-xl">
            Materi praktis yang kontekstual dan adaptif terhadap kebutuhan audiens generasi muda maupun institusi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROFILE_DATA.focusTopics.map((topic, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {i === 0 && <Compass className="w-5 h-5" />}
                  {i === 1 && <Mic className="w-5 h-5" />}
                  {i === 2 && <Users className="w-5 h-5" />}
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {topic.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {topic.description}
                </p>

                <div className="pt-2 space-y-2 border-t border-slate-100">
                  {topic.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
                >
                  <span>Ajukan Topik Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED EXPERIENCE HIGHLIGHTS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 text-left">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Jejak Panggung
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Pengalaman Terpilih
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Sebagian agenda kementerian, kampus nasional, dan media yang pernah difasilitasi.
            </p>
          </div>

          <button
            onClick={() => onNavigate('experience')}
            className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors shrink-0"
          >
            <span>Lihat Semua 40+ Agenda</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredEvents.map((evt) => (
            <div
              key={evt.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-200 text-left flex flex-col justify-between group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-blue-600">{evt.role}</span>
                  <span className="text-slate-600 font-mono text-[11px]">{evt.date}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {evt.title}
                </h3>

                <p className="text-xs text-slate-600">
                  {evt.organizer}
                </p>

                {evt.topic && (
                  <p className="text-xs text-slate-600 italic">
                    "{evt.topic}"
                  </p>
                )}
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span>{evt.location}</span>
                <span className="text-blue-600 font-semibold text-[11px]">Highlight</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS & MEDIA SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm text-left space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Kemitraan
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Mitra & Media Liputan
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl">
              Telah berkolaborasi dengan kementerian, stasiun TV, radio nasional, dan perguruan tinggi terkemuka.
            </p>
          </div>

          {/* Clean Partner Strip */}
          <div className="rounded-xl overflow-hidden bg-slate-50 p-4 sm:p-6 border border-slate-100">
            <img
              src="/assets/pdf-pages/partners-strip.png"
              alt="Logo Mitra & Kolaborasi Achmad Arya Raqhi Fauzan"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain mx-auto max-h-[140px] sm:max-h-[180px]"
            />
          </div>
        </div>
      </section>

      {/* CLEAN MINIMALIST BOOKING BANNER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-sky-600 p-8 sm:p-12 text-left text-white shadow-lg shadow-blue-500/10">
          <div className="max-w-2xl space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Siap Menghadirkan Sesi Komunikasi yang Berdampak?
            </h3>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Diskusikan kebutuhan narasumber seminar, moderator talkshow, atau pembawa acara bersama Achmad Arya Raqhi Fauzan.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 text-sm font-semibold text-blue-700 bg-white hover:bg-blue-50 rounded-xl shadow-sm transition-all flex items-center gap-2"
              >
                <span>Mulai Konsultasi Acara</span>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </button>
              <a
                href={PROFILE_DATA.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 text-sm font-medium text-white hover:bg-white/10 rounded-xl border border-white/30 transition-colors"
              >
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

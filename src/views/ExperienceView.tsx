import React, { useState, useMemo } from 'react';
import {
  Mic,
  Calendar,
  MapPin,
  Search,
  Building,
  Image as ImageIcon,
  ArrowRight,
  Sparkles,
  LayoutGrid,
  ListFilter
} from 'lucide-react';
import { EXPERIENCES, GALLERY_ITEMS, EventExperience } from '../data/portfolioData';
import { PhotoLightboxModal } from '../components/PhotoLightboxModal';

export const ExperienceView: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid');

  // Lightbox state for gallery
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    image: string;
    title: string;
    desc: string;
    tag: string;
  }>({
    isOpen: false,
    image: '',
    title: '',
    desc: '',
    tag: ''
  });

  const roles = ['All', 'Narasumber', 'Moderator', 'MC & Host'];
  const years = ['All', '2026', '2025', '2024', '2023', '2022', '2021'];

  const filteredExperiences = useMemo(() => {
    return EXPERIENCES.filter((item) => {
      const matchRole = selectedRole === 'All' || item.role === selectedRole;
      const matchYear = selectedYear === 'All' || item.year.toString() === selectedYear;
      const query = searchQuery.toLowerCase().trim();
      const matchQuery =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.organizer.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        (item.topic && item.topic.toLowerCase().includes(query));

      return matchRole && matchYear && matchQuery;
    });
  }, [selectedRole, selectedYear, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20 text-left">
      {/* SECTION HEADER */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
          <Mic className="w-3.5 h-3.5" />
          <span>Rekam Jejak Publik</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Pengalaman Public Speaking & Moderasi
        </h1>
        <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
          Arsip 42+ forum publik dalam 4 tahun terakhir (2021 - 2026), mulai dari agenda kementerian Republik Indonesia, media penyiaran nasional, hingga festival kepemudaan daerah.
        </p>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
          {/* Role Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  selectedRole === role
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {role === 'All' ? 'Semua Peran' : role}
              </button>
            ))}
          </div>

          {/* Controls Right */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View switcher */}
            <div className="hidden sm:flex items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200">
              <button
                onClick={() => setViewMode('grid')}
                title="Tampilan Kartu"
                className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
                  viewMode === 'grid' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('timeline')}
                title="Tampilan Garis Waktu"
                className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
                  viewMode === 'timeline' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <ListFilter className="w-4 h-4" />
              </button>
            </div>

            {/* Year Selector */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-slate-50 text-slate-700 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500"
            >
              <option value="All">Semua Tahun</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>

            {/* Search Input */}
            <div className="relative flex-1 sm:w-60">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari agenda atau instansi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 text-slate-800 text-xs placeholder-slate-400 rounded-xl pl-9 pr-3 py-2 border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
          <span>
            Menampilkan <strong className="text-slate-900 font-semibold">{filteredExperiences.length}</strong> kegiatan
          </span>
          {(selectedRole !== 'All' || selectedYear !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedRole('All');
                setSelectedYear('All');
                setSearchQuery('');
              }}
              className="text-blue-600 font-medium hover:underline"
            >
              Reset Filter
            </button>
          )}
        </div>
      </div>

      {/* EXPERIENCES GRID (WITH REFINED HOVER EFFECTS) */}
      {filteredExperiences.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-white border border-slate-200 space-y-3">
          <p className="text-slate-600 text-sm">
            Tidak ada agenda yang cocok dengan pencarian Anda.
          </p>
          <button
            onClick={() => {
              setSelectedRole('All');
              setSelectedYear('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-xl"
          >
            Tampilkan Semua Agenda
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiences.map((item) => (
            <div
              key={item.id}
              className={`group relative p-6 rounded-2xl bg-white border transition-all duration-300 ease-out flex flex-col justify-between cursor-default
                hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400
                ${item.isHighlight ? 'border-blue-200 shadow-xs' : 'border-slate-200'}`}
            >
              {/* Subtle top accent bar that blooms on hover */}
              <div className="absolute top-0 inset-x-6 h-0.5 bg-transparent group-hover:bg-blue-600 transition-colors duration-300 rounded-t-full" />

              <div className="space-y-3">
                {/* Header Metadata */}
                <div className="flex items-center justify-between text-xs">
                  <span
                    className={`font-semibold tracking-wide transition-colors ${
                      item.role === 'Narasumber'
                        ? 'text-blue-600'
                        : item.role === 'Moderator'
                        ? 'text-emerald-600'
                        : 'text-amber-600'
                    }`}
                  >
                    {item.role}
                  </span>
                  <span className="text-slate-600 font-mono text-[11px] tabular-nums">
                    {item.date}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 leading-snug">
                  {item.title}
                </h3>

                {/* Organizer */}
                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                  <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{item.organizer}</span>
                </div>

                {/* Topic note if present */}
                {item.topic && (
                  <p className="text-xs text-slate-600 italic line-clamp-2 leading-relaxed pt-1">
                    "{item.topic}"
                  </p>
                )}
              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-1 truncate">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
                <div className="flex items-center gap-1 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0 shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* TIMELINE VIEW (WITH HOVER ILLUMINATION) */
        <div className="space-y-3">
          {filteredExperiences.map((item) => (
            <div
              key={item.id}
              className="group p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-default hover:-translate-y-0.5"
            >
              <div className="space-y-1.5 flex-1 text-left">
                <div className="flex items-center gap-2 text-xs">
                  <span
                    className={`font-semibold ${
                      item.role === 'Narasumber'
                        ? 'text-blue-600'
                        : item.role === 'Moderator'
                        ? 'text-emerald-600'
                        : 'text-amber-600'
                    }`}
                  >
                    {item.role}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-600 font-mono text-[11px] tabular-nums">{item.date}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-600">{item.location}</span>
                </div>

                <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-600">
                  {item.organizer} {item.topic ? `— "${item.topic}"` : ''}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {item.isHighlight && (
                  <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    Highlight
                  </span>
                )}
                <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-blue-600 group-hover:text-white text-slate-400 flex items-center justify-center transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* DOCUMENTATION GALLERY MOSAIC */}
      <section className="space-y-6 pt-8">
        <div className="space-y-1 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Galeri Panggung
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Dokumentasi Sesi & Media Liputan
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
            Klik gambar untuk memperbesar arsip dokumentasi interaktif.
          </p>
        </div>

        {/* Gallery Banner Card with Hover Effect */}
        <div
          onClick={() =>
            setLightboxData({
              isOpen: true,
              image: '/assets/pdf-pages/gallery-mosaic.png',
              title: 'Dokumentasi Lengkap Forum Publik Achmad Arya',
              desc: 'Arsip momentum berbicara di seminar MNC University, dialog bersama Menparekraf Sandiaga Uno, siaran langsung TVRI & Kompas TV, RRI Bogor, dan program pengabdian pulau.',
              tag: 'Dokumentasi Resmi'
            })
          }
          className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 p-2 cursor-pointer"
        >
          <div className="relative rounded-xl overflow-hidden aspect-[16/7] bg-slate-100">
            <img
              src="/assets/pdf-pages/gallery-mosaic.png"
              alt="Mosaik Dokumentasi Pengalaman Arya Fauzan"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-6">
              <div className="flex items-center justify-between w-full text-white">
                <div>
                  <h4 className="text-sm sm:text-base font-bold">
                    Mosaik Dokumentasi Panggung & Studio Siaran
                  </h4>
                  <p className="text-xs text-blue-200">
                    Klik untuk memperbesar seluruh arsip dokumentasi
                  </p>
                </div>
                <span className="px-3.5 py-1.5 rounded-lg bg-blue-600 text-xs font-semibold text-white flex items-center gap-1.5 shadow-sm group-hover:bg-blue-700 transition-colors">
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Perbesar</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <PhotoLightboxModal
        isOpen={lightboxData.isOpen}
        onClose={() => setLightboxData((prev) => ({ ...prev, isOpen: false }))}
        imageSrc={lightboxData.image}
        title={lightboxData.title}
        description={lightboxData.desc}
        tag={lightboxData.tag}
      />
    </div>
  );
};

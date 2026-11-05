import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Instagram,
  FileDown,
  MessageSquare,
  Copy,
  Check,
  HelpCircle
} from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    roleNeeded: 'Narasumber / Keynote Speaker',
    eventFormat: 'Offline / Tatap Muka',
    eventDate: '',
    eventLocation: '',
    audienceEstimate: '50 - 200 Orang',
    notes: ''
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const generateWhatsAppMessage = () => {
    const lines = [
      `Halo Kak Achmad Arya Raqhi Fauzan, C.PSS.`,
      ``,
      `Saya ingin berdiskusi dan mengajukan undangan kolaborasi acara:`,
      `• *Nama Pengundang:* ${formData.name || '-'}`,
      `• *Institusi/Organisasi:* ${formData.organization || '-'}`,
      `• *Kontak PIC:* ${formData.phone || '-'} / ${formData.email || '-'}`,
      `• *Kebutuhan Peran:* ${formData.roleNeeded}`,
      `• *Format Acara:* ${formData.eventFormat}`,
      `• *Rencana Tanggal:* ${formData.eventDate || '-'}`,
      `• *Lokasi/Kota:* ${formData.eventLocation || '-'}`,
      `• *Estimasi Audiens:* ${formData.audienceEstimate}`,
      formData.notes ? `• *Deskripsi/Catatan:* ${formData.notes}` : ``,
      ``,
      `Mohon info ketersediaan jadwal Kak Arya. Terima kasih banyak!`
    ].filter(Boolean);

    return encodeURIComponent(lines.join('\n'));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = generateWhatsAppMessage();
    const cleanPhone = PROFILE_DATA.phone.replace(/^0/, '62');
    window.open(`https://wa.me/${cleanPhone}?text=${encoded}`, '_blank');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Undangan Acara] Kolaborasi bersama Achmad Arya - ${formData.organization || formData.name}`);
    const body = encodeURIComponent(
      `Halo Achmad Arya Raqhi Fauzan, C.PSS.,\n\n` +
      `Perkenalkan, saya ${formData.name} dari ${formData.organization}.\n` +
      `Kami bermaksud mengundang Kak Arya sebagai ${formData.roleNeeded} pada agenda kami:\n\n` +
      `- Format Acara: ${formData.eventFormat}\n` +
      `- Tanggal Acara: ${formData.eventDate}\n` +
      `- Lokasi Acara: ${formData.eventLocation}\n` +
      `- Estimasi Audiens: ${formData.audienceEstimate}\n` +
      `- Kontak PIC: ${formData.phone} / ${formData.email}\n\n` +
      `Catatan Tambahan:\n${formData.notes || '-'}\n\n` +
      `Mohon informasi ketersediaan jadwal dan prosedur administrasi.\nTerima kasih!`
    );
    window.location.href = `mailto:${PROFILE_DATA.email}?subject=${subject}&body=${body}`;
  };

  const faqs = [
    {
      q: "Berapa lama sebelum acara idealnya mengajukan undangan?",
      a: "Sangat disarankan menghubungi 2 hingga 4 minggu sebelum tanggal pelaksanaan agar kesiapan materi dan penjadwalan penerbangan/akomodasi (bila luar kota) dapat dipersiapkan secara matang."
    },
    {
      q: "Apakah Achmad Arya bersedia mengisi acara di luar kota atau luar pulau?",
      a: "Ya, Arya berpengalaman mengisi agenda nasional di berbagai pulau di Indonesia (Sulawesi, Jawa, NTT, NTB, dsb.) dengan penyesuaian logistik perjalanan resmi."
    },
    {
      q: "Apakah materi dapat disesuaikan dengan kebutuhan tema panitia?",
      a: "Tentu. Setiap modul presentasi, studi kasus, dan interaksi akan disesuaikan dengan profil audiens Anda (pelajar, mahasiswa, organisasi pemuda, maupun staf institusi/korporasi)."
    },
    {
      q: "Bagaimana alur konfirmasi dan penerbitan surat tugas?",
      a: "Setelah diskusi ketersediaan tanggal via WhatsApp/Email disepakati, panitia dapat mengirimkan Surat Undangan Resmi (TOR/Term of Reference) untuk konfirmasi final dan penjadwalan teknis."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20 text-left">
      {/* SECTION HEADER */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Kolaborasi & Undangan</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Mari Wujudkan Agenda Inspiratif Bersama
        </h1>
        <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
          Tersedia untuk sesi seminar, webinar nasional, workshop public speaking, moderator talkshow formal, dan pembawa acara (MC).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT COLUMN: BOOKING FORM */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-slate-900">
                Formulir Undangan Acara
              </h2>
              <p className="text-xs text-slate-500">
                Isi form berikut lalu kirim langsung via WhatsApp atau Email resmi.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Penanggung Jawab / PIC *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3.5 py-2.5 border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Organisasi / Kampus *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: BEM Universitas / Panitia HUT"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3.5 py-2.5 border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nomor WhatsApp PIC *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="081234567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3.5 py-2.5 border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Alamat Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3.5 py-2.5 border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Kebutuhan Peran
                  </label>
                  <select
                    value={formData.roleNeeded}
                    onChange={(e) => setFormData({ ...formData, roleNeeded: e.target.value })}
                    className="w-full bg-slate-50 text-slate-800 text-xs rounded-xl px-3.5 py-2.5 border border-slate-200 focus:outline-none focus:border-blue-500"
                  >
                    <option value="Narasumber / Keynote Speaker">Narasumber / Keynote Speaker</option>
                    <option value="Moderator Diskusi / Talkshow">Moderator Diskusi / Talkshow</option>
                    <option value="Master of Ceremony (MC) Protokoler">Master of Ceremony (MC) Protokoler</option>
                    <option value="Workshop Trainer (Public Speaking & PR)">Workshop Trainer (Public Speaking & PR)</option>
                    <option value="Juri Lomba / Konsultan Acara">Juri Lomba / Konsultan Acara</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Format Acara
                  </label>
                  <select
                    value={formData.eventFormat}
                    onChange={(e) => setFormData({ ...formData, eventFormat: e.target.value })}
                    className="w-full bg-slate-50 text-slate-800 text-xs rounded-xl px-3.5 py-2.5 border border-slate-200 focus:outline-none focus:border-blue-500"
                  >
                    <option value="Offline / Tatap Muka">Offline / Tatap Muka</option>
                    <option value="Online / Webinar Zoom/YouTube">Online / Webinar Zoom/YouTube</option>
                    <option value="Hybrid (Offline & Online)">Hybrid (Offline & Online)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Rencana Tanggal Acara
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: 25 November 2026"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3.5 py-2.5 border border-slate-200 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Lokasi / Kota Pelaksanaan
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Jakarta / Makassar / Zoom"
                    value={formData.eventLocation}
                    onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                    className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3.5 py-2.5 border border-slate-200 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Catatan Tambahan / Gambaran Acara
                </label>
                <textarea
                  rows={3}
                  placeholder="Ceritakan target peserta, durasi waktu, atau ekspektasi topik..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl p-3 border border-slate-200 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="flex-1 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm hover:shadow-md hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 text-blue-200" />
                  <span>Kirim Format via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="py-3 px-5 text-xs sm:text-sm font-medium text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>Kirim via Email</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT COLUMN: CONTACT CHANNELS */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
            <h3 className="text-lg font-bold text-slate-900">
              Saluran Kontak Langsung
            </h3>

            <div className="space-y-3.5">
              {/* WhatsApp */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">WhatsApp / Telepon</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 font-mono">
                      +62 {PROFILE_DATA.phone.replace(/^0/, '')}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopy(`+62${PROFILE_DATA.phone.replace(/^0/, '')}`, 'phone')}
                    title="Salin Nomor"
                    className="p-2 rounded-lg hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href={PROFILE_DATA.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 text-xs font-semibold text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 rounded-lg transition-colors"
                  >
                    Chat
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-slate-500 font-medium">Email Resmi</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 font-mono truncate">
                      {PROFILE_DATA.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => handleCopy(PROFILE_DATA.email, 'email')}
                    title="Salin Email"
                    className="p-2 rounded-lg hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href={`mailto:${PROFILE_DATA.email}`}
                    className="px-2.5 py-1 text-xs font-semibold text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 rounded-lg transition-colors"
                  >
                    Kirim
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Instagram & TikTok</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      {PROFILE_DATA.instagram}
                    </div>
                  </div>
                </div>
                <a
                  href={PROFILE_DATA.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 text-xs font-semibold text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 rounded-lg transition-colors"
                >
                  Kunjungi
                </a>
              </div>
            </div>

            {/* Download PDF button */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href={PROFILE_DATA.pdfPath}
                download
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <FileDown className="w-4 h-4 text-blue-600" />
                <span>Unduh Portofolio PDF Resmi (2026)</span>
              </a>
            </div>
          </div>

          {/* Quick FAQ card */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span>Pertanyaan yang Sering Diajukan</span>
            </h4>

            <div className="space-y-3">
              {faqs.map((faq, fIdx) => (
                <div key={fIdx} className="space-y-1 text-xs">
                  <strong className="text-slate-800 block">{faq.q}</strong>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

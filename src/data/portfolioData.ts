export interface EventExperience {
  id: string;
  year: number;
  date: string;
  role: 'Narasumber' | 'Moderator' | 'MC & Host';
  title: string;
  organizer: string;
  location: string;
  topic?: string;
  isHighlight?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  credentialId?: string;
  date: string;
  category: 'Akreditasi Profesi' | 'Pendidikan Khusus' | 'Penghargaan Forum';
  image: string;
  description: string;
}

export interface PartnerItem {
  name: string;
  type: string;
}

export const PROFILE_DATA = {
  name: "Achmad Arya Raqhi Fauzan, C.PSS.",
  nickname: "Arya Fauzan",
  title: "Public Speaker, Moderator, & Youth Empowerment Enthusiast",
  experienceYears: 10,
  eventsCount: 200,
  email: "achmadarya15@gmail.com",
  phone: "081244680490",
  whatsappUrl: "https://wa.me/6281244680490",
  instagram: "@achmdaryaa",
  instagramUrl: "https://instagram.com/achmdaryaa",
  tiktok: "@achmdaryaa",
  tiktokUrl: "https://tiktok.com/@achmdaryaa",
  location: "Makassar & Jakarta, Indonesia",
  pdfPath: "/assets/aistudio/Portofolio_Achmad_Arya_Raqhi_Fauzan_2026-4_bebfa740.pdf",
  portraitImage: "/assets/pdf-pages/arya-portrait.png",
  summary: "Berpengalaman lebih dari 10 tahun di bidang komunikasi dan telah berbicara di berbagai forum lokal maupun nasional. Berdedikasi menginspirasi generasi muda melalui komunikasi yang berdampak, autentik, dan memberdayakan.",
  philosophy: "Komunikasi bukan sekadar merangkai kata di depan mikrofon, melainkan seni menyalakan asa, menjembatani gagasan, dan menggerakkan tindakan nyata.",
  bioLong: "Achmad Arya Raqhi Fauzan, C.PSS. memulai perjalanan di panggung komunikasi sejak usia dini pada tahun 2014. Dengan lebih dari 12 tahun berkarier dan telah dipercaya di lebih dari 200 forum lokal maupun nasional, Arya mengombinasikan ketajaman analisis, retorika dinamis, dan pendekatan komunikatif yang interaktif. Ia telah memfasilitasi forum bergengsi di kementerian RI, universitas terkemuka, stasiun televisi nasional, dan program pemberdayaan masyarakat hingga ke pelosok nusantara.",
  focusTopics: [
    {
      title: "Self Improvement & Mindset",
      description: "Membimbing generasi muda membangun ketahanan mental, disiplin diri, identitas positif, dan orientasi masa depan yang terarah di era disrupsi digital.",
      points: ["Growth Mindset vs Fixed Mindset", "Manajemen Kebiasaan & Produktivitas", "Resiliensi Pemuda Menghadapi Tekanan Era Modern"]
    },
    {
      title: "Komunikasi Efektif & Public Speaking",
      description: "Mentransfer teknik praktis berbicara di hadapan audiens, mengatasi 'stage fright', modulasi vokal, body language, serta struktur 'Storytelling that Sells'.",
      points: ["Teknik Penguasaan Panggung & Vokal", "Struktur Pidato & Presentasi Memikat", "Personal Branding & Kehumasan Pemuda"]
    },
    {
      title: "Youth Empowerment & Kepemimpinan",
      description: "Mendorong kolaborasi pemuda, kepemimpinan berbasis dampak sosial, kerelawanan berkelanjutan, dan partisipasi aktif menuju Indonesia Emas 2045.",
      points: ["Kolaborasi Lintas Komunitas & Inovasi Sosial", "Volunteerism sebagai Investasi Diri", "Advokasi Kemaritiman & Kebijakan Publik Gen-Z"]
    }
  ],
  stats: [
    { value: "10+", label: "Tahun Pengalaman", sub: "Konsisten di Dunia Komunikasi" },
    { value: "200+", label: "Event & Forum Publik", sub: "Tingkat Regional hingga Nasional" },
    { value: "BNSP RI", label: "Sertifikasi Nasional", sub: "Klaster Humas Public Speaking" },
    { value: "15+", label: "Mitra & Media Liputan", sub: "Kementerian, TV, Radio & Kampus" }
  ]
};

export const EXPERIENCES: EventExperience[] = [
  {
    id: "exp-1",
    year: 2026,
    date: "Juni 2026",
    role: "Narasumber",
    title: "Fasilitator Zeneration Leader Conference",
    organizer: "Kementerian Pemuda dan Olahraga RI",
    location: "Jakarta (Nasional)",
    topic: "Kepemimpinan Pemuda & Daya Saing Generasi Z",
    isHighlight: true
  },
  {
    id: "exp-2",
    year: 2025,
    date: "November 2025",
    role: "Narasumber",
    title: "Live Instagram 'Anak Muda, Karya, dan Masa Depan'",
    organizer: "Arah Langkah Anak Muda",
    location: "Online / Instagram Live",
    topic: "Karya & Orientasi Masa Depan Pemuda"
  },
  {
    id: "exp-3",
    year: 2025,
    date: "November 2025",
    role: "Narasumber",
    title: "Workshop Guru Ngaji 'Interaktif, Komunikatif, dan Berkesan'",
    organizer: "Sempetin Ngaji",
    location: "Jakarta",
    topic: "Teknik Mengajar Komunikatif & Menyenangkan"
  },
  {
    id: "exp-4",
    year: 2025,
    date: "November 2025",
    role: "Narasumber",
    title: "Monologue Session Festival Lulus Jadi Apa?",
    organizer: "Festival Karir & Edukasi",
    location: "FX Sudirman, Jakarta",
    topic: "Menghadapi Quarter-Life Crisis & Membangun Arah Karir",
    isHighlight: true
  },
  {
    id: "exp-5",
    year: 2025,
    date: "November 2025",
    role: "Narasumber",
    title: "Being Inspirations Seminar: Suara Muda Sinergitas Karir Profesional",
    organizer: "MNC University",
    location: "Jakarta",
    topic: "Sinergi Keterampilan Komunikasi & Karir Korporasi",
    isHighlight: true
  },
  {
    id: "exp-6",
    year: 2025,
    date: "September 2025",
    role: "Moderator",
    title: "Moderator CBX DNK TV UIN Syarif Hidayatullah Jakarta",
    organizer: "DNK TV FDIKOM UIN Syarif Hidayatullah",
    location: "Auditorium Harun Nasution, Jakarta",
    topic: "Broadcasting, Literasi Digital, & Media Kampus",
    isHighlight: true
  },
  {
    id: "exp-7",
    year: 2025,
    date: "September 2025",
    role: "Narasumber",
    title: "Sit Speaking Talks 'Dare To Speak, Dare To Lead'",
    organizer: "SIT Speaking Community",
    location: "Kota Makassar",
    topic: "Keberanian Berbicara & Kepemimpinan Publik"
  },
  {
    id: "exp-8",
    year: 2025,
    date: "Agustus 2025",
    role: "MC & Host",
    title: "MC Upacara Kemerdekaan RI ke-80",
    organizer: "Pemerintah & Komunitas Kepulauan",
    location: "Pulau Liukang Loe, Kab. Bulukumba",
    topic: "Protokol Kenegaraan & Semangat Kemerdekaan Maritim"
  },
  {
    id: "exp-9",
    year: 2025,
    date: "Agustus 2025",
    role: "MC & Host",
    title: "MC Sekolah Pulau 6 Asa Tanpa Batas (ATB)",
    organizer: "Asa Tanpa Batas (ATB)",
    location: "Desa Seraya Marannu, Kab. Manggarai Barat, NTT",
    topic: "Pengabdian Pendidikan Wilayah 3T & Pelosok Maritim",
    isHighlight: true
  },
  {
    id: "exp-10",
    year: 2025,
    date: "Juli 2025",
    role: "Narasumber",
    title: "Narasumber Podcast KreatorHub",
    organizer: "Kreatoria Media",
    location: "Studio Podcast KreatorHub, Jakarta",
    topic: "Personal Branding Konten Kreator & Public Speaker"
  },
  {
    id: "exp-11",
    year: 2025,
    date: "Juli 2025",
    role: "Narasumber",
    title: "Perwakilan Pemuda Pembacaan Deklarasi Berani Berantas Judi Online (Gebrak Z)",
    organizer: "Kementerian Komunikasi dan Digital RI (Kemkomdigi)",
    location: "Kantor Kementerian Komunikasi dan Digital RI, Jakarta",
    topic: "Advokasi Pemuda & Ruang Digital Bersih",
    isHighlight: true
  },
  {
    id: "exp-12",
    year: 2025,
    date: "Juli 2025",
    role: "Narasumber",
    title: "Shaping The Next Generation of Business Leader",
    organizer: "MNC University",
    location: "Jakarta",
    topic: "Kepemimpinan Bisnis Generasi Muda",
    isHighlight: true
  },
  {
    id: "exp-13",
    year: 2025,
    date: "Juli 2025",
    role: "Moderator",
    title: "Beyond Borders: Konflik Iran-Israel dan Masa Depan Palestina",
    organizer: "IDE Indonesia Office & Zeekend",
    location: "Menara Bidakara 2, Jakarta",
    topic: "Dinamika Geopolitik Dunia & Kepedulian Pemuda",
    isHighlight: true
  },
  {
    id: "exp-14",
    year: 2025,
    date: "Juni 2025",
    role: "Narasumber",
    title: "Workshop Personal Branding 'Brand Yourself'",
    organizer: "IEEE Universitas Pertamina",
    location: "Jakarta",
    topic: "Membangun Citra Diri Profesional bagi Calon Engineer & Saintis"
  },
  {
    id: "exp-15",
    year: 2025,
    date: "Juni 2025",
    role: "Narasumber",
    title: "Talkshow Radio Program KOKI (Komunitas Kita)",
    organizer: "RDK FM 107.9 UIN Syarif Hidayatullah Jakarta",
    location: "Studio RDK FM Jakarta",
    topic: "Gerakan Pemuda & Komunikasi Komunitas"
  },
  {
    id: "exp-16",
    year: 2025,
    date: "Juni 2025",
    role: "Narasumber",
    title: "Live Sharing Instagram Cakap Genspire: 'Volunteer Bukan Cuman Amal, Tapi Investasi Diri'",
    organizer: "Genspire Nusantara",
    location: "Online / Instagram Live",
    topic: "Kerelawanan & Peningkatan Kompetensi Pemuda"
  },
  {
    id: "exp-17",
    year: 2025,
    date: "Mei 2025",
    role: "Moderator",
    title: "Live Sharing: 'Work-Life Balance vs Work Life Blending: Mana yang Lebih Sehat?'",
    organizer: "Ruang Tumbuh Academy",
    location: "Online",
    topic: "Kesehatan Mental & Produktivitas Karir"
  },
  {
    id: "exp-18",
    year: 2025,
    date: "Mei 2025",
    role: "MC & Host",
    title: "MC Pembekalan Online Sekolah Pulau 6 ATB",
    organizer: "Asa Tanpa Batas (ATB)",
    location: "Online Zoom Meeting",
    topic: "Orientasi Relawan Pendidikan Daerah Pesisir NTT"
  },
  {
    id: "exp-19",
    year: 2025,
    date: "Mei 2025",
    role: "Narasumber",
    title: "Talkshow Program Ngobras RRI Pro 1 Kota Bogor",
    organizer: "RRI Pro 1 Kota Bogor",
    location: "Studio RRI Bogor",
    topic: "Kiprah & Kiprah Anak Muda dalam Public Speaking",
    isHighlight: true
  },
  {
    id: "exp-20",
    year: 2025,
    date: "Februari 2025",
    role: "Moderator",
    title: "Live Sharing Gensmart Talk 'Pendidikan untuk Pembangunan Berkelanjutan'",
    organizer: "Gensmart Indonesia",
    location: "Online",
    topic: "Membangun Generasi Peduli Lingkungan & SDG 2030"
  },
  {
    id: "exp-21",
    year: 2025,
    date: "Januari 2025",
    role: "MC & Host",
    title: "MC Sekolah Langit 2 ATB",
    organizer: "Asa Tanpa Batas (ATB)",
    location: "Desa Sembalun, Kab. Lombok Timur, NTB",
    topic: "Edukasi & Pemberdayaan Komunitas Pegunungan"
  },
  {
    id: "exp-22",
    year: 2024,
    date: "Desember 2024",
    role: "Moderator",
    title: "Suara Rasa Prolog: 'Kilas Kebijakan PPN 12%. Amankah Gaya Hidup Gen-Z?'",
    organizer: "Youth On Policy",
    location: "Jakarta / Hybrid",
    topic: "Kebijakan Fiskal & Literasi Finansial Pemuda"
  },
  {
    id: "exp-23",
    year: 2024,
    date: "Oktober 2024",
    role: "Narasumber",
    title: "Mahasiswa Komen Yuk: 'Harapan dalam Memilih Pemimpin'",
    organizer: "Liputan 6 SCTV",
    location: "Liputan 6 SCTV Jakarta",
    topic: "Suara Mahasiswa & Partisipasi Politik Sehat",
    isHighlight: true
  },
  {
    id: "exp-24",
    year: 2024,
    date: "Oktober 2024",
    role: "Moderator",
    title: "Live Sharing Anak Muda Garda Utama RK",
    organizer: "Jaguark",
    location: "Online",
    topic: "Aksi Kolektif & Sinergi Gerakan Anak Muda"
  },
  {
    id: "exp-25",
    year: 2024,
    date: "Oktober 2024",
    role: "Moderator",
    title: "Bincang Santai: 'Menghadapi Tantangan Era Digital: Kekuatan Kolaborasi, Inovasi, & Kreasi'",
    organizer: "Forum Pemuda Nasional",
    location: "Makassar",
    topic: "Semangat Sumpah Pemuda di Era Kecerdasan Buatan"
  },
  {
    id: "exp-26",
    year: 2024,
    date: "Juli 2024",
    role: "Narasumber",
    title: "Karantina Online Duta Siswa Kab/Kota Sulawesi Selatan",
    organizer: "Yayasan Duta Siswa Indonesia",
    location: "Online",
    topic: "'Menjadi Generasi-Z yang Tangguh: Pentingnya Sikap Positif di Tengah Tantangan'"
  },
  {
    id: "exp-27",
    year: 2024,
    date: "Mei 2024",
    role: "MC & Host",
    title: "MC Halal Bi Halal IKAMASI",
    organizer: "Ikatan Alumni Mahasiswa Sinjai (IKAMASI)",
    location: "Rumah Jabatan Walikota Makassar",
    topic: "Silaturahmi Akbar Pemuda & Tokoh Daerah"
  },
  {
    id: "exp-28",
    year: 2024,
    date: "Maret 2024",
    role: "Moderator",
    title: "International Women's Day Talk: 'Menjadi Perempuan'",
    organizer: "Duta Maritim Indonesia Aspeksindo",
    location: "Hybrid / Jakarta & Makassar",
    topic: "Kepemimpinan Perempuan & Kesetaraan Gender di Sektor Maritim"
  },
  {
    id: "exp-29",
    year: 2024,
    date: "Februari 2024",
    role: "Narasumber",
    title: "Perwakilan Siswa SMA/MA Pembacaan Deklarasi Pemilu Damai",
    organizer: "KPU Kab. Pangkep, Sulawesi Selatan",
    location: "Kabupaten Pangkep, Sulsel",
    topic: "Pemilih Pemula Cerdas & Pemilu Damai 2024",
    isHighlight: true
  },
  {
    id: "exp-30",
    year: 2023,
    date: "November 2023",
    role: "Moderator",
    title: "Shohwatul Is'ad Youth Festival 2023",
    organizer: "PPMI Shohwatul Is'ad",
    location: "Kab. Pangkep, Sulawesi Selatan",
    topic: "Festival Kepemudaan Santri & Kreativitas Generasi Islami"
  },
  {
    id: "exp-31",
    year: 2023,
    date: "November 2023",
    role: "MC & Host",
    title: "Pengisi Acara & Pembacaan Puisi Penutupan KTG Mentoring ETOS",
    organizer: "ETOS ID Dompet Dhuafa",
    location: "Makassar",
    topic: "Apresiasi Seni & Literasi Budaya Pemuda"
  },
  {
    id: "exp-32",
    year: 2023,
    date: "Oktober 2023",
    role: "Moderator",
    title: "Live Sharing Bincang Santai: 'Menginspirasi Melalui Tindakan: Pemuda dan Trik Kreatif Kolaboratif'",
    organizer: "Komunitas Kreatif Sulsel",
    location: "Makassar",
    topic: "Seni Berkolaborasi Antar Organisasi"
  },
  {
    id: "exp-33",
    year: 2023,
    date: "Oktober 2023",
    role: "Narasumber",
    title: "Senin Inspirasi: 'Membangun Masa Depan Maritim Indonesia: Peran Duta Maritim 2023'",
    organizer: "101.1 Smart FM Makassar & Aspeksindo",
    location: "Studio Smart FM Makassar",
    topic: "Potensi Poros Maritim & Pemberdayaan Daerah Pesisir",
    isHighlight: true
  },
  {
    id: "exp-34",
    year: 2023,
    date: "Oktober 2023",
    role: "Narasumber",
    title: "Program Sapa Sulsel: 'Peran Duta Maritim Indonesia Aspeksindo'",
    organizer: "Kompas TV Makassar",
    location: "Studio Kompas TV Makassar",
    topic: "Kedaulatan Maritim & Kontribusi Anak Muda Daerah",
    isHighlight: true
  },
  {
    id: "exp-35",
    year: 2023,
    date: "Agustus 2023",
    role: "Moderator",
    title: "Bincang Santai: 'Eksistensi Generasi Muda dalam Membangun Peradaban Dunia'",
    organizer: "Forum Dialog Pemuda",
    location: "Online",
    topic: "Peran Pemuda Global & Wawasan Kebangsaan"
  },
  {
    id: "exp-36",
    year: 2023,
    date: "Juli 2023",
    role: "Narasumber",
    title: "Program Jejak Islam Santri PPMI Shohwatul Is'ad",
    organizer: "TVRI Sulawesi Selatan",
    location: "Studio TVRI Makassar",
    topic: "Edukasi Pesantren Modern & Karakter Unggul Santri",
    isHighlight: true
  },
  {
    id: "exp-37",
    year: 2023,
    date: "Juli 2023",
    role: "Moderator",
    title: "Podcast Santri Digitalpreneur Indonesia bersama Menparekraf Sandiaga Uno",
    organizer: "Kemenparekraf RI",
    location: "Jakarta / Makassar",
    topic: "Digitalisasi Santri, Ekonomi Kreatif, & Peluang Usaha Mandiri",
    isHighlight: true
  },
  {
    id: "exp-38",
    year: 2023,
    date: "Juni 2023",
    role: "MC & Host",
    title: "MC Penamatan Akbar SMP-SMA PPMI Shohwatul Is'ad",
    organizer: "PPMI Shohwatul Is'ad",
    location: "Pangkep",
    topic: "Wisuda & Pelepasan Santri Berprestasi"
  },
  {
    id: "exp-39",
    year: 2023,
    date: "Juni 2023",
    role: "Moderator",
    title: "Bincang Santai 'Langkah Maju Generasi Emas 2045'",
    organizer: "Asosiasi Mahasiswa Sulsel",
    location: "Makassar",
    topic: "Kesiapan Skill Abad 21 Pemuda"
  },
  {
    id: "exp-40",
    year: 2023,
    date: "Maret 2023",
    role: "Moderator",
    title: "Ngabuburit Duta Baca Sulsel Bincang Inspirasi 'Menjadi Pemuda yang Menginspirasi'",
    organizer: "Dinas Perpustakaan & Kearsipan Prov Sulsel",
    location: "Makassar",
    topic: "Budaya Literasi & Inspirasi Karya Pemuda"
  },
  {
    id: "exp-41",
    year: 2023,
    date: "Januari 2023",
    role: "MC & Host",
    title: "MC Seminar Parenting SMP IT Shohwatul Is'ad",
    organizer: "SMP IT Shohwatul Is'ad",
    location: "Pangkep",
    topic: "Pengasuhan Positif & Komunikasi Orang Tua-Anak"
  },
  {
    id: "exp-42",
    year: 2022,
    date: "November 2022",
    role: "Moderator",
    title: "Shohwatul Is'ad Youth Festival 2022",
    organizer: "OSIS PPMI Shohwatul Is'ad",
    location: "Pangkep",
    topic: "Kepemimpinan & Sportivitas Santri"
  },
  {
    id: "exp-43",
    year: 2021,
    date: "Oktober 2021",
    role: "MC & Host",
    title: "MC Upacara Peringatan Hari Santri Nasional",
    organizer: "Pemerintah Kabupaten Pangkep",
    location: "Lapangan Pemda Pangkep",
    topic: "Upacara Protokoler Hari Santri Nasional",
    isHighlight: true
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-bnsp",
    title: "Sertifikat Kompetensi Klaster Public Speaking BNSP RI",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP) & LSP Public Relations Nusantara",
    credentialId: "No. HMS.1878.01433.2025 / 70203.2432.0.0008010.2025",
    date: "24 Oktober 2025",
    category: "Akreditasi Profesi",
    image: "/assets/pdf-pages/cert-bnsp.png",
    description: "Sertifikasi resmi standar kompetensi kerja nasional Republik Indonesia pada bidang Kehumasan (Public Relations) dengan kualifikasi Skema Klaster Public Speaking."
  },
  {
    id: "cert-cpss",
    title: "Certified Public Speaking Specialist (CPSS)",
    issuer: "PT Provisia Consulting Indonesia",
    credentialId: "No. 0001/PI-OLCPSS7/1415072025",
    date: "23 Juli 2025",
    category: "Akreditasi Profesi",
    image: "/assets/pdf-pages/cert-cpss.png",
    description: "Gelar kompetensi Certified Public Speaking Specialist (CPSS) yang membuktikan keahlian profesional dalam teknik berbicara di depan publik, retorika, dan presentasi persuasif."
  },
  {
    id: "cert-choky",
    title: "Public Speaking Regular Class - Batch 15",
    issuer: "Choky Sitohang Speaking Inc. (Founder: Choky Sitohang)",
    credentialId: "No. 0011-5/CHOSS/IX/2024",
    date: "Oktober 2024",
    category: "Pendidikan Khusus",
    image: "/assets/pdf-pages/cert-choky-sitohang.png",
    description: "Pelatihan intensif teknik public speaking profesional, vokal ekspresi, pembawaan panggung, dan etika komunikasi langsung di bawah naungan presenter senior Choky Sitohang."
  },
  {
    id: "cert-irwani",
    title: "Pelatihan Pembawa Acara / MC & Public Speaking (Index 4.0 - Excellence)",
    issuer: "Irwani Pane Institute",
    credentialId: "Awarded August 19, 2021",
    date: "Agustus 2021",
    category: "Pendidikan Khusus",
    image: "/assets/pdf-pages/cert-irwani-pane.png",
    description: "Menyelesaikan program pelatihan MC reguler dengan capaian skor maksimal Index 4.0 (Excellence / Baik Sekali) pada 6 indikator: Appearance, Voice Competence, Body Language, Self Confidence, Description Technique, dan General MC."
  },
  {
    id: "cert-mnc",
    title: "Sertifikat Pembicara Forum Pemimpin Bisnis Masa Depan",
    issuer: "MNC University (Rektor: Dr. Dendi Pratama)",
    credentialId: "Seminar Management Forum MNC",
    date: "Juli 2025",
    category: "Penghargaan Forum",
    image: "/assets/pdf-pages/certificates-board-2.png",
    description: "Apresiasi sebagai Narasumber dalam Seminar 'Shaping The Next Generation of Business Leader: Motivation, Character Building & Professional Excellence'."
  },
  {
    id: "cert-ide",
    title: "Sertifikat Moderator Kuliah Publik Geopolitik Dunia",
    issuer: "IDE Indonesia & Zeekend (Chairman: Syahrul Khaidar Kamal)",
    credentialId: "IDE-ZEEKEND-2025",
    date: "Juni 2025",
    category: "Penghargaan Forum",
    image: "/assets/pdf-pages/certificates-board-2.png",
    description: "Sertifikat penghargaan sebagai Moderator Kuliah Publik 'Konflik Iran-Israel dan Masa Depan Palestina: Bagaimana Generasi Muda Peduli Dinamika Geopolitik Dunia'."
  },
  {
    id: "cert-edukatif",
    title: "Sertifikat Narasumber Kisah Inspiratif",
    issuer: "Edukatif.id (Founder: Jumadi Hasibuan)",
    credentialId: "No. 041/EKF/VI/2025",
    date: "19 Juni 2025",
    category: "Penghargaan Forum",
    image: "/assets/pdf-pages/certificates-board-2.png",
    description: "Penghargaan sebagai narasumber kisah inspiratif dengan topik 'Suara yang Menyalakan Asa: Perjalanan Menjadi CEO of Representative Gensmart Indonesia'."
  },
  {
    id: "cert-dutasewa",
    title: "Pemateri Karantina Duta Siswa Indonesia Sulsel",
    issuer: "Yayasan Duta Siswa Indonesia",
    credentialId: "DSI-SULSEL-2024",
    date: "Juli 2024",
    category: "Penghargaan Forum",
    image: "/assets/pdf-pages/certificates-board-2.png",
    description: "Sebagai pemateri pembekalan karantina duta siswa se-Sulawesi Selatan dengan tema membangun ketangguhan sikap positif anak muda menghadapi tantangan zaman."
  }
];

export const PARTNERS_LIST = [
  { name: "Kementerian Pemuda dan Olahraga RI", category: "Pemerintahan" },
  { name: "Kementerian Komunikasi dan Digital RI", category: "Pemerintahan" },
  { name: "Asosiasi Pemerintah Daerah Kepulauan & Pesisir (ASPEKSINDO)", category: "Asosiasi Nasional" },
  { name: "MNC University", category: "Perguruan Tinggi" },
  { name: "Kompas TV Makassar", category: "Media Televisi" },
  { name: "TVRI Sulawesi Selatan", category: "Media Televisi" },
  { name: "RRI Pro 1 & Pro 2 (Jakarta & Bogor)", category: "Media Radio" },
  { name: "Smart FM Makassar 101.1", category: "Media Radio" },
  { name: "RDK FM 107.9 Syarif Hidayatullah Jakarta", category: "Media Kampus" },
  { name: "DNK TV FDIKOM UIN Jakarta", category: "Media Televisi Kampus" },
  { name: "IEEE Universitas Pertamina", category: "Organisasi Internasional" },
  { name: "MySkill", category: "EdTech Platform" },
  { name: "Distrik Berisik", category: "Gerakan Pemuda" },
  { name: "Genspire Nusantara", category: "Komunitas Pemuda" },
  { name: "Asa Tanpa Batas (ATB)", category: "Pendidikan Daerah 3T" },
  { name: "Prambors Radio Makassar", category: "Media Radio" }
];

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Sesi Keynote Speaker di MNC University",
    event: "Being Inspirations Seminar MNC Group",
    image: "/assets/pdf-pages/gallery-mosaic.png",
    description: "Menyampaikan pemaparan di hadapan ratusan mahasiswa dan akademisi MNC University tentang sinergitas suara muda dalam menembus karir korporat.",
    role: "Narasumber"
  },
  {
    id: "gal-2",
    title: "Dialog Santri Digitalpreneur bersama Menparekraf Sandiaga Uno",
    event: "Santri Digitalpreneur Indonesia",
    image: "/assets/pdf-pages/gallery-mosaic.png",
    description: "Menjadi moderator dalam bincang inspiratif membahas peluang ekonomi kreatif dan digitalisasi bersama Menparekraf RI Sandiaga Salahuddin Uno.",
    role: "Moderator"
  },
  {
    id: "gal-3",
    title: "Siaran Langsung Televisi Sapa Sulsel Kompas TV",
    event: "Kompas TV Makassar",
    image: "/assets/pdf-pages/gallery-mosaic.png",
    description: "Wawancara live interaktif mengupas peran generasi muda dalam advokasi poros maritim dan pembangunan wilayah kepulauan Indonesia.",
    role: "Narasumber"
  },
  {
    id: "gal-4",
    title: "Talkshow Radio Interaktif RRI Pro 1 & Pro 2",
    event: "Radio Republik Indonesia",
    image: "/assets/pdf-pages/gallery-mosaic.png",
    description: "Sesi siaran radio langsung berbagi pengalaman public speaking dan tips percaya diri bagi para pendengar muda di Jakarta & Bogor.",
    role: "Narasumber"
  },
  {
    id: "gal-5",
    title: "Panggung Youth Festival & Forum Kebangsaan",
    event: "Shohwatul Is'ad Youth Festival",
    image: "/assets/pdf-pages/gallery-mosaic.png",
    description: "Memandu talkshow interaktif kepemudaan yang dihadiri ribuan santri dan pelajar dengan energi panggung yang komunikatif.",
    role: "Moderator & MC"
  },
  {
    id: "gal-6",
    title: "Pengabdian Pendidikan Sekolah Pulau di NTT & NTB",
    event: "Asa Tanpa Batas (ATB)",
    image: "/assets/pdf-pages/gallery-mosaic.png",
    description: "Memandu agenda pembekalan dan upacara kemerdekaan di pulau terluar Liukang Loe dan Desa Seraya Marannu Labuan Bajo.",
    role: "MC & Relawan"
  }
];

export const TESTIMONIALS = [
  {
    quote: "Penyampaian Mas Arya sangat bertenaga, runut, dan langsung mengena ke audiens mahasiswa. Kemampuan membangun keterlibatan audiens patut diapresiasi tinggi.",
    author: "Panitia Seminar Karir MNC University",
    role: "Direktorat Kemahasiswaan",
    organization: "MNC University Jakarta"
  },
  {
    quote: "Sebagai moderator, Arya sangat piawai mengarahkan alur diskusi panel geopolitik yang rumit menjadi percakapan yang mudah dicerna dan tajam. Sangat profesional!",
    author: "Syahrul Khaidar Kamal",
    role: "Chairman",
    organization: "IDE Indonesia & Zeekend"
  },
  {
    quote: "Karakter vokal yang mantap, penguasaan etika panggung yang teruji dengan index 4.0, dan pembawaan ramah membuat setiap sesi terasa hangat dan berbobot.",
    author: "Tim Pelatih Protokoler & MC",
    role: "Instruktur Senior",
    organization: "Lembaga Pelatihan Komunikasi"
  }
];

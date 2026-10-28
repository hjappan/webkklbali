export type ExplorationCategory = "industri" | "wisata";

export interface ExplorationItem {
  id: string;
  category: ExplorationCategory;
  badge: string;
  image: string;
  alt: string;
  imagePosition?: string;
  date: string;
  location: string;
  title: string;
  description: string;
  details: {
    purpose: string;
    relevance: string;
    socialImpact: string;
  };
  reflection: {
    title: string;
    text: string;
  };
  facts: {
    locationLabel: string;
    region: string;
    time: string;
    timeNote: string;
    highlightLabel: string;
    highlightTitle: string;
    highlightNote: string;
  };
}

export const explorations: ExplorationItem[] = [
  {
    id: "victoria-care",
    category: "industri",
    badge: "Kunjungan Industri",
    image: "/eksplorasi/victoria.jpg",
    alt: "Peserta KKL mendengarkan pemaparan pemandu di area pameran PT Victoria Care Indonesia",
    date: "18 Agustus 2026",
    location: "PT Victoria Care Indonesia, Semarang",
    title: "Menelusuri Industri Perawatan Tubuh Victoria Care",
    description:
      "Mengamati alur produksi, standar mutu, dan strategi inovasi produk perawatan tubuh di PT Victoria Care Indonesia, Semarang.",
    details: {
      purpose: "Melihat langsung proses produksi kosmetik dan perawatan tubuh, mulai dari riset formula hingga pengemasan produk.",
      relevance: "Memahami otomasi lini produksi, pengendalian mutu berbasis data, serta integrasi sistem informasi manufaktur.",
      socialImpact: "Berdiskusi dengan praktisi tentang etika produk, peluang karier, dan dampak industri kecantikan bagi masyarakat.",
    },
    reflection: {
      title: "Standar Mutu & Otomasi Produksi",
      text: "Kunjungan ke PT Victoria Care Indonesia memperlihatkan bagaimana sebuah produk perawatan tubuh dirancang, diproduksi, dan diuji sebelum sampai ke tangan konsumen. Alur kerja yang tertata menunjukkan pentingnya standar mutu, ketertiban data, dan koordinasi antarbagian agar setiap batch produksi konsisten dan aman.",
    },
    facts: {
      locationLabel: "LOKASI KUNJUNGAN",
      region: "Semarang, Jawa Tengah",
      time: "08.00 - 09.00 WIB",
      timeNote: "Sesi tur fasilitas & diskusi bersama praktisi",
      highlightLabel: "SOROTAN KEGIATAN",
      highlightTitle: "Lini Produksi & Pengendalian Mutu",
      highlightNote: "Dari riset formula hingga pengemasan produk",
    },
  },
  {
    id: "pura-ulun-danu",
    category: "wisata",
    badge: "Wisata Budaya",
    image: "/eksplorasi/ulundanu.jpg",
    alt: "Pagoda Pura Ulun Danu Beratan dikelilingi taman dengan latar pegunungan",
    date: "19 Agustus 2026",
    location: "Danau Beratan, Bedugul",
    title: "Pura Ulun Danu Beratan: Ikon Kedamaian Danau",
    description:
      "Menyaksikan kemegahan candi bertingkat sebelas yang mengapung di perairan tenang Danau Beratan berlatar perbukitan berkabut sejuk.",
    details: {
      purpose: "Filsafat epos Ramayana lewat harmoni vokal poliritmis tanpa alat musik.",
      relevance: "Analogi rill arsitektur sistem terdistribusi dan sinkronisasi konsensus tanpa simpul pengendali central.",
      socialImpact: "Diskusi refleksi dan penguatan kebersamaan mahasiswa bersama dosen pendamping di Jimbaran.",
    },
    reflection: {
      title: "Harmoni Alam & Arsitektur Berkelanjutan",
      text: "Pura Ulun Danu Beratan berdiri di tepi danau sebagai simbol keseimbangan antara manusia, alam, dan Sang Pencipta. Struktur pagoda bertingkat yang tahan cuaca menjadi pelajaran nyata tentang perancangan bangunan adaptif, sementara tata kelola kawasan danau memberi gambaran bagaimana sumber daya dibagi secara berkelanjutan.",
    },
    facts: {
      locationLabel: "LOKASI KEGIATAN",
      region: "Tabanan, Bali",
      time: "11.30 - 12.30 WITA",
      timeNote: "Sesi pagi & kabut danau",
      highlightLabel: "SOROTAN BUDAYA",
      highlightTitle: "Pagoda 11 Tingkat & Danau Beratan",
      highlightNote: "Filosofi Danu sebagai sumber kehidupan masyarakat Bali",
    },
  },
  {
    id: "devdan-show",
    category: "wisata",
    badge: "Wisata Budaya",
    image: "/eksplorasi/devdan.jpg",
    alt: "Penari tampil di panggung pertunjukan Devdan Show di Nusa Dua",
    date: "19 Agustus 2026",
    location: "Bali Nusa Dua Theatre",
    title: "Pesona Nusantara dalam Tari Devdan Show",
    description:
      "Pertunjukan teatrikal yang memadukan tari, musik, dan tata cahaya untuk merangkum kekayaan budaya Nusantara.",
    details: {
      purpose: "Menyaksikan pertunjukan seni teatrikal yang mengangkat ragam budaya Nusantara dalam satu panggung.",
      relevance: "Mengamati pemanfaatan teknologi panggung, pencahayaan, dan tata suara sebagai bentuk integrasi seni dan rekayasa.",
      socialImpact: "Menumbuhkan apresiasi terhadap keberagaman budaya serta rantai ekonomi kreatif pariwisata Bali.",
    },
    reflection: {
      title: "Teknologi Panggung & Narasi Budaya",
      text: "Pertunjukan Devdan Show menghadirkan cerita Nusantara lewat perpaduan gerak penari, musik, dan tata cahaya yang presisi. Di balik kemegahannya, ada kerja tim produksi yang mengatur waktu, urutan adegan, dan perangkat panggung layaknya sebuah sistem yang harus selalu sinkron.",
    },
    facts: {
      locationLabel: "LOKASI PERTUNJUKAN",
      region: "Nusa Dua, Badung, Bali",
      time: "19.00 - 20.00 WITA",
      timeNote: "Sesi pertunjukan malam",
      highlightLabel: "SOROTAN PERTUNJUKAN",
      highlightTitle: "Tari, Musik & Visual Nusantara",
      highlightNote: "Kolaborasi seni tradisi dengan teknologi panggung modern",
    },
  },
  {
    id: "iot-industri",
    category: "industri",
    badge: "Kunjungan Industri",
    image: "/eksplorasi/bdi.jpg",
    alt: "Peserta KKL mengikuti sesi kunjungan industri di Balai Diklat Industri Bali",
    date: "20 Agustus 2026",
    location: "Balai Diklat Industri Bali, Denpasar",
    title: "Eksplorasi Ekosistem IoT & Industri Digital",
    description:
      "Mempelajari integrasi arsitektur cloud, automasi cerdas, dan praktik rekayasa perangkat lunak skala industri modern.",
    details: {
      purpose: "Kunjungan teknologi ke Balai Diklat Industri Bali guna mengamati inkubasi start-up animasi, game.",
      relevance: "Menjelaskan hubungan kisah dengan istilah yang sedang dibahas di kelas.",
      socialImpact: "Mengamati dampak positif teknologi terhadap masyarakat lokal serta ekosistem usaha kreatif.",
    },
    reflection: {
      title: "Harmoni Inovasi & Kolaborasi Tim",
      text: "Kunjungan ke Balai Diklat Industri Bali memperlihatkan bagaimana riset, prototipe perangkat, dan pengembangan perangkat lunak berjalan dalam satu ekosistem. Setiap tim bekerja seperti simpul pada sistem terdistribusi: saling bertukar data, menjaga konsistensi, dan bergerak menuju tujuan yang sama tanpa kehilangan koordinasi.",
    },
    facts: {
      locationLabel: "LOKASI KEGIATAN",
      region: "Denpasar, Bali",
      time: "09.00 - 10.30 WITA",
      timeNote: "Sesi kunjungan industri & workshop",
      highlightLabel: "SOROTAN KEGIATAN",
      highlightTitle: "Ekosistem IoT & Startup Digital",
      highlightNote: "Inkubasi animasi, game, dan rekayasa perangkat lunak",
    },
  },
  {
    id: "tari-kecak",
    category: "wisata",
    badge: "Wisata Budaya",
    image: "/eksplorasi/kecak.jpg",
    alt: "Pertunjukan Tari Kecak di pesisir Pandawa saat matahari terbenam",
    imagePosition: "center 78%",
    date: "20 Agustus 2026",
    location: "Pantai Pandawa & Jimbaran",
    title: "Magis Tari Kecak di Pesisir Sunset Dewata",
    description:
      "Ritme sakral suara cak-cak berpadu kobaran api dan panorama matahari terbenam spektakuler di tepi tebing samudra.",
    details: {
      purpose: "Filsafat epos Ramayana lewat harmoni vokal poliritmis tanpa alat musik.",
      relevance: "Analogi rill arsitektur sistem terdistribusi dan sinkronisasi konsensus tanpa simpul pengendali central.",
      socialImpact: "Diskusi refleksi dan penguatan kebersamaan mahasiswa bersama dosen pendamping di Jimbaran.",
    },
    reflection: {
      title: "Harmoni Budaya & Sinkronisasi Sistem",
      text: "Atusan penari membentuk lingkungan ritmis membawakan lakon Ramayana di bibir tebing Samudera Hindia. Pementasan ini memberi pemahaman nyata tentang bagaimana keselarasan vokal dan koordinasi kolektif bekerja selaras dengan prinsip sinkronisasi data modern, ditutup dengan sesi keakraban di pesisir Jimbaran.",
    },
    facts: {
      locationLabel: "LOKASI PEMENTASAN",
      region: "Badung, Bali",
      time: "18.00 - 19.00 WITA",
      timeNote: "Sesi Golden Hour & Senja Samudera",
      highlightLabel: "KISAH / BABAK CERITA",
      highlightTitle: "Epos Ramayana & Anoman Obong",
      highlightNote: "Perjuangan Rama, Laksamana, Sugriwa, & Hanoman",
    },
  },
  {
    id: "pandawa-beach",
    category: "wisata",
    badge: "Wisata Alam",
    image: "/eksplorasi/pandawa.jpg",
    alt: "Papan selamat datang Pantai Pandawa dengan latar laut biru dan gazebo",
    imagePosition: "center bottom",
    date: "20 Agustus 2026",
    location: "Pantai Pandawa, Kutuh, Badung",
    title: "Pesona Pantai Pandawa di Balik Tebing Kapur",
    description:
      "Menikmati hamparan pasir putih dan laut biru Pantai Pandawa yang diapit tebing kapur, diselingi kisah budaya dan tata kelola wisata desa.",
    details: {
      purpose: "Mengenal potensi wisata bahari dan nilai budaya yang melekat pada Pantai Pandawa.",
      relevance: "Mengamati pemanfaatan sistem informasi pariwisata, pemetaan lokasi, dan pengelolaan data pengunjung.",
      socialImpact: "Belajar dari pengelolaan wisata berbasis desa adat yang melibatkan masyarakat setempat.",
    },
    reflection: {
      title: "Tata Kelola Wisata & Pelestarian Alam",
      text: "Pantai Pandawa menunjukkan bagaimana sebuah kawasan pesisir dapat dikelola tanpa melupakan warga sekitar. Deretan gazebo, akses jalan, dan penataan area foto menjadi contoh penerapan tata kelola wisata yang memadukan pelestarian alam dengan peluang ekonomi bagi desa adat.",
    },
    facts: {
      locationLabel: "LOKASI KUNJUNGAN",
      region: "Kutuh, Badung, Bali",
      time: "16.00 - 17.30 WITA",
      timeNote: "Sesi sore & senja di pesisir",
      highlightLabel: "SOROTAN KEGIATAN",
      highlightTitle: "Tebing Kapur & Wisata Desa Adat",
      highlightNote: "Harmoni alam, budaya, dan ekonomi masyarakat",
    },
  },
  {
    id: "pantai-kuta",
    category: "wisata",
    badge: "Wisata Alam",
    image: "/eksplorasi/kuta.jpg",
    alt: "Pengunjung bersantai di bawah pohon rindang dengan latar Pantai Kuta",
    date: "20 Agustus 2026",
    location: "Pantai Kuta, Badung",
    title: "Semarak Pantai Kuta di Bawah Rindang Pohon",
    description:
      "Merasakan suasana Pantai Kuta yang ramai oleh wisatawan, deretan payung pantai, dan aktivitas ekonomi pesisir yang hidup.",
    details: {
      purpose: "Mengamati suasana wisata Pantai Kuta serta aktivitas pengunjung dan pelaku usaha di sekitarnya.",
      relevance: "Melihat pemanfaatan sistem reservasi, pembayaran digital, dan layanan wisata berbasis aplikasi.",
      socialImpact: "Merefleksikan peran pariwisata bagi pendapatan warga dan pentingnya menjaga kebersihan pantai.",
    },
    reflection: {
      title: "Dinamika Wisata & Ekonomi Pesisir",
      text: "Pantai Kuta memperlihatkan wajah pariwisata Bali yang dinamis: wisatawan, pedagang, dan penyedia jasa berbagi ruang di sepanjang pesisir. Di balik keramaiannya, ada koordinasi layanan, pengelolaan kebersihan, dan pemanfaatan teknologi digital yang membuat pengalaman pengunjung tetap tertata.",
    },
    facts: {
      locationLabel: "LOKASI KUNJUNGAN",
      region: "Badung, Bali",
      time: "14.00 - 15.30 WITA",
      timeNote: "Sesi siang & eksplorasi pesisir",
      highlightLabel: "SOROTAN KEGIATAN",
      highlightTitle: "Wisata Bahari & Ekonomi Kreatif",
      highlightNote: "Aktivitas pengunjung, pelaku usaha, dan penataan pantai",
    },
  },
  {
    id: "makrab-jimbaran",
    category: "wisata",
    badge: "Malam Keakraban",
    image: "/eksplorasi/makrab.jpg",
    alt: "Peserta KKL berkumpul di acara makrab di tepi Pantai Jimbaran pada malam hari",
    date: "20 Agustus 2026",
    location: "Cafe Tepi Pantai Jimbaran",
    title: "Makrab Hangat di Tepi Pantai Jimbaran",
    description:
      "Menutup rangkaian KKL dengan malam keakraban, refleksi perjalanan, dan kebersamaan mahasiswa bersama dosen pendamping.",
    details: {
      purpose: "Menutup rangkaian KKL dengan sesi keakraban dan refleksi bersama di tepi Pantai Jimbaran.",
      relevance: "Membangun komunikasi tim, koordinasi acara, dan dokumentasi kegiatan layaknya manajemen proyek.",
      socialImpact: "Mempererat hubungan mahasiswa dan dosen pendamping melalui diskusi santai serta berbagi pengalaman.",
    },
    reflection: {
      title: "Kebersamaan & Refleksi Perjalanan",
      text: "Malam keakraban di Jimbaran menjadi ruang untuk saling mengenal lebih dekat setelah rangkaian kunjungan industri dan eksplorasi budaya. Obrolan santai, hiburan, dan refleksi bersama menegaskan bahwa keberhasilan sebuah kegiatan tidak hanya ditentukan oleh rencana, tetapi juga oleh kekompakan tim yang menjalankannya.",
    },
    facts: {
      locationLabel: "LOKASI KEGIATAN",
      region: "Jimbaran, Badung, Bali",
      time: "19.00 - 21.30 WITA",
      timeNote: "Sesi makrab & refleksi perjalanan",
      highlightLabel: "SOROTAN ACARA",
      highlightTitle: "Makrab KKL Informatika",
      highlightNote: "Kebersamaan mahasiswa dan dosen pendamping",
    },
  },
];

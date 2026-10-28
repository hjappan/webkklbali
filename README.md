# KKL 2026 — Jelajah Wawasan & Pulau Dewata

Website dokumentasi kegiatan Kuliah Kerja Lapangan (KKL) mahasiswa Informatika Universitas PGRI Semarang di Bali. Situs merangkum kunjungan industri, rangkaian agenda, serta eksplorasi destinasi wisata dan budaya dalam tampilan editorial responsif dengan mode gelap dan terang.

Dibangun sebagai situs statis dengan Astro dan Tailwind CSS.

## Fitur

- Hero beranda dengan ringkasan perjalanan.
- Timeline agenda KKL selama 5 hari dengan modal rundown lengkap.
- Katalog eksplorasi dengan filter kategori **Semua**, **Industri**, dan **Wisata**.
- Halaman detail dinamis untuk setiap kegiatan di `/eksplorasi/[id]`.
- Toggle mode gelap/terang dengan ikon bulan dan matahari; mode gelap menjadi default.
- Header fixed dengan underline animasi yang mengikuti posisi scroll (scrollspy) dan smooth scroll ke bagian halaman.
- Layout responsif untuk mobile, tablet, dan desktop.
- Footer dengan logo institusi yang dibaca otomatis dari folder `public/logos`.

## Teknologi

- [Astro](https://astro.build) 7.x (output statis)
- [Tailwind CSS](https://tailwindcss.com) 4.x via `@tailwindcss/vite`
- TypeScript untuk tipe data
- Google Fonts: Plus Jakarta Sans dan Playfair Display
- Node.js >= 22.23.4

## Menjalankan Proyek

```sh
npm install
npm run dev
```

Dev server berjalan di `http://localhost:4321`.

Perintah lain:

| Perintah          | Fungsi                                    |
| :---------------- | :---------------------------------------- |
| `npm run dev`     | Menjalankan dev server                    |
| `npm run build`   | Membuat build produksi ke folder `dist/`  |
| `npm run preview` | Melihat hasil build secara lokal          |

## Struktur Proyek

```text
webkkl/
├── public/
│   ├── bg.jpg                 # Background hero
│   ├── favicon.svg
│   ├── eksplorasi/            # Foto dokumentasi kegiatan
│   └── logos/                 # Logo UPGRIS, FTI, Informatika
├── src/
│   ├── components/
│   │   ├── ExplorationCard.astro     # Kartu kegiatan
│   │   ├── ExplorationGallery.astro  # Grid + filter katalog
│   │   ├── Footer.astro
│   │   ├── Navbar.astro              # Header, toggle tema, dan scrollspy
│   │   └── ScheduleTimeline.astro    # Data agenda dan modal rundown KKL
│   ├── data/
│   │   └── explorations.ts           # Sumber data semua kegiatan
│   ├── layouts/
│   │   └── Layout.astro              # Kerangka HTML, meta, favicon
│   ├── pages/
│   │   ├── index.astro               # Beranda
│   │   ├── jadwal.astro              # Halaman jadwal
│   │   ├── eksplorasi.astro          # Katalog lengkap
│   │   └── eksplorasi/[id].astro     # Detail kegiatan (dinamis)
│   └── styles/
│       └── global.css                # Tailwind, font, tema dasar
├── astro.config.mjs
├── package.json
└── README.md
```

## Rute

| Rute                 | Halaman                                    |
| :------------------- | :----------------------------------------- |
| `/`                  | Beranda, agenda ringkas, dan pratinjau katalog |
| `/jadwal`            | Timeline lengkap agenda KKL                |
| `/eksplorasi`        | Katalog seluruh kegiatan                   |
| `/eksplorasi/<id>`   | Detail kegiatan, dibuat otomatis dari data |

## Menambah atau Mengubah Kegiatan

Semua konten kegiatan berada di `src/data/explorations.ts`. Setiap entri mengikuti `ExplorationItem`:

```ts
{
  id: "nama-slug",            // dipakai sebagai URL /eksplorasi/<id>
  category: "industri",       // "industri" | "wisata"
  badge: "Kunjungan Industri",
  image: "/eksplorasi/foto.jpg",
  alt: "Deskripsi foto",
  imagePosition: "center 78%", // opsional, atur crop (object-position)
  date: "22 Agustus 2026",
  location: "Nama lokasi, kota",
  title: "Judul kegiatan",
  description: "Ringkasan singkat.",
  details: { purpose, relevance, socialImpact },
  reflection: { title, text },
  facts: { locationLabel, region, time, timeNote, highlightLabel, highlightTitle, highlightNote },
}
```

Langkah menambah kegiatan:

1. Tambahkan foto ke `public/eksplorasi/` (gunakan nama file tanpa spasi).
2. Salin satu objek di `explorations.ts`, sesuaikan `id` dan isinya.
3. Jalankan `npm run dev` atau `npm run build`. Halaman detail akan dibuat otomatis.

Untuk mengubah agenda, edit array `days` di `src/components/ScheduleTimeline.astro`. Setiap agenda mendukung waktu, aktivitas, dan lokasi.

## Aset dan Tema

- Foto kegiatan disimpan di `public/eksplorasi/` dan diakses lewat path absolut seperti `/eksplorasi/victoria.jpg`.
- Logo footer dicari otomatis berdasarkan kata kunci nama file di `public/logos/` (`upgris`, `fti`, `informatika`).
- Mode gelap adalah default; mode terang dipilih lewat toggle di Navbar dan disimpan pada `localStorage` dengan key `kkl-theme`.
- Tema menggunakan token CSS di `src/styles/global.css`, termasuk warna latar, teks, border, kartu, timeline, modal, dan shadow hover.
- Warna aksen utama: biru `#5b7fbf` / `#3b5f9e`; shadow hover kartu berwarna putih pada mode gelap dan biru pada mode terang.
- Font dan tema kustom didefinisikan di `src/styles/global.css`.

## Build dan Deploy

```sh
npm run build
```

Hasil build statis ada di `dist/` dan dapat di-deploy ke layanan hosting statis seperti Netlify, Vercel, Cloudflare Pages, atau GitHub Pages.

## Kredit

Dokumentasi kegiatan KKL 2026 Program Studi Informatika, Fakultas Teknik dan Informatika, Universitas PGRI Semarang. Seluruh foto merupakan dokumentasi kegiatan KKL Informatika UPGRIS 2026.

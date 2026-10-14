# Cerdas Ceria — Skeleton SPA

Starter **React + Vite + React Router** untuk Tugas 4c. Ini masih skeleton, bukan website final: tersedia struktur folder, navigasi, route utama, placeholder konten, gaya dasar, dan halaman 404.

## Halaman
- `/` — Beranda
- `/program` — Program
- `/tentang-kami` — Tentang Kami
- `/pendaftaran` — Kerangka formulir
- URL lain — Halaman 404

## Menjalankan proyek
1. Ekstrak ZIP lalu buka folder ini di VS Code.
2. Pastikan Node.js LTS dan npm sudah terpasang.
3. Buka **Terminal → New Terminal**.
4. Jalankan `npm install`.
5. Jalankan `npm run dev`.
6. Buka URL lokal yang muncul di terminal (biasanya `http://localhost:5173`).

## Skrip
- `npm run dev` — server pengembangan
- `npm run build` — build produksi ke `dist`
- `npm run preview` — pratinjau hasil build
- `npm run lint` — pemeriksaan ESLint
- `npm run format` — format Prettier

## Struktur
```text
src/
├── components/ Header.jsx, Footer.jsx
├── pages/ Home.jsx, Programs.jsx, About.jsx, Register.jsx, NotFound.jsx
├── App.jsx
├── main.jsx
└── styles.css
```

## Batasan yang disengaja
Belum ada backend/API, database, penyimpanan pendaftaran, atau autentikasi. Formulir hanya demo UI dan tidak menyimpan/mengirim data. Ilustrasi asli dari desain belum disertakan. Tambahkan nama kelompok dan anggota pada README sebelum dikumpulkan.

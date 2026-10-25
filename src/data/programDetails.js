import { CalculatorFill, Book, Pencil } from 'react-bootstrap-icons';

// Jadwal sama untuk semua kelas
export const schedule = {
  rows: [
    { day: 'Senin', times: ['15.00 – 17.00', '16.00 – 18.00', '17.00 – 19.00'] },
    { day: 'Rabu', times: ['15.00 – 17.00', '16.00 – 18.00', '17.00 – 19.00'] },
    { day: 'Jumat', times: ['15.00 – 17.00', '16.00 – 18.00', '17.00 – 19.00'] },
  ],
  frequency: '3x per minggu',
  duration: '2 Jam Setiap Pertemuan',
};

export const berhitung = {
  icon: CalculatorFill,
  label: 'Kelas Berhitung',
  title: 'Belajar Angka dan Berhitung dengan Menyenangkan',
  lead: 'Anak belajar mengenal angka dan berhitung dasar melalui aktivitas yang menyenangkan dan sesuai dengan kemampuan mereka',
  heroImg: '/images/detail/berhitung-hero.png',
  heroAlt: 'Anak belajar berhitung dengan angka dan buku',
  heroW: 900, // ganti dengan ukuran asli gambar
  heroH: 600,
  tutorRole: 'Tutor Kelas Berhitung',
  tutors: [
    { name: 'Siti Maryam', photo: '/images/detail/tutor-siti-maryam.png' },
    { name: 'Ayu Dewi', photo: '/images/detail/tutor-ayu-dewi.png' },
    { name: 'Laras Ratna Dewi', photo: '/images/detail/tutor-laras-ratna-dewi.png' },
    { name: 'Mikhayla Agashi', photo: '/images/detail/tutor-mikhayla-agashi.png' },
  ],
  materials: [
    {
      title: 'Belajar Mengenal Angka',
      items: ['Mengenal angka 0–20', 'Membedakan angka dan jumlah benda', 'Menyebut dan menulis angka'],
    },
    {
      title: 'Belajar Menghitung Dasar',
      items: ['Menghitung benda 1–20', 'Membandingkan jumlah benda', 'Mengurutkan angka'],
    },
    {
      title: 'Penjumlahan & Pengurangan',
      items: ['Mengenal penjumlahan dan pengurangan', 'Menghitung dengan benda dan angka', 'Latihan soal sederhana'],
    },
    {
      title: 'Perkalian & Pembagian',
      items: ['Mengenal perkalian dan pembagian', 'Menghitung dengan angka sederhana', 'Latihan soal sederhana'],
    },
    {
      title: 'Belajar Latihan Soal',
      items: ['Memahami soal berdasarkan situasi sehari-hari', 'Menentukan operasi hitung yang benar', 'Menyelesaikan soal sederhana'],
    },
  ],
};

export const membaca = {
  icon: Book,
  label: 'Kelas Membaca',
  title: 'Membaca, Langkah Awal Menuju Dunia yang Lebih Luas',
  lead: 'Belajar membaca dari mengenal huruf hingga mampu membaca kata sederhana dengan cara yang menyenangkan dan sesuai dengan kemampuan anak.',
  heroImg: '/images/detail/membaca-hero.png',
  heroAlt: 'Anak tengkurap membaca buku dengan huruf A B C',
  heroW: 900,
  heroH: 600,
  tutorRole: 'Tutor Kelas Membaca',
  tutors: [
    { name: 'Marco Alexander', photo: '/images/detail/tutor-marco-alexander.png' },
    { name: 'Salsa Nabila', photo: '/images/detail/tutor-salsa-nabila.png' },
    { name: 'Aprilia Wulandari', photo: '/images/detail/tutor-aprilia-wulandari.png' },
    { name: 'Anya Nathania', photo: '/images/detail/tutor-anya-nathania.png' },
  ],
  materials: [
    {
      title: 'Belajar Mengenal Huruf',
      items: ['Mengenal huruf A–Z', 'Membedakan huruf besar dan kecil', 'Mengenal bunyi tiap huruf'],
    },
    {
      title: 'Belajar Mengenal Suku Kata',
      items: ['Mengenal gabungan huruf', 'Membaca suku kata sederhana', 'Menggabungkan suku kata menjadi kata'],
    },
    {
      title: 'Belajar Membaca Kata',
      items: ['Membaca kata sederhana', 'Membaca kata dengan kombinasi huruf', 'Latihan membaca kata sehari-hari'],
    },
    {
      title: 'Belajar Membaca Kalimat',
      items: ['Membaca kalimat-kalimat pendek', 'Membaca dan mengenali tanda baca sederhana', 'Latihan membaca dengan lebih lancar'],
    },
    {
      title: 'Belajar Memahami Bacaan',
      items: ['Memahami isi bacaan pendek', 'Menjawab pertanyaan sederhana dari teks yang dibaca', 'Belajar menceritakan kembali isi bacaan'],
    },
  ],
};

export const menulis = {
  icon: Pencil,
  label: 'Kelas Menulis',
  title: 'Menulis Jadi Lebih Mudah, Seru, dan Menyenangkan',
  lead: 'Melatih anak menulis dari mengenal huruf hingga mampu menulis kata dan kalimat dengan lebih rapi dan percaya diri.',
  heroImg: '/images/detail/menulis-hero.png',
  heroAlt: 'Anak perempuan menulis di buku dengan huruf A B C',
  heroW: 900,
  heroH: 600,
  tutorRole: 'Tutor Kelas Menulis',
  tutors: [
    { name: 'Rafli Akbar', photo: '/images/detail/tutor-rafli-akbar.png' },
    { name: 'Nur Fitri', photo: '/images/detail/tutor-nur-fitri.png' },
    { name: 'Thomas Albert', photo: '/images/detail/tutor-thomas-albert.png' },
    { name: 'Kanaya Aletha', photo: '/images/detail/tutor-kanaya-aletha.png' },
  ],
  materials: [
    {
      title: 'Belajar Menulis Dasar',
      items: ['Mengenal bentuk-bentuk huruf', 'Menulis huruf besar dan kecil', 'Latihan mengikuti pola huruf'],
    },
    {
      title: 'Belajar Menulis Kata & Suku Kata',
      items: ['Menulis suku kata', 'Menulis kata sederhana', 'Menyalin kata dengan benar'],
    },
    {
      title: 'Belajar Menulis Kalimat',
      items: ['Menyusun kata menjadi kalimat', 'Menulis kalimat sederhana', 'Menggunakan huruf besar dan tanda baca'],
    },
    {
      title: 'Belajar Menulis dengan Rapi',
      items: ['Belajar mengatur ukuran tulisan', 'Belajar menjaga jarak antar huruf dan kata', 'Menulis mengikuti garis'],
    },
    {
      title: 'Melatih Kemampuan Menulis',
      items: ['Menyalin kalimat pendek', 'Menulis berdasarkan gambar', 'Latihan menulis mandiri'],
    },
  ],
};
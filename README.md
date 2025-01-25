<div align=center>

<h1>Taman Cerita</h1>

**Taman Cerita** adalah platform untuk menyimpan, membagikan, dan menikmati cerita pendek dari berbagai belahan dunia, dengan fokus pada cerita yang menginspirasi dan mengedukasi anak-anak.

![Taman Cerita Preview](/public/logo.png)

</div>

## Daftar Isi

- [Tentang Taman Cerita](#tentang-taman-cerita)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Fitur](#fitur)
- [Persiapan](#persiapan)
  - [Prasyarat](#prasyarat)
  - [Instalasi](#instalasi)
- [Panduan Kontribusi](#panduan-kontribusi)

## Tentang Taman Cerita

**Taman Cerita** Taman Cerita adalah platform yang dirancang untuk memperkenalkan cerita-cerita penuh nilai moral dan budaya kepada anak-anak. Kami percaya bahwa cerita merupakan media yang efektif untuk membangun imajinasi, kreativitas, dan pemahaman dunia anak-anak.

Proyek ini adalah hasil kolaborasi kelompok mahasiswa dan mahasiswi yang ingin membawa cerita-cerita menarik dari berbagai penjuru dunia, khususnya cerita yang mendidik dan menyenangkan. Kami mengutamakan pengalaman pengguna yang sederhana, interaktif, dan menarik.

## Demo

_Tautan demo akan segera tersedia._

## Tech Stack

Kami menggunakan teknologi berikut untuk membangun Taman Cerita:

![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=FFD62E)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Fitur

_Soon_

## Persiapan

Ikuti panduan ini untuk menjalankan proyek **Taman Cerita** di lokal Anda.

### Prasyarat

- Node.js versi 16.x atau lebih baru
- npm atau yarn
- Peramban web modern

### Instalasi

1. Clone repositori ini:

   ```bash
   git clone https://github.com/username/tamancerita.git
   ```

   Masuk ke direktori proyek:

   ```bash
   cd tamancerita
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Buka browser Anda dan kunjungi http://localhost:5173

## Panduan Kontribusi

Berikut langkah-langkahnya:

- Fork repositori ini (Klik tombol "Fork" di kanan atas repositori ini untuk membuat salinan Anda sendiri).

- Clone fork Anda:

```bash
git clone https://github.com/{username}/tamancerita.git
```

- Buat branch baru:

```bash
git checkout -b feature/nama-fitur
```

- Lakukan perubahan.

- Commit perubahan Anda:

```bash
git commit -m "feat: tambahkan fitur [deskripsi]"
```

- Push branch Anda:

```bash
git push origin feature/nama-fitur
```

- Ajukan pull request: Kunjungi repositori asli dan buat pull request untuk menggabungkan perubahan Anda.

## Menghindari Konflik

Cara mudah untuk menghindari konflik saat push adalah dengan menambahkan 'upstream' untuk repositori Git Anda. Hal ini penting karena pull request (PR) lain mungkin sudah digabungkan saat Anda bekerja di branch/fork Anda.

- Tambahkan remote upstream ke repositori asli:

```bash
git remote add upstream https://github.com/rhnas110/tamancerita.git
```

- Pastikan remote telah ditambahkan dengan perintah berikut:

```bash
git remote -v
```

- Tarik perubahan terbaru dari repositori asli ke branch Anda:

```bash
git fetch upstream
git merge upstream/master
```

**Catatan**: Jika ada konflik, Anda dapat menyelesaikannya secara lokal. Sebaiknya lakukan langkah ini secara rutin untuk memastikan repositori Anda selalu sinkron dengan induknya.

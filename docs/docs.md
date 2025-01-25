# Taman Cerita - Struktur Proyek

Dokumen ini menjelaskan struktur folder, file, dan aturan penamaan yang digunakan dalam proyek **Taman Cerita**. Panduan ini dirancang untuk memastikan konsistensi dan memudahkan pengelolaan proyek.

---

## Struktur Folder

Berikut adalah deskripsi folder utama dalam proyek:

### 1. `node_modules`

- **Fungsi**: Menyimpan semua dependensi atau package yang diinstal melalui `npm` atau `yarn`.
- **Catatan**: Folder ini dibuat secara otomatis dan **tidak perlu diubah secara manual**.

---

### 2. `public`

- **Fungsi**: Menyimpan file statis seperti gambar, logo, atau file lain yang tidak dimanipulasi oleh kode React.
- Contoh:
  - `logo.png` - Logo utama aplikasi.

---

### 3. `src`

Folder utama tempat seluruh kode sumber berada. Sub-folder di dalamnya diatur sebagai berikut:

#### a. `assets`

- **Fungsi**: Menyimpan file seperti gambar, background, ikon, atau resource lain yang digunakan dalam aplikasi.
- Contoh:
  - `background.jpg` - Gambar latar belakang halaman.

#### b. `components`

- **Fungsi**: Menyimpan komponen yang dapat digunakan kembali (reusable components), seperti:
  - `navbar.jsx` - Komponen navigasi.
  - `footer.jsx` - Komponen footer.

#### c. `lib`

- **Fungsi**: Menyimpan fungsi atau helper yang sering digunakan dalam aplikasi.
- Contoh:
  - `fetch-data.js` - Fungsi untuk pengambilan data dari API.
  - `format-date.js` - Fungsi untuk memformat tanggal.

#### d. `pages`

- **Fungsi**: Menyimpan file untuk setiap halaman dalam aplikasi.
- Sub-folder atau file di dalamnya meliputi:
  - `home/index.jsx` - Halaman utama aplikasi.
  - `about/index.jsx` - Halaman "Tentang Kami".

---

## File Utama

Berikut adalah deskripsi file utama di dalam folder `src`:

1. **`App.jsx`**

   - Berfungsi sebagai router utama aplikasi.
   - Mengatur navigasi antar halaman (menggunakan `react-router-dom` atau lainnya).

2. **`index.css`**

   - File CSS global untuk seluruh aplikasi.

3. **`main.jsx`**
   - Entry point utama React, tempat aplikasi di-mount ke DOM.

---

## Aturan Penamaan

Kami menerapkan aturan penamaan berikut untuk menjaga konsistensi:

1. **File dan Folder**:

   - Gunakan huruf kecil semua.
   - Jika nama terdiri dari dua kata, gunakan tanda hubung (`-`).
   - Contoh:
     - `navbar.jsx`
     - `page-wrapper.jsx`

2. **Komponen Reusable**:
   - Nama komponen harus sesuai dengan fungsinya.
   - Contoh:
     - `button.jsx` untuk tombol.
     - `card.jsx` untuk komponen kartu.

---

Dengan panduan ini, kami berharap seluruh tim dapat bekerja lebih efisien dan tetap konsisten. Jika ada tambahan, silakan ajukan ide Anda ke tim pengembang!

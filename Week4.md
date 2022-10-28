# Writing and Presentation Test Week 4

---

## Day 1 - JavaScript Intermediate - Asynchronous Fetch & Async Await

### Fetch()

fetch merupakan native web API untuk melakukan HTTP calls dari external network.

```java
const URL = "https://5e92ve81bbff810016969173.mockapi.io/api/v1/users"
const options = {
    method: "GET" / "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: user
}
fetch(URL, options)
```

fetch() memiliki parameter utama yaitu URL/endpoint API, dan parameter kedua yaitu options. Options ini berisi method, headers dan body. Tergantung keinginan kita.

Contoh function untuk mengambil data dari API menggunakan fetch(), Promise based:

```java
const getDataAPI = ( ) => {
    // Deklarasi API endpoint
    const API = "https://5e92ve81bbff810016969173.mockapi.io/api/v1/users"

    // Buat option method untuk fetch()
    const option = {
        method: "GET"
    }

    // Jalankan fetch dengan API dan option yang kita buat
    fetch(API, option)

    // Response pertama, kita ambil data json
    .then(response => response.json())
    .then(result => console.log(result))

    // Jika terjadi kesalahan kita tangkap error nya
    .catch(error => console.log(error, "ERROR"))
}
```

Contoh function untuk mengambil data dari API menggunakan fetch(), dengan Async-await:

```java
const getDataAPIwithAsync = async () => {
    const API = "https://5e92ve81bbff810016969173.mockapi.io/api/v1/users"

    const option = {
        method: "GET"
    }

    let response = await fect(API, option)
    response = await response.json()
    console.log(response);
}
getDataAPIwithAsync()
```

### Async Await

Async-await merupakan salah satu fitur baru dari javascript yang digunakan untuk menangani hasil dari sebuah promise. Sedangkan await berfungsi untuk menunda sebuah kode dijalanjkan sampai proses asynchronous berhasil.
Cara penulisan Async-await menggunakan ES6 dan tidak menggunakan ES6:

```java
// Tidak menggunakan ES6
async function hello(){
    let result = await 'Hellooo'
    return result
}

// Menggunakan ES6
const hello1 = async () => {
    let result = await 'Hellooo'
    return result
}
```

---

## Day 2 - Git & GitHub Lanjutan

### Alur Kolaborasi

#### Team Leader

**Buat organization**

1. Team lead membuat organization
2. Invite anggota tim dan jadikan owner

**Buat Repo di organization**

1. Team lead buat repo untuk project yg akan di buat
2. Repo dibuat public, dan ceklis README
3. Buat branch bernama dev

**Mengecek pull request**

1. Setiap ada pull request, team lead akan mengeceknya
2. Jika pull request belum sesuai, bisa dikasih komen atau beri kabar anggota yg melakukan pull request tersebut
3. Jika sudah sesuai, lakukan merge

**Jika mengikuti -> Hacktoberfest**

1. Repo diberi label hacktoberfest
2. Setiap pull request yg di acc, diberi label hacktoberfest-accepted

#### Kolaborasi/Anggota

**Tahapan yg dilakukan semua anggota**

1. masing-masing anggota lakukan clone pada repo yg sudah dibuat (1x aja)
2. Bagi tugas pada masing-masing anggota kelompok
3. Sebelum ngoding, lakukan git pulluntuk update kode terbaru
4. Anggota membuat branch dari dev
5. Lakukan pengerjaan di dlm branch yg sudah dibuat
6. Jika fitur sudah selesai/butuh code dari dev, lakukan commit seperti biasa
7. Sebelum push, lakukan git merge devuntuk menhindari conflict di github
8. Jika ada conflict, bereskan semuanya
9. Jika sudah aman, commit lalu push branch ke github
10. Lakukan pull request untuk merge ke branch dev
11. Tunggu pull request di acc oleh team lead

### Git Clone

Perintah git clone digunakan untuk membuat salinan repositori atau cabang tertentu di dalam repositori.

```git
git clone [url]
```

### Git Switch

Switch digunakan untuk berpindah ke branch tertentu. Semua yang sudah di commit akan ditambahkan ke branch yang sudah ditentukan.

```git
git switch [nama branch]
```

### Git Branch

Di git, branch merupakan versi baru/terpisah dari repositori utama. Jika kita ingin berkolaborasi, sebaiknya kita membuat branch baru jangan menggunakan branch main. Jadi di branch baru itu, kita bisa mengerjakan proyek yang sudah dibagikan dan bisa memperbarui proyek itu didalam branch baru yg sudah kita buat.

```git
git branch [nama branch]
```

### Git Add

Perintah git add menambahkan file baru atau yang diubah di direktori kerja kita ke area staging Git. Git add merupakan perintah penting tanpanya, tidak ada git commit yang akan melakukan apa pun.

```git
git add .
```

### Git Commit

Dengan menggunakan commit, kita dapat menyimpan data yang udah kita buat atau ubah atau membuat history dengan sengaja dan aman. Kita dapat membuat commit ke cabang yang berbeda dan menentukan dengan tepat perubahan apa yang ingin kita lakukan.

```git
git commit -m "[penjelasan yang telah kita lakukan]"
```

### Git Push

Git push digunakan untuk memperbarui atau mempublikasi isi dari branch yang ada di github.

```git
git push -u origin [branch]
```

### Git Pull

Git pull digunakan untuk memperbarui branch kerja kita yang dilokal. Tanpa git pull, branch lokal kita tidak akan memiliki pembaruan apa pun yang ada di remote.

```git
git pull
```

---

## Day 3 - Responsive Web Design & Bootstrap 5

### Responsive Web Design

Responsive Web Design (RWD) digunakan untuk membuat desain website kita dapat diakses dalam device apapun. Dalam pembuatan aplikasi kita harus memikirkan device user yang akan digunakan. Device yang umumnya digunakan adalah laptop/pc, smartphone, dan tablet.

#### CSS Units

CSS memiliki beberapa unit berbeda untuk menyatakan panjang.
Banyak properti CSS mengambil nilai "length", seperti width, margin, padding, font-size, dll.
**Absolute Lengths**
Absolute lengths merupakan ukuran atau panjang tetap yang nantinya akan muncul persis seperti ukuran itu. Satuan panjang absolut tidak disarankan untuk digunakan di layar, karena ukuran layar sangat bervariasi. Namun, mereka dapat digunakan jika media keluaran diketahui, seperti untuk tata letak cetak.
Unit | Description |
-----|------------------------------|
cm | Centimeters |
mm | milimeters |
in | inches (1in = 96px = 2.54cm) |
px | pixels (px = 1/96th of 1in) |
pt | points (1pt = 1/72 of 1in) |
pc | picas (1pc = 12pt) |

**Relative Lengths**
Relative length digunakan untuk menentukan panjang relatif terhadap length properti lainnya. Skala unit relative length lebih baik antara media rendering yang berbeda.
Unit | Description |
-----|-------------------------------------------------------------------------------|
em | Relatif terhadap ukuran font elemen (2em berarti 2 kali ukuran font saat ini) |
ex | Relatif terhadap x-height dari font saat ini (jarang digunakan)
ch | Relatif terhadap lebar "0" (nol)
rem | Relatif terhadap ukuran font elemen root
vw | Relatif terhadap 1% dari lebar viewport
vh | Relatif terhadap 1% dari ketinggian viewport
vmin | Relatif terhadap 1% dari viewport dimensi yang lebih kecil
vmax | Relatif terhadap 1% dari viewport dimensi yang lebih besar
% | Relatif terhadap elemen induk

**Setting up Chrome Dev Tools**
Setiap developer website wajib menggunakan tools bawaan dari setiap browser yang memudahkan proses development website. Pada browser chrome biasa disebut dengan Chrome Dev Tools. Cara akses pada windows sebagai berikut:

- Tekan ctrl + shift + j
- Klik Toggle Device emulation pada pojok kiri atas yang ke-2(ctrl+shift+m)
- Lalu kita bisa memilih dimensions nya

**Viewport in HTML**
Biasanya meta viewport bawaan dari html.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

**Max-width element**
Max-width digunakan agar panjang image tidak menjadi overflow dan tidak mengikuti width real bawaan dari file image.

```html
<img style="max-width: 100%;" src="image.jpg" alt="image" />
```

**Media Query**
Media query digunakan untuk membuat beberapa styles tergantung pada jenis device. Media query untuk responsive web design umumnya hanya menggunakan 2 jenis media query, keduanya yaitu min-width dan max-width.

```css
@media screen and (min-width: your pixel) {
  /* Tag element html and css */
}

@media screen and (max-width: your pixel) {
  /* Tag element html and css */
}
```

Terdapat 2 cara/pattern dalam menggunakan media query, diantaranya:

1. Membuat file css berbeda untuk masing-masing device
2. Kita dapat menggabungkan 1 file css untuk setting styling berbagai device

**Breakpoint**
Pada perubahan yang terjadi pada tampilan saat beganti device atau ukuran width disebut breakpoint. Terdapat beberapa breakpoint:

1. Breakpoint untuk laptop device
2. Breakpoint untuk ipad/tablet
3. Breakpoint untuk mobile phone

**Complex Breakpoint Media Query**
Jika kita menginginkan tampilan yang ingin diterapkan pada range ukuran device tertentu, kita bisa membuatnya menjadi range media query.

```css
@media screen and (min-width: 500px) and (max-width: 700px) {
  body {
    background-color: blue;
  }
}
```

**Tidak ada aturan baku** besaran width dan berapa banyak breakpoint yang harus dilakukan. Responsive web design dilakukan sesuai kebutuhan konten kita. Jika konten yang ditampilkan sudah tidak bisa diakses atau sulit dilihat pada width tertentu, maka kita harus menggunakan media query.

### Bootstrap

Dalam menggunakan bootstrap kita diharuskan untuk mengawali dengan include syntak dibawah ini kedalam file html.

```html
<script
  src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
  integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
  crossorigin="anonymous"
></script>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js"
  integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk"
  crossorigin="anonymous"
></script>
```

**Breakpoint**
Breakpoint merupakan lebar yang dapat disesuaikan yang menentukan bagaimana tata letak responsif kita berperilaku di seluruh perangkat atau ukuran viewport di Bootstrap.
Breakpoint | Class infix | Dimensions |
------------------|-------------|------------|
Extra small | None | < 576px
Small | sm | >= 576px
Medium | md | >= 768px
Large | lg | >= 992px
Extra larger | xl | >= 1200px
Extra extra large | xxl | >= 1400px

**Containers**
Containers merupakan blok bangunan dasar Bootstrap yang berisi, melapisi, dan menyelaraskan konten Anda dalam perangkat atau area pandang tertentu.
Containers | Extra small <576px | Small ≥576px | Medium ≥768px | Large ≥992px | X-Large ≥1200px | XX-Large ≥1400px |
-----------------|--------------------|--------------|---------------|--------------|-----------------|------------------|
.container | 100% | 540px | 720px | 960px | 1140px | 1320px
.container-sm | 100% | 540px | 720px | 960px | 1140px | 1320px
.container-md | 100% | 100% | 720px | 960px | 1140px | 1320px
.container-lg | 100% | 100% | 100% | 960px | 1140px | 1320px
.container-xl | 100% | 100% | 100% | 100% | 1140px | 1320px
.container-xxl | 100% | 100% | 100% | 100% | 100% | 1320px
.container-fluid | 100% | 100% | 100% | 100% | 100% | 100%

**Grid System**
Grid system digunakan untuk membangun tata letak sari semua bentuk dan ukuran, terdapat 12 system kolom, 6 tingkat responsif dafault, variabel sass dan mixin, dan lusinan kelas yang telah ditentukan sebelumnya.
Containers | xs <576px | sm ≥576px | md ≥768px | lg ≥992px | xl ≥1200px | xxl ≥1400px |
--------------------|-------------|-----------|-----------|-----------|--------------|-------------|
Container max-width | None (auto) | 540px | 720px | 960px | 1140px | 1320px
Class prefix | .col- | .col-sm- | .col-md- | .col-lg- | .col-xl- | .col-xxl-

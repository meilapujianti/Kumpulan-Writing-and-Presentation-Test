# Writing and Presentation Test Week 3

---

## Day 1 - JavaScript intermediate - Array & Multidimensional Array

### Array

Array merupakan tipe data list order yang dapat menyimpan banyak data dan tipe data apapun di dalamnya. Array dapat menyimpan tipe data String, Number, Boolean, dan lainnya.
Contoh array:

```java
let arrBuah = [
    "Jeruk",
    "Semangka",
    "Pepaya",
    "Rambutan"
]
console.log(arrBuah);
```

### Membuat Array

Array dapat di definisikan menggunakan square bracket.

```java
[]
```

### Mangakses/memanggil Array

Array pada javascript dihitung dari index data ke-0. Data pertama adalah index ke-0.

```java
let arrBuah = [
    "Jeruk",  // index ke-0
    "Semangka", // ke-1
    "Pepaya", // ke-2
    "Rambutan" // ke-3
]
console.log(arrBuah);
console.log(arrBuah[0]);
console.log(arrBuah[1]);
```

### Update Array

Seperti tipe data dan variabel pada umumnya, kita dapat mengupdate data pada array.

```java
let arrBuah = [
    "Jeruk",  // index ke-0
    "Semangka", // ke-1
    "Pepaya", // ke-2
    "Rambutan" // ke-3
]

arrBuah[0] = "Pear";
console.log(arrBuah);
// Output: ['Pear', 'Semangka', 'Pepaya', 'Rambutan'];
```

### Const in Array

Jika menggunakan let, kita dapat mengubah array dengan array baru dan konten nilai yang ada di dalam array dengan nilai lain
Const tidak bisa melakukan update data.
Namun pada Array kita dapat melakukan update konten nilai di dalam array (mutable). Yang tidak bisa adalah mengubah array dengan array yang baru jika menggunakan const.

```java
const mobil = [
    "Honda",
    "Toyota",
    "Nissan"
]
mobil = ["BMW"]; // cara update array yang salah
console.log(mobil) // output: Error. Tidak bisa update array baru

mobil[2] = ["BMW"];
console.log(mobil) // output: ['Honda', 'Toyota', 'BMW'];
```

### Array Properties

Array memiliki 5 properti yang sering digunakan yaitu constructor, length, index, input, dan prototype.
Properties merupkan fitur yang sudah disediakan oleh Javascript untuk memudahkan developer.

**.length**
akan mengembalikan nilai dari jumlah panjang data suara array.
Contoh Penggunaan pada length:

```java
let mobil = [
    "Honda",
    "Toyota",
    "Nissan"
]
console.log(mobil.length) // output: 3
```

### Array Method

Array memiliki method atau biasa disebut built-in methods. Artinya Javascript sudah memudahkan kita dengan menyediakan function/method umum yang bisa kita gunakan. Kita tidak perlu membuat function lagi jika method yang kita butuhkan sudah tersedia. Sama halnya dengan Array properti.
Contoh Array Built-in Methods:
**push()**
Push Merupakan method untuk menambahkan item array pada urutan yang paling akhir.

```java
let arrBuah = [
    "Jeruk",  // index ke-0
    "Semangka", // ke-1
    "Pepaya", // ke-2
    "Rambutan" // ke-3
]

arrBuah.push("Duku") // Menambahkan data di belakang
```

**pop()**
pop merupakan method yang menghapus item array index terakhir.

```java
arrBuah.pop() // Menghapus data di belakang atau terakhir
```

**shift()**
shift merupakan method untuk menghapus item array pada index pertama.

```java
arrBuah.shift() // Menghapus data di depan atau pertama
```

**unshift()**
unshift merupakan method untuk menambahkan item array pada index pertama.

```java
arrBuah.unshift("Anggur") // Menambahkan data di depan
```

**sort()**
sort merupakan method untuk mengurutkan secara Ascending atau Descending Alphanumeric.

```java
const numbers = [1, 5, 6, 7, 4];
numbers.sort();
console.log(numbers); // output: [1, 4, 5, 6, 7]
```

### Looping pada Array

Array memiliki built in methods untuk melakukan looping yaitu .map() dan .forEach()
**map()**
map() digunakan untuk melakukan perulangan/looping dengan membuat array baru.

```java
// map
// penggunaan umum
arrBuah.map((item, index) => {
    console.log(item); //output: ['Jeruk', 'Semangka', 'Pepaya', 'Rambutan']
})

// penggunaan menggunakan return
let buahSegar = arrBuah.map((item, index) => {
    return item + " " + "Segar"
})
console.log(buahSegar); // output: ['Jeruk Segar', 'Semangka Segar', 'Buah Naga Segar']
```

**forEach()**
forEach merupakan method untuk melakukan looping pada setiap elemen array.

```java
let arrBuah = [
    "Jeruk",
    "Semangka",
    "Pepaya",
    "Rambutan",
]
// forEach
// arrBuah.forEach( () => {})
// arrBuah.forEach( function() {})
// tanpa return
arrBuah.forEach((item) => {
    console.log(item); //output: 'Jeruk', 'Semangka', 'Pepaya', 'Rambutan'
})
```

Kapan kita harus menggunakan map() dan forEach() ?

- Gunakan map() jika akan melakukan operasi pada array seperti yang dapat mengubah nilai array sebelumnya.
- Gunakan forEach() jika hanya memerlukan looping untuk menampilkan saja atau menyimpan ke database.

---

## Day 2 - JavaScript Intermediate - Object & Array of Object

### Object

Object pada programming merupakan sebuah tipe data pada variabel yang menyimpan properti dan fungsi (method).
Properti merupakan data lengkap dari sebuah object.
Method merupakan action dari sebuah object.
Contoh:

- Objek Mobil, memiliki properti seperti nama, warna, model, dsb. Memiliki method seperti start(), drive(), stop().

### Membuat Sebuah Object

Sama seperti tipe data sebelumnya. Object dapat diassign kedalam sebuah variabel.

```java
// create object
// note: key pada object biasanya disebut juga dengan properti
let nama_obj = {
    key1: "value",
    key2: "value"
}

let siswa = {
    nama: 'Meila',
    umur: 21,
    hobi: 'Makan',
    "nomor handphone": 081297656424,
}
```

Sama seperti array, didalam object kita dapat menyimpan properti dengan tipe data apapun.

### Mengakses Object dan Property Object

Mengakses seluruh object:

```java
let siswa = {
    nama: 'Meila',
    umur: 21,
    hobi: 'Makan',
    "nomor handphone": 081297656424, // penggunaan double atau single quote pada key jika menggunakan spasi
}
console.log(siswa); // Mengakses seluruh object

// memanggil nama objek dengan variable
let properti = "umur";
console.log(siswa[properti]);
```

Cara akses object, Terdapat 2 cara:

1. Menggunakan Dot Notation. Seperti:

```java
console.log(siswa.nama);
```

2. Menggunakan Bracket Notation. Seperti:

```java
console.log(siswa['nama']);
console.log(siswa['nomor handphone']); //properti yg menggunakan spasi hanya bisa dipanggil menggunakan bracket
```

### Update Object

Kita dapat melakukan update pada variabel dengan tipe data Object.
**Do's**

- Object dapat mengupdate value dari key yang sudah tersedia.
- Object dapat menambahkan key dan value baru.

```java
let hewan = {
    nama: "kucing",
    kaki: 4,
    warna: "putih"
}
console.log(hewan); // output: {nama: 'kucing', kaki: 4, warna: 'putih'}

// mengganti value
// cara 1
hewan.warna = "Coklat"
hewan.nama = "Kelinci"
console.log(hewan); // output: {nama: 'Kelinci', kaki: 4, warna: 'Coklat'}

// cara 2
hewan["kaki"] = 2
console.log(hewan); // output: {nama: 'Kelinci', kaki: 2, warna: 'Coklat'}
```

**Dont's**

- Jika menggunakan constant pada variabel object. Kita tidak bisa mengganti seluruh data object dengan object yang baru. Tetapi kita bisa menggantinya seperti ini:

```java
const bunga = {
    nama: "lily",
}
bunga.nama = "melati"
console.log(bunga); // output: {nama: 'melati'}
```

### Delete Object Property

Kita dapat menghapus properti dari object menggunakan delete operator.

```java
// delete object
delete hewan.warna;
delete hewan.kaki
console.log(hewan); // output: {nama: 'Kelinci'}
```

### Method

Jika value yang kita masukkan pada property berupa function. Maka itu disebut method.

```java
// Terdapat 2 method pada object greeting, welcome dan afterPay.
const greeting = {
    welcome: function () {
        return "Halo Selamat Datang";
    },
    afterPay: function () {
        return "Terima Kasih sudah membeli produk kami"
    }
}
console.log(greeting.welcome()); // output: Halo Selamat Datang
```

### Nested Object

biasanya digunakan saat menemukan data object yang kompleks. Object yang berasal dari turunan object lainnya.

```java
let buku = {
    judul: "Tips jago js",
    tahun: 2022,
    penulis: {
        penulis1: {
            nama: "Reyhan",
            umur: 28,
            kota: "Jakarta"
        },
        penulis2: {
            nama: "Aby",
            umur: 25,
            kota: "Bandung"
        },
    },
}
console.log(buku.penulis.penulis1.nama); // output: Reyhan
```

### Looping Object

Jika kita ingin menampilkan seluruh object properti. Kita bisa menggunakan looping. Jadi tidak perlu mengakses secara manual memanggil setiap propertinya.

```java
for (let key in siswa){
    console.log(siswa[key]);
}

// for untuk nested
for (let key in buku.penulis.penulis1){
    console.log(buku.penulis.penulis1[key]);
}
```

### Array of Object

Apakah object hanya menyimpan 1 data? Tidak.
Object sama seperti Array yang bisa menyimpan banyak data.
Kita dapat menggunakan array of object untuk data yang lebih dari satu.

```java
let users = [
    {
        nama: 'Meila',
        umur: 21,
        alamat: 'Bandung'
    },
    {
        nama: 'Rizki',
        umur: 22,
        alamat: 'Cilegon'
    },
    {
        nama: 'Dafa',
        umur: 2,
        alamat: 'Cilegon'
    },
];
console.log(users);

// output:
0 : {nama: 'Meila', umur: 21, alamat: 'Bandung'}
1 : {nama: 'Rizki', umur: 22, alamat: 'Cilegon'}
2 : {nama: 'Dafa', umur: 2, alamat: 'Cilegon'}
```

Contoh menambahkan properti status dengan cara loop Array of Object menggunakan map():

```java
// loop arrayofobject menggunakan map
let data = users.map((el) => {
    console.log(el.nama);
    el.status = 'aktif' //menambahkan properti
    return el;
})

// output:
0 : {nama: 'Meila', umur: 21, alamat: 'Bandung', status: 'aktif'}
1 : {nama: 'Rizki', umur: 22, alamat: 'Cilegon', status: 'aktif'}
2 : {nama: 'Dafa', umur: 2, alamat: 'Cilegon', status: 'aktif'}
```

---

## Day 3 - JavaScript Intermediate - Rekursif & Modules

### Recursive

Recursive merupakan function yang memanggil dirinya sendiri sampai kondisi tertentu. Recursive kebanyakan digunakan untuk case matematika, fisika, kimia, dan yang berhubungan dengan calculation. Recursive termasuk ke dalam paradigma.

```java
// Menampilkan deret angka 1 2 3
// Cari solusi paling kecil terlebih dahulu
function deretAngka(n){
    if (n == 1) {
      console.log(n) // base case -> titik paling kecil(berhenti)
    } else {
      deretAngka(n-1) // recursion case -> titik dia manggil diri dia sendiri
      console.log(n);
    }
  }
  deretAngka(3)
```

**Ciri dari Rekursif**
Fungsi rekursif selalu memiliki kondisi yang menyatakan kapan fungsi tersebut berhenti. Kondisi ini harus dapat dibuktikan akan tercapai, karena jika tidak tercapai maka kita tidak dapat membuktikan bahwa fungsi akan berhenti, yang berarti algoritma kita tidak benar.

Fungsi rekursif selalu memanggil dirinya sendiri sambil mengurangi atau memecahkan data masukan setiap panggilannya. Hal ini penting diingat, karena tujuan utama dari rekursif ialah memecahkan masalah dengan mengurangi masalah tersebut menjadi masalah-masalah kecil.

**Contoh Kasus Rekursif**

```java
// Mencari angka faktorial
// 5!
// 5 x 4 x 3 x 2 x 1
function faktorial(n) {
    if (n == 1) {
      return 1
    } else {
      return n * faktorial(n - 1)
    }
}
console.log(faktorial(5)) // output: 120

// loop vs revursive
function faktorialFor(n) {
   let hasil = 1
   for (let i = n; i >= 1; i--){
      hasil = hasil * i
      console.log(i) // output: 3 2 1
    }
    return hasil
}
console.log(faktorialFor(3)); // output: 6
```

## Modules

Modules merupakan reusable code yang dapat di export dari suatu file javascript dan di import ke file javascript yang lain. Resable code disini yaitu data yang dapat digunakan berulang kali.

kita dapat melakukan export data apapun seperti string, object, array, number, class, hingga function/method.

**Kenapa harus membuat program menjadi modules?**

- Mudah menemukan dan mengatasi debug pada program.
- Membuat program menjadi component-component kecil sehingga code lebih mudah dibaca, dimengerti, dan mudah dimaintan
- Reusable code, kita cukup membuat logic method pada suatu file lalu bisa gunakan method tersebut pada file lainnya.

**Membuat Modules**
Terdapat beberapa cara untuk membuat modules javascript, seperti menggunakan: Node JS, CommonJS, dan ES6 Features.
Yang akan kita gunakan adalah ES6 karena Node JS dan Common JS biasa digunakan untuk server-side dan ES6 merupakan version terbaru dari javascript.

**Preparation**
Sebelum menggunakan export import untuk membuat modules. Terdapat bbeerapa syarat yang harus disiapkan, diantara:

- Saat menjalankan modules, kita tidak bisa menggunakan url local komputer kita di browser.
- Harus menggunakan static-server.
- Gunakan extension Live Server pada Visual Studio Code.
- Pada file index.html kita harus menambahkan script attribute type untuk modules.
- Pada file js, siapkan script ke-2 dst untuk melakukan export.
- Lakukan import pada file/script utama.

File index.html :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Modules</title>
  </head>
  <body>
    <!-- file yg ada disini (paling atas) cuma bisa melakukan import -->
    <script src="./indonesia.js" type="module"></script>
  </body>
</html>
```

**Export dan Import**
Kita akan membuat modules untuk mengirim motor dari jepang ke indonesia. Berikut file jepang.js yang ditugaskan untuk export:

```java
// kata kunci "export" dapat melakukan banyak export
// kata kunci "export" di tangkep (import)
// menggunakan kurung kurawal
export let motor = [
    "Suzuki",
    "yamaha",
    "honda",
    "kawasaki"
]
```

File indonesia.js (File javascript utama/main yang dipanggi pada file html) yang menerima dari file jepang.js :

```java
import {motor} from './jepang.js';
console.log(motor);
```

**Export as**
Saat melakukan export, kita bisa mengganti nama dari function, variabel, dan data lainnya menggunakan keyword "as".
File jepang.js :

```java
export let motor as motorJepang = [
    "Suzuki",
    "yamaha",
    "honda",
    "kawasaki"
]
```

File indonesia.js :

```java
import {motorJepang} from './jepang.js';
console.log(motorJepang);
```

**Import as**
Kita juga bisa mengubah langsung nama data yang kita import menggunakan keyword "as".

```java
import {motor as motorJepang} from './jepang.js';
console.log(motorJepang);
```

**Export Default**
Export default digunakan jika hanaya 1 data yang ingin kita export. Biasanya digunakan jika hanya ada 1 data atau export single class component.
File jepang.js :

```java
// export default cuma bisa 1 aja yg di export
// export default ditangkap tanpa kurung kurawal
let entertainment = ["anime", "manga", "wibu", "dorama"]
export default entertainment
```

File indonesia.js :

```java
import entertainment from './jepang.js';
console.log(entertainment);
```

---

## Day 4 - JavaScript Intermediate - Asynchronous Introduction & Asynchronous Promise

Javascript merupakan bahasa pemrogramana single-thread yang artinya hanya dapat mengeksekusi satu task pada satu waktu atau biasa disebut synchronous.

### Asynchronous

Pada konsep pemrograman (Web development) dikenal istilah asynchronous. Asynchronous mengizinkan komputer memproses task yang lain sambil menunggu proses yang masih berlangsung. Misalnya, seperti saat kita mencuci baju di mesin cuci. Agar lebih produktif, sambil menunggu pencucian selesai kita bisa melanjutkan pekerjaan rumah lainnya seperti mencuci piring.

### Cara Membuat Asynchronous

Cara membuat javascript single-thread menjadi asynchonous, kita bisa membuatnya secara simulasi artinya tidak murni asynchronous tetapi menggunakan beberapa cara, diantaranya:
**1. Callback**
Callback function merupakan function yang kita letakkan di dalam argumen/parameter pada function, dan function tersebut akan di eksekusi setelah function pertama menyelesaikan tugasnya.

```java
const mainFunc = (a, b, callBack) => {
    console.log(a + b)
    callBack()
}

const myCallback = () => {
    console.log ('Done!')
}

main(2, 3, myCallback) // output: 5 Done!
```

Proses asynchronous identik dengan delay, dimana hasil dari proses tersebut membutuhkan selang waktu tertentu untuk menghasilkan output. Proses asynchronous biasa ditemuka pada proses Ajax, komunikasi HTTP, Operasi file, timer, dsb.

Contoh 1.
Program asynchronous yang dijalankan sesuai urutan code:

```java
function a() {
    console.log('A')
};

function b() {
    console.log('B')
};

function c() {
    console.log('C')
};

a();
b();
c();

/* Output:
A
B
C
*/
```

Contoh 2.
Program asynchronous yang menggunakan **setTimeOut** untuk simulasi. Proses function pada **B** kita lewati sambil menunggu selesai, program lanjut ke function **C**.

```java
const a = () => {
    console.log('A')
};

const b = () => {
    setTimeout(() => {
        console.log('B')
    }, 1000)
};

const c = () => {
    a()
    b()
    console.log('C')
};

c();

/* Output:
A
C
B
*/
```

**setTimeout** digunakan untuk simulasi asynchronous. Karena sebenarnya kita tidak bisa membuat proses asynchronous murni.

**2. Promise**
Promise merupakan salah satu fitur baru di ES6, biasa digunakan untuk melakukan http request/fetch data dari API. Dalam pengambilan data, promise memiliki 3 kemungkinan state.

1. Pending (Sedang dalam proses)
2. Fulfilled (Berhasil)
3. Rejected (Gagal)

```java
const contohPromise = () => {
    new Promise((resolve, reject) => {
        let condition = true;
        if(condition){
            resolve('request fulfilled')
        } else {
            reject(new Error('Terjadi kesalahan, reject'))
        }
    }).then(result => console.log(result))
      .catch(error => console.log(error))
}
contohPromise()
```

**3. Async-Await**
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

### HTTP Request fetch()

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

---

## Day 5 - JavaScript Intermediate - Web Storage

### Cookies

Cookies meupakan data kecil yang dikirim dari situs web dan disimpan di komputer kita oleh web browser saat kita menjelajah. Disebut data kecil karena maksimum data yang dapat disimpan dalam cookies adalah 4096 bytes (4 KB).

Biasanya data yang disimpan di cookies adalah access token pengguna saat login atau data pencarian saat melakukan pencarian pada situs web tertentu. Hal ini yang biasanya dilakukan oleh situs pencarian untuk melacak pencarian kita dan menampilkan iklan yang berhubungan dengan pencarian kita sebelumnnya.

Namun ada beberapa kekurangan yang perlu kita perhatikan mengenai cookies di antaranya:

1. Setiap kita mengakses situs web, cookies juga kembali dikirim sehingga memperlambat aplikasi web kamu dengan mengirimkan data yang sama.
2. Cookies disertakan pada setiap HTTP request, sehingga mengirimkan data yang tidak dienkripsi melalui internet, maka saat kita ingin menyimpan data dalam cookies kita harus mengenkripsinya terlebih dahulu.
3. Cookies hanya dapat menyimpan data sebanyak 4KB.
4. Lalu cookies juga memiliki tanggal kadaluarsa. Tanggal ini telah ditentukan sehingga web browser bisa menghapus cookies jika tanggal sudah kadaluarsa atau tidak dibutuhkan.

Maka dari itu, Kita dapat memanfaatkan jenis web storage yang lain untuk mengatasi kekurangan yang dimiliki cookies.

### Local Storage dan Session Storage

Dengan memanfaatkan local storage dan session storage, kita dapat menyimpan data lebih besar yaitu 5MB per page tanpa mempengaruhi kinerja situs web. Namun, penting untuk diketahui agar kita tidak menyimpan data sensitif seperti password ke dalam local storage ataupun session storage untuk menghindari serangan pencurian data.

#### Local Storage - Menyimpan Data

Data riwayat pencarian pada sebuah situs web biasanya disimpan ke dalam local storage. Local storage memiliki karakteristik, sebagai berikut:

1. Menyimpan data tanpa tanggal kadaluarsa.
2. Data tidak akan dihapus ketika web browser ditutup dan akan tersedia seterusnya selama kita tidak menghapus data local storage pada web browser.
3. Dapat menyimpan data hingga 5MB.
4. Hanya dapat menyimpan data string

Untuk menyimpan data pada local storage, kita menggunakan method setItem() yang membutuhkan 2 parameter. Parameter pertama adalah key yang ingin kita simpan dan parameter kedua adalah data (value) dari key yang akan disimpan.

```java
localStorage.setItme('key', value);
```

Contoh membuat aplikasi web sederhana untuk melakukan pencaraian, berikut langkah-langkahnya:
**1. Membuat file index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      form {
        display: flex;
        flex-direction: row;
      }

      form input {
        padding: 5px 10px;
      }
    </style>
  </head>
  <body>
    <form>
      <input
        type="text"
        id="searchkey"
        name="searchkey"
        placeholder="Search Something"
      /><br />
      <input type="submit" value="Search" onclick="onSearch()" />
    </form>
    <script></script>
  </body>
</html>
```

**2. Isi tag `<script>` dengan fungsi `onSearch()`**
Berikutnya kita akan membuat kode JavaScript di dalam tag `<script>`. Jika user klik tombol Search, maka function `onSearch()` akan dipanggil dan menjalankan kode di dalamnya. Berikut kode yang ada pada tag script:

```java
var searchList = [];
function onSearch() {
  var searchValue = document.getElementById('searchkey').value;
  searchList.push(searchValue) // memasukan kata pencarian ke dalam array

  var searchListString = JSON.stringify(searchList); // mengubah array menjadi string
  localStorage.setItem('searchKey', searchListString); // menyimpan pencarian dengan key 'searchKey'
}
```

Dari kode di atas dapat kita lihat bahwa kata yang telah dicari dimasukan ke dalam array. Hal ini bertujuan agar kita dapat menyimpan kata yang dicari pengguna sebanyak mungkin. Kemudian kita juga menggunakan `JSON.stringify()` untuk merubah array `searchList` menjadi string, hal ini dilakukan karena data yang dapat disimpan ke dalam local storage hanya tipe data string.

#### Local Storage - Mengambil Data

Untuk mengambil data yang telah tersimpan pada local storage, kita dapat menggunakan method `getItem()` yang membutuhkan 1 parameter. Parameter tersebut adalah key dari data yang kita inginkan.

```java
localStorage.getItem('key');
```

Untuk lebih memahami, kita akan melanjutkan aplikasi yang telah dibuat pada topik sebelumnya yaitu aplikasi situs pencarian. Pada topik sebelumnya, kita berhasil menyimpan pencarian kita ke dalam local storage. Pada topik ini, kita akan menampilkan riwayat pencarian.
**1. Modifikasi file index.html**
Kita akan menambahkan beberapa elemen untuk menampilkan riwayat pencarian:

```html
</form>
   <h4>Riwayat Pencarian</h4>
   <div id="search-history"></div>
  <script>
```

**2. Membuat fungsi getSearchHistory()**
Selanjutnya kita akan membuat function getSearchHistory() di dalam tag `<script>` yang digunakan untuk mengambil data pada local storage. Kita akan menggunakan method `getItem()` untuk menampilkan data `searchKey` pada halaman index.html.

```java
<script>
  var searchList = JSON.parse(localStorage.getItem('searchKey')) || []; // jika searchKey bernilai undefined, maka set searchList sebagai empty array
  ...
  ...

  function getSearchHistory() {
    var list = '';
    for (var i = 0; i < searchList.length; i++) {
        list += `<div>${searchList[i]}</div>`;
    }
    document.getElementById('search-history').innerHTML = list;
  }

 // memanggil fungsi getSearchHistory
  if (searchList.length > 0) {  // Jika panjang array searchList > 0
      getSearchHistory(); // panggil fungsi getSearchHistory
   }
</script>
```

Dari kode di atas, kita dapat lihat bahwa kita memodifikasi variabel searchList menjadi:

```java
var searchList = JSON.parse(localStorage.getItem("searchKey")) || [];
```

Maksud dari kode ini adalah variabel `searchList` nilai default-nya adalah data dari local storage dengan key `searchKey`. Namun jika data pada local storage dengan key `searchKey` tidak ada, maka isi variabel `searchList` dengan array kosong []. Lalu disini kita menggunakan `JSON.parse()` yang merupakan kebalikan dari `JSON.stringify()`, yaitu untuk mengubah string menjadi bentuk array kembali.

#### Local Storage - Menghapus Data

Untuk menghapus data yang telah tersimpan pada local storage, kita dapat menggunakan method `removeItem()` yang membutuhkan 1 parameter. Parameter tersebut adalah key dari data yang ingin kita hapus.

```java
// menghapus key tertentu
localStorage.removeItem("key");

// menghapus semua key
localStorage.clear();
```

Berikut kelanjutan pengembanagan aplikasi web pencarian sederhana yang telah dibuat sebelumnya:
**1. Membuat `<button>` hapus riwayat**

```html
<button onclick="clearSearchHistory()" style="margin-top: 20px;">
  Hapus Riwayat
</button>
```

Pada file index.html, kita menambahkan `<button>` Hapus Riwayat yang memanggil fungsi `clearSearchHistory()`.

**2. Membuat Fungsi `clearSearchHistory()`**
Kita tambahkan fungsi `clearSearchHistory()` dalam tag `<script>`

```java
function clearSearchHistory() {
  localStorage.removeItem("searchKey"); // menghapus data pada localStorage dengan key "searchKey"
  document.getElementById('search-history').innerHTML = ""; // mengosongkan riwayat pencarian
}
```

#### Session Storage - Menyimpan Data

Berbeda dengan local storage, walaupun masuk ke dalam web storage, data yang tersimpan pada session storage akan hilang ketika session dari sebuah laman berakhir.
Session storage mempunyai beberapa karakteristik, yaitu:

- Data yang disimpan pada session storage akan terus tersimpan selama browser terbuka dan tidak hilang jika laman di-reload.
- Membuka banyak tab/window dengan URL yang sama, akan menciptakan session storage yang berbeda di masing-masing tab/window.
- Menutup tab/window akan mengakhiri session dan menghapus data yang tersimpan di session storage pada tab/window tersebut.
- Data yang tersimpan dalam session storage harus berbentuk string.
- Hanya dapat menyimpan data sebanyak 5MB.

Sama dengan local storage, sintaks untuk menyimpan data pada session storage adalah sebagai berikut:

```java
// menambah session storage
sessionStorage.setItem('key', value);
```

Untuk memahami penggunaan session storage lebih detail, pada topik ini kita akan membuat sebuah fitur penyimpanan keranjang belanja.

**1. Membuat file index.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        background: white;
        color: #323232;
        margin: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .list-wrapper {
        width: 50%;
        display: flex;
        flex-direction: column;
      }
      .list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 10px;
      }
    </style>
  </head>

  <body>
    <div class="list-wrapper">
      <div class="list">
        <div style="flex: 1">Susu - Rp. 18.000,-</div>
        <button onclick="addToCart('susu', 1)">Add to cart</button>
      </div>
      <div class="list">
        <div style="flex: 1">Telor - Rp. 28.000,-</div>
        <button onclick="addToCart('telor', 1)">Add to cart</button>
      </div>
      <div class="list">
        <div style="flex: 1">Madu - Rp. 48.000,-</div>
        <button onclick="addToCart('madu', 1)">Add to cart</button>
      </div>
      <div class="list">
        <div style="flex: 1">Jahe - Rp. 8.000,-</div>
        <button onclick="addToCart('jahe', 1)">Add to cart</button>
      </div>
    </div>
  </body>

  <script src="index.js"></script>
</html>
```

**2. Membuat File index.js**

```java
let cartList = [];
function addToCart(name, qty){
  cartList.push({
    name,
    qty
  });
  sessionStorage.setItem("carts", JSON.stringify(cartList)); // array object diubah menjadi string
}
```

untuk menjalankan kode dan melihat hasil yang sudah kita buat, kita masuk ke Developer Tools di browser dengan cara klik kanan > inspect element > application > session storage, maka kita akan mendapatkan hasilnya.
Namun, pada fungsi addToCart terdapat masalah dimana saat kita mengklik kembali tombol Add to cart pada masing-masing item, maka akan terjadi duplikasi data seperti gambar di atas. Maka untuk mengatasi masalah tersebut, kita dapat memodifikasi fungsi addToCart di langkah selanjutnya.

**3. Modifikasi function addtoCart**

```java
const cartList = [];
function addToCart(name, qty){
 const indexItem = cartList.findIndex(data => data.name === name) // memeriksa apakah item name sudah ada atau belum pada cartList
  if(indexItem > -1) {
    cartList[indexItem].qty +=1 // jika sudah ada,  qty+1 pada data di index ke indexItem; ingat kembali materi array object
  } else { // jika belum ada, push data baru ke dalam cartList
    cartList.push({
    name,
    qty
  });
  }
  sessionStorage.setItem("carts", JSON.stringify(cartList)); // set session storage
}
```

Pada kode di atas, kita menggunakan JSON.stringify() untuk mengubah array of object menjadi string saat disimpan ke dalam session storage. Hasil dari kode di atas akan melakukan update qty.

#### Session Storage - Mengambil Data

Sama seperti local storage, cara mendapatkan data dari session storage juga menggunakan getItem(), seperti berikut ini:

```java
// mendapatkan session storage
sessionStorage.getItem('key');
```

Contoh penggunaan getItem() dan melanjutkan aplikasi yang telah dibuat sebelumnya:
**1. Membuat menu view cart pada index.html**

```html
<div class="list-wrapper">
  ... ...
  <div style="margin-top: 15px;"><a href="cart.html">View Cart</a></div>
</div>
```

Kita membuat trigger View Cart menggunakan tag `<a>` di baris paling bawah dalam list-wrapper. Jika kita perhatikan kode di atas, tag `<a>` ini jika diklik akan menuju file cart.html. Maka, langkah berikutnya kita harus membuat file cart.html.

**2. Membuat file cart.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        background: white;
        margin: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      #list-cart {
        display: flex;
        flex-direction: column;
      }

      .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 10px;
        border-bottom: 1px solid black;
      }
    </style>
  </head>

  <body>
    <div style="width: 50%">
      <div class="row">
        <div>Name</div>
        <div>Quantity</div>
      </div>
      <div id="list-cart"></div>
    </div>

    <script></script>
  </body>
</html>
```

Dari kode di atas, dapat kita lihat bahwa cart.html berisi tag `<div>` dengan id list-cart tidak memiliki isi konten. Lalu tag `<script>` juga tidak lagi membaca index.js.

**3. Menambahkan kode pada tag script**
Tambahkan kode berikut ke dalam tag script pada file cart.html:

```java
var cartList = JSON.parse(sessionStorage.getItem('carts')); // mengambil data dari session storage, di parsing kembali dari string menjadi array object

    // merender name dan qty dari cart
    var list = '';
    for (var i = 0; i < cartList.length; i++) {
        list += `<div class="row">
            <div id="name">${cartList[i].name}</div>
            <div id="qty">${cartList[i].qty}</div>
        </div>`
    }
    document.getElementById('list-cart').innerHTML = list;
```

Dapat kita lihat bahwa dari kode di atas, kita mendapatkan apa yang ada di keranjang belanja dengan cara:

```java
 var cartList = JSON.parse(sessionStorage.getItem('carts'));
```

Perlu diketahui, JSON.parse() berfungsi mengembalikan tipe data string yang kita dapat dari session storage kembali menjadi JSON. Lalu untuk merender data dari session storage, kita menggunakan innerHTML, dimana innerHTML menerima string berisikan tag HTML.

#### Session Storage - Mengapus Data

Syntax untuk menghapus data dari session storage ada 2, yaitu:

```java
// menghapus session storage satu persatu berdasarkan key
sessionStorage.removeItem('key');

// menghapus seluruh session storage sekaligus
sessionStorage.clear();
```

Agar lebih paham mengenai implementasinya, mari kita lanjutkan pembuatan aplikasi pada topik sebelumnya. Jika pada topik sebelumnya kita telah menambahkan fungsi addToCart(), maka pada topik ini, kita akan membuat fungsi removeFromCart().

**1. Menambahkan button remove from cart**
Kita akan menambahkan beberapa baris kode pada file index.html sebelumnya untuk membuat button Remove from Cart pada setiap produk:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Session Storage</title>
    <style>
      body {
        background: white;
        color: #323232;
        margin: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .list-wrapper {
        width: 50%;
        display: flex;
        flex-direction: column;
      }
      .list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 10px;
      }
    </style>
  </head>

  <body>
    <div class="list-wrapper">
      <div class="list">
        <div style="flex: 1">Susu - Rp. 18.000,-</div>
        <button onclick="addToCart('susu', 1)">Add to cart</button>
        <button onclick="removeFromCart('susu')">Remove from cart</button>
      </div>
      <div class="list">
        <div style="flex: 1">Telor - Rp. 28.000,-</div>
        <button onclick="addToCart('telor', 1)">Add to cart</button>
        <button onclick="removeFromCart('telor')">Remove from cart</button>
      </div>
      <div class="list">
        <div style="flex: 1">Madu - Rp. 48.000,-</div>
        <button onclick="addToCart('madu', 1)">Add to cart</button>
        <button onclick="removeFromCart('madu')">Remove from cart</button>
      </div>
      <div class="list">
        <div style="flex: 1">Jahe - Rp. 8.000,-</div>
        <button onclick="addToCart('jahe', 1)">Add to cart</button>
        <button onclick="removeFromCart('jahe')">Remove from cart</button>
      </div>
    </div>
  </body>

  <script src="index.js"></script>
</html>
```

**2. Membuat Function removeFromCart()**
Selanjutnya kita akan membuat function bernama removeFromCart() pada file index.js dari topik sebelumnya:

```java
function removeFromCart(name) {
  const indexItem = cartList.findIndex(data => data.name === name)
  if(indexItem > -1) {
    if(cartList[indexItem].qty > 1) { // Jika qty barang lebih dari 1
      cartList[indexItem].qty -=1 // maka qty barang dikurangi 1
    } else { // tapi jika qty barang = 1
      cartList.splice(indexItem, 1) // maka hapus barang dari cart
    }
  }
  sessionStorage.setItem("carts", JSON.stringify(cartList)); // memperbaharui data keranjang
};
```

dari kode di atas, dapat kita lihat bahwa di fungsi ini kita hanya memanipulasi kuantitas (qty) barang yang ada di keranjang belanja. Kita terus memperbaharui data di session storage menggunakan sessionStorage.setItem() terhadap jumlah barang yang kita masukan ke keranjang maupun yang kita hapus dari keranjang.

Lalu kapan kita menggunakan sessionStorage.removeItem() ? Kita dapat mengimplementasikan sessionStorage.removeItem() saat kita hendak mengosongkan seluruh barang yang ada pada keranjang belanja kita. Mari kita lanjutkan kode di atas.

**3. Membuat button empty cart**
Buatlah sebuah button bernama Empty cart pada file index.html sebelumnya dan letakkan button Empty cart tepat dibawah class="list-wrapper"seperti berikut ini:

```html
<div class="list-wrapper">
  <div style="margin-bottom: 15px;">
    <button onclick="emptyCart()">Empty cart</button>
  </div>
  ... ...
</div>
```

**4. Membuat function emptyCart()**
Terakhir, buatlah sebuah function bernama emptyCart() pada file index.js sebelumnya:

```java
function emptyCart() {
  sessionStorage.removeItem('carts'); // menghapus session storage 'carts'
  cartList = []; // menjadikan cartList sebagai array kosong kembali
}
```

Dari gambar di atas dapat kita lihat bahwa data carts pada session storage hilang seluruhnya setelah mengklik button Empty cart.

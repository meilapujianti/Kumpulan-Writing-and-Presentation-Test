# Writing and Presentation Test Week 7

---

## Day 1 - MySQL - Basic

### Database

Tempat untuk menyimpan data terstruktur, yang bisa di akses melalui DBMS (Database Management System), berbasis SQL (Structure Query Language). Didalam SQL kita bisa membuat banyak database.

### DBMS (Database Management System)

Sebuah DBMS berfungsi sebagai antarmuka antara database dan pengguna akhir atau program, memungkinkan pengguna untuk mengambil, memperbarui, dan mengelola bagaimana informasi diatur dan dioptimalkan.

### MySQL

MySQL adalah sistem manajemen basis data relasional open source berbasis SQL. Itu dirancang dan dioptimalkan untuk aplikasi web dan dapat berjalan di platform apa pun. MySQL menjadi platform pilihan untuk pengembang web dan aplikasi berbasis web.

#### Kenapa harus belajar MySQL?

Karena MySQL dapat berjalan stabil pada berbagai sistem operasi seperti Windows, Linux, MacOS, dsb.

**Open Source**
MySQL didistribusikan sebagai open source sehingga dapat digunakan secara gratis.
**Multi User**
MySQL dapat digunakan oleh beberapa pengguna dalam waktu yang bersamaan tanpa mengalami masalah / konflik.

### Table

Table adalah kumpulan value yang dibangun oleh baris dan kolom, yang didalamnya berisikan atribut dari sebuah data.

### Field

Field adalah kolom dari sebuah tabel dimana masing-masing field memiliki tipe data masing-masing.

### Record

Record merupakan kumpulan nilai yang saling terkait. Record merupakan isi dari sebuah tabel.

### Data Type SQL

**Number**
Tipe data number merupakan data yang berisi kumpulan karakter angka.
| Number Data Type | Deskripsi |
|------------------|-----------|
| int | Tipe data untuk angkat bulat ex: 1, 22, 99
| float | Tipe data untuk angka menggunakan koma
| Decimal | Tipe data angka pecahan (desimal), dimana jumlah angka pecahan (angka di belakang koma) sudah di tentukan dari awal

**String**
Tipe data string adalah tipe data berupa kumpulan karakter termasuk karakter simbol
| Number Data Type | Deskripsi |
|------------------|-----------|
| Char | Tipe data string dengan fixed length dan memori sesuai panjang yang didefinisikan
| Varchar | Tipe data string dengan penyimpanan karakter yang flexsibel max 255
| Text | Tipe data string dengan penyimpanan yang lebih panjang dari varchar
| Enum | Tipe data yang khusus untuk kolom dimana nilai datanya sudah kita tentukan sebelumnya.

**Boolean**
Tipe ini hanya menyimpan 2 tipe data yaitu TRUE dan FALSE, dan dapat di convert menjadi int dengan representasi TRUE = 1, dan FALSE = 0

**Date Time**
Tipe ini merupakan tipe data untuk menyimpan tanggal dan waktu
| Number Data Type | Deskripsi |
|------------------|-----------|
| DATE | Tipe data untuk menyimpan tanggal |
| DATETIME | Tipe data untuk menyimpan tanggal dan waktu
| TIME | Tipe data untuk menyimpan waktu
| timestamp | Tipe data untuk menyimpan tanggal dan waktu dan juga UTC nya atau timezone

**Other Data Type**
| Number Data Type | Deskripsi |
|------------------|-----------|
| DEFAULT | Tipe data untuk set default value jika tidak di assign dengan value
| NULL | Tipe data kosong atau tipe data yang belum di assign dengan value/data

### Key

#### Primary Key

Secara sederhana, Primary Key disebut juga dengan Kunci Primer. Kunci Primer tersebut dipilih sebagai identifikasi untuk membedakan satu baris dengan baris lainnya dalam suatu tabel. Pada dasarnya, setiap tabel hanya memiliki satu primary key saja.

Bentuk perintah dasar untuk membuat Primary Key dalam SQL adalah :

```sql
create table movie (
	id int primary key
);
```

#### Foreign Key

Secara sederhana, foreign key dapat diartikan sebagai kunci asing. Definisi tersebut juga berlaku dalam pengolahan relasional database. Kunci asing (Foreign Key) adalah sebuah atribut atau gabungan atribut yang terdapat dalam suatu tabel yang digunakan untuk menciptakan hubungan (relasi) antara dua tabel.

### DDL (Data Definition Language)

DDL (Data Definition Languange) merupakan sekumpulan set perintah yang bertujuan untuk mendefinisikan atribut – atribut database, tabel, atribut kolom (field), maupun batasan – batasan terhadap suatu atribut dan relasi/hubungan antar tabel. Yang termasuk dalam kelompok perintah DDL adalah : CREATE, ALTER, dan DROP.

### DML (Data Manipulation Language)

DML (Data Manipulation Language) merupakan bagian untuk memanipulasi basis data seperti: pengaksesan data, penghapusan, penambahan dan pengubahan data. DML juga dapat digunakan untuk melakukan komputasi data. Contoh: INSERT,DELETE, dan UPDATE.

### Database Command

**Show Database**
Command ini digunakan untuk menunjukkan seluruh list database di mysql kita.

```sql
show databases;
```

**Create Database**
Command ini digunakan untuk membuat database baru.

```sql
create database favorite_movie;
```

**Use Database**
Command ini digunakan untuk menggunakan database yang sudah ada.

```sql
use favorite_movie;
```

**Drop Database**
Command ini digunakan untuk menghapus / menghilangkan database yang dipilih dari MySQL kita.

```sql
drop database favorite_movie;
```

**Show Table**
Setelah masuk ke database yang dipilih, kita bisa menggunakan command untuk memodifikasi table di database tersebut, salah satunya adalah SHOW, untuk melihat semua ini table di database

```sql
show tables;
```

**Create Table**
Kita membuat table baru di database tersebut dengan nama “student”. Sintaks yang dibuat menggunakan CREATE TABLE [name] dan memberikan definisi tiap kolom di table tersebut.

```sql
create table student (
	id int primary key not null auto_increment,
    name varchar(25),
    email varchar(25)
);
```

**Drop Table**
Kita dapat menggunakan DROP untuk menghapus table yang diinginkan jika ingin dihapus.

```sql
drop table student;
```

**Alter Table**
Ketika ingin menambah atau menghilangkan kolom di table yang dipilih, kita bisa menggunakan ALTER dan menggunakan ADD untuk menambah kolom atau DROP COLUMN untuk menghapus kolom seperti contoh dibawah.

```sql
alter table student add jurusan varchar(25);
```

**Insert Into**
Digunakan untuk menambahkan data lebih dari 1 atau multiple ke dalam kolom, kita dapat menggunakan query insert into lebih dari 1 assign values.

```sql
insert into student(name, email, jurusan) values
("Meila", "meilapujianti@upi.edu", "PILKOM"),
("Lala", "lala@upi.edu", "ILKOM"),
("Lula", "lula@upi.edu", "PILKOM");
```

**Select**
Command SELECT digunakan untuk melakukan query melihat isi seluruh data di table yang dipilih.

```sql
select * from student;
```

Kita juga dapat melakukan query untuk beberapa kolom yang ingin dilihat seperti query dibawah, jadi kita ingin melihat name dan jurusan di table student.

```sql
select name, jurusan from student;
```

**Select As (Alias)**
Kita dapat menggunakan alias / AS untuk menggunakan mengubah nama kolom agar output kolomnya sesuai dengan yang kita inginkan.

```sql
select name as name_student from student;
```

**Where**
Query WHERE digunakan untuk mencari data dengan kondisi tertentu dengan command WHERE [column_name] = condition . Contoh dibawah kita melakukan query dengan id = 3.

```sql
select * from student where id = 3;
```

Kita juga dapat menggunakan WHERE lebih dari 1 parameter kondisi menggunakan IN. Contoh dibawah kita query dengan kondisi id = 1 dan 3.

```sql
select * from student where id in (1,3);
```

**And, OR, NOT**
Kita juga bisa mengkolaborasikan WHERE menggunakan kondisi lebih dari 1 menggunakan AND, OR dan NOT. Contoh dibawah kita menggunakan AND untuk mencari kondisi id = 1 dan jurusan = ‘pilkom’ maka kita akan memunculkan row dengan 2 kondisi tersebut.

```sql
select * from student where id = 1 and jurusan = "pilkom";
```

Kita dapat menggunakan OR untuk mencari query dengan kondisi salah satu. Contoh dibawah kita akan mencari row dengan kondisi id = 1 atau name = ‘lula’. Maka kita akan muncul 2 row dengan salah satu kondisi yang di declare.

```sql
select * from student where id = 1 or name = "lula";
```

dan yang terakhir kita dapat menggunakan NOT untuk mencari query yang tidak ada dalam kondisi yang di definisikan. Contoh dibawah kita mencari query yang tidak mengandung id = 1, maka muncul 3 data dengan id yang tidak sama dengan 1

```sql
select * from student where not id = 1;
```

**Order By**
Terdapat command yang bisa kita gunakan untuk melakukan ordering menggunakan ORDER BY dengan menggunakan 2 kondisi yaitu ASC dan DESC. Struktur commandnya adalah ORDER BY [column_name] ASC / DESC.

```sql
select * from student order by id desc;
```

**Group By**
Terdapat command yang bisa kita gunakan untuk menampilkan id berdasarkan grup.

```sql
select * from student where not id = 1 group by id;
```

**Limit**
Command LIMIT digunakan untuk membatasi berapa query yang akan dimunculkan dengan urutan dari atas. Contoh dibawah adalah kita query dan memunculkan hanya 2 data.

```sql
select * from student limit 2;
```

**Update**
Command UPDATE digunakan untuk melakukan perbaruan data di table. Contoh dibawah adalah kita melakukan update data name dan email di row id = 1.

```sql
update student set name = "intan", email = "intan@gmail.com" where id = 1;
```

**Delete**
Command DELETE digunakan untuk melakukan penghapusan data. Contoh dibawah kita melakukan penghapusan data di id = 1

```sql
delete from student where id = 1;
```

INGAT !! ketika ingin melakukan delete jangan lupa menggunakan WHERE agar semua data tidak terhapus

---

## Day 2 - MySQL - Lanjutan

### Relations di SQL

**- One To Many**
Paling sering digunakan.
Satu baris dalam tabel dapat memiliki beberapa baris di table relasinya.

**- Many to Many**
Digunakan ketika kedua tabel yang berelasi dapat memiliki beberapa baris di tabel relasinya.

**- One to One**
Sangat jarangan digunakan.
Diimplementasikan dengan cara yang sama seperti one to many tetapi dengan kondisi tambahan (foreign key merupakan primary key)

### Database Normalization

**Pengertian**
Database Normalization merupakan teknik analisis data yang mengorganisasikan atribut-atribut data dengan cara mengelompokkan sehingga terbentuk entitas yang non-redundant, stabil, dan fleksible.

**Tujuan**

- Menghilangkan redundan data pada dataabse.
- Memudahkan jika ada perubahan struktur table database.
- Memperkecil pengaruh jika ada perubahan dari struktur table database.

#### Efek Jika Tidak Melakukan Database Normalization

**Insert Anomali**
Situasi dimana tidak memungkinkan memasukkan beberapa jenis data secara langsung di database.

**Delete Anomali**
Penghapusan data yang tidak sesuai dengan yang diharapkan, artinya data yang harusnya tidak terhapus mungkin ikut terhapus.

**Update Anomali**
Situasi dimana nilai yang diubah menyebabkan inkonsistensi database, dalam artian data yang diubah tidak sesuai dengan yang diperintahkan atau yang diinginkan.

### Bentuk Database Normalization

**First Normal Form (1NF)**
Menghilangkan multiple value pada sebuah kolom table database
Sebuah table memenuhi kaidah 1NF jika :

- Setiap kolom bernilai tunggal (single value)
- Setiap kolom memiliki nama yang unik
- Urutan penyimpanan data tidak menjadi masalah

**Second Normal Form (2NF)**

- Harus sudah dalam bentuk 1NF untuk mendapatkan 2NF
- Menghapus beberapa subset data yang ada pada tabel dan menempatkan mereka pada tabel terpisah.

**Third Normal Form (3NF)**
Menghilangkan seluruh atribut atau field yang tidak berhubungan dengan primary key. Dengan demikian tidak ada ketergantungan transitif pada setiap kandidat key.

### Key di SQL

**Super Key**
Kumpulan dari satu atau lebih dari satu key yang dapat digunakan untuk mengidentifikasi record secara unik dalam sebuah tabel.
Super Key adalah superset dari Candidate Key.

![Super Key](https://prepinsta.com/wp-content/uploads/2021/04/Super-Key.webp)

**Candidate Key**
Kumpulan satu atau lebih fields/columns yang dapat mengidentifikasi record secara unik dalam tabel.
Bisa jadi ada beberapa Candidate Keys di dalam satu tabel
Setiap Candidate Key bisa digunakan sebagai Primary Key.
Candidate Key adalah super key yang tidak mempunyai value yang berulang.

![Candidate Key](https://prepinsta.com/wp-content/uploads/2021/04/Candidate.webp)

**Primary Key**
Kumpulan satu atau lebih fields/columns dari sebuah tabel yang secara unik mengidentifikasi sebuah record dalam tabel database.
Valuenya tidak boleh berupa null ataupun duplicate value.
Hanya boleh salah satu Candidate Key yang bisa menjadi Primary Key.

![Primary Key](https://prepinsta.com/wp-content/uploads/2021/04/Primary-Key.webp)

**Alternate Key**
Key yang bisa digunakan menjadi primary key.
Pada dasarnya, Key ini merupakan candidate key yang tidak dijadikan primary key.

![Alternate Key](https://prepinsta.com/wp-content/uploads/2021/04/alternateKey.webp)

**Unique Key**
Kumpulan dari satu atau lebih fields/columns di sebuah table database yang secara unik mengidentifikasi sebuah record dalam table database tersebut.
Hampir sama dengan Primary key, namun value dari Unique Key bisa berupa satu buah null value di dalam sebuah table database, dan Unique Key tidak bisa memiliki duplicate values

**Foreign Key**
Field di sebuah table database yang menjadi Primary Key di table database lain.
Value dari Foreign key bisa menerima multiple null dan duplicate values.

![Foreign Key](https://prepinsta.com/wp-content/uploads/2021/04/ForeignKey.webp)

### Join Multiple Tables

Mengambil records dari dua atau lebih table database yang memiliki relationship dan akan di sajikan dalam single result set.

**Inner Join**
Semua baris akan diambil dari kedua table yang akan di JOIN, selama columns cocok dengan kondisi yang sudah di tentukan.
Memungkinkan baris dari salah satu tabel muncul di hasil jika dan hanya jika kedua tabel memenuhi kondisi yang ditentukan dalam klausa ON.

```sql
SELECT column_name(s) FROM table1 INNER JOIN table2 ON table1.column_name = table2.column_name;
```

**Right Join**
Pada JOIN ini, semua records dari table di sisi kanan JOIN statement akan di pilih, bahkan jika table di sebelah kanan tidak memiliki record yang cocok.

```sql
SELECT column_name(s) FROM table1 RIGHT JOIN table2 ON table1.column_name = table2.column_name;
```

**Left Join**
Pada JOIN ini, semua records dari table di sisi kiri JOIN statement akan di pilih.
Jika record yang di pilih dari table kiri tidak memiliki record yang cocok pada table JOIN yang kanan, maka record tersebut masih dipilih, dan kolom pada table yang kanan akan bernilai NULL.

```sql
SELECT column_name(s) FROM table1 LEFT JOIN table2 ON table1.column_name = table2.column_name;
```

### Aggregate Function

Mengambil satu nilai setelah melakukan perhitungan pada sekumpulan nilai.

#### Type of Aggregate Functions

**- MAX**
Berfungsi untuk mengembalikan nilai terbesar dari kolom yang dipilih.

```sql
SELECT MAX(column_name) FROM table_name WHERE condition;
```

**- MIN**
Berfungsi untuk mengembalikan nilai terkecil dari kolom yang dipilih.

```sql
SELECT MIN(column_name) FROM table_name WHERE condition;
```

**- SUM**
Berfungsi untuk mengembalikan jumlah total kolom numerik.

```sql
SELECT SUM(column_name) FROM table_name WHERE condition;
```

**- COUNT**
Berfungsi untuk mengembalikan jumlah baris yang cocok dengan kriteria yang ditentukan.

```sql
SELECT COUNT(column_name) FROM table_name WHERE condition;
```

**- AVG**
Berfungsi untuk mengembalikan nilai rata-rata kolom numerik.

```sql
SELECT AVG(column_name) FROM table_name WHERE condition;
```

#### UNION

Digunakan untuk menggabungkan kumpulan hasil dari dua atau lebih pernyataan SELECT.
Setiap pernyataan SELECT dalam UNION harus memiliki jumlah kolom yang sama.
Kolom juga harus memiliki tipe data yang serupa, Kolom dalam setiap pernyataan SELECT juga harus dalam urutan yang sama.

```sql
SELECT column_name(s) FROM table1 UNION SELECT column_name(s) FROM table2;
```

#### Group By

Mengelompokkan baris yang memiliki nilai yang sama ke dalam baris ringkasan
Sering digunakan dengan fungsi agregat untuk mengelompokkan kumpulan hasil dengan satu atau lebih kolom.

```sql
SELECT column_name(s) FROM table_name WHERE condition GROUP BY column_name(S);
```

#### Having

HAVING ditambahkan ke SQL karena kata kunci WHERE tidak dapat digunakan dengan aggregate functions, having bisa memanggil nama alias tetapi where tidak.

```sql
SELECT column_name(S) FROM table_name WHERE condition GROUP BY column_name(s) HAVING condition ORDER BY column_name(s);
```

#### Like & Wildcards

Operator LIKE digunakan dalam klausa WHERE untuk mencari pola tertentu dalam kolom.

```sql
SELECT column1, column2, FROM table_name WHERE column LIKE pattern;
```

Karakter wildcard digunakan untuk menggantikan satu atau lebih karakter dalam sebuah string.

```sql
SELECT column FROM table_name WHERE column LIKE '%a%';
```

### Catatan Tambahan

Alur pembuatan express mySQL

1. Ketik npm install express
2. Ketik npm install -D nodemon
3. npm init
4. Membuat "start": "node app.js", dan "dev": "nodemon app.js" di package.json
5. Membuat file app.js dan folder routes dan controllers
6. Membuat file index.js, product.js, dsb yang ingin di get di dalam folder routes
7. Ketik npm install mysql2
8. Membuat folder config yang di dalamnya terdapat file db

---

## Day 3 - Express.js Middleware Authentication & Authorization

### Authentication atau Otentikasi

Otentikasi adalah verifikasi siapa kamu.

Misalnya, kita pergi ke konser. Di pintu depan, penjaga keamanan meminta untuk melihat tiket dan ID Anda untuk memverifikasi bahwa nama di ID Anda cocok dengan nama di tiket Anda.

Otentikasi bergantung pada satu atau lebih faktor untuk memverifikasi identitas, dan faktor-faktor ini datang dalam tiga jenis utama:

- Pengetahuan adalah sesuatu yang Anda ketahui, seperti nama pengguna dan kata sandi.
- Kepemilikan adalah sesuatu yang Anda miliki, seperti kartu keamanan atau perangkat seluler
- Inheren adalah sesuatu tentang Anda, yang umumnya mengacu pada data biometrik seperti sidik jari.

Otentikasi yang bergantung pada satu faktor, seperti kombinasi nama pengguna/sandi sederhana, disebut Otentikasi Satu Faktor, dan menjadi semakin tidak aman.
Contoh Single Factor Authentication:

![Single](https://doubleoctopus.com/wp-content/uploads/2021/08/One-factor-authentication-1.png)

Contoh Multi-Factor Authentication:

![Multi](https://qph.cf2.quoracdn.net/main-qimg-014661e751fa95e451f38aedb7248af0-pjlq)

### Authorization atau Otorisasi

Otorisasi adalah verifikasi atas apa yang boleh Anda lakukan.

Kembali ke contoh konser, setelah penjaga keamanan mengautentikasi Anda, Anda kemudian memberikan tiket Anda ke penjaga keamanan lain yang kemudian hanya mengizinkan Anda masuk ke Penerimaan Umum (bukan bagian VIP).

Otorisasi sangat penting untuk keamanan web, dan bertanggung jawab atas segala hal mulai dari mencegah pengguna memodifikasi akun satu sama lain, melindungi aset back-end dari penyerang, hingga memberikan akses terbatas ke layanan eksternal.

Otorisasi yang baik akan memungkinkan Anda membatasi pengguna dan layanan untuk hak istimewa yang mereka butuhkan; hanya karena seorang pengguna berwenang untuk mengelola satu grup tidak berarti mereka harus dapat mengelola semua grup

### Encryption atau Enkripsi

Salah satu alat inti untuk menegakkan otentikasi dan otorisasi adalah enkripsi. Enkripsi adalah proses mengubah data menjadi format yang tidak dapat dibaca kecuali Anda memiliki kunci yang benar untuk mendekripsinya. Enkripsi datang dalam dua jenis utama:

1. Enkripsi simetris
2. Enkripsi asimetris

**Cara Kerja Enkripsi**
![Enkripsi](https://dwblog-ecdf.kxcdn.com/wp-content/uploads/2022/03/Cara-Kerja-Enkripsi-1024x467.jpg)

### Authentication Details

Tanggapan terhadap perintah autentikasi dapat dikategorikan ke dalam:

- Berbasis Pengetahuan: “Sesuatu yang kamu Ketahui”. Ex: Password atau PIN.
- Berbasis Kepemilikan: “Sesuatu yang kamu Miliki”. Ex: Phone atau Smart Card.
- Berbasis Inheren: "Sesuatu tentang kamu". Ex: Fingerprint atau Pola Suara.

### Session VS Cookie VS LocalStorage

#### Web Session

Sesi web atau web session mengacu pada serangkaian interaksi pengguna selama jangka waktu tertentu. Data sesi disimpan di sisi server dan dikaitkan dengan ID sesi.

Pikirkan sesi sebagai memori jangka pendek untuk aplikasi web. Pada latihan berikutnya, kami akan menjelaskan di mana pengidentifikasi sesi ini disimpan sehingga browser (klien) dapat terus mengambil data sesi yang sama di antara pemuatan halaman yang berbeda.

![Web Session](https://hazelcast.com/wp-content/uploads/2021/12/diagram-Web-Sessions.png)

#### Session & Cookie

Agak kikuk bagi klien untuk mengingat untuk menempelkan ID sesi ke setiap permintaan. Karena itu, ID sesi sering disimpan di sisi klien dalam bentuk cookie sesi.

Cookie adalah potongan kecil data — file teks berukuran maksimal 4kb — browser menyimpan yang secara otomatis dikirim dengan permintaan HTTP ke aplikasi web. Cookie disetel oleh header respons HTTP dalam pasangan nilai kunci:

```sql
Set-Cookie: Key = Value

Set-Cookie: sessionID = 34jgL79b
```

Kira-kira bagaimana sesi diimplementasikan dengan cookie:

1. Seorang pengguna pergi ke sebuah situs. Server web membuat sesi dan ID sesi.
2. Dalam respons server, ini memberi tahu browser untuk menyimpan cookie dengan ID sesi (tidak boleh menyertakan informasi pribadi apa pun).
3. Cookie ID sesi secara otomatis dilampirkan ke setiap permintaan HTTP berikutnya ke server.
4. Saat server membaca cookie ID sesi yang dikirim dengan permintaan HTTP berikutnya, server akan mengembalikan data sesi yang terkait dengan ID tersebut.
5. Proses berlanjut selama sesi aktif.
6. Cookie sesi dan ID sesi kedaluwarsa setelah pengguna menutup browser, logout, atau durasi sesi yang telah ditentukan (yaitu satu jam) berlalu.

### Cookie Security

Cookie sering kali menyimpan informasi sensitif, terutama saat digunakan dalam manajemen sesi. Cookie juga digunakan untuk menyimpan preferensi atau riwayat pribadi pengguna, yang juga harus tetap aman.

Langkah pertama untuk mengamankan cookie adalah dengan menambahkan tanggal kedaluwarsa atau durasi sehingga cookie tidak bertahan lebih lama dari yang seharusnya. Kami dapat menentukan informasi itu melalui header Set-Cookie dalam respons HTTP seperti:

```sql
Set-Cookie: Key=Value; expire=Monday, 29-Nov-2021 07:30:10 GMT
```

Atribut HttpOnly untuk header Set-Cookie memastikan bahwa data cookie tidak dapat diakses oleh skrip yang menjalankan sisi klien. Ini membantu mencegah serangan Cross-Site Scripting (XSS) yang mencoba mencuri cookie sesi dan mengambil alih sesi korban, yang sangat umum.

```sql
Set-Cookie: Key=Value; expire=Monday, 29-Nov-2021 07:30:10 GMT; HTTPOnly
```

[Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)

| Ket                | Cookies            | Local Storage | Session Storage |
| ------------------ | ------------------ | ------------- | --------------- |
| Capacity           | 4 kb               | 10 mb         | 5 mb            |
| Browser            | HTML 4 / HTML 5    | HTML 5        | HTML 5          |
| Accessible from    | Any Window         | Any window    | Same tab        |
| Expires            | Manually set       | Never         | On tab close    |
| Storage Location   | Browser and server | Browser only  | Browser only    |
| Sent with requests | Yes                | No            | Yes             |

[Session Based Authentication in Express](https://www.section.io/engineering-education/session-management-in-nodejs-using-expressjs-and-express-session/)

### Token Based Authentication Using JWT

Token Web JSON adalah objek JSON mandiri yang secara kompak dan aman mengirimkan informasi antara dua pihak. Mereka aman karena ditandatangani secara digital menggunakan pasangan kunci rahasia atau publik/pribadi.

Sebagai pengingat, JSON, atau Notasi Objek JavaScript, pada dasarnya adalah versi objek Javascript yang sedikit lebih ketat.

Objek JSON harus diapit kurung kurawal dan dapat berisi satu atau lebih pasangan nilai kunci.

Komponen JWT terdiri dari tiga komponen:

1. Header
2. Payload
3. Signature

### JWT Header

Header JWT berisi jenis token yang kami buat dan algoritma penandatanganan yang akan digunakan.

Jenis:
Jenis token ini akan selalu "JWT". Internet Assigned Numbers Authority, atau IANA, mengoordinasikan sumber daya protokol internet di seluruh dunia. Jenis "JWT" ​​sejajar dengan jenis media "application/jwt".

Algoritma:
Penandatanganan, atau hashing, algoritma yang digunakan mungkin berbeda. Beberapa algoritma yang umum digunakan adalah HMAC-SHA256, diwakili oleh "HS256", RSA dengan SHA-256, diwakili oleh "RW256", dan ECDSA dengan SHA-256, diwakili oleh "ES256".

```sql
{
    "alg": "HS256",
    "typ": "JWT"
}
```

### JWT Payload

Payload JWT berisi klaim tentang suatu entitas. Klaim adalah pernyataan atau informasi dan entitas terkait dengan pengguna.

Ada tiga jenis klaim yang dapat dikandung oleh muatan JWT:

1. Klaim Terdaftar: Ini adalah jenis klaim yang telah ditentukan sebelumnya yang dapat digunakan siapa saja di JWT.
2. Klaim Publik: Ini adalah jenis klaim khusus yang dibuat oleh pengembang dan dapat digunakan secara publik. Mereka harus didaftarkan untuk menghindari tabrakan, juga dikenal sebagai klaim berulang.
3. Klaim Pribadi: Ini adalah jenis klaim khusus yang tidak terdaftar atau publik. Mereka hanya digunakan antara pihak-pihak yang telah setuju untuk menggunakannya.
   [JWT Payload](https://www.iana.org/assignments/jwt/jwt.xhtml#claims)

```sql
{
    'sub': '1234567890',
    'name': 'Terra',
    'admin': false,
    'iat': 1620924478,
    'exp': 1620939187
}
```

### JWT Signature

Tanda tangan JWT digunakan untuk memverifikasi bahwa JWT tidak dirusak atau diubah. Itu dapat dibuat dengan mengambil tajuk yang disandikan, muatan yang disandikan, rahasia, dan menggunakan algoritma hashing untuk membuat hash dari elemen-elemen itu.

Rahasianya adalah kunci simetris yang diketahui oleh pengirim dan penerima token ini.
[JWT Signature](https://jwt.io/#debugger-io)

Sekarang kami telah menyimpan informasi pengguna kami di JWT kami, apa yang kami lakukan dengannya? Bagaimana kami menggunakan informasi di JWT kami saat berkomunikasi dengan server kami?

1. Pengguna masuk ke situs web dan informasi mereka dikirim ke server.
2. Server membuat JWT dengan rahasia.
3. JWT dikembalikan ke browser.
4. Pengguna membuat permintaan lain, dan browser mengirimkan JWT kembali ke server di header Otorisasi menggunakan skema Bearer.
   Dengan JWT kami yang baru dibuat, ini akan terlihat seperti:

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkhhcmluZSBDb29wZXIiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTYyMDkyNDQ3OCwiZXhwIjoxNjIwOTM5MTg3fQ.3B-FLgPETrExxlDKW30AoU7KGE6xuZodw79TQR8_mwM

5. Server memverifikasi tanda tangan JWT dan mendapatkan informasi pengguna dari JWT.
6. Server akan mengirimkan respon kembali ke browser. Jika JWT valid, browser akan menerima apa yang diminta, jika JWT tidak valid, browser kemungkinan akan menerima pesan kesalahan.

Untuk menjaganya tetap aman, Anda harus selalu menyimpan JWT di dalam cookie httpOnly. Ini adalah jenis cookie khusus yang hanya dikirim dalam permintaan HTTP ke server. Itu tidak pernah dapat diakses (baik untuk membaca atau menulis) dari JavaScript yang berjalan di browser.
[JWT in Express](https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs)
[Authentication Authorization JWT](https://stackabuse.com/authentication-and-authorization-with-jwts-in-express-js/)

**Mana yang lebih baik untuk digunakan?**
Dalam aplikasi web modern, JWT banyak digunakan karena skalanya lebih baik daripada berbasis cookie sesi karena token disimpan di sisi klien sementara sesi menggunakan memori server untuk menyimpan data pengguna, dan ini mungkin menjadi masalah saat sejumlah besar pengguna mengakses aplikasi sekaligus.

### Otentikasi Kata Sandi (Bcrypt)

Saat mempraktikkan konsep baru, kami mungkin menyimpan kata sandi plaintext di database lokal, tetapi ini sangat tidak aman. Seseorang seharusnya tidak pernah melakukan ini di lingkungan produksi.

Ada banyak fungsi hashing kriptografi untuk dipilih, seperti algoritma SHA-3 atau MD-5. Algoritma SHA-3 dan MD-5 dikenal cukup cepat.

Sayangnya, semakin cepat fungsinya, semakin cepat peretas dapat mengambil kata sandi hash melalui serangan brute force. Jadi, menggunakan fungsi yang lebih lambat dalam hashing kata sandi sebenarnya dapat melindungi pengguna Anda.

Kita dapat melakukannya dengan menggunakan algoritma dan perpustakaan bcrypt, bcrypt adalah algoritma hashing.

![Encryption & Decryption](https://devx.blog/uploads/network/encryptionvshashing.png)

Fungsi hash hanya berfungsi satu arah, yang berarti bahwa setelah nilai di-hash, ia tidak dapat di-unhash. Ini berarti Anda tidak dapat dengan mudah mengambil kata sandi plaintext tanpa mengetahui garam, putaran, dan kunci (kata sandi)

Ini berbeda dengan enkripsi, karena, jika Anda mengetahui algoritma mana yang digunakan untuk mengenkripsi suatu nilai, Anda dapat menggunakan algoritma yang sama untuk mendekripsinya.

### Hash + Salt

Salt adalah nilai acak yang ditambahkan ke input fungsi hashing untuk membuat setiap hash kata sandi unik bahkan dalam contoh dua pengguna memilih kata sandi yang sama.

Salt membantu kami mengurangi serangan tabel hash dengan memaksa penyerang untuk menghitung ulang mereka menggunakan salt untuk setiap pengguna.

bcrypt adalah algoritma hashing + salt
![Password Hash Salt](https://cyberhoot.com/wp-content/uploads/2020/05/Hash-plus-Salt-1.png)

[Salt & Hash Password](https://heynode.com/blog/2020-04/salt-and-hash-passwords-bcrypt/)

---

## Day 5 - Build Web Services and RESTful API with Express & Sequelize

### Sequelize

Sequelize adalah ORM (Object Relational Mapping) Node JS yang berbasis promise. Sequelize mendukung sebagian besar relational Database seperti MySQL, PostgresQL, MariaDB, SQLite dan Miscrosoft SQL Server.

Dengan fitur fitur di Sequelize, kita bisa mengelola dan mengatur data di database kita dengan cepat, dan efisien.
[Sequelize](https://sequelize.org/master/index.html)

**Apa itu ORM?**
ORM adalah suatu metode/teknik pemrograman yang digunakan untuk mengkonversi data dari lingkungan bahasa pemrograman berorientasi objek (OOP) dengan lingkungan database relational.

**Install Sequelize-cli**
Kita perlu menginstall sequelize cli agar dapat menjalankan generator menggunakan terminal sehingga lebih mudah.

```sql
npm install -g sequelize-cli
```

Ketika kita melakukan inisiasi project kita pertama perlu menginstall sequelize menggunakan npm install sequelize dan perlu menginstall driver sql yang kita butuhkan.

```sql
// Installing by NPM
npm install --save sequelize

// Install Driver Database
npm install --save mysql
```

### Generate Sequelize

**Sequelize init**
Pertama kita perlu melakukan inisialisasi di project kita terlebih dahulu agar dapat melakukan generate code.

```sql
npx sequelize-cli init
```

**Setting Database**
![Setting Database](./database-sequelize.png)

**Generate Model**
Mari kita membuat table todo dengan field seperti ini:

![Generate Model](./table-todo.png)

Kita bisa melihat datanya menjadi sebuat class (OOP) dan dapat kita gunakan untuk membuat Rest API menggunakan express atau dapat memberikan behaviour di statenya.

![Generate Model](./generate-model.png)

Akhirnya kita dapat menggunakan generate dan kita bisa mengecek ke database sehingga dapat kita gunakan untuk penyimpanan DB.

```sql
npx sequelize-cli db:migrate
```

Jika ada yang salah, kita bisa mengembalikan (undo) menggunakan:

```sql
npx sequelize-clie db:migrate:undo
```

Ketika kita berhasil melakukan generate maka kita dapat melihat di database ada 1 table baru yang bernama Todos dan ada table SequelizeMete.

![Generate Model](./generate-model2.png)

**Generate Seed**
Seed adalah data awal yang bisa kita gunakan untuk mengisi data di database untuk keperluan awal project menggunakan sequelize.

```sql
npx sequelize-cli seed:generate --name demo-todo
```

Ketika sudah berhasil melakukan generate maka kita dapat melakukan pengisian data seed didalam file seed generator. Terdapat 2 data yang diisi yaitu “up” untuk mengisi data di db, dan “down” untuk drop atau menghapus semua data seed di db.

![Generate Seed](./generate-seed.png)

Kita kemudian menjalankan generate seed menggunakan sequelize.

```sql
npx sequelize-cli db:seed:all
```

Jika ada yang salah, kita bisa mengembalikan (undo) menggunakan.

```sql
npx sequelize-clie db:seed:undo
```

Ketika kita menjalankan generate seed menggunakan terminal, maka kita dapat melihat bahwa seeding kita sudah berhasil ter insert ke db.

![Generate Seed](./generate-seed2.png)

### Membuat CRUD dengan Express dan Sequelize

Setelah model tersedia, maka model tersebut bisa kita gunakan untuk membuat CRUD.
Beberapa endpoint RESTFul:

1. Get All todos
2. Get TODO Detail By Id
3. Create New Todo
4. Update Todo By Id
5. Delete Todo

**Get All Todo**
Kita akan membuat sebuah routing untuk get all todo dengan syntax berikut:

![Get All Todo](./get-all-todo.png)

Ketika kita akses endpoint tersebut, maka akan menghasilkan result seperti ini :

![Get All Todo](./get-all-todo2.png)

**Get Todo Detail By Id**
Kita akan membuat sebuah routing untuk get detail todo berdasarkan Id todo dengan syntax berikut:

![Get Todo Detail By Id](./get-todo-detail.png)

Ketika kita akses endpoint tersebut, maka akan menghasilkan result seperti ini :

![Get Todo Detail By Id](./get-todo-detail2.png)

**Create New Todo**
Kita akan membuat sebuah routing untuk create new todo dengan syntax berikut:

![Create Todo](./create-todo.png)

Ketika kita akses endpoint tersebut, maka akan menghasilkan result seperti ini :

![Create Todo](./create-todo2.png)

**Update Todo By Id**
Kita akan membuat sebuah routing untuk update todo by id dengan syntax berikut:

![Update Todo](./update-todo.png)

Ketika kita akses endpoint tersebut, maka akan menghasilkan result seperti ini :

![Update Todo](./update-todo2.png)

**Delete Todo By Id**
Kita akan membuat sebuah routing untuk delete todo by id dengan syntax berikut:

![Delete Todo](./delete-todo.png)

Ketika kita akses endpoint tersebut, maka akan menghasilkan result seperti ini :

![Delete Todo](./delete-todo2.png)

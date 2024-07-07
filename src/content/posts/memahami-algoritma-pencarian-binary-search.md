---
title: "Memahami Algoritma Pencarian Binary Search"
description: "Membahas topik algoritma, yaitu binary search. Binary search adalah salah satu algoritma pencarian yang efisien dan cepat untuk mencari item dalam daftar yang terurut."
date: 2023-09-06T00:00:00Z
image: "/images/posts/binary_search1.webp"
categories: ["Tech"]
authors: ["Arsy Opraza"]
tags: ["Algoritma", "JavaScript", "Coding"]
draft: false
---

Setelah vakum lebih dari setahun menulis topik algoritma, kali ini saya akan menulis kembali mengenai topik algoritma yaitu binary search.

Binary search merupakan salah satu algoritma pencarian, sebenarnya ada algoritma pencarian lainnya seperti linear search, tetapi di artikel ini kita hanya berfokus pada binary search. Oke tanpa berlama-lama lagi, yuk kita bahas algoritma binary search!

## Pengertian Binary Search
Misalkan, ketika kamu ingin mencari nama seseorang yang berawalan huruf S di daftar hadir yang telah diurutkan sesuai abjad. Kamu akan mulai melakukan pencarian satu per satu dari huruf A sampai huruf S, tentunya ini bukan cara yang salah, tetapi cara ini akan membutuhkan waktu dan proses yang lama. Tentunya kita tidak ingin itu terjadi, bukan? Yup, binary search akan menyelesaikan masalah ini.

Bagaimana binary search menyelesaikan masalah tersebut? Dengan binary search ketika ingin mencari nama seseorang yang berawalan huruf S di daftar hadir, kamu tidak akan melakukan pencarian satu per satu dari huruf A sampai huruf S, tetapi kamu akan mulai mencari dari tengah-tengah yaitu huruf M karena kamu tahu bahwa huruf S kira-kira berada di tengah abjad.

![image](/images/posts/binary_search1.webp)
![image](/images/posts/binary_search2.webp)

Jadi, binary search merupakan algoritma pencarian item yang ada di daftar atau list yang terurut dengan cara membagi setengah bagian daftar atau list yang menyimpan item yang dicari.

## Kecepatan Binary Search
Misalkan, list memiliki 100 item dan untuk mencari 1 item membutuhkan waktu 1 detik. Jika menggunakan simple search membutuhkan waktu 100 detik karena harus mengecek setiap item, maka dengan menggunakan binary search kita hanya membutuhkan waktu 7 detik. Loh, kok bisa?

Karena, menggunakan binary search kita hanya akan membutuhkan 7 kali pengecekan tidak seperti simple search yang harus melakukan pengecekan sebanyak jumlah item yang ada di list. Kalau kita bahas mengenai running time. Binary search memiliki running time O(log n) atau log 2 dari 100 sama dengan 7 jika dibulatkan sedangkan simple search memiliki running time O(n).

Pembahasan mengenai running time atau disebut juga dengan big o notation pada artikel kali ini tidak akan kita bahas lebih dalam, tetapi jika ada kesempatan dilain waktu akan kita kupas tuntas mengenai big o notation.

Jadi, dapat disimpulkan bahwa binary search memiliki performa yang sangat cepat dibandingkan dengan simple search.

## Contoh Implementasi Kode
Tak cukup rasanya jika kita hanya bahas teorinya saja, maka berikut ini merupakan contoh implementasi binary search pada bahasa pemrograman JavaScript:

```javascript
function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;
    
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        
        if (array[middle] === target) {
            return middle;
        } else if (array[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    
    return -1;
}
```

Kode diatas ketika dieksekusi akan mengembalikan index dari item yang dicari.\
Sekian dari saya, semoga teman-teman dapat memahami algoritma binary search ini.

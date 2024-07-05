---
title: "Go Series #1 - Getting Started"
description: "Series ini merupakan catatan pribadi yang dapat dibagikan melalui tulisan selama belajar Go Language. Semoga series Go ini bermanfaat untuk pembaca"
date: 2024-02-16T00:00:00Z
image: "/images/posts/Go-Logo_Blue.png"
categories: ["Tech"]
authors: ["Arsy Opraza"]
tags: ["Golang"]
draft: false
---


# Go Series #1 - Getting Started

Series ini merupakan catatan pribadi yang dapat dibagikan melalui tulisan selama belajar Go. Tulisan ini mungkin tidak seniat artikel blog yang ada di luar sana. Tetapi, harapannya tulisan ini dapat bermanfaat bagi pembaca yang sedang belajar Go.

Di luar sana, sudah banyak yang bahas tentang pengertian, sejarah, kelebihan, dan alasan menggunakan Go. Oleh karena itu, di sini kita tidak akan bahas hal tersebut.

## Inisialisasi Proyek

Di Node.js ketika ingin menginisialisasi proyek menggunakan perintah `npm init -y`. Lain halnya di Go, untuk menginisialisasi proyek, dapat dilakukan dengan menjalankan perintah berikut ini.

```bash
go mod init <nama proyek>
```

Nama proyek dapat ditulis apa pun tetapi biasanya mengikuti nama direktori proyek.

## Menjalankan Program

Untuk menjalankan program Go dapat dilakukan dengan perintah:

```bash
go run main.go
```

Perlu diingat bahwa perintah `go run` hanya dapat dijalankan ketika filenya bernama `main`.

## Compile Program Menjadi Executable

Perintah `go run` akan meng-compile dan menjalankan file Go. Namun, jika menggunakan perintah `go build`, akan menghasilkan file executable di folder yang aktif saat ini.

## Hello World

Tak lengkap rasanya jika belajar bahasa baru tanpa membuat program yang mencetak hello world :)

Setelah menginisialisasi program, buatlah berkas dengan nama `main.go`.

Kemudian, tulis kode berikut ini:

```go
package main

import "fmt"

func main() {
 fmt.Println("Hello, World!")
}
```

Selanjutnya, jalankan perintah `go run main.go` maka di terminal akan tercetak "Hello, World!".

Demikianlah debut Go Series ini, nantikan series selanjutnya yang akan lebih menarik yaitu membahas mengenai sintaks Go.

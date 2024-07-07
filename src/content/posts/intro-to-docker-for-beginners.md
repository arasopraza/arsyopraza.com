---
title: "Introduction to Docker for Beginners"
description: "Series ini merupakan catatan pribadi yang dapat dibagikan melalui tulisan selama belajar Go Language. Semoga series Go ini bermanfaat untuk pembaca"
date: 2023-02-16T00:00:00Z
image: "/images/posts/docker-architecture.webp"
categories: ["Tech"]
authors: ["Arsy Opraza"]
tags: ["Containers", "Containerization", "Docker"]
draft: false
---

Di kesempatan kali ini kita akan membahas teknologi yang dapat membantu build dan deploy aplikasi, yang sudah banyak digunakan oleh perusahaan teknologi maupun non-teknologi.

## What is a Container?

Container adalah unit perangkat lunak yang dapat dieksekusi yang mana kode aplikasi, library, dan dependency-nya dikemas, sehingga dapat dijalankan di mana saja serta mudah dan cepat untuk berpindah antar environment.

![image](/images/posts/container.webp)

### Perbedaan Container dengan VM (Virtual Machine)

- **Space Storage:** Container membutuhkan lebih sedikit space storage dibandingkan VM, container cuma berukuran MB sedangkan VM hingga berukuran GB.
- **Isolation:** Container tidak mengisolasi OS sedangkan VM mengisolasi juga di bagian OS.
- **Resource Sharing:** Multiple container menggunakan OS yang sama, sedangkan multiple VM menggunakan hardware yang sama.

Dengan container, kita dapat dengan mudah mengisolasi aplikasi dan dapat menggunakan library atau dependency yang berbeda-beda di dalam satu operating system atau machine. Di docker ada 3 jenis containers: Standard, Lightweight, Secure.

## What is Docker?

Docker adalah open source platform atau ekosistem untuk build, deploy, run, dan me-manage container. Docker memudahkan untuk memisahkan aplikasi dengan infrastruktur sehingga dapat mempercepat proses deliver aplikasi. Docker merupakan container manager yang populer saat ini yang digunakan di seluruh dunia. Untuk tutorial install docker dapat dilihat di [Docker Documentation](https://docs.docker.com/get-docker/).

## Why Use Docker?

Docker mempermudah install dan running software tanpa memikirkan setup dan dependency jadi tidak ada lagi masalah terkait dependency library yang terjadi akibat perbedaan OS atau machine yang digunakan antar developer atau engineer yang ada di dalam tim.

Benefit utama docker adalah mempermudah untuk membungkus application beserta dependency-nya kedalam sebuah standar unit untuk software development.

## Docker Architecture
![image](/images/posts/docker-architecture.webp)

### Docker Daemon

Docker daemon (dockerd) me-manage docker objects seperti images, containers, networks, dan volumes.

### Docker Client

Docker client (docker) merupakan cara untuk berinteraksi dengan docker seperti menggunakan perintah `docker run`. Perintah docker menggunakan docker API. Docker client bisa berkomunikasi dengan lebih dari satu daemon.

### Docker Desktop

Docker desktop sangat mudah di-install di Mac, Windows, atau Linux environment. Docker desktop didalamnya sudah termasuk: Docker Daemon (dockerd), Docker client (docker), Docker Compose, Docker Content Trust, Kubernetes, and Credential Helper.

### Docker Registry

Docker Hub merupakan public registry yang bisa digunakan oleh siapa saja, dan secara default docker akan mendapatkan images dari Docker hub. Ketika menggunakan perintah `docker pull` atau `docker run`, images didapatkan dari registry yang sudah dikonfigurasi. Begitu juga ketika menggunakan perintah `docker push`, image akan di-push ke registry.

### Docker Image

Sebelum menjalankan aplikasi di docker, dibutuhkan sebuah image dari aplikasi yang ingin digunakan. Docker image selengkapnya dapat dilihat di [Docker Hub](https://hub.docker.com/) atau menggunakan perintah `docker image pull`.

// Ambil elemen header dan burger
const header = document.querySelector('header');
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');

// Menambahkan event listener pada burger untuk toggle kelas "active"
burger.addEventListener('click', () => {
    burger.classList.toggle('active'); // Mengubah status burger menjadi aktif/inaktif
    burgerMenu.classList.toggle('active'); // Menampilkan atau menyembunyikan menu burger
});

// Fungsi untuk menambahkan atau menghapus kelas 'scrolled' berdasarkan scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        // Menambahkan kelas 'scrolled' saat halaman di-scroll
        header.classList.add('scrolled');
    } else {
        // Menghapus kelas 'scrolled' saat halaman kembali ke atas
        header.classList.remove('scrolled');
    }
});

// Menambahkan event listener untuk resize window
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        // Jika lebar layar lebih besar dari 768px, tutup menu burger dan reset tampilan
        burger.classList.remove('active');
        burgerMenu.classList.remove('active');
    }
});

// Animasi ketik untuk teks
window.onload = () => {
    const paragraph = document.querySelector('.about-text p');
    const textLength = paragraph.textContent.length;
    paragraph.style.setProperty('--typing-steps', textLength);
};

// Tambahkan kelas "loaded" untuk efek transisi halaman
window.addEventListener('load', function () {
    document.body.classList.add('loaded');
});

// Efek Fade-in untuk Elemen Saat Masuk ke Viewport
const fadeInElements = document.querySelectorAll('.fade-in, .profile-img, .portfolio-item img, .sertifikat-image');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

fadeInElements.forEach(element => {
    observer.observe(element);
});

 // Ambil elemen tombol
 const backToTopButton = document.getElementById("back-to-top");

 // Tampilkan tombol saat menggulir ke bawah 200px dari atas
 window.onscroll = function () {
     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
         backToTopButton.style.display = "block";
     } else {
         backToTopButton.style.display = "none";
     }
 };

 // Ketika tombol diklik, scroll ke atas
 backToTopButton.onclick = function () {
     window.scrollTo({ top: 0, behavior: "smooth" });
 };
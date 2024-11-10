// Fungsi untuk menampilkan kejutan
function revealSurprise() {
    document.getElementById("surprise").classList.remove("hidden");
    playMusic(); // Coba putar musik saat tombol kejutan ditekan
}

// Fungsi untuk menampilkan pesan cinta tambahan
function displayLove() {
    document.getElementById("loveNote").classList.remove("hidden");
}

// Fungsi untuk mengatur volume musik saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    const music = document.getElementById("background-music");
    if (music) {
        music.volume = 0.5; // Setel volume musik ke 50%
    }
});

// Fungsi untuk memutar musik saat tombol Play Music ditekan
function playMusic() {
    const music = document.getElementById("background-music");
    if (music) {
        music.play().then(() => {
            // Sembunyikan tombol setelah musik berhasil diputar
            document.getElementById("playMusicButton").style.display = "none";
        }).catch((error) => {
            console.log("Autoplay prevented, user interaction required:", error);
            // Tampilkan pesan kesalahan jika musik tidak bisa diputar
            alert("Silakan tekan tombol Play Music untuk memulai musik.");
        });
    }
}

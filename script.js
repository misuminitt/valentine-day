onload = () => {
    document.body.classList.remove("container");
};

const wrapper = document.querySelector(".wrapper");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const letter = document.querySelector(".letter");

// Fungsi untuk menutup letter
const closeLetter = () => {
    wrapper.classList.remove("open");
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
    letter.classList.remove("enlarged", "show-text");
};

openBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // Mencegah event click merambat ke document
    wrapper.classList.add("open");
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";

    // Tambahkan efek perbesaran setelah 1 detik
    setTimeout(() => {
        letter.classList.add("enlarged");

        // Tampilkan teks setelah letter membesar (delay 0.5 detik)
        setTimeout(() => {
            letter.classList.add("show-text");
        }, 500);
    }, 1000);
});

closeBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // Mencegah klik closeBtn menutup openBtn lagi
    closeLetter();
});

// Event untuk menutup letter saat klik di luar letter
document.addEventListener("click", (event) => {
    if (!letter.contains(event.target) && !openBtn.contains(event.target) && !closeBtn.contains(event.target)) {
        closeLetter();
    }
});

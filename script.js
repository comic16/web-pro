// Inisialisasi Swiper
const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: false, // Nonaktifkan loop, supaya tidak balik ke halaman pertama
  slidesPerView: 1,
  spaceBetween: 0,
  on: {
    slideChange: function() {
      updateDots();
    },
  },
});

// Tampilkan tanggal hari ini
let today = new Date();
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('tanggalHariIni').innerText = today.toLocaleDateString('id-ID', options);

// Update dot indikator
function updateDots() {
  let activeIndex = swiper.realIndex;
  let dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index === activeIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Bounce efek ketika mencapai halaman terakhir
swiper.on('reachEnd', function() {
  const lastSlide = swiper.slides[swiper.slides.length - 1];
  lastSlide.classList.add('bounce');
  setTimeout(() => {
    lastSlide.classList.remove('bounce');
  }, 500);
});

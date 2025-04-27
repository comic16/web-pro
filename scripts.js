let currentPage = 1;
const pages = document.querySelectorAll('.page');
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

function goToPage(pageNum) {
  pages.forEach((page, index) => {
    if (index + 1 === pageNum) {
      page.style.transform = `translateX(0)`; // Tampilkan halaman yang sesuai
    } else {
      page.style.transform = `translateX(100%)`; // Sembunyikan halaman lainnya
    }
  });
  currentPage = pageNum;
}

function swipeEffect() {
  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  });

  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;

    // Geser kiri/kanan
    if (Math.abs(touchStartX - touchEndX) > 50) {
      if (touchStartX - touchEndX > 50) {
        // Swipe ke kiri (halaman berikutnya)
        if (currentPage < 5) {
          goToPage(currentPage + 1);
        }
      } else if (touchEndX - touchStartX > 50) {
        // Swipe ke kanan (halaman sebelumnya)
        if (currentPage > 1) {
          goToPage(currentPage - 1);
        }
      }
    }

    // Geser atas/bawah untuk kembali menurunkan halaman 2
    if (Math.abs(touchStartY - touchEndY) > 50) {
      if (touchStartY < touchEndY) {
        // Sentuh halaman pertama saat halaman 2 terbuka
        if (currentPage === 2) {
          goToPage(1); // Kembali ke halaman 1
        }
      }
    }
  });
}

document.getElementById('galeriBtn').addEventListener('click', () => {
  document.querySelector('.page6').style.visibility = 'visible';
  document.querySelector('.page6').style.transform = 'translateY(0)';
});

function init() {
  goToPage(1);
  swipeEffect();
}

init();

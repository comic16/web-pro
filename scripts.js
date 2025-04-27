let touchStartY = 0;
let touchEndY = 0;
let touchStartX = 0;
let touchEndX = 0;
let isPage2Active = false;
let isPage3Active = false;

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

// Fungsi untuk menangani swipe up dan swipe left/right
function swipeEffect() {
  document.addEventListener("touchstart", (e) => {
    touchStartY = e.changedTouches[0].screenY;
    touchStartX = e.changedTouches[0].screenX;
  });

  document.addEventListener("touchend", (e) => {
    touchEndY = e.changedTouches[0].screenY;
    touchEndX = e.changedTouches[0].screenX;

    // Geser ke atas untuk membuka halaman 2
    if (Math.abs(touchStartY - touchEndY) > 50) {
      if (touchStartY > touchEndY) {
        // Geser ke atas
        if (!isPage2Active) {
          page2.classList.add("active");
          isPage2Active = true;
        }
      } else if (touchEndY > touchStartY) {
        // Geser ke bawah (menutup halaman 2)
        if (isPage2Active) {
          page2.classList.remove("active");
          isPage2Active = false;
        }
        if (isPage3Active) {
          page3.classList.remove("active");
          isPage3Active = false;
        }
      }
    }

    // Geser ke kiri/kanan untuk berpindah ke halaman 3
    if (Math.abs(touchStartX - touchEndX) > 50) {
      if (touchStartX > touchEndX) {
        // Geser ke kiri
        if (isPage2Active && !isPage3Active) {
          page3.classList.add("active");
          isPage3Active = true;
        }
      } else if (touchEndX > touchStartX) {
        // Geser ke kanan
        if (isPage3Active) {
          page3.classList.remove("active");
          isPage3Active = false;
        }
      }
    }
  });
}

// Menutup halaman 2 atau 3 ketika halaman 1 diklik
page1.addEventListener("click", () => {
  if (isPage2Active) {
    page2.classList.remove("active");
    isPage2Active = false;
  }
  if (isPage3Active) {
    page3.classList.remove("active");
    isPage3Active = false;
  }
});

function init() {
  swipeEffect();
}

init();

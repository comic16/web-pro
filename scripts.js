let currentPage = 1;
const pages = document.querySelectorAll('.page');

function goToPage(pageNum) {
  pages.forEach((page, index) => {
    if (index + 1 === pageNum) {
      page.style.transform = `translateY(0)`;
    } else {
      page.style.transform = `translateY(100%)`;
    }
  });
  currentPage = pageNum;
}

function swipeEffect() {
  let touchStartY = 0;
  let touchEndY = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
  });

  document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    if (touchStartY > touchEndY + 50) {
      // Swipe up to go to next page
      if (currentPage < 5) {
        goToPage(currentPage + 1);
      }
    } else if (touchStartY < touchEndY - 50) {
      // Swipe down to go to previous page
      if (currentPage > 1) {
        goToPage(currentPage - 1);
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

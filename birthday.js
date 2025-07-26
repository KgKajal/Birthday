const gifts = document.querySelector('.gifts');
const giftCount = document.querySelectorAll('.gift').length;
const visible = 4;
let start = 0;

document.querySelector('.carousel-btn.left').onclick = function() {
  if (start > 0) {
    start--;
    gifts.style.transform = `translateX(-${start * 90}px)`;
  }
};

document.querySelector('.carousel-btn.right').onclick = function() {
  if (start < giftCount - visible) {
    start++;
    gifts.style.transform = `translateX(-${start * 90}px)`;
  }
};

const gifts = document.querySelector('.gifts');
const giftCount = document.querySelectorAll('.gift').length;
const visible = 3;
const giftWidth = 430; // 400px image + 15px left + 15px right margin
let start = 0;

document.querySelector('.carousel-btn.left').onclick = function () {
  start--;
  if (start < 0) {
    start = giftCount - visible; // loop back to end
  }
  gifts.style.transform = `translateX(-${start * giftWidth}px)`;
};

document.querySelector('.carousel-btn.right').onclick = function () {
  start++;
  if (start > giftCount - visible) {
    start = 0; // loop back to start
  }
  gifts.style.transform = `translateX(-${start * giftWidth}px)`;
};

// function unrollScroll() {
//   const scroll = document.getElementById('scrollPaper');
//   scroll.classList.toggle('open');
// }

function unrollScroll() {
  const paper = document.getElementById("scrollPaper");
  const wrapper = paper.parentElement;
  paper.classList.toggle("open");
  wrapper.classList.toggle("open"); // 🔥 add this line
}


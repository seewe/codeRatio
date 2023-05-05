const cardListContainer = document.querySelector('.technologies');
const cardList = document.querySelector('.technologies-list');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let scrollPos = 0;

arrowLeft.addEventListener('click', () => {
  scrollPos += 300; // adjust as needed
  cardListContainer.scrollTo({
    left: scrollPos,
    behavior: 'smooth'
  });
});

arrowRight.addEventListener('click', () => {
  scrollPos -= 300; // adjust as needed
  cardListContainer.scrollTo({
    left: scrollPos,
    behavior: 'smooth'
  });
});


//@ts-check

function imageGallery() {
  const carouselSlide = document.querySelector('.carousel-slide');
  const carouselImages = document.querySelectorAll('.carousel-slide img');

  //Buttons
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');

  //Counter
  let counter = 1;
  const size = carouselImages[0].clientWidth * 6.02;

  // @ts-ignore
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

  //Button Listeners
  nextBtn.addEventListener('click',() => {
    if (counter >= carouselImages.length - 1) return;
    // @ts-ignore
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    // @ts-ignore
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  });

  prevBtn.addEventListener('click',() => {
    if (counter <= 0) return;
    // @ts-ignore
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    // @ts-ignore
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  });

  carouselSlide.addEventListener('transitionend', () => {
    if(carouselImages[counter].id === 'lastClone'){
      // @ts-ignore
      carouselSlide.style.transition = "none"; 
      counter = carouselImages.length - 2;
      // @ts-ignore
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
      // @ts-ignore
      carouselSlide.style.transition = "none"; 
      counter = carouselImages.length - counter;
      // @ts-ignore
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
  });

}

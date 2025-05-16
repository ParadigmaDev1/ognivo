export const updateCustomSlideClasses = (swiper) => {
  swiper.slides.forEach((slide) => {
    slide.classList.remove(
      "swiper-slide-before-prev",
      "swiper-slide-after-next",
      "swiper-slide-outer-prev",
      "swiper-slide-outer-next"
    );
  });

  const activeIndex = swiper.activeIndex;
  const slides = swiper.slides;

  const beforePrevSlide = slides[activeIndex - 2];
  const beforeNextSlide = slides[activeIndex + 2];

  if (beforePrevSlide) {
    beforePrevSlide.classList.add("swiper-slide-before-prev");
  }
  if (beforeNextSlide) {
    beforeNextSlide.classList.add("swiper-slide-after-next");
  }

  // Добавляем `swiper-slide-outer-prev` на все слайды перед `before-prev`
  for (let i = 0; i < activeIndex - 2; i++) {
    slides[i]?.classList.add("swiper-slide-outer-prev");
  }

  // Добавляем `swiper-slide-outer-next` на все слайды после `before-next`
  for (let i = activeIndex + 3; i < slides.length; i++) {
    slides[i]?.classList.add("swiper-slide-outer-next");
  }
};

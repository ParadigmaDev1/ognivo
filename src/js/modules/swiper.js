import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import { scrollToCenter } from "../helpers/scrollToCenter.js";
import {
  updateCustomSlideClasses,
  updateCustomPaginationClasses,
} from "../helpers/updateCustomSlideClasses.js";

export const swiper = () => {
  const hero = document.querySelector(".hero");
  if (hero) {
    const total = hero.querySelector(".total");
    const current = hero.querySelector(".current");
    const heroSwiper = new Swiper(".hero-swiper", {
      modules: [Navigation, Pagination, EffectFade, Controller, Autoplay],
      effect: "fade",
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: {
        delay: 3200,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: ".hero-prev",
        nextEl: ".hero-next",
      },
      pagination: {
        el: ".hero-pagination",
      },
      on: {
        init(swiper) {
          if (total) {
            total.innerHTML =
              swiper.slides.length < 10
                ? `0${swiper.slides.length}`
                : swiper.slides.length;
          }
        },
        slideChange(swiper) {
          if (current) {
            current.innerHTML =
              swiper.realIndex + 1 < 10
                ? `0${swiper.realIndex + 1}`
                : swiper.realIndex + 1;
          }
        },
      },
    });
    const heroDescrSwiper = new Swiper(".hero-descr-swiper ", {
      modules: [EffectFade, Controller],
      effect: "fade",
      slidesPerView: 1,
      spaceBetween: 0,
    });
    heroSwiper.controller.control = heroDescrSwiper;
  }
  const afishaSwiper = new Swiper(".afisha-swiper", {
    modules: [Navigation, Controller],
    slidesPerView: 3.6,
    spaceBetween: 0,
    centeredSlides: true,
    allowTouchMove: false,
    navigation: {
      prevEl: ".afisha-prev",
      nextEl: ".afisha-next",
    },
    on: {
      init(swiper) {
        if (swiper.slides.length >= 5) {
          swiper.slideTo(2);
        } else if (swiper.slides.length == 3) {
          swiper.slideTo(1);
        } else {
          swiper.slideTo(0);
        }
        updateCustomSlideClasses(swiper);
      },
      slideChange(swiper) {
        updateCustomSlideClasses(swiper);
      },
    },
    breakpoints: {
      0: {
        slidesPerView: 1.6,
        allowTouchMove: true,
      },
      767: {
        allowTouchMove: false,
        slidesPerView: 3.6,
      },
    },
  });
  const afishaDateSwiper = new Swiper(".afisha-date-swiper", {
    modules: [EffectFade, Controller],
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    allowTouchMove: false,
  });
  afishaSwiper.controller.control = afishaDateSwiper;

  const featuresSwiperWrapper = document.querySelector(
    ".features-swiper-wrapper "
  );

  if (featuresSwiperWrapper) {
    const featuresSwiperObj =
      featuresSwiperWrapper.querySelector(".features-swiper");
    const featuresContentSwiperObj = featuresSwiperWrapper.querySelector(
      ".features-content-swiper"
    );
    const customPagination =
      featuresSwiperWrapper.querySelector(".custom-pagination");
    const paginationBtns =
      customPagination.querySelectorAll(".pagination-button");

    const featuresSwiper = new Swiper(featuresSwiperObj, {
      modules: [EffectFade, Controller, Autoplay],
      slidesPerView: 1,
      effect: "fade",
      spaceBetween: 0,
      autoplay: {
        delay: 3200,
        disableOnInteraction: false,
      },
      on: {
        init(swiper) {
          updateCustomPaginationClasses(swiper); // Инициализация при загрузке
        },
        slideChange(swiper) {
          updateCustomPaginationClasses(swiper); // Обновление при смене слайда
          const activePagination = customPagination.querySelector(
            ".pagination-button.active"
          );
          if (window.innerWidth <= 767) {
            scrollToCenter(activePagination, customPagination);
          }
        },
      },
    });

    const featuresContentSwiper = new Swiper(featuresContentSwiperObj, {
      modules: [EffectFade, Controller],
      slidesPerView: 1,
      effect: "fade",
      spaceBetween: 0,
    });

    featuresSwiper.controller.control = featuresContentSwiper;

    paginationBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        featuresSwiper.slideTo(index);
      });
    });

    // Функция для обновления классов пагинации
    function updateCustomPaginationClasses(swiper) {
      const activeIndex = swiper.activeIndex;

      // Сначала удаляем все классы
      paginationBtns.forEach((btn) => {
        btn.classList.remove("active", "stop", "pagination-prev");
      });

      // Добавляем классы
      paginationBtns.forEach((btn, index) => {
        if (index === activeIndex) {
          btn.classList.add("active"); // Активная кнопка
        } else {
          btn.classList.add("stop"); // Остальные кнопки
        }

        // Кнопки перед активной получают `pagination-prev`
        if (index < activeIndex) {
          btn.classList.add("pagination-prev");
        }
      });
    }
  }

  const tripleSwiper = new Swiper(".triple-swiper", {
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 25,
    // centeredSlides: true,
    // allowTouchMove: false,
    navigation: {
      prevEl: ".triple-swiper-prev",
      nextEl: ".triple-swiper-next",
    },
    on: {
      init(swiper) {
        swiper.slideTo(1);
      },
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 10,
        centeredSlides: true,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 25,
        centeredSlides: false,
      },
    },
  });
  const eventSwiper = new Swiper(".event-swiper", {
    modules: [Navigation],
    slidesPerView: 2.15,
    spaceBetween: 10,
    centeredSlides: true,
    // allowTouchMove: false,
    navigation: {
      prevEl: ".event-prev",
      nextEl: ".event-next",
    },
    on: {
      init(swiper) {
        swiper.slideTo(1);
      },
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        spaceBetween: 10,
        centeredSlides: true,
      },
      767: {
        slidesPerView: 2.15,
        spaceBetween: 10,
        centeredSlides: true,
      },
    },
  });
  const heroSwiper = new Swiper(".hero-triple-swiper", {
    modules: [Navigation],
    slidesPerView: 2.15,
    spaceBetween: 10,
    centeredSlides: true,
    // allowTouchMove: false,
    navigation: {
      prevEl: ".hero-swiper-prev",
      nextEl: ".hero-swiper-next",
    },
    on: {
      init(swiper) {
        swiper.slideTo(1);
      },
    },
    // breakpoints: {
    //   0: {
    //     slidesPerView: 1.1,
    //     spaceBetween: 10,
    //     centeredSlides: true,
    //   },
    //   767: {
    //     slidesPerView: 3,
    //     spaceBetween: 25,
    //     centeredSlides: false,
    //   },
    // },
  });
  const foodMenuSwiper = new Swiper(".food-menu-swiper", {
    modules: [Navigation],
    slidesPerView: 4,
    spaceBetween: 24,
    // allowTouchMove: false,
    navigation: {
      prevEl: ".food-menu-prev",
      nextEl: ".food-menu-next",
    },

    // breakpoints: {
    //   0: {
    //     slidesPerView: 1.1,
    //     spaceBetween: 10,
    //     centeredSlides: true,
    //   },
    //   767: {
    //     slidesPerView: 3,
    //     spaceBetween: 25,
    //     centeredSlides: false,
    //   },
    // },
  });
};

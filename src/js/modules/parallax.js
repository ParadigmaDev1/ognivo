import simpleParallax from "simple-parallax-js";

export const parallax = () => {
  const rightImages = document.querySelectorAll("img[data-parallax='right']");
  const leftImages = document.querySelectorAll("img[data-parallax='left']");
  const bottomImages = document.querySelectorAll("img[data-parallax='bottom']");
  if (rightImages.length) {
    rightImages.forEach((img) => {
      new simpleParallax(img, {
        orientation: "right",
        scale: 1.1,

        delay: 0.6,
        transition: "cubic-bezier(0,0,0,1)",
      });
    });
  }

  if (leftImages.length) {
    leftImages.forEach((img) => {
      new simpleParallax(img, {
        orientation: "left",
        //   scale: 2.1,
        delay: 0.6,
        transition: "cubic-bezier(0,0,0,1)",
      });
    });
  }
  if (bottomImages.length) {
    bottomImages.forEach((img) => {
      new simpleParallax(img, {
        orientation: "bottom",
        //   scale: 2.1,
        delay: 0.6,
        transition: "cubic-bezier(0,0,0,1)",
      });
    });
  }
};

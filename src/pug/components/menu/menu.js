export const menu = () => {
  const originalOverflow = document.body.style.overflow;
  const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
  const menuWrapper = document.querySelector(".menu-wrapper");
  const header = document.querySelector(".header");
  const burger = header.querySelector(".burger");
  console.log(burger);
  burger.addEventListener("click", () => {
    if (menuWrapper.className.includes("active")) {
      menuWrapper.classList.remove("active");
      burger.classList.remove("active");
      header.classList.remove("menu-active");
      setTimeout(() => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = "0px";
        if (header) header.style.paddingRight = "0px";
      }, 300);
      if (window.scrollY === 0) {
        header.classList.remove("active");
      }
    } else {
      menuWrapper.classList.add("active");
      header.classList.add("active", "menu-active");
      burger.classList.add("active");
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      if (header) header.style.paddingRight = `${scrollBarWidth}px`;
    }
  });
};

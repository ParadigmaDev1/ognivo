export const hideText = () => {
  const wrappers = document.querySelectorAll(".collapse-text-wrapper");

  if (wrappers) {
    wrappers.forEach((wrapper) => {
      const text = wrapper.querySelector(".collapse-text");
      const showText = wrapper.querySelector(".show-text");
      const hiddenContent = wrapper.querySelector(".hidden-content");
      showText.addEventListener("click", function () {
        if (text && text.classList.contains("expanded")) {
          text.classList.remove("expanded");
          if (hiddenContent) {
            hiddenContent.classList.remove("show");
          }
          showText.textContent = "Читать далее";
          showText.classList.remove("active");
        } else {
          text.classList.add("expanded");
          if (hiddenContent) {
            hiddenContent.classList.add("show");
          }
          showText.textContent = "Скрыть";
          showText.classList.add("active");
        }
      });
    });
  }
};

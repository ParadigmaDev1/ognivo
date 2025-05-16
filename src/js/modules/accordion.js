export const accordionFunc = () => {
  document.querySelectorAll(".accordion").forEach((accordion) => {
    const updateMaxHeight = (item) => {
      const titleHeight = item.querySelector(".accordion-title").scrollHeight;
      const bodyHeight =
        item.querySelector(".accordion-body")?.scrollHeight || 0;
      item.style.maxHeight = item.classList.contains("active")
        ? `${titleHeight + bodyHeight + 110}px`
        : `${titleHeight}px`;
    };

    accordion.querySelectorAll(".accordion-item").forEach((item) => {
      updateMaxHeight(item);

      item.addEventListener("click", (event) => {
        if (!event.target.classList.contains("accordion-title")) return;

        item.classList.toggle("active");
        updateMaxHeight(item);

        const titleShow = item.querySelector(".accordion-title-show p");
        if (titleShow) {
          titleShow.textContent = item.classList.contains("active")
            ? "Свернуть"
            : "Развернуть";
        }
      });

      window.addEventListener("resize", () => updateMaxHeight(item));
    });
  });
};

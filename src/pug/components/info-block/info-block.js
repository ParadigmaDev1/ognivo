export const infoBlock = () => {
  const infoHintWrappers = document.querySelectorAll(".info-hint-wrapper");
  if (infoHintWrappers.length > 0) {
    infoHintWrappers.forEach((wrapper) => {
      const button = wrapper.querySelector(".info-hint-trigger");
      const tooltip = wrapper.querySelector(".info-hint");

      button.addEventListener("mouseenter", () => {
        const expanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", !expanded);
        tooltip.setAttribute("aria-hidden", expanded);
      });

      // Закрывать подсказку при клике вне области
      button.addEventListener("mouseleave", (e) => {
        button.setAttribute("aria-expanded", "false");
        tooltip.setAttribute("aria-hidden", "true");
      });
    });
  }
};

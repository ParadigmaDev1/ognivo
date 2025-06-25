export const policy = () => {
  const policyPage = document.querySelector(".policy-page");
  if (policyPage) {
    const header = document.querySelector(".header");

    const policyMenuList = policyPage.querySelectorAll(".policy-menu");
    const h3 = policyPage.querySelectorAll("h3");

    policyMenuList.forEach((menu) => {
      const links = menu.querySelectorAll(".policy-meny__link");
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          const { target } = e;
          const linkIndex = target.getAttribute("data-link");
          const currentTitle = Array.from(h3).find(
            (_, index) => index == linkIndex
          );
          window.scrollTo({
            top: currentTitle.offsetTop - header.offsetHeight - 50,
            left: 0,
            behavior: "smooth",
          });
        });
      });
    });
  }
};

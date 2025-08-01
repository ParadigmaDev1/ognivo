import { tabs } from "./modules/tabs.js";
import { accordionFunc } from "./modules/accordion.js";
import { swiper } from "./modules/swiper.js";
import { parallax } from "./modules/parallax.js";
// import { map } from "./modules/map.js";
import { modals } from "./modules/modals.js";
import { validateForm } from "./modules/validate.js";
import { hideText } from "./modules/hide-text.js";
import IMask from "imask";
import { header } from "../pug/components/header/header.js";
import { map } from "../pug/components/map/map.js";
import { menu } from "../pug/components/menu/menu.js";
import { infoBlock } from "../pug/components/info-block/info-block.js";
import { policy } from "../pug/pages/policy/policy.js";

document.addEventListener("DOMContentLoaded", () => {
  accordionFunc();
  tabs();
  modals();
  swiper();
  parallax();
  map();
  modals();
  validateForm();
  hideText();
  header();
  infoBlock();
  policy();
  menu();
});

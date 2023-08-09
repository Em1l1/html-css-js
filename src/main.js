// import "bootstrap/dist/bootstrap.min.css";
import "./main.css";
import { router } from "./router/index.routers";

router(window.location.hash);

window.addEventListener("hashchange", () => {
  router(window.location.hash);
});

// active link
const navLink = document.querySelectorAll(".nav__link");

function linkColor() {
  navLink.forEach((link) => link.classList.remove("active-link"));
  this.classList.add("active-link");
}

navLink.forEach((link) => linkaddEventListener("click", linkColor));

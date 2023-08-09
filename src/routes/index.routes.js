import { pages } from "../controllers/index";

const content = document.getElementById("root");

const router = async (route) => {
  content.innerHTML = "";
  switch (route) {
    case "#/": {
      return content.appendChild(pages.home());
    }
    default:
      return content.appendChild(pages.notFound());
  }
};

export { router };

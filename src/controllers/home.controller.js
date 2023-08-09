import views from "../views/home.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.className = "text-white";
  divElement.innerHTML = views;

  const btnClick = divElement.querySelector("#btnClick");
  btnClick.addEventListener("click", () => {
    alert("Click!!!!!");
  });
 
 return divElement;
};

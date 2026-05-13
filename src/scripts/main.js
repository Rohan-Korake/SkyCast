import { fetchData } from "./fetchData.js";

// entry point of application
document.addEventListener("DOMContentLoaded", () => {
  toggleErrorPage("cityNotFoundPage", "flex", "hidden");
  toggleErrorPage("somethingWentWrongPage", "flex", "hidden");
  fetchData();
});

// handle error pages visibility
export function toggleErrorPage(pageName, removeClass, addClass) {
  pageName = document.getElementById(pageName);
  pageName.classList.remove(removeClass);
  pageName.classList.add(addClass);
}

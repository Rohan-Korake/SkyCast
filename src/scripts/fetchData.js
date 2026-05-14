import { toggleErrorPage } from "./main.js";
import { renderData } from "./renderData.js";
const progressBar = document.getElementById("progressBar");
const searchButton = document.getElementById("searchButton");

export async function fetchData() {
  const data = document.getElementById("data");
  const inputCity = document.getElementById("inputCity");
  const intputForm = document.querySelector("form");
  inputCity.value = "Sangli";

  handleFetchRequest();

  intputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchButton.disabled = true;
    startLoading();
    handleFetchRequest();
  });
}

// handle fetch request
async function handleFetchRequest() {
  const inputCity = document.getElementById("inputCity");
  let city = inputCity.value;
  toggleErrorPage("cityNotFoundPage", "flex", "hidden");
  toggleErrorPage("somethingWentWrongPage", "flex", "hidden");
  if (!city) return;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=461e045a3594b58bf341042a8f534f37`
    );

    let body = await response.json();
    stopLoading();
    searchButton.disabled = false;

    if (response.status == 200) {
      renderData(body);
    } else if (response.status == 404) {
      toggleErrorPage("cityNotFoundPage", "hidden", "flex");
    } else {
      toggleErrorPage("somethingWentWrongPage", "hidden", "flex");
    }
  } catch (error) {
    stopLoading();
    searchButton.disabled = false;
    toggleErrorPage("somethingWentWrongPage", "hidden", "flex");
  }
}

// start loader
function startLoading() {
  progressBar.style.width = "50%";
}

// stop loader
function stopLoading() {
  progressBar.style.width = "100%";

  setTimeout(() => {
    progressBar.style.width = "0%";
  }, 1000);
}

// handle retry button re-fetch request
const retrybutton = document.getElementById("retrybutton");
retrybutton.addEventListener("click", () => {
  searchButton.disabled = true;
  startLoading();
  handleFetchRequest();
});

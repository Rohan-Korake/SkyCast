import { togglePageVisibility } from "./main.js";
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
    handleFetchRequest();
  });
}

// handle fetch request
async function handleFetchRequest() {
  togglePageVisibility("wheatherDataContaner", "flex", "hidden");
  togglePageVisibility("loadingScreen", "hidden", "flex");
  togglePageVisibility("cityNotFoundPage", "flex", "hidden");
  togglePageVisibility("somethingWentWrongPage", "flex", "hidden");

  const inputCity = document.getElementById("inputCity");
  let city = inputCity.value;
  if (!city) return;

  // Extra delay for laoding aniamtion
  await sleep(1000);

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=461e045a3594b58bf341042a8f534f37`
    );

    let body = await response.json();

    togglePageVisibility("loadingScreen", "flex", "hidden");
    togglePageVisibility("wheatherDataContaner", "hidden", "flex");
    searchButton.disabled = false;

    if (response.status == 200) {
      renderData(body);
    } else if (response.status == 404) {
      togglePageVisibility("cityNotFoundPage", "hidden", "flex");
    } else {
      togglePageVisibility("somethingWentWrongPage", "hidden", "flex");
    }
  } catch (error) {
    togglePageVisibility("loadingScreen", "flex", "hidden");
    searchButton.disabled = false;
    togglePageVisibility("somethingWentWrongPage", "hidden", "flex");
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// handle retry button re-fetch request
const retrybutton = document.getElementById("retrybutton");
retrybutton.addEventListener("click", () => {
  searchButton.disabled = true;

  handleFetchRequest();
});

import { renderData } from "./renderData.js";
const progressBar = document.getElementById("progressBar");

export async function fetchData() {
  const searchButton = document.getElementById("searchButton");
  const data = document.getElementById("data");
  const inputCity = document.getElementById("inputCity");
  const intputForm = document.querySelector("form");
  inputCity.value = "Sangli";

  handleFetchRequest();

  intputForm.addEventListener("submit", (e) => {
    e.preventDefault();

    handleFetchRequest();
  });
}

// handle fetch request
async function handleFetchRequest() {
  const inputCity = document.getElementById("inputCity");
  let city = inputCity.value;

  if (!city) return;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=461e045a3594b58bf341042a8f534f37`
  );

  let body = await response.json();

  if (response.status == 200) {
    renderData(response);
  }
  console.log(body);
  console.log(response.status);
}

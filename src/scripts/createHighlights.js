export function createHighlights() {
  const highLightItem = [
    {
      name: "Feels Like",
      icon: `fa-solid fa-thermometer-half`,
      id: "feelsLike",
      desc: "Feels like temperature based on humidity and wind",
    },
    {
      name: "Wind Speed",
      icon: `fa-solid fa-wind`,
      id: "windSpeed",
      desc: "Current pace of air movement based on local wind sensors",
    },
    {
      name: "Day Length",
      icon: `fa-solid fa-sun`,
      id: "dayLength",
      desc: "Total amount of sunlight from sunrise to sunset today",
    },
    {
      name: "Last Updated",
      icon: `fa-solid fa-clock`,
      id: "lastUpdate",
      desc: "The exact time this weather data was last refreshed",
    },
  ];

  const weatherHighlight = document.getElementById("weatherHighlight");
  let divContainer;

  highLightItem.forEach((item, index) => {
    if (index == 0 || index == 2) {
      divContainer = document.createElement("div");
      divContainer.className = "flex justify-center items-center flex-row gap-2 h-[50%]";
    }

    const divItem = document.createElement("div");
    divItem.className =
      "flex justify-start items-start flex-col bg-black/10 backdrop-blur-xl border border-white/40 rounded-xl p-2 gap-2  h-full w-[50%]";
    divItem.innerHTML = ` 
        <div class="flex justify-start items-center w-full text-3xl gap-2 text-slate-200 ">
            <div class="flex justify-center items-center bg-black/5 backdrop-blur-xl border border-white/40 rounded-full text-xl w-10 h-10  md:text-2xl md:w-14 md:h-14 lg:text-3xl lg:w-15 lg:h-15 xl:text-3xl xl:w-14 xl:h-14">
                <i class="${item.icon}"></i>
            </div>
            <div class="text-slate-100 text-lg md:text-2xl lg:text-2xl xl:text-3xl font-bold" id="${item.id}"></div>
        </div>
        <div class="flex justify-start items-start flex-col w-full gap-0.5 ">
            <div class="text-slate-100 text-lg md:text-xl lg:text-xl xl:text-2xl font-semibold">${item.name}</div>
            <div class="text-slate-100 text-xs md:text-sm lg:text-base xl:text-lg">${item.desc}</div>
        </div>`;

    divContainer.appendChild(divItem);
    weatherHighlight.append(divContainer);
  });
}

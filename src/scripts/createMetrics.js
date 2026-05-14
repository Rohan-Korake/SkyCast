export function createMetrics() {
  const metricsContainer = document.getElementById("metricsContainer");

  if (!metricsContainer) return;

  metricsContainer.innerHTML = "";
  const metricArray = [
    {
      leftIcon: `<i class="fa-solid fa-temperature-arrow-up"></i>`,
      leftId: "maxTemp",
      leftLabel: "Max",
      rightIcon: `<i class="fa-solid fa-temperature-arrow-down"></i>`,
      rightId: "minTemp",
      rightLabel: "Min",
    },
    {
      leftIcon: `<i data-lucide="sunrise" class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"></i>`,
      leftId: "sunrise",
      leftLabel: "Sunrise",
      rightIcon: `<i data-lucide="sunset" class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"></i>`,
      rightId: "sunset",
      rightLabel: "Sunset",
    },
    {
      leftIcon: `<i data-lucide="wind-arrow-down" class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" ></i>`,
      leftId: "pressure",
      leftLabel: "Pressure",
      rightIcon: `<i class="fa-solid fa-droplet"></i>`,
      rightId: "humidity",
      rightLabel: "Humidity",
    },
    {
      leftIcon: `<i class="fa-solid fa-eyefa-solid fa-eye"></i>`,
      leftId: "visibility",
      leftLabel: "Visibility",
      rightIcon: `<i class="fa-solid fa-cloud"></i>`,
      rightId: "cloud",
      rightLabel: "Cloud Cover",
    },
    {
      leftIcon: `<i class="fa-solid fa-water"></i>`,
      leftId: "seaLevel",
      leftLabel: "Sea Pressure",
      rightIcon: `<i class="fa-solid fa-mountain"></i>`,
      rightId: "groundLevel",
      rightLabel: "Surface Pressure",
    },
  ];

  metricArray.forEach((element, index) => {
    const contentBlock = document.createElement("div");
    contentBlock.className = "w-full flex justify-around items-center flex-row p-1";
    contentBlock.innerHTML = `
    <div class="text-slate-200 flex justify-center items-center gap-2 w-[50%]">
      <div class="text-2xl w-6 flex justify-center items-center md:w-10 lg:w-16 xl:text-3xl xl:w-16">
        ${element.leftIcon}
      </div>
      <div class="flex justify-start items-start flex-col ">
        <div class="text-sm text-slate-100 h-full flex justify-start items-center w-20 md:w-30 md:text-lg lg:text-lg">${element.leftLabel}</div>
        <div class="text-xs  h-full flex justify-start items-center w-20 md:text-base lg:text-lg" id="${element.leftId}"></div>
      </div>
    </div>
    
    <div class="text-slate-200 flex justify-center items-center gap-2 w-[50%]">
      <div class="text-2xl w-6 flex justify-center items-center md:w-10 lg:w-16 xl:text-3xl xl:w-16">
        ${element.rightIcon}
      </div>
      <div class="flex justify-start items-start flex-col">
        <div class="text-sm text-slate-100 h-full flex justify-start items-center w-20 md:w-35 md:text-lg lg:text-xl lg:w-41">${element.rightLabel}</div>
        <div class="text-xs h-full flex justify-start items-center w-20 md:text-base lg:text-lg" id="${element.rightId}"></div>
      </div>
    </div>
    `;

    // add dividerLine only between contentBlock
    if (index != 0) {
      // divider line
      const divLine = document.createElement("div");
      divLine.className = "w-full flex justify-center  items-center flex-row ";
      divLine.innerHTML = `
      <div class=" w-[90%] rounded-xl border-b-4 border-white/40 xl:w-[80%]"></div>`;
      metricsContainer.appendChild(divLine);
    }

    metricsContainer.appendChild(contentBlock);
  });
  lucide.createIcons();
}

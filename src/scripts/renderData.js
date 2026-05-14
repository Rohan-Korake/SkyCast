export async function renderData(response) {
  const weatherData = await formatWeatherData(response);

  // bind the DOM element and formatted weather Object
  const bindings = {
    location: "location",
    weatherIcon: "weatherIcon",
    temp: "temperature",
    desc: "description",
    max: "maxTemp",
    min: "minTemp",
    sunrise: "sunrise",
    sunset: "sunset",
    pressure: "pressure",
    humidity: "humidity",
    visibility: "visibility",
    cloud: "cloud",
    seaLevel: "seaLevel",
    groundLevel: "groundLevel",
    mapLocation: "mapLocation",
  };

  // render the weather values into DOM
  Object.entries(bindings).forEach(([key, id]) => {
    const element = document.getElementById(id);
    if (!element) return;

    if (key === "weatherIcon") {
      element.innerHTML = weatherData.weatherIcon;
    } else if (key === "mapLocation") {
      element.src = weatherData.mapLocation;
    } else {
      element.innerText = weatherData[key];
    }
  });
}

// format API response
function formatWeatherData(response) {
  return {
    location: `${response.name}, ${regionNames.of(response.sys.country)}`,
    weatherIcon: `<img src="${setWeatherIcon(response.weather[0].main, response.clouds.all)}" alt="weatherIcon">`,
    temp: `${(response.main.temp - 273.15).toFixed(1)} °C`, //convert kelvin to celsius
    desc: response.weather[0].description,
    max: `${(response.main.temp_max - 273.15).toFixed(1)} °C`, //convert kelvin to celsius
    min: `${(response.main.temp_min - 273.15).toFixed(1)} °C`, //convert kelvin to celsius
    sunrise: `${formatTime(response.sys.sunrise)}`, //format sunrise time to 12hrs
    sunset: `${formatTime(response.sys.sunset)}`, //format sunset time to 12hrs
    pressure: `${response.main.pressure} hPa`,
    humidity: `${response.main.humidity}%`,
    visibility: `${(response.visibility / 1000).toFixed(1)} km`, //convert meter to kilometer
    cloud: `${response.clouds.all}%`,
    seaLevel: `${response.main.sea_level} hPa`,
    groundLevel: `${response.main.grnd_level} hPa`,
    mapLocation: `https://www.google.com/maps?q=${response.coord.lat},${response.coord.lon}&z=12&output=embed`,
  };
}

// format time
function formatTime(timestamp) {
  return new Date(timestamp * 1000).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour24: false,
  });
}

// convert Country code to Country name
const regionNames = new Intl.DisplayNames(["en"], {
  type: "region",
});

// set wheather icon according to weather condition
function setWeatherIcon(weatherMain, cloudPercent) {
  switch (weatherMain) {
    case "Clear":
      return "./src/assets/weather/sunny.svg";
      break;

    case "Clouds":
      return cloudPercent < 50
        ? "./src/assets/weather/partlyCloudy.svg"
        : "./src/assets/weather/cloudy.svg";
      break;

    case "Rain":
      return "./src/assets/weather/rain.svg";
      break;

    case "Drizzle":
      return "./src/assets/weather/drop.svg";
      break;

    case "Snow":
      return "./src/assets/weather/snow.svg";
      break;

    case "Thunderstorm":
      return "./src/assets/weather/thunderstorm.svg";
      break;

    case "Fog":
    case "Haze":
    case "Mist":
      return "./src/assets/weather/fog.svg";
      break;

    default:
      return "./src/assets/weather/cloudy.svg";
      break;
  }
}

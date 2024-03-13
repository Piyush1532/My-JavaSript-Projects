let weatherapi = "https://goweather.herokuapp.com/weather/";
let InpBox = document.querySelector(".inputbox input");
let Btn = document.querySelector(".btn");

let WIcon = document.querySelector(".Wicon");
async function GetWeather(city) {
  let apiurl = weatherapi + city;
  try {
    console.log("getting wether data......");
    let FetchData = await fetch(apiurl);
    console.log(FetchData);

    if (!FetchData.ok) {
      throw new Error(`Failed to fetch data. Status: ${FetchData.status}`);
    }

    let convertedData = await FetchData.json();
    console.log(convertedData);
    document.querySelector(".decsription").textContent =
      convertedData.description;
    document.querySelector(".tempdata").textContent = convertedData.temperature;
    document.querySelector(".winddata").textContent = convertedData.wind;

    if (convertedData.description == "Partly cloudy") {
      WIcon.src =
        "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png";
    }
    if (convertedData.description == "Sunny") {
      WIcon.src = "https://cdn-icons-png.flaticon.com/512/2580/2580627.png";
    }
    if (convertedData.description == "Rainy") {
      WIcon.src =
        "https://www.clipartmax.com/png/middle/427-4276581_rain-cloud-clip-art-cartoon-rain-cloud.png";
    }
    if (convertedData.description == "Clear") {
      WIcon.src = "https://cdn-icons-png.flaticon.com/512/2580/2580627.png";
    }
  } catch (error) {
    console.error(error);
  }
}

Btn.addEventListener("click", () => {
  if (InpBox.value) {
    GetWeather(InpBox.value);
    InpBox.value = "";
  }
});

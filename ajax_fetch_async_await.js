async function getWeatherAW(woeid) {
  try {
    const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
    const data = await result.json();
    const tomorrow = data.consolidated_weather[1];
    
    console.log(`Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`);
    return data;

  } catch (error) {
    console.log(error);
  }
}

getWeatherAW(2487956); // SF

let dataLondon;
getWeatherAW(44418).then(data => {
  dataLondon = data;
  console.log(dataLondon);
});
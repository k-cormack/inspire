import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()




export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(weather => {
			document.getElementById("weather").innerHTML = `
			<h2>${weather.name}</h2>
			<h2> ${weather.main.temp} &#8457</h2>
			`

			console.log("here is the weatherController", weather);
			//What can you do with this weather object?

			
		})
	}
}

fetch('http://api.openweathermap.org/data/2.5/weather?q=Moscow,ru&APPID=b0b4ebc287e2817f902eddbfdaded9d1')
	.then(function (resp) { return resp.json() })
	.then(function (data) {
		console.log(data);
		document.querySelector('.cityname').textContent = data.name;
		document.querySelector('.temp').innerHTML = Math.round((data.main.temp - 273)) + '&deg;';
		document.querySelector('.description').textContent = data.weather[0]['description']
		document.querySelector('.icon').innerHTML = `<img src = `"http://openweathermap.org/img/wn/${data.main[0]['icon']}@2x.png">`;
		// document.querySelector('.icon').innerHTML = <img src= 'http://openweathermap.org/img/wn/10d@2x.png'></img>
			// http://openweathermap.org/img/wn/10d@2x.png
			})
	.catch(function () {
				// catch errors
			})


// {
// 	"coord": {
// 		"lon": 37.6156,
// 			"lat": 55.7522
// 	},
// 	"weather": [
// 		{
// 			"id": 501,
// 			"main": "Rain",
// 			"description": "moderate rain",
// 			"icon": "10d"
// 		}
// 	],
// 		"base": "stations",
// 			"main": {
// 		"temp": 282.31,
// 			"feels_like": 279.33,
// 				"temp_min": 282.15,
// 					"temp_max": 282.59,
// 						"pressure": 1001,
// 							"humidity": 93
// 	},
// 	"visibility": 8000,
// 		"wind": {
// 		"speed": 6,
// 			"deg": 120
// 	},
// 	"rain": {
// 		"1h": 3.28
// 	},
// 	"clouds": {
// 		"all": 90
// 	},
// 	"dt": 1620022047,
// 		"sys": {
// 		"type": 1,
// 			"id": 9027,
// 				"country": "RU",
// 					"sunrise": 1620006120,
// 						"sunset": 1620061842
// 	},
// 	"timezone": 10800,
// 		"id": 524901,
// 			"name": "Moscow",
// 				"cod": 200
// }
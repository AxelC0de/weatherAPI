fetch('http://api.openweathermap.org/data/2.5/weather?q=Moscow,ru&APPID=b0b4ebc287e2817f902eddbfdaded9d1')
	.then(function (resp) { return resp.json() })
	.then(function (data) {
		console.log(data);
		document.querySelector('.cityname').textContent = data.name;
		document.querySelector('.temp').innerHTML = Math.round((data.main.temp - 273)) + '&deg;';
		document.querySelector('.description').textContent = data.weather[0]['description']
		// document.querySelector('.icon').innerHTML = `<img src = `"http://openweathermap.org/img/wn/${data.main[0]['icon']}@2x.png">`;
		// document.querySelector('.icon').innerHTML = <img src= 'http://openweathermap.org/img/wn/10d@2x.png'></img>
			// http://openweathermap.org/img/wn/10d@2x.png
			})
	.catch(function () {
				// catch errors
			})


function getweathermostsearchedcity(city){
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '7a87bd94c8msh10f09bf303e5e1fp15ba58jsn6d39630b5d80',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};
	
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
		.then(response => response.json())
		.then(response =>{ console.log(response)
			if(city=='mumbai'){
			mumbai_temp.innerHTML=response.temp;
			mumbai_maxtemp.innerHTML=response.max_temp;

			mumbai_mintemp.innerHTML=response.min_temp;
			mumbai_feelslike.innerHTML=response.feels_like;
			mumbai_humidity.innerHTML=response.humidity;
			mumbai_windspeed.innerHTML=response.wind_speed
			}
			else if(city=='delhi'){
			delhi_temp.innerHTML=response.temp;
			delhi_maxtemp.innerHTML=response.max_temp;
            delhi_mintemp.innerHTML=response.min_temp;
			delhi_feelslike.innerHTML=response.feels_like;
			delhi_humidity.innerHTML=response.humidity;
			delhi_windspeed.innerHTML=response.wind_speed
			}
			else if(city=='bangalore'){
				banglore_temp.innerHTML=response.temp;
				banglore_maxtemp.innerHTML=response.max_temp;
				banglore_mintemp.innerHTML=response.min_temp;
				banglore_feelslike.innerHTML=response.feels_like;
				banglore_humidity.innerHTML=response.humidity;
				banglore_windspeed.innerHTML=response.wind_speed
			}
			else if(city=='london'){
				london_temp.innerHTML=response.temp;
				london_maxtemp.innerHTML=response.max_temp;
				london_mintemp.innerHTML=response.min_temp;
				london_feelslike.innerHTML=response.feels_like;
				london_humidity.innerHTML=response.humidity;
				london_windspeed.innerHTML=response.wind_speed
			}
			else if(city=='new york'){
				newyork_temp.innerHTML=response.temp;
				newyork_maxtemp.innerHTML=response.max_temp;
				newyork_mintemp.innerHTML=response.min_temp;
				newyork_feelslike.innerHTML=response.feels_like;
				newyork_humidity.innerHTML=response.humidity;
				newyork_windspeed.innerHTML=response.wind_speed
			}
			else{
				california_temp.innerHTML=response.temp;
				california_maxtemp.innerHTML=response.max_temp;
				california_mintemp.innerHTML=response.min_temp;
				california_feelslike.innerHTML=response.feels_like;
				california_humidity.innerHTML=response.humidity;
				california_windspeed.innerHTML=response.wind_speed
			}
		})
		.catch(err => console.error(err));
}

getweathermostsearchedcity('mumbai');
getweathermostsearchedcity('delhi');
getweathermostsearchedcity('bangalore');
getweathermostsearchedcity('london');
getweathermostsearchedcity('new york');
getweathermostsearchedcity('california')
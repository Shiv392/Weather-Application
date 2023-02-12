
const getWeather=(city)=>{
	const cityname=document.getElementById('cityname');
	cityname.innerHTML=city;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '7a87bd94c8msh10f09bf303e5e1fp15ba58jsn6d39630b5d80',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

const temp=document.getElementById('temp');
const min_temp=document.getElementById('min_temp');
const max_temp=document.getElementById('max_temp');
const cloud_pct=document.getElementById('cloud_pct');
const feels_like=document.getElementById('feels_like');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind_speed');
const wind_degree=document.getElementById('wind_degree');
const sunrise=document.getElementById('sunrise');
const sunset=document.getElementById('sunset');

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct;
		temp.innerHTML = response.temp;
		feels_like.innerHTML = response.feels_like;
		humidity.innerHTML = response.humidity;
		min_temp.innerHTML = response.min_temp;
		max_temp.innerHTML = response.max_temp;
		wind_speed.innerHTML = response.wind_speed;
		wind_degree.innerHTML = response.wind_degrees;
		sunrise.innerHTML = response.sunrise;
		sunset.innerHTML = response.sunset;
	})
	.catch(err => console.error(err));

}
const city=document.getElementById('city');
if(!city.value){
	// const cityname=document.getElementById('cityname');
	// cityname.innerHTML='Delhi';
	getWeather('Delhi');
}
else {
const submit=document.getElementById('submit');
submit.addEventListener("click",(e)=>{
	e.preventDefault();
    getWeather(city.value);
	
})

}



// getWeather('mumbai')

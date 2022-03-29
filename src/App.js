import './App.css';
import { useState } from 'react';

const api = {
  key: "&appid=c9b67fcbf1ac1bff6e1860ef9e260888&units=metric",
  base: "https://api.openweathermap.org/data/2.5/weather?q="
}


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = new Date().getDay();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = new Date().getMonth();

let newDate =  days[day]+",  "+new Date().getDate()+' '+months[month]+' '+ new Date().getFullYear();


function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (input) => {
    if (input.key === "Enter"){
      fetch(`${api.base}${query}${api.key}`)
        .then(response => response.json())
        .then(result => {
          setWeather(result);
          setQuery('')
          console.log(result);
        });
    }
  }

  return (
    
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp < 20) ? 'app cold' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input type="text" placeholder='Search...' id="search-bar" onChange={e => setQuery(e.target.value)} value = {query} onKeyPress={search}/>
        </div>
        {(typeof weather.main != "undefined") ?(
        <div>
          <div className='location-box'>
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date"><em>{newDate}</em></div>
          </div>
          <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp)}°c</div>
            <div className="weather">
              {weather.weather[0].main}
            </div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;

import './App.css';

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
  

  return (
    
    <div className="app cold">
      <main>
        <div className="search-box">
          <input type="text" placeholder='Search...' id="search-bar" />
        </div>
        <div className='location-box'>
          <div className="location">Cairo, egy</div>
          <div className="date"><em>{newDate}</em></div>
        </div>
        <div className="weather-box">
          <div className="temp">15°C</div>
          <div className="weather">
            Sunny
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

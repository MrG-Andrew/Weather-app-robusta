
const Home = (props) => {
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
    const apiKey = '&appid=54af82148dee1afd8bb7886825ebb207';


    const cityName = document.getElementById('cityName');
    const btn = document.getElementById('generate');


    const getWeather = async (baseURL,cityName,apiKey)=>{
        const res = await fetch(baseURL+cityName+apiKey)
        try {
          const data = await res.json();
          return data;
        } catch (e) {
          console.log("error",e);
        }
      }

    btn.addEventListener('click',(e)=>{
    const theCityName = cityName.value;
    getWeather(baseURL,theCityName,apiKey).then(function(data){
        postData('/',{temprature: data.temp, date: newDate});
    });
    });
    
    
    
    const postData = async (url = '', data = {})=>{
        const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        });
    
        try {
        const newData = await response.json();
        console.log(newData);
        return newData;
        } catch (e) {
        console.log('error',e);
        }
    }
    

    let newDate =  new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+ new Date().getFullYear();
    return (
    <div>
        <h1>Today is: {newDate}</h1>
    </div>
);
}
 
export default Home;
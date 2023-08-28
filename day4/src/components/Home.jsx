import React, {useState } from "react";
import Weathercard from "./Weathercard";

const api = {
  key : '907798eeb8aa9c2af1dbe0bdf8ed82ee',
  base : 'https://api.openweathermap.org/data/2.5/'
}


const Home = () => {

  const DateBuilder = (d) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
     days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],

     day = days[d.getDay()],
     month = months[d.getMonth()],
     year = d.getFullYear(),
     date = d.getDate(),
     time = d.toLocaleTimeString() ;

    return `${day} ${date} ${month} ${year} ${time}`;
  };

  // const [val ,setVal] = useState('');

  // onclick={(val)=>val+1}

  const [query, setQuery] = useState(''),
   [weather, setWeather] = useState({});

  const handleSubmit =(e)=>{
    if(e.key === 'Enter' && query !== ''){

    
      fetch(`${api.base}weather?q=${query}&appid=${api.key}&units=metric`)
      .then(res => res.json())
      .then(result=>{
        setWeather(result)
        setQuery('')
        console.log(result)
      })
    }
  }

  return (
    <>
      <div className="searchBoxContainer" >
        <input type="text" className="searchBox" placeholder="Enter text" onChange={e=>setQuery(e.target.value)} value={query}
        onKeyPress={handleSubmit} />
      </div>


      {typeof weather.main != 'undefined' ? ( 
      <div className="weatherContainer">
        <div>{weather.name} ,{weather.sys.country}</div>
        <div>{DateBuilder(new Date())}</div>
      
      <div className="weather">
          <div>{weather.main.temp} Celsius</div>
          <div>{weather.weather[0].main}</div>
      </div>
      </div>
      ) : ''}

      <Weathercard/>
    </>
  );
};

export default Home;
